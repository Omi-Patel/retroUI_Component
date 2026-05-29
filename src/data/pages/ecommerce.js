import ProductsPage from "../../pagesComponents/EcommercePage/ProducsPage";
import ModernProduct from "../../pagesComponents/EcommercePage/ModernProduct";
import BasicProductDesc from "../../pagesComponents/EcommercePage/BasicProductDesc";
import RetroDesc from "../../pagesComponents/EcommercePage/RetroDesc";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/EcommercePage";

export default {
  slug: "ecommerce",
  title: "Ecommerce",
  description: "Product listings and detail pages.",
  variants: [
    { name: "ProductsPage", label: "Products", component: ProductsPage, githubUrl: GH },
    { name: "ModernProduct", label: "Modern", component: ModernProduct, githubUrl: GH },
    { name: "BasicProductDesc", label: "Basic Desc", component: BasicProductDesc, githubUrl: GH },
    { name: "RetroDesc", label: "Retro Desc", component: RetroDesc, githubUrl: GH },
  ],
};
