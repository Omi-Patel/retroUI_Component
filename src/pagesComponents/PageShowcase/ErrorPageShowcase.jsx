import { PageShowcasePage } from "../../components/showcase";
import BasicError from "../404Page/BasicError";
import RetroError from "../404Page/RetroError";
import TerminalError from "../404Page/TerminalError";
import MinimalError from "../404Page/MinimalError";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/404Page";

const variants = [
  { name: "BasicError", label: "Basic", component: BasicError, githubUrl: GH },
  { name: "RetroError", label: "Retro", component: RetroError, githubUrl: GH },
  { name: "TerminalError", label: "Terminal", component: TerminalError, githubUrl: GH },
  { name: "MinimalError", label: "Minimal", component: MinimalError, githubUrl: GH },
];

export default function ErrorPageShowcase() {
  return (
    <PageShowcasePage
      slug="error"
      title="Error / 404"
      description="Error states and 404 page templates."
      variants={variants}
    />
  );
}
