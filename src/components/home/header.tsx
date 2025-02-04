import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export function NavLink({ children }: { children: string }) {
	return (
		<li className="hover:text-sky-500 hover:cursor-pointer hover:underline underline-offset-8">
			{children}
		</li>
	);
}

export function Header() {
	const navigate = useNavigate();

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

				<Button
					className="bg-button hover:bg-button/90 rounded-full w-[100px]"
					onClick={() => navigate("/entrar")}
				>
					Entrar
				</Button>
			</div>
		</div>
	);
}
