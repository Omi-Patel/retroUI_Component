import { PageShowcasePage } from "../../components/showcase";
import AboutPage from "../AboutPage/AboutPage";
import RetroAboutPage from "../AboutPage/RetroAbout";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/AboutPage";

const variants = [
  { name: "AboutPage", label: "Modern", component: AboutPage, githubUrl: GH },
  { name: "RetroAboutPage", label: "Retro", component: RetroAboutPage, githubUrl: GH },
];

export default function AboutPageShowcase() {
  return (
    <PageShowcasePage
      slug="about"
      title="About Page"
      description="Company and project information page layouts."
      variants={variants}
    />
  );
}
