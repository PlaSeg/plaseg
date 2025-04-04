export function formatDocument(numero: string): string {
	// Remove qualquer caractere que não seja número
	const numerosLimpos = numero.replace(/\D/g, "");

	// Verifica se tem 11 dígitos
	if (numerosLimpos.length !== 11) {
		throw new Error("O número deve conter exatamente 11 dígitos");
	}

	// Formata no padrão XXX.XXX.XXX-XX
	return numerosLimpos.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
