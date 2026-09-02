import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Conteúdo" title="Do blog" />
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="group cursor-pointer p-6 rounded-2xl transition-colors duration-300 bg-white border border-line"
            >
              <span className="text-xs font-semibold font-sans tracking-wide uppercase text-gold">
                {post.tag}
              </span>
              <h3 className="font-display text-lg leading-snug my-4 text-ink font-medium">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium font-sans text-ink transition-transform duration-300 group-hover:translate-x-1">
                Ler artigo <ArrowUpRight size={15} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
