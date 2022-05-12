export function DiaAtual(): string {
	const data = new Date();
	let [dia, mes, ano] = [String(data.getDate()), (String(data.getMonth() + 1)), String(data.getFullYear())];
	dia = dia.padStart(2, '0');
	mes = mes.padStart(2, '0');
	return `${ano}-${mes}-${dia}`
}

export function verificaErro(dataInput: string) {
	const [ano, mes, dia] = dataInput.split('-')
	const mesNovo = Number(mes) - 1;

	const data = new Date(Number(ano), mesNovo, Number(dia))

	const dataMinima = new Date(1996, 5, 20).getTime();
	const dataAtual = data.getTime();

	if (dataAtual < dataMinima) {
		return new Error('A data mínima é a partir do dia 20 de junho de 1996');
	}

	return '';
}