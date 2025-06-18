import siteMetadata from "@/data/siteMetadata";
import ListLayout from "@/layouts/ListLayout";
import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer";

const title = "Kyle's Blog";
const description = "All posts from Kyle, sorted by date.";
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

const POSTS_PER_PAGE = 5;

export default function Page() {
	const posts = allCoreContent(sortPosts(allBlogs));
	const pageNumber = 1;
	const initialDisplayPosts = posts.slice(
		POSTS_PER_PAGE * (pageNumber - 1),
		POSTS_PER_PAGE * pageNumber,
	);
	const pagination = {
		currentPage: pageNumber,
		totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
	};

	return (
		<ListLayout
			posts={posts}
			initialDisplayPosts={initialDisplayPosts}
			pagination={pagination}
			title="All Posts"
		/>
	);
}
