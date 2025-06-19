import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

async function loadGoogleFont(font: string, text: string, weight: number) {
	const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
	const css = await (await fetch(url)).text();
	const resource = css.match(
		/src: url\((.+)\) format\('(opentype|truetype)'\)/,
	);

	if (resource) {
		const response = await fetch(resource[1]);
		if (response.status == 200) {
			return await response.arrayBuffer();
		}
	}

	throw new Error("failed to load font data");
}

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl;
	const postTitle = searchParams.get("title") || " "; // Use a space for the default title
	const name = "Kyle Mistele";
	const blogSite = "blacklight.sh";
	return new ImageResponse(
		<div
			style={{
				backgroundColor: "black",
				color: "white",
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				fontFamily: "Geist",
				position: "relative",
			}}
		>
			<div
				tw="flex flex-col flex-grow antialiased relative overflow-hidden m-[36px]"
				style={{}}
			>
				<div tw="flex flex-col mb-36">
					<div tw="text-[32px] font-extrabold">{name}</div>
					<div tw="text-[72px] text-purple-500 font-black">{blogSite}</div>
				</div>
				<div tw="text-[40px] text-white font-semibold">{postTitle}</div>
			</div>
		</div>,
		{
			fonts: [
				{
					name: "Inter",
					data: await loadGoogleFont("Geist", name, 800),
					style: "normal",
					weight: 800,
				},
				{
					name: "Inter",
					data: await loadGoogleFont("Geist", blogSite, 900),
					style: "normal",
					weight: 900,
				},
				{
					name: "Inter",
					data: await loadGoogleFont("Geist", postTitle, 600),
					style: "normal",
					weight: 600,
				},
			],
		},
	);
}
