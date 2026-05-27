import { PageShowcasePage } from "../../components/showcase";
import RetroPricingPage from "../PricingPage/RetroPricingPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/PricingPage";

const variants = [
  { name: "RetroPricingPage", label: "Retro", component: RetroPricingPage, githubUrl: GH },
];

export default function PricingPageShowcase() {
  return (
    <PageShowcasePage
      slug="pricing"
      title="Pricing Page"
      description="Full-page pricing template with tiered plans, monthly/yearly toggle, FAQ section, and CTA."
      variants={variants}
    />
  );
}
