import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  FileText,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  Circle,
  Plus,
  Download,
  Coffee,
  Sparkles,
} from "lucide-react";

/* ---------- mock data ---------- */
const REVENUE = [
  { m: "Jan", v: 1820 },
  { m: "Feb", v: 2410 },
  { m: "Mar", v: 1980 },
  { m: "Apr", v: 3120 },
  { m: "May", v: 2870 },
  { m: "Jun", v: 3640 },
  { m: "Jul", v: 4210 },
  { m: "Aug", v: 3950 },
];

const STATS = [
  { label: "Revenue", value: "$24,389", delta: "+12.4%", up: true, sub: "vs last month" },
  { label: "Orders", value: "1,284", delta: "+8.1%", up: true, sub: "shipped this week" },
  { label: "Customers", value: "892", delta: "-2.3%", up: false, sub: "active users" },
  { label: "Conversion", value: "3.84%", delta: "+0.7%", up: true, sub: "checkout rate" },
];

const ACTIVITY = [
  { who: "Ada L.", what: "purchased Retro Button v2", when: "12 min ago" },
  { who: "Grace H.", what: "joined the newsletter", when: "1 h ago" },
  { who: "Linus T.", what: "starred the GitHub repo", when: "3 h ago" },
  { who: "Hedy L.", what: "submitted bug report #421", when: "5 h ago" },
  { who: "Alan T.", what: "downloaded the press kit", when: "yesterday" },
];

const TASKS = [
  { title: "Review pull request #128", note: "Switch component variants", done: true },
  { title: "Ship retroui v1.1", note: "Tag release and update changelog", done: false },
  { title: "Reply to Discord questions", note: "5 unanswered threads", done: false },
  { title: "Polish dashboard preview", note: "Add ornament dividers", done: false },
];

const NAV = [
  { Icon: LayoutDashboard, label: "Overview", key: "overview" },
  { Icon: ShoppingBag, label: "Orders", key: "orders" },
  { Icon: Users, label: "Customers", key: "customers" },
  { Icon: FileText, label: "Reports", key: "reports" },
];

/* ---------- chart tooltip ---------- */
function ChartTip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="px-3 py-2 mono text-[11px]"
      style={{
        background: "var(--fg)",
        color: "var(--bg)",
        border: "1.5px solid var(--fg)",
        boxShadow: "3px 3px 0 0 var(--border-strong)",
      }}
    >
      <div className="uppercase tracking-wider opacity-60 mb-0.5">{label}</div>
      <div className="text-[13px] font-semibold">
        ${payload[0].value.toLocaleString()}
      </div>
    </div>
  );
}

