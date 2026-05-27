import { PageShowcasePage } from "../../components/showcase";
import ServicePage from "../ServicePage/ServicePage";
import MenuServices from "../ServicePage/MenuServices";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/ServicePage";

const variants = [
  { name: "ServicePage", label: "Service", component: ServicePage, githubUrl: GH },
  { name: "MenuServices", label: "Menu", component: MenuServices, githubUrl: GH },
];

export default function ServicePageShowcase() {
  return (
    <PageShowcasePage
      slug="service"
      title="Service Page"
      description="Showcase services and features with a clean, retro-flavored layout."
      variants={variants}
    />
  );
}
