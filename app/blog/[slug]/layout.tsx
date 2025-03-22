import { ReactNode } from "react";
import Content from "@/components/content";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  const { slug } = params;
  const mod = await import(`@/content/${slug}.mdx`);
  const metadata = mod.matter;

  return (
    <Content>
      <title>{metadata.title}</title>
      {children}
    </Content>
  );
}
