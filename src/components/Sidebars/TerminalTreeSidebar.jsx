// Terminal tree sidebar — green-on-black file tree with ASCII branches.
import { useState } from "react";

const tree = [
  {
    name: "src",
    files: ["index.js", "router.js", "app.js"],
  },
  {
    name: "zines",
    files: ["issue-01.md", "issue-02.md"],
  },
  {
    name: "assets",
    files: ["logo.svg"],
  },
];

const TerminalTreeSidebar = () => {
  const [openDirs, setOpenDirs] = useState(["src"]);
  const [activeFile, setActiveFile] = useState("router.js");

  const toggleDir = (name) =>
    setOpenDirs((dirs) =>
      dirs.includes(name) ? dirs.filter((d) => d !== name) : [...dirs, name]
    );

  return (
    <aside className="w-[240px] h-[380px] flex flex-col bg-black text-green-400 font-mono border-4 border-black shadow-[6px_6px_0_0_rgba(57,255,20,0.35)] overflow-hidden">
      {/* Title bar */}
      <div className="px-3 py-2 border-b-2 border-green-400/40 flex items-center gap-2">
        <span aria-hidden="true" className="text-green-500">
          ▮
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
          file://tree
        </span>
        <span className="ml-auto text-[9px] text-green-400/50">tty1</span>
      </div>

      <nav aria-label="Project files" className="flex-1 overflow-y-auto p-3 text-[12px] leading-relaxed">
        <p className="text-green-400/60 select-none">~/retro-project</p>
        <ul>
          {tree.map((dir, dirIdx) => {
            const isLastDir = dirIdx === tree.length - 1;
            const isOpen = openDirs.includes(dir.name);
            return (
              <li key={dir.name}>
                <button
                  onClick={() => toggleDir(dir.name)}
                  aria-expanded={isOpen}
                  className="w-full text-left hover:bg-green-400/10 focus:outline-none focus-visible:bg-green-400/20 px-1"
                >
                  <span aria-hidden="true" className="text-green-400/50">
                    {isLastDir ? "└─ " : "├─ "}
                  </span>
                  <span className="font-bold">
                    {isOpen ? "▾" : "▸"} {dir.name}/
                  </span>
                </button>
                {isOpen && (
                  <ul>
                    {dir.files.map((file, fileIdx) => {
                      const isLastFile = fileIdx === dir.files.length - 1;
                      const isActive = activeFile === file;
                      return (
                        <li key={file}>
                          <button
                            onClick={() => setActiveFile(file)}
                            aria-current={isActive ? "page" : undefined}
                            className={`w-full text-left px-1 focus:outline-none focus-visible:bg-green-400/20 ${
                              isActive
                                ? "bg-green-400 text-black font-bold"
                                : "hover:bg-green-400/10"
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              className={
                                isActive ? "text-black/50" : "text-green-400/50"
                              }
                            >
                              {isLastDir ? "   " : "│  "}
                              {isLastFile ? "└─ " : "├─ "}
                            </span>
                            {file}
                            {isActive && (
                              <span aria-hidden="true" className="animate-[tree-cursor-blink_1s_step-end_infinite]">
                                _
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 py-2 border-t-2 border-green-400/40 text-[9px] uppercase tracking-[0.2em] text-green-400/60">
        {tree.reduce((n, d) => n + d.files.length, 0)} files · open: {activeFile}
      </div>

      <style>{`
        @keyframes tree-cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </aside>
  );
};

export default TerminalTreeSidebar;
