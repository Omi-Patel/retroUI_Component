import { useEffect, useState } from "react";
import { GITHUB_REPO } from "../lib/constants";

const CACHE_KEY = "retroui:github-stars";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour — keeps us well under the 60 req/hr unauthenticated limit

function readCache(repo) {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (cached.repo !== repo) return null;
    if (Date.now() - cached.ts > CACHE_TTL) return null;
    return typeof cached.stars === "number" ? cached.stars : null;
  } catch {
    return null;
  }
}

function writeCache(repo, stars) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ repo, stars, ts: Date.now() }));
  } catch {
    // ignore (private mode / storage full)
  }
}

/**
 * Fetches the live GitHub star count for a repository.
 * Falls back to `fallback` while loading or if the request fails, and caches
 * the result in localStorage for an hour to avoid hammering the GitHub API.
 *
 * @param {object} [opts]
 * @param {string} [opts.repo]      "owner/repo" — defaults to GITHUB_REPO
 * @param {number} [opts.fallback]  shown while loading / on error
 * @returns {{ stars: number, loading: boolean, error: boolean }}
 */
export function useGitHubStars({ repo = GITHUB_REPO, fallback = 0 } = {}) {
  const cached = readCache(repo);
  const [stars, setStars] = useState(cached ?? fallback);
  const [loading, setLoading] = useState(cached == null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // A fresh cache value is good enough — skip the network call.
    if (readCache(repo) != null) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    setLoading(true);
    fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const count = data?.stargazers_count;
        if (typeof count === "number") {
          setStars(count);
          writeCache(repo, count);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [repo]);

  return { stars, loading, error };
}
