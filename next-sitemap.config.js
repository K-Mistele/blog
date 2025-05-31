/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://blog.blacklight.sh",
	changefreq: "daily",
	priority: "0.5",
	generateIndexSitemap: false,
	generateRobotsTxt: true,
	exclude: ["/icon.svg"],
};
