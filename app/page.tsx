import siteMetadata from "@/data/siteMetadata";
import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer";
import Main from "./Main";

const title = "Kyle's Blog";
const description = "Musings on engineering, cybersecurity and AI.";
const imageUrl = `${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent(title)}`;

export const metadata: Metadata = {
	title: title,
	description: description,
	openGraph: {
		title: title,
		description: description,
		images: [
			{
				url: imageUrl,
				width: 1200,
				height: 630,
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: title,
		description: description,
		images: [imageUrl],
	},
};

export default async function Page() {
	const sortedPosts = sortPosts(allBlogs);
	const posts = allCoreContent(sortedPosts);
	return <Main posts={posts} />;
}
