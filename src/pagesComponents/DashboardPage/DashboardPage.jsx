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
    <div className="px-3 py-2 font-mono text-[11px] bg-[#1c1814] dark:bg-[#ede7d6] text-[#ede7d6] dark:text-[#15130e] border-[1.5px] border-[#1c1814] dark:border-[#ede7d6] shadow-[3px_3px_0_0_#948869] dark:shadow-[3px_3px_0_0_#4a4232]">
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
    <div className="grid grid-cols-12 min-h-[640px] bg-[#ede7d6] dark:bg-[#15130e] text-[#1c1814] dark:text-[#ede7d6]">
      {/* ===== SIDEBAR ===== */}
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 p-5 md:flex md:flex-col md:gap-6 border-r border-[#c0b69a] dark:border-[#2e2920] bg-[#e2dcc9] dark:bg-[#1c1913]">
        {/* brand */}
        <div className="flex items-center gap-2.5 mb-6 md:mb-0">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-[6px] font-mono font-bold text-[13px] bg-[#1c1814] dark:bg-[#ede7d6] text-[#ede7d6] dark:text-[#15130e] shadow-[2px_2px_0_0_#948869] dark:shadow-[2px_2px_0_0_#4a4232]">
            R
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-semibold tracking-tight text-[14px] text-[#1c1814] dark:text-[#ede7d6]">
              retroui
            </span>
            <span className="mt-0.5 font-mono uppercase tracking-[0.08em] text-[9px] font-medium text-[#6e6553] dark:text-[#948869]">
              ADMIN · v1.0
            </span>
          </div>
        </div>

        {/* nav */}
        <div className="space-y-0.5">
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-2 px-2 text-[#6e6553] dark:text-[#948869]">
            Main
          </div>
          {NAV.map((n, i) => {
            const active = n.key === activeNav;
            return (
              <button
                key={n.key}
                onClick={() => setActiveNav(n.key)}
                className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] flex items-center gap-2 transition-colors border ${
                  active
                    ? "bg-[#d3cab2] dark:bg-[#24201a] text-[#1c1814] dark:text-[#ede7d6] font-medium border-[#c0b69a] dark:border-[#2e2920]"
                    : "bg-transparent text-[#6e6553] dark:text-[#948869] font-normal border-transparent"
                }`}
              >
                <n.Icon className="w-3.5 h-3.5 opacity-80" />
                <span className="flex-1">{n.label}</span>
                <span className="font-serif italic font-normal text-[12px] opacity-50 text-[#6e6553] dark:text-[#948869]">
                  0{i + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* upgrade card */}
        <div className="mt-auto">
          <div className="rounded-lg p-4 relative overflow-hidden bg-[#ede7d6] dark:bg-[#15130e] border border-[#948869] dark:border-[#4a4232] shadow-[3px_3px_0_0_#948869] dark:shadow-[3px_3px_0_0_#4a4232]">
            <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle,#948869_1px,transparent_1.2px)] dark:bg-[radial-gradient(circle,#4a4232_1px,transparent_1.2px)] [background-size:18px_18px]" />
            <div className="relative">
              <span className="mb-3 inline-flex items-center gap-1.5 px-2 py-[3px] rounded-[2px] font-mono text-[10px] font-bold uppercase tracking-[0.12em] bg-[#e07b67] dark:bg-[#c46455] text-[#ede7d6] dark:text-[#15130e]">
                PRO TIP
              </span>
              <div className="font-sans font-semibold tracking-tight text-[14px] mt-2 leading-tight text-[#1c1814] dark:text-[#ede7d6]">
                <span className="font-serif italic font-normal tracking-[-0.01em] text-[#6e6553] dark:text-[#948869]">
                  Brew
                </span>{" "}
                a coffee.
              </div>
              <p className="text-[11.5px] mt-1.5 leading-snug text-[#6e6553] dark:text-[#948869]">
                You&apos;ve shipped 12 commits today.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[10.5px] font-mono text-[#6e6553] dark:text-[#948869]">
                <Coffee className="w-3 h-3" />
                <span>BREAK · 5 MIN</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-3 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-[12.5px] font-medium transition-colors border border-[#c0b69a] dark:border-[#2e2920] text-[#1c1814] dark:text-[#ede7d6] hover:bg-[#d3cab2] dark:hover:bg-[#24201a]">
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
            <div className="flex items-center gap-2 flex-1 h-9 px-3 rounded-md bg-[#e2dcc9] dark:bg-[#1c1913] border border-[#c0b69a] dark:border-[#2e2920]">
              <Search className="w-3.5 h-3.5 text-[#6e6553] dark:text-[#948869]" />
              <input
                placeholder="Search orders, customers…"
                className="bg-transparent flex-1 outline-none text-[13px] text-[#1c1814] dark:text-[#ede7d6]"
              />
              <kbd className="font-mono text-[10.5px] font-medium leading-none px-1.5 py-[2px] rounded-[3px] bg-[#d3cab2] dark:bg-[#24201a] border border-[#c0b69a] dark:border-[#2e2920] text-[#6e6553] dark:text-[#948869]">
                ⌘K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors border border-[#c0b69a] dark:border-[#2e2920] text-[#1c1814] dark:text-[#ede7d6] hover:bg-[#d3cab2] dark:hover:bg-[#24201a]">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#e07b67] dark:bg-[#c46455]" />
            </button>
            <div className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-[#e2dcc9] dark:bg-[#1c1913] border border-[#c0b69a] dark:border-[#2e2920]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-bold bg-[#1c1814] dark:bg-[#ede7d6] text-[#ede7d6] dark:text-[#15130e]">
                OP
              </span>
              <span className="text-[12.5px] font-medium hidden sm:inline text-[#1c1814] dark:text-[#ede7d6]">
                Om Patel
              </span>
            </div>
          </div>
        </div>

        {/* greeting hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-[3px] rounded-[2px] font-mono text-[10px] font-bold uppercase tracking-[0.12em] bg-[#1c1814] dark:bg-[#ede7d6] text-[#ede7d6] dark:text-[#15130e]">
              CH. 01
            </span>
            <span className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.08em] text-[11px] font-medium text-[#6e6553] dark:text-[#948869]">
              <Sparkles className="w-3 h-3" />
              <span>[ OVERVIEW ]</span>
            </span>
          </div>
          <h1 className="font-sans font-semibold tracking-tight text-[34px] sm:text-[42px] leading-[1.05] text-[#1c1814] dark:text-[#ede7d6]">
            Good morning,{" "}
            <span className="font-serif italic font-normal tracking-[-0.01em] text-[#6e6553] dark:text-[#948869]">
              Om.
            </span>
          </h1>
          <p className="mt-2 text-[14.5px] text-[#6e6553] dark:text-[#948869]">
            Here&apos;s what&apos;s shipping today —{" "}
            <span className="font-mono text-[#1c1814] dark:text-[#ede7d6]">
              {new Date().toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}
            </span>
            .
          </p>
        </div>

        {/* stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-lg overflow-hidden mb-8 bg-[#c0b69a] dark:bg-[#2e2920]">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="p-5 bg-[#ede7d6] dark:bg-[#15130e]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1 font-mono uppercase tracking-[0.08em] text-[11px] font-medium text-[#6e6553] dark:text-[#948869]">
                  <span className="font-serif italic font-normal text-[12px]">
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <span
                  className={`inline-flex items-center gap-1 font-mono text-[11px] font-semibold ${
                    s.up
                      ? "text-[#65a30d] dark:text-[#a3e635]"
                      : "text-[#e07b67] dark:text-[#c46455]"
                  }`}
                >
                  {s.up ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {s.delta}
                </span>
              </div>
              <div className="font-sans font-semibold tracking-tight text-[30px] leading-none text-[#1c1814] dark:text-[#ede7d6]">
                {s.value}
              </div>
              <div className="text-[12.5px] mt-1.5 text-[#1c1814] dark:text-[#ede7d6]">
                {s.label}
              </div>
              <div className="text-[11px] mt-0.5 font-serif italic font-normal tracking-[-0.01em] text-[#6e6553] dark:text-[#948869]">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* chart + activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {/* chart card */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden bg-[#ede7d6] dark:bg-[#15130e] border border-[#c0b69a] dark:border-[#2e2920] shadow-[3px_3px_0_0_#948869] dark:shadow-[3px_3px_0_0_#4a4232]">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#c0b69a] dark:border-[#2e2920]">
              <div>
                <div className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.08em] text-[11px] font-medium text-[#6e6553] dark:text-[#948869]">
                  <span className="font-serif italic font-normal">No. 05</span>
                  <span>[ REVENUE · 8 MONTHS ]</span>
                </div>
                <div className="font-sans font-semibold tracking-tight text-[20px] mt-1 text-[#1c1814] dark:text-[#ede7d6]">
                  $24,389{" "}
                  <span className="font-serif italic font-normal tracking-[-0.01em] text-[15px] text-[#6e6553] dark:text-[#948869]">
                    this month
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-md p-0.5 bg-[#e2dcc9] dark:bg-[#1c1913] border border-[#c0b69a] dark:border-[#2e2920]">
                {["1M", "6M", "1Y"].map((p, i) => (
                  <button
                    key={p}
                    className={`px-2.5 h-6 rounded text-[11.5px] font-medium transition-colors font-mono border ${
                      i === 1
                        ? "bg-[#ede7d6] dark:bg-[#15130e] text-[#1c1814] dark:text-[#ede7d6] border-[#c0b69a] dark:border-[#2e2920]"
                        : "bg-transparent text-[#6e6553] dark:text-[#948869] border-transparent"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 dark:[&_.recharts-cartesian-grid_line]:stroke-[#2e2920] dark:[&_.recharts-cartesian-axis-line]:stroke-[#2e2920] dark:[&_.recharts-cartesian-axis-tick-value]:fill-[#948869] dark:[&_.recharts-bar-rectangle_path]:fill-[#ede7d6] dark:[&_.recharts-tooltip-cursor]:fill-[#24201a]">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={REVENUE} barCategoryGap={18}>
                  <CartesianGrid stroke="#c0b69a" strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="m"
                    tick={{ fill: "#6e6553", fontSize: 11, fontFamily: "JetBrains Mono" }}
                    axisLine={{ stroke: "#c0b69a" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#6e6553", fontSize: 11, fontFamily: "JetBrains Mono" }}
                    axisLine={{ stroke: "#c0b69a" }}
                    tickLine={false}
                    tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
                  />
                  <Tooltip content={<ChartTip />} cursor={{ fill: "#d3cab2" }} />
                  <Bar dataKey="v" fill="#1c1814" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* activity */}
          <div className="rounded-lg overflow-hidden bg-[#ede7d6] dark:bg-[#15130e] border border-[#c0b69a] dark:border-[#2e2920]">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#c0b69a] dark:border-[#2e2920]">
              <div className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.08em] text-[11px] font-medium text-[#6e6553] dark:text-[#948869]">
                <span className="font-serif italic font-normal">No. 06</span>
                <span>[ ACTIVITY ]</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2 py-[2px] rounded-[3px] border-[1.5px] border-current font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-[#6e6553] dark:text-[#948869]">
                LIVE
              </span>
            </div>
            <ul>
              {ACTIVITY.map((a, i) => (
                <li
                  key={i}
                  className={`px-5 py-3 flex items-start gap-3 ${
                    i === ACTIVITY.length - 1
                      ? ""
                      : "border-b border-dashed border-[#c0b69a] dark:border-[#2e2920]"
                  }`}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-bold flex-shrink-0 bg-[#d3cab2] dark:bg-[#24201a] text-[#1c1814] dark:text-[#ede7d6] border border-[#c0b69a] dark:border-[#2e2920]">
                    {a.who.split(" ")[0][0]}
                    {a.who.split(" ")[1]?.[0] || ""}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] leading-snug text-[#1c1814] dark:text-[#ede7d6]">
                      <span className="font-semibold">{a.who}</span>{" "}
                      <span className="text-[#6e6553] dark:text-[#948869]">{a.what}</span>
                    </p>
                    <p className="text-[10.5px] font-mono mt-0.5 text-[#6e6553] dark:text-[#948869]">
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
          <div className="lg:col-span-2 rounded-lg overflow-hidden bg-[#ede7d6] dark:bg-[#15130e] border border-[#c0b69a] dark:border-[#2e2920]">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#c0b69a] dark:border-[#2e2920]">
              <div className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.08em] text-[11px] font-medium text-[#6e6553] dark:text-[#948869]">
                <span className="font-serif italic font-normal">No. 07</span>
                <span>[ TODAY'S TASKS ]</span>
              </div>
              <button className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md text-[11.5px] font-medium transition-colors border border-[#c0b69a] dark:border-[#2e2920] text-[#1c1814] dark:text-[#ede7d6] hover:bg-[#d3cab2] dark:hover:bg-[#24201a]">
                <Plus className="w-3 h-3" />
                Add task
              </button>
            </div>
            <ul>
              {TASKS.map((t, i) => (
                <li
                  key={i}
                  className={`px-5 py-3.5 flex items-center gap-3 ${
                    i === TASKS.length - 1
                      ? ""
                      : "border-b border-dashed border-[#c0b69a] dark:border-[#2e2920]"
                  }`}
                >
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-[4px] flex-shrink-0 text-[#ede7d6] dark:text-[#15130e] ${
                      t.done
                        ? "bg-[#1c1814] dark:bg-[#ede7d6] border border-[#1c1814] dark:border-[#ede7d6]"
                        : "bg-transparent border-[1.5px] border-[#948869] dark:border-[#4a4232]"
                    }`}
                  >
                    {t.done ? (
                      <Check className="w-3 h-3" strokeWidth={3} />
                    ) : (
                      <Circle className="w-0 h-0" />
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-[13.5px] font-medium ${
                        t.done
                          ? "text-[#6e6553] dark:text-[#948869] line-through decoration-[#948869] dark:decoration-[#4a4232]"
                          : "text-[#1c1814] dark:text-[#ede7d6]"
                      }`}
                    >
                      {t.title}
                    </div>
                    <div className="text-[11.5px] mt-0.5 font-serif italic font-normal tracking-[-0.01em] text-[#6e6553] dark:text-[#948869]">
                      {t.note}
                    </div>
                  </div>
                  <span
                    className={`text-[10.5px] font-mono uppercase tracking-wider ${
                      t.done
                        ? "text-[#65a30d] dark:text-[#a3e635]"
                        : "text-[#6e6553] dark:text-[#948869]"
                    }`}
                  >
                    {t.done ? "DONE" : "TODO"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* quick actions */}
          <div className="rounded-lg p-5 bg-[#e2dcc9] dark:bg-[#1c1913] border border-[#c0b69a] dark:border-[#2e2920]">
            <div className="inline-flex items-center gap-2 mb-4 font-mono uppercase tracking-[0.08em] text-[11px] font-medium text-[#6e6553] dark:text-[#948869]">
              <span className="font-serif italic font-normal">No. 08</span>
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
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors bg-[#ede7d6] dark:bg-[#15130e] border border-[#c0b69a] dark:border-[#2e2920] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_#948869] dark:hover:shadow-[3px_3px_0_0_#4a4232]"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#d3cab2] dark:bg-[#24201a] border border-[#c0b69a] dark:border-[#2e2920] text-[#1c1814] dark:text-[#ede7d6]">
                    <a.Icon className="w-3.5 h-3.5" />
                  </span>
                  <div className="flex-1 text-left">
                    <div className="text-[13px] font-medium text-[#1c1814] dark:text-[#ede7d6]">
                      {a.label}
                    </div>
                    <div className="text-[10.5px] font-mono text-[#6e6553] dark:text-[#948869]">
                      {a.hint}
                    </div>
                  </div>
                  <ArrowUpRight className="w-3 h-3 opacity-40 text-[#6e6553] dark:text-[#948869]" />
                </button>
              ))}
            </div>

            <div className="mt-5 pt-4 flex items-center gap-4 text-[#6e6553] dark:text-[#948869] before:content-[''] before:flex-1 before:h-px before:bg-current before:opacity-40 after:content-[''] after:flex-1 after:h-px after:bg-current after:opacity-40">
              <span className="font-mono uppercase tracking-[0.08em] text-[11px] font-medium">EST. MMXXIV</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
