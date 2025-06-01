import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
	contentDirBasePath: "/",
	defaultShowCopyCode: true,
	codeHighlight: true,
	latex: true,
	search: true,
	readingTime: true,
	mdxOptions: {
		rehypePrettyCodeOptions: {},
		recmaPlugins: [],
		remarkPlugins: [],
	},

	// ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
	// ... Add regular Next.js options here
	turbo: {
		resolveAlias: {
			"next-mdx-import-source-file": "./src/mdx-components.tsx",
		},
	},
	output: "export",
	images: {
		unoptimized: true,
	},
});
