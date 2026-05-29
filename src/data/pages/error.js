import BasicError from "../../pagesComponents/404Page/BasicError";
import RetroError from "../../pagesComponents/404Page/RetroError";
import TerminalError from "../../pagesComponents/404Page/TerminalError";
import MinimalError from "../../pagesComponents/404Page/MinimalError";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/404Page";

export default {
  slug: "error",
  title: "Error / 404",
  description: "Error states and 404 page templates.",
  variants: [
    { name: "BasicError", label: "Basic", component: BasicError, githubUrl: GH },
    { name: "RetroError", label: "Retro", component: RetroError, githubUrl: GH },
    { name: "TerminalError", label: "Terminal", component: TerminalError, githubUrl: GH },
    { name: "MinimalError", label: "Minimal", component: MinimalError, githubUrl: GH },
  ],
};
