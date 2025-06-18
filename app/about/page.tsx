import siteMetadata from "@/data/siteMetadata";
import AuthorLayout from "@/layouts/AuthorLayout";
import { type Authors, allAuthors } from "contentlayer/generated";
import type { Metadata } from "next";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import { coreContent } from "pliny/utils/contentlayer";

const title = "About me";
const description = "More about Kyle Mistele.";
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

export default function Page() {
	const author = allAuthors.find((p) => p.slug === "default") as Authors;
	const mainContent = coreContent(author);

	return (
		<AuthorLayout content={mainContent}>
			<MDXLayoutRenderer code={author.body.code} />
		</AuthorLayout>
	);
}
