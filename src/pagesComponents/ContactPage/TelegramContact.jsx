import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const subjects = ["General", "Project enquiry", "Press", "Workshop"];

const TelegramContact = () => {
  const [subject, setSubject] = useState("Project enquiry");
  const [sent, setSent] = useState(false);

  return (
    <div
      className="bg-[#ede7d6] text-stone-900 min-h-screen"
      style={{ fontFamily: '"Space Grotesk", ui-sans-serif, system-ui' }}
    >
      {/* Teletype top bar */}
      <div className="bg-stone-900 text-amber-300">
        <div className="mx-auto max-w-[1240px] px-6 py-2.5 font-mono text-[11px] tracking-[0.22em] uppercase flex items-center justify-between">
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"
            />
            Wire Open · Operator Standing By
          </span>
          <span className="hidden md:inline">
            ◇ Reply within 24h on business days ◇
          </span>
          <span>27·05·26 · 14:32 GMT</span>
        </div>
      </div>

      {/* Letterhead */}
      <header className="border-b-2 border-stone-900 px-6 py-14">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-800">
                ◆ Telegram form · No. 42
              </p>
              <h1 className="mt-3 text-[56px] sm:text-[92px] leading-[0.9] tracking-[-0.04em] font-bold">
                Send word.{" "}
                <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, color: "#b45309" }}>
                  We&apos;re listening.
                </span>
              </h1>
            </div>
            {/* Stamp */}
            <div className="hidden md:block">
              <div className="border-[2.5px] border-double border-amber-700 text-amber-700 px-4 py-2 -rotate-6">
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-center">
                  Reply within
                </p>
                <p className="text-center text-[22px] font-bold tracking-[-0.02em]">
                  24 hrs
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-[16px] leading-[1.7] max-w-2xl text-stone-700">
            Pick a channel below or wire a note through the form. One of four
            people will read it — and write back. No autoresponders, no ticketing
            queues.
          </p>
        </div>
      </header>

      {/* Main: form + sidebar */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <div
              className="bg-[#fefbf2] border-2 border-stone-900 p-8"
              style={{ boxShadow: "6px 6px 0 0 rgba(0,0,0,0.15)" }}
            >
              {/* Top tab — looks like form header */}
              <div className="flex items-center justify-between mb-7 border-b border-stone-300 pb-3">
                <span className="font-mono text-[10.5px] tracking-[0.25em] uppercase text-stone-600">
                  Form RU-04 · Outbound
                </span>
                <span className="font-mono text-[10.5px] tracking-[0.25em] uppercase text-amber-800">
                  STOP
                </span>
              </div>

              {sent ? (
                <div className="py-16 text-center">
                  <div className="inline-block border-[2.5px] border-double border-green-700 text-green-700 px-4 py-1.5 -rotate-3 font-mono text-[12px] tracking-[0.2em] uppercase font-bold">
                    Message received
                  </div>
                  <p className="mt-6 text-[18px] text-stone-700 max-w-md mx-auto">
                    We&apos;ll write back within a day. In the meantime, the kettle
                    is on.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.22em] uppercase border-b border-stone-900 pb-0.5 hover:text-amber-800 hover:border-amber-700 transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  {[
                    { label: "From", type: "text", placeholder: "Your name" },
                    { label: "Wire-to", type: "email", placeholder: "you@studio.com" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block font-mono text-[10.5px] tracking-[0.22em] uppercase text-stone-600 mb-2">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full h-11 px-3 bg-[#ede7d6]/40 border-2 border-stone-900 outline-none focus:bg-amber-50 text-[14.5px]"
                      />
                    </div>
                  ))}

                  {/* Subject chips */}
                  <div>
                    <label className="block font-mono text-[10.5px] tracking-[0.22em] uppercase text-stone-600 mb-2">
                      Subject
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {subjects.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSubject(s)}
                          className="font-mono text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 border transition-colors"
                          style={{
                            background: subject === s ? "#1c1814" : "transparent",
                            color: subject === s ? "#ede7d6" : "#1c1814",
                            borderColor: "#1c1814",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[10.5px] tracking-[0.22em] uppercase text-stone-600 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Write your message — line breaks are fine."
                      className="w-full px-3 py-3 bg-[#ede7d6]/40 border-2 border-stone-900 outline-none focus:bg-amber-50 text-[14.5px] leading-relaxed resize-none"
                    />
                    <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-stone-500">
                      ── end of message ── STOP ──
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-stone-900 text-[#ede7d6] font-mono text-[12px] tracking-[0.18em] uppercase px-6 py-3.5 border-2 border-stone-900 hover:bg-stone-800 transition-colors"
                  >
                    Transmit
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Channels */}
            <div className="border-2 border-stone-900 bg-[#fefbf2] p-7">
              <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-amber-800 mb-5">
                ◆ Direct channels
              </p>
              <ul className="divide-y divide-stone-300">
                {[
                  { Icon: Mail, label: "Mail", value: "studio@retroui.dev" },
                  { Icon: Phone, label: "Tel.", value: "+1 (555) 042-1995" },
                  { Icon: MapPin, label: "Studio", value: "42 Letterpress Ln, Anytown" },
                ].map((c) => (
                  <li key={c.label} className="py-3.5 first:pt-0 last:pb-0 flex items-center gap-4">
                    <span className="inline-flex w-10 h-10 items-center justify-center border-2 border-stone-900 bg-[#ede7d6]">
                      <c.Icon className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500">
                        {c.label}
                      </p>
                      <p className="text-[15.5px] tracking-[-0.01em] font-medium truncate">
                        {c.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-stone-400" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div className="border-2 border-stone-900 bg-[#fefbf2] p-7">
              <div className="flex items-center justify-between mb-5">
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-amber-800">
                  ◆ Hours
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-green-700">
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-green-600 shadow-[0_0_6px_0_rgba(34,197,94,0.6)]"
                  />
                  Open now
                </span>
              </div>
              <ul className="space-y-2 font-mono text-[13px]">
                {[
                  ["MON", "closed"],
                  ["TUE — FRI", "11:00 — 18:00"],
                  ["SAT", "12:00 — 16:00"],
                  ["SUN", "closed"],
                ].map(([d, h]) => (
                  <li
                    key={d}
                    className="flex items-baseline justify-between pb-2 border-b border-dashed border-stone-300 last:border-0"
                  >
                    <span className="text-stone-600">{d}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-stone-500 flex items-center gap-1.5">
                <Clock className="w-2.5 h-2.5" />
                All times PT · holidays vary
              </p>
            </div>

            {/* Quick links */}
            <div className="border-2 border-stone-900 bg-stone-900 text-[#ede7d6] p-7">
              <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-amber-300 mb-5">
                ◆ For the impatient
              </p>
              <ul className="space-y-3">
                {[
                  { t: "Book a 20-min call", h: "calendar.retroui.dev" },
                  { t: "Read the FAQ", h: "retroui.dev/faq" },
                  { t: "View the press kit", h: "retroui.dev/press" },
                ].map((l) => (
                  <li key={l.t}>
                    <a className="flex items-center justify-between gap-3 border-b border-amber-300/20 pb-2 hover:border-amber-300 transition-colors">
                      <span className="text-[15px]">{l.t}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-900/30">
        <div className="mx-auto max-w-[1240px] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10.5px] tracking-[0.22em] uppercase text-stone-600">
          <span>RetroUI · Contact</span>
          <span>One letter, one reply</span>
          <span>retroui.dev/contact</span>
        </div>
      </footer>
    </div>
  );
};

export default TelegramContact;
