import { PageShowcasePage } from "../../components/showcase";
import AboutPage from "../AboutPage/AboutPage";
import RetroAboutPage from "../AboutPage/RetroAbout";
import EditorialAbout from "../AboutPage/EditorialAbout";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/AboutPage";

const variants = [
  { name: "AboutPage", label: "Modern", component: AboutPage, githubUrl: GH },
  { name: "RetroAboutPage", label: "Retro", component: RetroAboutPage, githubUrl: GH },
  { name: "EditorialAbout", label: "Editorial", component: EditorialAbout, githubUrl: GH },
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
