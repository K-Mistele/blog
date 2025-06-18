import Card from "@/components/Card";
import projectsData from "@/data/projectsData";
import siteMetadata from "@/data/siteMetadata";
import type { Metadata } from "next";

const title = "Kyle's Projects";
const description = "Kyle Mistele's Projects";
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

export default function Projects() {
	return (
		<>
			<div className="divide-y divide-gray-200 dark:divide-gray-700">
				<div className="space-y-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
						Projects
					</h1>
					<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
						Neat things I've worked on and built. Check them out!
					</p>
				</div>
				<div className="container py-12">
					<div className="-m-4 flex flex-wrap">
						{projectsData.map((d) => (
							<Card
								key={d.title}
								title={d.title}
								description={d.description}
								imgSrc={d.imgSrc}
								href={d.href}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
