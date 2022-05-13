import { useEffect, useState } from "react";
import style from './EscolhaData.module.scss'
import Button from "../../components/Button";
import { DiaAtual, verificaErro } from "../../helpers/data";
import classNames from "classnames";
import { getOneDay } from "../../services/data";
import { IDados } from "../../interface/IDados";
import ExibeDados from "../../components/ExibeDados";

const EscolhaData = () => {
	const [data, setData] = useState<string>('');

	const [loading, setLoading] = useState(false);

	const [dadoEntrada, setDadoEntrada] = useState<string>('');

	const [dados, setDados] = useState<IDados>();

	const [erro, setErro] = useState<Error | null>();
	
	const currentDay = DiaAtual();


	const formSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		const erros = verificaErro(data)
		if (erros instanceof Error) {
			setErro(erros)
		} else {
			setErro(null)
			setDadoEntrada(data)
		}
	}

	useEffect(() => {
		const obtemDados = async () => {
			setLoading(true)
			const dados = await getOneDay(dadoEntrada);
			if (!(dados instanceof Error)) {
				setDados(dados)
				}
				setLoading(false)
			}
		obtemDados();
	}, [dadoEntrada])
	
	return (
		<main className = {style.container}>
			<form className={style.container__form} onSubmit={formSubmit}>
				<label htmlFor="data">Insira a data:</label>
				<input 
				type="date" 
				name="data" 
				id="data" 
				max={currentDay} 
				value={data} 
				onChange={evento => setData(evento.target.value)}
				required
				className={classNames({
					[style.input]: true,
					[style.input__erro]: erro
				})}
				/>
				{erro && 
					<h6 className={style.erro}>{erro.message}</h6>
				}
				<Button nome="Enviar" type="submit" />
			</form>

			
			{loading && (
				<div className={style.loading}>
					<h3>🌎</h3>
					<h5>Carregando..</h5>
				</div>
			)}

			{dados && <ExibeDados dados={dados}/>}
		</main>
	)
};

export default EscolhaData;