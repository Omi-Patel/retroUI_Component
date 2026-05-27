import { PageShowcasePage } from "../../components/showcase";
import RetroSettingsPage from "../SettingsPage/RetroSettingsPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/SettingsPage";

const variants = [
  { name: "RetroSettingsPage", label: "Retro", component: RetroSettingsPage, githubUrl: GH },
];

export default function SettingsPageShowcase() {
  return (
    <PageShowcasePage
      slug="settings"
      title="Settings Page"
      description="Full-page user settings with sidebar navigation, profile, security, notifications, billing, and danger zone."
      variants={variants}
    />
  );
}
