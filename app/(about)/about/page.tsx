import Tagline from "@/components/tagline";
import Divider from "@/components/divider";
import Navbar from "@/components/navbar";
import Content from "@/components/content";

export default function About() {
  return (
    <main>
      <Tagline line="About me" />
      <Navbar
        items={[
          { url: "/", label: "home" },
          { url: "/blog", label: "blog" },
        ]}
      />
      <Divider />
      <Content></Content>
    </main>
  );
}
