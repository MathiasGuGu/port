import { Link } from "@tanstack/react-router";

const BlogItem = ({ post }: any) => {
  return (
    <Link params={{ slug: post.slug }} to="/blog/$slug" className="group">
      <div className="flex flex-col group-hover:bg-primary/10 gap-1 border-b border-border py-4 px-2">
        <p className="text-primary-light text-lg">{post.title}</p>
        <p className="text-muted-foreground">{post.description}</p>
      </div>
    </Link>
  );
};

export default BlogItem;
