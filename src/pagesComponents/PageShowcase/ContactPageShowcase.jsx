import { PageShowcasePage } from "../../components/showcase";
import ContactPage from "../ContactPage/ContactPage";
import RetroContactPage from "../ContactPage/RetroContactPage";
import SimpleContactPage from "../ContactPage/SimpleContactPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/ContactPage";

const variants = [
  { name: "ContactPage", label: "Modern", component: ContactPage, githubUrl: GH },
  { name: "RetroContactPage", label: "Retro", component: RetroContactPage, githubUrl: GH },
  { name: "SimpleContactPage", label: "Simple", component: SimpleContactPage, githubUrl: GH },
];

export default function ContactPageShowcase() {
  return (
    <PageShowcasePage
      slug="contact"
      title="Contact Page"
      description="Contact forms and information layouts."
      variants={variants}
    />
  );
}
