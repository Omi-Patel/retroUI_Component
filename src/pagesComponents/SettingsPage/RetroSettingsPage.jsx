import React, { useState } from "react";
import {
  User,
  Lock,
  Bell,
  Globe,
  CreditCard,
  Palette,
  Trash2,
  Save,
  Check,
} from "lucide-react";

const sections = [
  { id: "profile", label: "Profile", Icon: User },
  { id: "account", label: "Account", Icon: Lock },
  { id: "notifications", label: "Notifications", Icon: Bell },
  { id: "appearance", label: "Appearance", Icon: Palette },
  { id: "billing", label: "Billing", Icon: CreditCard },
  { id: "language", label: "Language", Icon: Globe },
];

export default function RetroSettingsPage() {
  const [active, setActive] = useState("profile");
  const [notif, setNotif] = useState({ email: true, push: false, weekly: true });

  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono">
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
              CONTROL PANEL
            </p>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              Settings
            </h1>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0px_0px_black] text-xs font-black uppercase tracking-wider">
            <Save className="w-3.5 h-3.5" /> Save changes
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <nav className="bg-white border-4 border-black shadow-[5px_5px_0px_0px_black] p-2 space-y-0.5">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive ? "bg-black text-yellow-300" : "hover:bg-yellow-100"
                  }`}
                >
                  <s.Icon className="w-3.5 h-3.5" />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <main className="col-span-12 md:col-span-9 space-y-6">
          {active === "profile" && (
            <Panel title="Profile" desc="Your public profile and identity.">
              <Row label="Avatar">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-pink-300 border-4 border-black flex items-center justify-center text-xl font-black">
                    JD
                  </div>
                  <button className="px-3 py-1.5 bg-white text-black border-4 border-black shadow-[3px_3px_0px_0px_black] text-[10px] font-black uppercase tracking-widest">
                    Upload
                  </button>
                </div>
              </Row>
              <Row label="Name">
                <Input defaultValue="J. Doe" />
              </Row>
              <Row label="Bio">
                <textarea
                  defaultValue="Builder of small things. Friend of cats."
                  rows={3}
                  className="w-full px-3 py-2 bg-[#fafaf3] border-4 border-black text-sm focus:outline-none focus:bg-yellow-50 resize-none"
                />
              </Row>
              <Row label="Website">
                <Input defaultValue="https://retro.dev" />
              </Row>
            </Panel>
          )}

          {active === "account" && (
            <Panel title="Account" desc="Security and account credentials.">
              <Row label="Email">
                <Input defaultValue="hello@retro.dev" />
              </Row>
              <Row label="Password">
                <div className="flex gap-2">
                  <Input type="password" defaultValue="************" />
                  <button className="px-3 bg-white text-black border-4 border-black shadow-[3px_3px_0px_0px_black] text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                    Change
                  </button>
                </div>
              </Row>
              <Row label="Two-factor auth">
                <div className="flex items-center gap-2">
                  <span className="text-xs">
                    <span className="inline-block w-2 h-2 bg-green-600 mr-1.5" />
                    Enabled
                  </span>
                </div>
              </Row>
              <div className="border-t-4 border-dashed border-black/40 pt-5 mt-5">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">
                  Danger Zone
                </p>
                <button className="inline-flex items-center gap-2 px-3 py-2 bg-red-50 text-red-700 border-4 border-red-700 shadow-[3px_3px_0px_0px_rgb(127,29,29)] text-xs font-black uppercase tracking-wider">
                  <Trash2 className="w-3.5 h-3.5" /> Delete account
                </button>
              </div>
            </Panel>
          )}

          {active === "notifications" && (
            <Panel title="Notifications" desc="Choose how we reach out.">
              {[
                { k: "email", label: "Email digest" },
                { k: "push", label: "Push notifications" },
                { k: "weekly", label: "Weekly bulletin" },
              ].map((it) => (
                <Row key={it.k} label={it.label}>
                  <ToggleBox
                    on={notif[it.k]}
                    onChange={() => setNotif((n) => ({ ...n, [it.k]: !n[it.k] }))}
                  />
                </Row>
              ))}
            </Panel>
          )}

          {active === "appearance" && (
            <Panel title="Appearance" desc="Theme and display preferences.">
              <Row label="Color theme">
                <div className="flex gap-2 flex-wrap">
                  {["Newsprint", "Neon", "Terminal", "Polaroid"].map((t, i) => (
                    <button
                      key={t}
                      className={`px-3 py-2 bg-white text-black border-4 border-black shadow-[3px_3px_0px_0px_black] text-[10px] font-black uppercase tracking-widest ${
                        i === 0 ? "bg-yellow-300" : ""
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </Row>
              <Row label="Density">
                <select className="px-3 py-2 bg-[#fafaf3] border-4 border-black text-sm focus:outline-none">
                  <option>Comfortable</option>
                  <option>Compact</option>
                </select>
              </Row>
            </Panel>
          )}

          {active === "billing" && (
            <Panel title="Billing" desc="Plan and payment method.">
              <Row label="Current plan">
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-yellow-300 text-black border-4 border-black text-xs font-black uppercase">
                  Pro · $19/mo
                </div>
              </Row>
              <Row label="Next charge">
                <p className="text-sm">Jun 12 · $19.00</p>
              </Row>
              <Row label="Payment">
                <p className="text-sm font-mono">VISA •••• 4242</p>
              </Row>
            </Panel>
          )}

          {active === "language" && (
            <Panel title="Language" desc="Pick your preferred locale.">
              <Row label="Language">
                <select className="px-3 py-2 bg-[#fafaf3] border-4 border-black text-sm focus:outline-none">
                  <option>English (US)</option>
                  <option>Español</option>
                  <option>Français</option>
                  <option>日本語</option>
                </select>
              </Row>
              <Row label="Time zone">
                <select className="px-3 py-2 bg-[#fafaf3] border-4 border-black text-sm focus:outline-none">
                  <option>UTC −05:00 · New York</option>
                  <option>UTC +00:00 · London</option>
                  <option>UTC +09:00 · Tokyo</option>
                </select>
              </Row>
            </Panel>
          )}
        </main>
      </div>
    </div>
  );
}

function Panel({ title, desc, children }) {
  return (
    <section className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_black] p-6">
      <header className="mb-5 pb-3 border-b-2 border-dashed border-black/40">
        <h2 className="text-lg font-black uppercase">{title}</h2>
        {desc && <p className="text-xs opacity-60 mt-0.5">{desc}</p>}
      </header>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
      <label className="text-[11px] font-bold uppercase tracking-wider opacity-70 md:pt-2">
        {label}
      </label>
      <div className="md:col-span-2">{children}</div>
    </div>
  );
}

function Input({ defaultValue, type = "text" }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      className="w-full px-3 py-2 bg-[#fafaf3] border-4 border-black text-sm focus:outline-none focus:bg-yellow-50"
    />
  );
}

function ToggleBox({ on, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`inline-flex items-center gap-2 px-3 py-2 border-4 border-black shadow-[3px_3px_0px_0px_black] text-[10px] font-black uppercase tracking-widest ${
        on ? "bg-yellow-300" : "bg-white"
      }`}
    >
      {on && <Check className="w-3 h-3" />}
      {on ? "On" : "Off"}
    </button>
  );
}
