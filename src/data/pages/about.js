import AboutPage from "../../pagesComponents/AboutPage/AboutPage";
import RetroAboutPage from "../../pagesComponents/AboutPage/RetroAbout";
import EditorialAbout from "../../pagesComponents/AboutPage/EditorialAbout";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/AboutPage";

export default {
  slug: "about",
  title: "About Page",
  description: "Company and project information page layouts.",
  variants: [
    { name: "AboutPage", label: "Modern", component: AboutPage, githubUrl: GH },
    { name: "RetroAboutPage", label: "Retro", component: RetroAboutPage, githubUrl: GH },
    { name: "EditorialAbout", label: "Editorial", component: EditorialAbout, githubUrl: GH },
  ],
};
