import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div className="bg-red-400 fixed bottom-0 z-50 w-full p-2 font-bold text-lg tracking-wide font-mono text-center text-zinc-800">
      <p>Development Under Process..!! Share your feedback.</p>
    </div>
  </StrictMode>
);
