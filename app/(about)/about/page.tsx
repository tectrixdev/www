import "@/app/(page)/blog/[slug]/blog.css";

export default async function Page() {
	const { default: Post } = await import(`./about.mdx`);
	return <Post />;
}