/* ---------- main ---------- */
export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("overview");

  return (
    <div
      className="grid grid-cols-12 min-h-[640px]"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      {/* ===== SIDEBAR ===== */}
      <aside
        className="col-span-12 md:col-span-3 lg:col-span-2 p-5 md:flex md:flex-col md:gap-6"
        style={{ borderRight: "1px solid var(--border)", background: "var(--surface)" }}
      >
        {/* brand */}
        <div className="flex items-center gap-2.5 mb-6 md:mb-0">
          <span
            className="inline-flex items-center justify-center"
            style={{
              width: 28,
              height: 28,
              background: "var(--fg)",
              color: "var(--bg)",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 13,
              borderRadius: 6,
              boxShadow: "2px 2px 0 0 var(--border-strong)",
            }}
          >
            R
          </span>
          <div className="flex flex-col leading-none">
            <span
              className="font-semibold tracking-tight text-[14px]"
              style={{ color: "var(--fg)" }}
            >
              retroui
            </span>
            <span
              className="label mt-0.5"
              style={{ color: "var(--muted)", fontSize: 9 }}
            >
              ADMIN · v1.0
            </span>
          </div>
        </div>

        {/* nav */}
        <div className="space-y-0.5">
          <div
            className="text-[10px] font-semibold uppercase tracking-wider mb-2 px-2"
            style={{ color: "var(--muted)" }}
          >
            Main
          </div>
          {NAV.map((n, i) => {
            const active = n.key === activeNav;
            return (
              <button
                key={n.key}
                onClick={() => setActiveNav(n.key)}
                className="w-full text-left px-2 py-1.5 rounded-md text-[13px] flex items-center gap-2 transition-colors"
                style={{
                  background: active ? "var(--surface-2)" : "transparent",
                  color: active ? "var(--fg)" : "var(--muted)",
                  fontWeight: active ? 500 : 400,
                  border: active ? "1px solid var(--border)" : "1px solid transparent",
                }}
              >
                <n.Icon className="w-3.5 h-3.5 opacity-80" />
                <span className="flex-1">{n.label}</span>
                <span
                  className="chapter-num text-[12px] opacity-50"
                  style={{ color: "var(--muted)" }}
                >
                  0{i + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* upgrade card */}
        <div className="mt-auto">
          <div
            className="rounded-lg p-4 relative overflow-hidden"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border-strong)",
              boxShadow: "3px 3px 0 0 var(--border-strong)",
            }}
          >
            <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
            <div className="relative">
              <span className="sticker-flat mb-3" style={{ background: "var(--sticker)", color: "var(--bg)" }}>
                PRO TIP
              </span>
              <div
                className="display text-[14px] mt-2 leading-tight"
                style={{ color: "var(--fg)" }}
              >
                <span className="display-italic" style={{ color: "var(--muted)" }}>
                  Brew
                </span>{" "}
                a coffee.
              </div>
              <p
                className="text-[11.5px] mt-1.5 leading-snug"
                style={{ color: "var(--muted)" }}
              >
                You&apos;ve shipped 12 commits today.
              </p>
              <div
                className="mt-3 inline-flex items-center gap-1.5 text-[10.5px] mono"
                style={{ color: "var(--muted)" }}
              >
                <Coffee className="w-3 h-3" />
                <span>BREAK · 5 MIN</span>
              </div>
            </div>
          </div>

          <button
            className="w-full mt-3 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-[12.5px] font-medium transition-colors hover:bg-[var(--surface-2)]"
            style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
          >
            <Settings className="w-3.5 h-3.5" />
            Settings
          </button>
        </div>
      </aside>

      {/* ===== MAIN ===== */}
      <main className="col-span-12 md:col-span-9 lg:col-span-10 p-6 lg:p-8">
        {/* top bar */}
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div
              className="flex items-center gap-2 flex-1 h-9 px-3 rounded-md"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <Search className="w-3.5 h-3.5" style={{ color: "var(--muted)" }} />
              <input
                placeholder="Search orders, customers…"
                className="bg-transparent flex-1 outline-none text-[13px]"
                style={{ color: "var(--fg)" }}
              />
              <kbd>⌘K</kbd>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-[var(--surface-2)]"
              style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
            >
              <Bell className="w-4 h-4" />
              <span
                className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--sticker)" }}
              />
            </button>
            <div
              className="inline-flex items-center gap-2 h-9 px-3 rounded-md"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full mono text-[10px] font-bold"
                style={{ background: "var(--fg)", color: "var(--bg)" }}
              >
                OP
              </span>
              <span
                className="text-[12.5px] font-medium hidden sm:inline"
                style={{ color: "var(--fg)" }}
              >
                Om Patel
              </span>
            </div>
          </div>
        </div>

        {/* greeting hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="sticker-flat" style={{ background: "var(--fg)", color: "var(--bg)" }}>
              CH. 01
            </span>
            <span
              className="label inline-flex items-center gap-2"
              style={{ color: "var(--muted)" }}
            >
              <Sparkles className="w-3 h-3" />
              <span>[ OVERVIEW ]</span>
            </span>
          </div>
          <h1
            className="display text-[34px] sm:text-[42px] leading-[1.05]"
            style={{ color: "var(--fg)", letterSpacing: "-0.025em" }}
          >
            Good morning,{" "}
            <span className="display-italic" style={{ color: "var(--muted)" }}>
              Om.
            </span>
          </h1>
          <p
            className="mt-2 text-[14.5px]"
            style={{ color: "var(--muted)" }}
          >
            Here&apos;s what&apos;s shipping today —{" "}
            <span className="mono" style={{ color: "var(--fg)" }}>
              {new Date().toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}
            </span>
            .
          </p>
        </div>

        {/* stats grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-lg overflow-hidden mb-8"
          style={{ background: "var(--border)" }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="p-5"
              style={{ background: "var(--bg)" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="label inline-flex items-center gap-1"
                  style={{ color: "var(--muted)" }}
                >
                  <span className="chapter-num text-[12px]">
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <span
                  className="inline-flex items-center gap-1 mono text-[11px] font-semibold"
                  style={{ color: s.up ? "var(--ok)" : "var(--sticker)" }}
                >
                  {s.up ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {s.delta}
                </span>
              </div>
              <div
                className="display text-[30px] leading-none"
                style={{ color: "var(--fg)" }}
              >
                {s.value}
              </div>
              <div
                className="text-[12.5px] mt-1.5"
                style={{ color: "var(--fg)" }}
              >
                {s.label}
              </div>
              <div
                className="text-[11px] mt-0.5 display-italic"
                style={{ color: "var(--muted)" }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* chart + activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {/* chart card */}
          <div
            className="lg:col-span-2 rounded-lg overflow-hidden"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              boxShadow: "3px 3px 0 0 var(--border-strong)",
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-3.5"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div>
                <div
                  className="label inline-flex items-center gap-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span className="chapter-num">No. 05</span>
                  <span>[ REVENUE · 8 MONTHS ]</span>
                </div>
                <div
                  className="display text-[20px] mt-1"
                  style={{ color: "var(--fg)" }}
                >
                  $24,389{" "}
                  <span className="display-italic text-[15px]" style={{ color: "var(--muted)" }}>
                    this month
                  </span>
                </div>
              </div>
              <div
                className="flex items-center gap-1 rounded-md p-0.5"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {["1M", "6M", "1Y"].map((p, i) => (
                  <button
                    key={p}
                    className="px-2.5 h-6 rounded text-[11.5px] font-medium transition-colors mono"
                    style={{
                      background: i === 1 ? "var(--bg)" : "transparent",
                      color: i === 1 ? "var(--fg)" : "var(--muted)",
                      border: i === 1 ? "1px solid var(--border)" : "1px solid transparent",
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={REVENUE} barCategoryGap={18}>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="m"
                    tick={{ fill: "var(--muted)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                    axisLine={{ stroke: "var(--border)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "var(--muted)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                    axisLine={{ stroke: "var(--border)" }}
                    tickLine={false}
                    tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
                  />
                  <Tooltip content={<ChartTip />} cursor={{ fill: "var(--surface-2)" }} />
                  <Bar dataKey="v" fill="var(--fg)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* activity */}
          <div
            className="rounded-lg overflow-hidden"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-3.5"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div
                className="label inline-flex items-center gap-2"
                style={{ color: "var(--muted)" }}
              >
                <span className="chapter-num">No. 06</span>
                <span>[ ACTIVITY ]</span>
              </div>
              <span
                className="stamp"
                style={{ color: "var(--muted)", fontSize: 9 }}
              >
                LIVE
              </span>
            </div>
            <ul>
              {ACTIVITY.map((a, i) => (
                <li
                  key={i}
                  className="px-5 py-3 flex items-start gap-3"
                  style={{
                    borderBottom:
                      i === ACTIVITY.length - 1
                        ? "none"
                        : "1px dashed var(--border)",
                  }}
                >
                  <span
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full mono text-[10px] font-bold flex-shrink-0"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--fg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {a.who.split(" ")[0][0]}
                    {a.who.split(" ")[1]?.[0] || ""}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[13px] leading-snug"
                      style={{ color: "var(--fg)" }}
                    >
                      <span className="font-semibold">{a.who}</span>{" "}
                      <span style={{ color: "var(--muted)" }}>{a.what}</span>
                    </p>
                    <p
                      className="text-[10.5px] mono mt-0.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {a.when}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* tasks + quick actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div
            className="lg:col-span-2 rounded-lg overflow-hidden"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-3.5"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div
                className="label inline-flex items-center gap-2"
                style={{ color: "var(--muted)" }}
              >
                <span className="chapter-num">No. 07</span>
                <span>[ TODAY'S TASKS ]</span>
              </div>
              <button
                className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md text-[11.5px] font-medium transition-colors hover:bg-[var(--surface-2)]"
                style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
              >
                <Plus className="w-3 h-3" />
                Add task
              </button>
            </div>
            <ul>
              {TASKS.map((t, i) => (
                <li
                  key={i}
                  className="px-5 py-3.5 flex items-center gap-3"
                  style={{
                    borderBottom:
                      i === TASKS.length - 1
                        ? "none"
                        : "1px dashed var(--border)",
                  }}
                >
                  <span
                    className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] flex-shrink-0"
                    style={{
                      background: t.done ? "var(--fg)" : "transparent",
                      border: t.done
                        ? "1px solid var(--fg)"
                        : "1.5px solid var(--border-strong)",
                      color: "var(--bg)",
                    }}
                  >
                    {t.done ? (
                      <Check className="w-3 h-3" strokeWidth={3} />
                    ) : (
                      <Circle className="w-0 h-0" />
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[13.5px] font-medium"
                      style={{
                        color: t.done ? "var(--muted)" : "var(--fg)",
                        textDecoration: t.done ? "line-through" : "none",
                        textDecorationColor: "var(--border-strong)",
                      }}
                    >
                      {t.title}
                    </div>
                    <div
                      className="text-[11.5px] mt-0.5 display-italic"
                      style={{ color: "var(--muted)" }}
                    >
                      {t.note}
                    </div>
                  </div>
                  <span
                    className="text-[10.5px] mono uppercase tracking-wider"
                    style={{
                      color: t.done ? "var(--ok)" : "var(--muted)",
                    }}
                  >
                    {t.done ? "DONE" : "TODO"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* quick actions */}
          <div
            className="rounded-lg p-5"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="label inline-flex items-center gap-2 mb-4"
              style={{ color: "var(--muted)" }}
            >
              <span className="chapter-num">No. 08</span>
              <span>[ QUICK ACTIONS ]</span>
            </div>

            <div className="space-y-2.5">
              {[
                { label: "Export analytics", Icon: Download, hint: ".csv" },
                { label: "New customer", Icon: Users, hint: "manual entry" },
                { label: "Compose report", Icon: FileText, hint: "monthly" },
              ].map((a) => (
                <button
                  key={a.label}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors hover:bg-[var(--bg)]"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(-1px, -1px)";
                    e.currentTarget.style.boxShadow = "3px 3px 0 0 var(--border-strong)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0, 0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--fg)",
                    }}
                  >
                    <a.Icon className="w-3.5 h-3.5" />
                  </span>
                  <div className="flex-1 text-left">
                    <div
                      className="text-[13px] font-medium"
                      style={{ color: "var(--fg)" }}
                    >
                      {a.label}
                    </div>
                    <div
                      className="text-[10.5px] mono"
                      style={{ color: "var(--muted)" }}
                    >
                      {a.hint}
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-3 h-3 opacity-40"
                    style={{ color: "var(--muted)" }}
                  />
                </button>
              ))}
            </div>

            <div
              className="mt-5 pt-4 ornament-hr"
              style={{ color: "var(--muted)" }}
            >
              <span className="label">EST. MMXXIV</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
