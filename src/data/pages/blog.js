import BlogPage from "../../pagesComponents/BlogPage/BasicBlog";
import RetroBlogPage from "../../pagesComponents/BlogPage/RetroBlog";
import SimpleBlogPage from "../../pagesComponents/BlogPage/ModernBlog";

const GH = "https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents/BlogPage";

export default {
  slug: "blog",
  title: "Blog",
  description: "Blog index and article layouts.",
  variants: [
    { name: "BlogPage", label: "Basic", component: BlogPage, githubUrl: GH },
    { name: "RetroBlogPage", label: "Retro", component: RetroBlogPage, githubUrl: GH },
    { name: "SimpleBlogPage", label: "Modern", component: SimpleBlogPage, githubUrl: GH },
  ],
};
