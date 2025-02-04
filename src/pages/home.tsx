import { Header } from "@/components/home/header";
import { Main } from "@/components/home/main";
import { PublicSecurity } from "@/components/home/public-security";

export function Home() {
	return (
		<main className="flex flex-col w-full h-screen">
			<Header />
			<Main />
			<PublicSecurity />
		</main>
	);
}
