import { PageShowcasePage } from "../../components/showcase";
import BlogPage from "../BlogPage/BasicBlog";
import RetroBlogPage from "../BlogPage/RetroBlog";
import SimpleBlogPage from "../BlogPage/ModernBlog";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/BlogPage";

const variants = [
  { name: "BlogPage", label: "Basic", component: BlogPage, githubUrl: GH },
  { name: "RetroBlogPage", label: "Retro", component: RetroBlogPage, githubUrl: GH },
  { name: "SimpleBlogPage", label: "Modern", component: SimpleBlogPage, githubUrl: GH },
];

export default function BlogPageShowcase() {
  return (
    <PageShowcasePage
      slug="blog"
      title="Blog"
      description="Blog index and article layouts."
      variants={variants}
    />
  );
}
