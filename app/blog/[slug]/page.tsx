export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);
  const mod = await import(`@/content/${slug}.mdx`);
  const metadata = mod.matter;
  console.log("page details:");
  console.log(metadata);
  return (
      <Post />
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;
