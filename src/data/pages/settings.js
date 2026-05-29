import RetroSettingsPage from "../../pagesComponents/SettingsPage/RetroSettingsPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/SettingsPage";

export default {
  slug: "settings",
  title: "Settings Page",
  description:
    "Full-page user settings with sidebar navigation, profile, security, notifications, billing, and danger zone.",
  variants: [
    { name: "RetroSettingsPage", label: "Retro", component: RetroSettingsPage, githubUrl: GH },
  ],
};
