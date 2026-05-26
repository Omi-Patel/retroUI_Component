import { PageShowcasePage } from "../../components/showcase";
import HomePage from "../HomePage/HomePage";
import RetroHomePage from "../HomePage/RetroHomePage";
import SimpleHomePage from "../HomePage/SimpleHomePage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/HomePage";

const variants = [
  { name: "HomePage", label: "Modern", component: HomePage, githubUrl: GH },
  { name: "RetroHomePage", label: "Retro", component: RetroHomePage, githubUrl: GH },
  { name: "SimpleHomePage", label: "Simple", component: SimpleHomePage, githubUrl: GH },
];

export default function HomePageShowcase() {
  return (
    <PageShowcasePage
      slug="home"
      title="Home Page"
      description="Marketing & landing page templates ready to fork in minutes — each ships with light + dark mode."
      variants={variants}
    />
  );
}
