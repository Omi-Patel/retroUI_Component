import React, { useState, useEffect } from "react";

export default function TerminalError() {
  const [text, setText] = useState("");
  const fullText =
    ">ERROR 404: FILE NOT FOUND\n>SYSTEM MALFUNCTION\n>INITIATING RECOVERY SEQUENCE...\n>PLEASE STAND BY...";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-96 bg-black flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-3xl bg-black border-2 border-green-500 rounded-lg p-4 sm:p-8">
        <div className="bg-green-950 p-2 sm:p-4 rounded">
          <pre className="font-mono text-green-400 whitespace-pre-wrap break-words text-xs sm:text-sm md:text-base">
            {text}
          </pre>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block px-4 py-2 bg-green-500 text-black font-mono text-sm sm:text-base rounded hover:bg-green-400 transition-colors duration-300"
          >
            RETURN TO MAIN SYSTEM
          </a>
        </div>
      </div>
      <style jsx="true">{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        pre::after {
          content: "█";
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
