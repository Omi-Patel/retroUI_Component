import { PageShowcasePage } from "../../components/showcase";
import RetroComingSoonPage from "../ComingSoonPage/RetroComingSoonPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/ComingSoonPage";

const variants = [
  { name: "RetroComingSoonPage", label: "Retro", component: RetroComingSoonPage, githubUrl: GH },
];

export default function ComingSoonPageShowcase() {
  return (
    <PageShowcasePage
      slug="coming-soon"
      title="Coming Soon"
      description="Pre-launch template with live countdown timer, email capture, and social links."
      variants={variants}
    />
  );
}
