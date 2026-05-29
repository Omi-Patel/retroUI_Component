import RetroComingSoonPage from "../../pagesComponents/ComingSoonPage/RetroComingSoonPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/ComingSoonPage";

export default {
  slug: "coming-soon",
  title: "Coming Soon",
  description:
    "Pre-launch template with live countdown timer, email capture, and social links.",
  variants: [
    { name: "RetroComingSoonPage", label: "Retro", component: RetroComingSoonPage, githubUrl: GH },
  ],
};
