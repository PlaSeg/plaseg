import { ForWho } from "@/components/home/for-who";
import { Header } from "@/components/home/header";
import { Main } from "@/components/home/main";
import { PublicSecurity } from "@/components/home/public-security";
import { WhatIs } from "@/components/home/what-is";

export function Home() {
	return (
		<main className="flex flex-col w-full h-screen">
			<Header />
			<Main />
			<PublicSecurity />
			<WhatIs />
			<ForWho />
		</main>
	);
}
