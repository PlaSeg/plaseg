import { Footer } from "@/components/home/footer";
import { ForWho } from "@/components/home/for-who";
import { HomeHeader } from "@/components/home/home-header";
import { HowItWorks } from "@/components/home/how-it-works";
import { Main } from "@/components/home/main";
import { Partners } from "@/components/home/partners";
import { Plans } from "@/components/home/plans";
import { PublicSecurity } from "@/components/home/public-security";
import { WhatIs } from "@/components/home/what-is";
import { Why } from "@/components/home/why";

export function Home() {
	return (
		<main className="flex flex-col w-full h-screen">
			<HomeHeader />
			<Main />
			<PublicSecurity />
			<WhatIs />
			<ForWho />
			<HowItWorks />
			<Plans />
			<Why />
			<Partners />
			<Footer />
		</main>
	);
}
