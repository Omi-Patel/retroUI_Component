import { PageShowcasePage } from "../../components/showcase";
import RetroAuthPage from "../AuthPage/RetroAuthPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/AuthPage";

const variants = [
  { name: "RetroAuthPage", label: "Clubhouse", component: RetroAuthPage, githubUrl: GH },
];

export default function AuthPageShowcase() {
  return (
    <PageShowcasePage
      slug="auth"
      title="Auth Page"
      description="Full-page sign-in / sign-up flow with switch toggle, social login, and that vintage members-only vibe."
      variants={variants}
    />
  );
}
