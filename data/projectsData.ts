interface Project {
	title: string;
	description: string;
	href?: string;
	imgSrc?: string;
}

const projectsData: Project[] = [
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
