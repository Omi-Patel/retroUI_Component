import { PageShowcasePage } from "../../components/showcase";
import ZinePage from "../ZinePage/ZinePage";

const GH =
  "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/ZinePage";

const variants = [
  { name: "ZinePage", label: "Magazine Spread", component: ZinePage, githubUrl: GH },
];

export default function ZinePageShowcase() {
  return (
    <PageShowcasePage
      slug="zine"
      title="Zine Page"
      description="Magazine-spread landing page built from the polaroid, sticky-note, receipt, and ticker components — a showcase of the full Zine Spread Pack in its natural habitat."
      variants={variants}
    />
  );
}
