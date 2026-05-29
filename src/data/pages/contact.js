import ContactPage from "../../pagesComponents/ContactPage/ContactPage";
import RetroContactPage from "../../pagesComponents/ContactPage/RetroContactPage";
import SimpleContactPage from "../../pagesComponents/ContactPage/SimpleContactPage";
import TelegramContact from "../../pagesComponents/ContactPage/TelegramContact";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/ContactPage";

export default {
  slug: "contact",
  title: "Contact Page",
  description: "Contact forms and information layouts.",
  variants: [
    { name: "ContactPage", label: "Modern", component: ContactPage, githubUrl: GH },
    { name: "RetroContactPage", label: "Retro", component: RetroContactPage, githubUrl: GH },
    { name: "SimpleContactPage", label: "Simple", component: SimpleContactPage, githubUrl: GH },
    { name: "TelegramContact", label: "Telegram", component: TelegramContact, githubUrl: GH },
  ],
};
