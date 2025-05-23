import { Button } from "@/components/ui/button";
import { Check, SquarePen } from "lucide-react";

export function ProjectSectionTopic() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Informações gerais</h2>

				<div className="flex items-center gap-2">
					<Button variant="outline">
						<Check />
						Aceitar sugestão
					</Button>

					<Button variant="outline" size="icon">
						<SquarePen />
					</Button>
				</div>
			</div>

			<p>
				No Brasil, a violência contra a mulher é uma triste realidade. Segundo o
				Atlas da Violência 2021, elaborado pelo IPEA (Instituto de Pesquisa
				Econômica Aplicada) em parceria com o Fórum Brasileiro de Segurança
				Pública, em 2019 foram registrados mais de 180 mil casos de violência
				doméstica e familiar contra a mulher, sendo que cerca de 85% das vítimas
				conheciam o agressor. A Lei Maria da Penha, criada em 2006, foi um marco
				na proteção dos direitos das mulheres no Brasil e tem como objetivo
				prevenir e combater a violência doméstica e familiar contra a mulher,
				além de garantir a punição dos agressores. Desde a sua criação, a lei já
				ajudou milhares de mulheres a denunciar seus agressores e a receber a
				proteção necessária.
				<br /> <br />
				As Guardas Municipais têm um importante papel na prevenção e combate à
				violência contra a mulher no Brasil. Em 2014, o Senado Federal aprovou o
				PLC 39/2014, que incluiu a Guarda Municipal no artigo 144 da
				Constituição Federal, como órgão de segurança pública. A partir dessa
				lei, as Guardas Municipais passaram a ter atribuições específicas na
				segurança pública, como a proteção de bens, serviços e instalações
				municipais, ações de prevenção primária à violência, entre outras. Com
				isso, as Guardas Municipais passaram a atuar cada vez mais na prevenção
				e combate à violência contra a mulher, oferecendo um atendimento
				humanizado, acolhedor e com enfoque nas particularidades do gênero
				feminino.
			</p>
		</div>
	);
}
