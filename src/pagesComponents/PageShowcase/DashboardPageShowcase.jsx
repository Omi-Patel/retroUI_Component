import { PageShowcasePage } from "../../components/showcase";
import DashboardPage from "../DashboardPage/DashboardPage";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/DashboardPage";

const variants = [
  { name: "DashboardPage", label: "Dashboard", component: DashboardPage, githubUrl: GH },
];

export default function DashboardPageShowcase() {
  return (
    <PageShowcasePage
      slug="dashboard"
      title="Dashboard"
      description="Admin dashboard and analytics interfaces."
      variants={variants}
    />
  );
}
