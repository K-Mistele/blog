interface Project {
	title: string;
	description: string;
	href?: string;
	imgSrc?: string;
}

const projectsData: Project[] = [
	{
		title: "OpenSearch: TUI-Based Deep Research Agent",
		description:
			"A deep research agentic workflow built with Gemini 2.5 Pro and Flash, BoudaryML's BAML, Exa.ai's Search API and an Ink-based TUI.",
		href: "https://github.com/K-Mistele/opensearch",
		imgSrc: "/static/images/opensearch.png",
	},
	{
		title: "PostList: Port Monitor for MacOS",
		description:
			"A port monitor for MacOS that lives in your menu bar. View and track open ports and the processes using them. Great for tracking down those pesky Next.js dev servers.",
		href: "https://github.com/K-Mistele/portlist",
		imgSrc: "/static/images/port-monitor.png",
	},
	{
		title: "One Dollar OAuth",
		description:
			"The simple, secure and cheap way to connect your SaaS app or agent to all the integrations you need! Just $1 per app per month; unlimited users!",
		imgSrc: "/static/images/onedollaroauth.png",
		href: "https://onedollaroauth.com",
	},

	{
		title: "Voice Agent Platform",
		description: `The easiest way to build and deploy voice agents to answer phone calls. Built with Next.js, RabbitMQ, and Livekit, 
    featuring the best-available LLMs, TTS, SST, and EOU detection.`,
		imgSrc: "/static/images/voiceagent.png",
		href: "https://constellate.ai",
	},
	{
		title: "AgentSwarm",
		description: `An open-source implementation of OpenAI's Swarm framework in JavaScript; built with the Vercel AI SDK.
    Powerful, flexible, and easy to use.`,
		imgSrc: "/static/images/bees.webp",
		href: "https://npmjs.com/package/agentswarm",
	},
	{
		title: "vLLM Tool Calling",
		description: `I implemented vLLM's tool-calling support for open-source models, including the world's first tool streaming 
		parser that translates tool calls from open source models' arbitrary formats to OpenAI's JSON format on the fly in a stream.`,
		imgSrc: "/static/images/vllm.png",
		href: "https://docs.vllm.ai/en/latest/features/tool_calling.html",
	},
	{
		title: "Zelus Wallet",
		description: `A secure, private, and easy-to-use crypto wallet for iOS and Android. I built the core backend systems and 
		the cloud powering the app.`,
		href: "https://apps.apple.com/us/app/zelus-wallet-nfts-crypto/id1588430343",
		imgSrc: "/static/images/zelus.png",
	},
];

export default projectsData;
