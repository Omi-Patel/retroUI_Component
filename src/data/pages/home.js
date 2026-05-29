import HomePage from "../../pagesComponents/HomePage/HomePage";
import RetroHomePage from "../../pagesComponents/HomePage/RetroHomePage";
import SimpleHomePage from "../../pagesComponents/HomePage/SimpleHomePage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/HomePage";

export default {
  slug: "home",
  title: "Home Page",
  description:
    "Marketing & landing page templates ready to fork in minutes — each ships with light + dark mode.",
  variants: [
    { name: "HomePage", label: "Modern", component: HomePage, githubUrl: GH },
    { name: "RetroHomePage", label: "Retro", component: RetroHomePage, githubUrl: GH },
    { name: "SimpleHomePage", label: "Simple", component: SimpleHomePage, githubUrl: GH },
  ],
};
