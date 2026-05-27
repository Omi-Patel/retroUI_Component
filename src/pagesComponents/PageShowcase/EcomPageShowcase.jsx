import { PageShowcasePage } from "../../components/showcase";
import ProductsPage from "../EcommercePage/ProducsPage";
import ModernProduct from "../EcommercePage/ModernProduct";
import BasicProductDesc from "../EcommercePage/BasicProductDesc";
import RetroDesc from "../EcommercePage/RetroDesc";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/EcommercePage";

const variants = [
  { name: "ProductsPage", label: "Products", component: ProductsPage, githubUrl: GH },
  { name: "ModernProduct", label: "Modern", component: ModernProduct, githubUrl: GH },
  { name: "BasicProductDesc", label: "Basic Desc", component: BasicProductDesc, githubUrl: GH },
  { name: "RetroDesc", label: "Retro Desc", component: RetroDesc, githubUrl: GH },
];

export default function EcomPageShowcase() {
  return (
    <PageShowcasePage
      slug="ecommerce"
      title="Ecommerce"
      description="Product listings and detail pages."
      variants={variants}
    />
  );
}
