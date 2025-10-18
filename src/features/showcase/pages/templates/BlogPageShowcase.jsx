"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Copy,
  Check,
  Eye,
  Sparkles,
  FileText,
  BookOpen,
  Newspaper,
  Zap,
  ExternalLink,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

import {
  BasicBlog as BlogPage,
  RetroBlog as RetroBlogPage,
  ModernBlog as SimpleBlogPage,
} from "@/features/templates/blog-pages";

const blogTemplates = {
  Basic: {
    component: BlogPage,
    title: "Basic Blog Page",
    description: "Clean blog layout with posts grid",
    github:
      "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/features/templates/blog-pages",
  },
  Retro: {
    component: RetroBlogPage,
    title: "Retro Blog Page",
    description: "Nostalgic blog design with retro aesthetics",
    github:
      "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/features/templates/blog-pages",
  },
  Modern: {
    component: SimpleBlogPage,
    title: "Modern Blog Page",
    description: "Contemporary blog layout with modern styling",
    github:
      "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/features/templates/blog-pages",
  },
};

const BlogPageShowcase = () => {
  const [activeTemplate, setActiveTemplate] = useState("Basic");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyGitHubLink = () => {
    const link = blogTemplates[activeTemplate].github;
    navigator.clipboard.writeText(link);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = blogTemplates[activeTemplate];

  const features = [
    {
      icon: FileText,
      title: "Blog Posts",
      description: "Display multiple blog posts in organized layouts",
    },
    {
      icon: BookOpen,
      title: "Content Rich",
      description: "Support for images, excerpts, and metadata",
    },
    {
      icon: Newspaper,
      title: "Categories",
      description: "Organize content with categories and tags",
    },
    {
      icon: Sparkles,
      title: "Retro Design",
      description: "Unique nostalgic aesthetics for your blog",
    },
  ];

  return (
    <DocsContent
      title="Blog Page Templates"
      description="Complete blog page templates with post listings and retro styling"
      badge="Page Templates"
    >
      {/* Installation */}
      <InfoBox type="info" title="Installation">
        <p className="text-sm mb-3">
          These are full page templates. Copy the entire component from GitHub
          and customize it with your blog posts and content.
        </p>
        <a
          href={activeData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          View on GitHub
        </a>
      </InfoBox>

      {/* Template Selector */}
      <DocsSection title="Available Templates" id="templates">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {Object.keys(blogTemplates).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTemplate(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeTemplate === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {blogTemplates[key].title}
            </button>
          ))}
        </div>
      </DocsSection>

      {/* Preview Section */}
      <DocsSection id="preview">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTemplate}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Template Info */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {activeData.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {activeData.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("preview")}
                className={`relative px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === "preview"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </div>
                {activeTab === "preview" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`relative px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === "code"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Code
                </div>
                {activeTab === "code" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
            </div>

            {/* Content */}
            {activeTab === "preview" ? (
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="bg-white dark:bg-gray-900">
                  <activeData.component />
                </div>
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-900 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-400">
                      View full source code on GitHub
                    </span>
                  </div>
                  <button
                    onClick={copyGitHubLink}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-md transition-colors"
                  >
                    {copySuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={activeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </DocsSection>

      {/* Usage */}
      <DocsSection title="Usage" id="usage">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            Copy the template from GitHub and customize it with your blog posts,
            categories, and branding:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mt-4">
            <code className="text-teal-600 dark:text-teal-400">
              import {activeData.title.replace(/\s+/g, "")} from
              "@/features/templates/blog-pages/
              {activeData.title.replace(/\s+/g, "")}";
            </code>
          </div>
        </div>
      </DocsSection>

      {/* Features */}
      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {feature.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      {/* Customization Tips */}
      <InfoBox type="success" title="Customization Tips">
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Replace placeholder posts with your actual content</li>
          <li>Add featured images for each blog post</li>
          <li>Customize categories and tags to match your topics</li>
          <li>Connect to your CMS or content backend</li>
        </ul>
      </InfoBox>
    </DocsContent>
  );
};

export default BlogPageShowcase;
