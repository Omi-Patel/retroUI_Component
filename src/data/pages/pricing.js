import RetroPricingPage from "../../pagesComponents/PricingPage/RetroPricingPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/PricingPage";

export default {
  slug: "pricing",
  title: "Pricing Page",
  description:
    "Full-page pricing template with tiered plans, monthly/yearly toggle, FAQ section, and CTA.",
  variants: [
    { name: "RetroPricingPage", label: "Retro", component: RetroPricingPage, githubUrl: GH },
  ],
};
