import { PageShowcasePage } from "../../components/showcase";
import RetroDocsPage from "../DocsPage/RetroDocsPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/DocsPage";

const variants = [
  { name: "RetroDocsPage", label: "Retro", component: RetroDocsPage, githubUrl: GH },
];

export default function DocsPageShowcase() {
  return (
    <PageShowcasePage
      slug="docs"
      title="Documentation"
      description="Full-page documentation template with sidebar TOC, breadcrumbs, code blocks with copy, changelog, and pager."
      variants={variants}
    />
  );
}
