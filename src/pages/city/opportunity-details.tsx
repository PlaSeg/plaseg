import { Link, useParams } from "react-router";
import { opportunities } from "@/mocks/opportunities";
import { OpportunityDetailsOverview } from "@/components/city/opportunities/opportunity-details-overview";
import { Button } from "@/components/ui/button";

export default function OpportunityDetails() {
	const { slug } = useParams<{ slug: string }>();

	const opportunity = opportunities.find((opp) => opp.slug === slug);

	if (!opportunity) {
		return (
			<div className="container mx-auto py-8">
				<h1 className="text-2xl font-bold text-red-600">
					Oportunidade não encontrada
				</h1>
			</div>
		);
	}

	return (
		<div className="w-full flex">
			<OpportunityDetailsOverview opportunity={opportunity} />

			<div className="p-6 w-full">
				<div className="p-6 flex flex-col gap-6 rounded-2xl border border-muted bg-white">
					<div className="w-full flex items-start justify-between">
						<div className="flex flex-col gap-1">
							<h1 className="text-3xl leading-snug font-medium">
								{opportunity.title}
							</h1>

							<span className="text-muted-foreground">
								{opportunity.organization}
							</span>
						</div>

						<div className="flex items-center gap-4">
							<Button variant="outline" className="w-[100px]">
								<Link to="/municipio/oportunidades">Cancelar</Link>
							</Button>

							<Button
								className="bg-dark hover:bg-dark/90 text-primary-foreground transition-colors
							w-[100px]"
							>
								Participar
							</Button>
						</div>
					</div>

					<div className="flex flex-col gap-1">
						<strong className="font-medium">Descrição</strong>
						<p className="text-muted-foreground">
							Este edital tem como objetivo fortalecer a segurança pública em
							âmbito municipal por meio da capacitação contínua da Guarda
							Municipal e da aquisição de equipamentos modernos. O programa
							busca melhorar a infraestrutura de segurança nas cidades,
							promovendo a formação de agentes para lidar com situações de risco
							e a implementação de tecnologias que auxiliem na prevenção e
							combate à criminalidade. Além disso, visa fomentar a integração
							entre as forças de segurança locais e a comunidade, incentivando a
							criação de políticas públicas que priorizem a proteção e o
							bem-estar da população. Podem participar municípios que apresentem
							projetos alinhados aos objetivos do edital e que atendam aos
							critérios de elegibilidade estabelecidos pela Secretaria Nacional
							de Segurança Pública (SENASP).
						</p>
					</div>

					<div className="flex flex-col gap-1">
						<strong className="font-medium">Documentação Obrigatória</strong>
						<ul className="list-disc pl-5 space-y-4">
							<li>
								Cópia do CNPJ do município
								<p className="text-muted-foreground text-sm">
									Documento que comprova a regularidade cadastral do município
									proponente.
								</p>
							</li>
							<li>
								Plano de Trabalho detalhado
								<p className="text-muted-foreground text-sm">
									Documento contendo a descrição do projeto, objetivos, metas,
									cronograma e orçamento detalhado.
								</p>
							</li>
							<li>
								Comprovante de regularidade fiscal
								<p className="text-muted-foreground text-sm">
									Certidões negativas de débitos (CND) municipais, estaduais e
									federais, demonstrando que o município está adimplente.
								</p>
							</li>
							<li>
								Declaração de contrapartida
								<p className="text-muted-foreground text-sm">
									Documento assinado pelo representante legal do município,
									atestando a disponibilidade de recursos para a contrapartida
									exigida no edital.
								</p>
							</li>
							<li>
								Cópia do RG e CPF do responsável legal
								<p className="text-muted-foreground text-sm">
									Documentos de identificação do prefeito ou representante legal
									do município que assinará o termo de adesão ao programa.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
