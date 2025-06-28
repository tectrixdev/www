import Card from "@/components/card";
import Content from "@/components/blog_content";
import Tagline from "@/components/tagline";
import Divider from "@/components/divider";
import React from "react";
import fs from "fs";
import path from "path";
import Navbar from "@/components/navbar";

const postsDirectory = path.join(process.cwd(), "content");
const postFiles = fs.readdirSync(postsDirectory);

interface BlogPost {
  url: string;
  id: number;
  title: string;
  summary: string;
  image: string;
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
      image: metadata.image,
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
      <Navbar
        items={[
          { label: "Home", url: "/" },
          { label: "About", url: "/about" },
        ]}
      />
      <Content>
        <div
          id="cards"
          className="mx-auto flex flex-col justify-center gap-10 lg:grid lg:grid-cols-2"
        >
          {blogPosts.map((post) => (
            <Card
              title={post.title}
              description={`${post.summary} - ${post.date}`}
              button="view post"
              projectUrl={post.url}
              imageUrl={`blog/${post.image}`}
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
