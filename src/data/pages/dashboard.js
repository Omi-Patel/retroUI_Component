import DashboardPage from "../../pagesComponents/DashboardPage/DashboardPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/DashboardPage";

export default {
  slug: "dashboard",
  title: "Dashboard",
  description: "Admin dashboard and analytics interfaces.",
  variants: [
    { name: "DashboardPage", label: "Dashboard", component: DashboardPage, githubUrl: GH },
  ],
};
