import { FormField } from "../form-field";

export function StepOne() {
	return (
		<div className="flex flex-col gap-6">
			<FormField
				type="text"
				id="nome_municipio"
				placeholder="Digite o nome do município"
				label="Nome do Município"
			/>

			<FormField
				type="text"
				id="codigo_ibge"
				placeholder="Digite o código IBGE"
				label="Código IBGE"
			/>

			<FormField
				type="text"
				id="unidade_federativa"
				placeholder="Digite a UF"
				label="Unidade Federativa (Estado – UF)"
			/>

			<FormField
				type="text"
				id="regiao_geografica"
				label="Região Geográfica"
				placeholder="Digite a Região Geográfica (Norte, Sul, Nordeste...)"
			/>

			<FormField
				type="number"
				id="populacao_estimada"
				label="População Estimada"
				placeholder="Digite a população estimada"
			/>

			<FormField
				type="text"
				id="area_total"
				placeholder="Digite a área total"
				label="Área Total (km²)"
			/>

			<FormField
				type="file"
				id="bandeira_municipio"
				placeholder="Faça o upload da Imagem da Bandeira"
				label="Bandeira Município"
			/>
		</div>
	);
}
