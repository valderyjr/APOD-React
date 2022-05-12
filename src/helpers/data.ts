export function DiaAtual() {
	const data = new Date();
	let [dia, mes, ano] = [String(data.getDate()), (String(data.getMonth() + 1)), String(data.getFullYear())];
	dia = dia.padStart(2, '0');
	mes = mes.padStart(2, '0');
	return `${ano}-${mes}-${dia}`
}