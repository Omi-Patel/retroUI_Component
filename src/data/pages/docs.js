import RetroDocsPage from "../../pagesComponents/DocsPage/RetroDocsPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/DocsPage";

export default {
  slug: "docs",
  title: "Documentation",
  description:
    "Full-page documentation template with sidebar TOC, breadcrumbs, code blocks with copy, changelog, and pager.",
  variants: [
    { name: "RetroDocsPage", label: "Retro", component: RetroDocsPage, githubUrl: GH },
  ],
};
