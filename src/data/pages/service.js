import ServicePage from "../../pagesComponents/ServicePage/ServicePage";
import MenuServices from "../../pagesComponents/ServicePage/MenuServices";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/ServicePage";

export default {
  slug: "service",
  title: "Service Page",
  description: "Showcase services and features with a clean, retro-flavored layout.",
  variants: [
    { name: "ServicePage", label: "Service", component: ServicePage, githubUrl: GH },
    { name: "MenuServices", label: "Menu", component: MenuServices, githubUrl: GH },
  ],
};
