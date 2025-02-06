import { Link } from "react-router";
import { Button } from "../ui/button";

export function NavLink({ children }: { children: string }) {
	return (
		<li className="hover:text-blue-500 hover:cursor-pointer transition-colors duration-200">
			{children}
		</li>
	);
}

export function Header() {
	return (
		<div className="bg-dark text-white w-full py-4 px-4">
			<div className="w-[1200px] mx-auto flex justify-between items-center py-4">
				<strong className="text-2xl">PlaSeg</strong>

				<nav>
					<ul className="flex space-x-8">
						<NavLink>Home</NavLink>
						<NavLink>O que é PlaSeg?</NavLink>
						<NavLink>Para quem</NavLink>
						<NavLink>Como funciona</NavLink>
						<NavLink>Planos</NavLink>
						<NavLink>Por que escolher</NavLink>
						<NavLink>Fale Conosco</NavLink>
					</ul>
				</nav>

				<Link to={"/entrar"}>
					<Button className="font-bold px-8 rounded-full">Entrar</Button>
				</Link>
			</div>
		</div>
	);
}
