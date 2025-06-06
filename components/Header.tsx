import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import Link from "./Link";
import MobileNav from "./MobileNav";
import SearchButton from "./SearchButton";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
	let headerClass =
		"flex items-center w-full bg-white dark:bg-black justify-between py-10";
	if (siteMetadata.stickyNav) {
		headerClass += " sticky top-0 z-50";
	}

	return (
		<header className={headerClass}>
			<Link href="/" aria-label={siteMetadata.headerTitle}>
				<div className="flex flex-row items-center justify-between">
					<div className="mr-3 size-[32px] relative">
						<Image
							src={siteMetadata.siteLogo}
							alt={siteMetadata.headerTitle}
							fill={true}
						/>
					</div>
					<div className="text-2xl font-semibold sm:block">
						{siteMetadata.headerTitle}
					</div>
				</div>
			</Link>
			<div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
				<div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
					{headerNavLinks
						.filter((link) => link.href !== "/")
						.map((link) => (
							<Link
								key={link.title}
								href={link.href}
								className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
							>
								{link.title}
							</Link>
						))}
				</div>
				<SearchButton />
				<ThemeSwitch />
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
