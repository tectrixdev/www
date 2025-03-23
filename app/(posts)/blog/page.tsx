import Card from "@/components/card";
import Content from "@/components/content";
import Tagline from "@/components/tagline";
import Divider from "@/components/divider";
import React from "react";
import fs from "fs";
import path from "path";
import GooeyNav from "@/components/GooeyNav";

const postsDirectory = path.join(process.cwd(), "content");
const postFiles = fs.readdirSync(postsDirectory);

interface BlogPost {
  url: string;
  id: number;
  title: string;
  summary: string;
  date: string;
}

const posts = await Promise.all(
  postFiles.map(async (file) => {
    const postSlug = file.replace(/\.mdx?$/, "");
    const mod = await import(`@/content/${postSlug}.mdx`);
    const metadata = mod.matter;
    return {
      url: `/blog/${postSlug}`,
      id: postFiles.indexOf(file),
      title: metadata.title,
      summary: metadata.sub,
      date: new Date(metadata.date).toLocaleDateString(),
    };
  }),
);

const blogPosts: BlogPost[] = [...posts];
console.log(blogPosts);

const BlogPage: React.FC = () => {
  return (
    <main>
      <Tagline line="Blog Posts" />
      <Divider />
      <Content>
        <div id="cards" className="grid gap-10 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              title={post.title}
              description={`${post.summary} - ${post.date}`}
              button="view post"
              projectUrl={post.url}
              imageUrl="scrollbg.webp"
              color={(post.id + 10) * 234}
              key={post.id}
            />
          ))}
        </div>
      </Content>
    </main>
  );
};

export default BlogPage;
