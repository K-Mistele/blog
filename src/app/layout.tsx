import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
	// Define your metadata here
	// For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
	title: "Kyle's Blog",
	description: "Thoughts on software engineering, AI, and cybersecurity.",
	icons: {
		icon: "/thought-balloon.png",
	},
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
	<Navbar
		logo={<b>Kyle&apos;s Blog</b>}

		// ... Your additional navbar options
	/>
);
const footer = <Footer> {new Date().getFullYear()} © Kyle Mistele.</Footer>;

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			// Not required, but good for SEO
			lang="en"
			// Required to be set
			dir="ltr"
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning
		>
			<Head
			// ... Your additional head options
			>
				{/* Your additional tags should be passed as `children` of `<Head>` element */}
			</Head>
			<body>
				<Layout
					// banner={banner}
					navbar={navbar}
					pageMap={await getPageMap()}
					docsRepositoryBase="https://github.com/k-mistele/blog/tree/main"
					footer={footer}
					// ... Your additional layout options
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
