import { useParams, useNavigate } from "react-router-dom";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "./blogData";

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  const prevPost = blogPosts[postIndex - 1];
  const nextPost = blogPosts[postIndex + 1];

  if (!post) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Button
          variant="ghost"
          className="mt-6 text-muted-foreground hover:text-foreground/80"
          onClick={() => navigate("/blog")}
        >
          Back to Blog
        </Button>
      </section>
    );
  }

  // Extract headings for TOC
  const headings = post.fullContent
    .filter((p) => p.startsWith("## "))
    .map((h) => h.replace("## ", ""));

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Back Button */}
        {/* <Button
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-muted-foreground/70 hover:bg-transparent"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button> */}

        <Badge className="mb-4">{post.category}</Badge>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* TOC */}
        {headings.length > 0 && (
          <div className="mb-10 rounded-xl border border-border/40 bg-card/60 p-6">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-muted-foreground">
              On this page
            </h3>
            <ul className="space-y-2 text-sm">
              {headings.map((heading, i) => (
                <li key={i}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(heading)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    {heading}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article */}
        <div className="
          rounded-2xl 
          border border-border/40 
          bg-gradient-to-br from-card/90 via-card/60 to-card/30
          backdrop-blur-sm
          p-8 md:p-10
          shadow-lg
        ">
          <article className="space-y-6 text-lg leading-relaxed text-foreground/90">
            {post.fullContent.map((content, index) => {
              if (content.startsWith("## ")) {
                const title = content.replace("## ", "");
                return (
                  <h2
                    key={index}
                    id={title}
                    className="text-2xl font-bold pt-6 scroll-mt-24"
                  >
                    {title}
                  </h2>
                );
              }

              return <p key={index}>{content}</p>;
            })}
          </article>
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-14 flex justify-between items-center border-t border-border/40 pt-8 text-sm">
          {prevPost ? (
            <button
              onClick={() => navigate(`/blog/${prevPost.slug}`)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
            >
              <ArrowLeft className="h-4 w-4" />
              {prevPost.title}
            </button>
          ) : <span />}

          {nextPost && (
            <button
              onClick={() => navigate(`/blog/${nextPost.slug}`)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
            >
              {nextPost.title}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
