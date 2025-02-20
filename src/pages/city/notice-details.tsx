import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
	CalendarDays,
	FileText,
	Tag,
	DollarSign,
	Globe,
	Users,
	CheckCircle,
} from "lucide-react";

export function NoticeDetails() {
	return (
		<div className="h-screen flex flex-col w-full">
			<header className="flex bg-white border-b p-4 pl-6">
				<h1 className="text-2xl font-bold">Plaseg</h1>
			</header>

			<div className="p-6 ">
				<div className="w-full">
					<div className="flex items-center justify-between pb-4">
						<h1 className="text-2xl font-bold text-gray-900">
							Fundo Global para Inovação em Educação
						</h1>
						<Button className="  font-bold">Inscreva-se</Button>
					</div>

					<p className="text-gray-600 text-lg font-semibold">
						Organização Internacional de Desenvolvimento Educacional
					</p>

					<Separator className="my-4" />

					<div className="flex flex-1 flex-col md:flex-row gap-6">
						<div className="md:w-1/3 space-y-6">
							<Card className="p-4">
								<CardContent className="space-y-3">
									<div className="text-center">
										<p className="text-gray-700 font-semibold">
											Prazo para submissão:
										</p>
										<p className="text-xl font-bold">15/03 - 40 dias</p>
										<div className="mt-3">
											<Button className="  font-bold w-full">
												Inscreva-se
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white p-4">
								<CardContent className="space-y-3">
									<div className="flex items-center space-x-2">
										<DollarSign className="w-5 h-5 text-gray-700" />
										<span className="text-gray-700">
											Valor do projeto: <strong>US$ 50.000,00</strong>
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<Tag className="w-5 h-5 text-gray-700" />
										<span className="text-gray-700">Categoria: Edital</span>
									</div>
									<div className="flex items-center space-x-2">
										<Globe className="w-5 h-5 text-gray-700" />
										<span className="text-gray-700">
											Áreas: Educação e Inovação
										</span>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Conteúdo principal */}
						<div className="md:w-2/3 space-y-6">
							<Card className="bg-white p-6">
								<CardContent>
									<h2 className="text-xl font-semibold text-gray-900">
										Objetivo
									</h2>
									<p className="text-gray-700">
										Apoiar projetos inovadores em educação para comunidades de
										baixa renda, promovendo acesso à tecnologia e metodologias
										de ensino modernas.
									</p>
								</CardContent>
							</Card>

							<Card className="bg-white p-6">
								<CardContent>
									<h2 className="text-xl font-semibold text-gray-900">
										Critérios de Elegibilidade
									</h2>
									<ul className="list-disc pl-5 text-gray-700 space-y-2">
										<li>
											Organizações sem fins lucrativos com foco em educação.
										</li>
										<li>
											Projetos alinhados com os Objetivos de Desenvolvimento
											Sustentável da ONU.
										</li>
										<li>
											Propostas que envolvam comunidades locais e tragam impacto
											mensurável.
										</li>
									</ul>
								</CardContent>
							</Card>

							<Card className="bg-white p-6">
								<CardContent>
									<h2 className="text-xl font-semibold text-gray-900">
										Benefícios para os Candidatos
									</h2>
									<ul className="list-disc pl-5 text-gray-700 space-y-2">
										<li>
											Suporte financeiro de até US$ 50.000,00 por projeto.
										</li>
										<li>
											Acompanhamento e mentoria por especialistas em educação.
										</li>
										<li>Oportunidade de networking com líderes do setor.</li>
									</ul>
								</CardContent>
							</Card>

							<Card className="bg-white p-6">
								<CardContent>
									<h2 className="text-xl font-semibold text-gray-900">
										Como se Inscrever
									</h2>
									<ol className="list-decimal pl-5 text-gray-700 space-y-2">
										<li>
											Baixe o formulário de inscrição e preencha todas as
											informações necessárias.
										</li>
										<li>
											Envie sua proposta com os documentos solicitados até a
											data limite.
										</li>
										<li>
											Aguarde a avaliação e acompanhe o status da sua
											candidatura online.
										</li>
									</ol>
								</CardContent>
							</Card>

							<Card className="bg-white p-6">
								<CardContent>
									<h2 className="text-xl font-semibold text-gray-900">
										Perguntas Frequentes
									</h2>
									<p className="text-gray-700">
										Para esclarecer dúvidas, consulte a seção de FAQ em nosso
										site ou entre em contato com nossa equipe de suporte.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
