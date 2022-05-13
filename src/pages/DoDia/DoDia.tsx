import { useEffect, useState } from 'react';
import style from './DoDia.module.scss';
import { getCurrentDay } from '../../services/data'
import { IDados } from '../../interface/IDados';
import ExibeDados from '../../components/ExibeDados';

const PaginaDoDia = () => {
	console.log('oi')
	const [dados, setDados] = useState<IDados>();
	const [loading, setLoading] = useState(false)

	useEffect( () => {
		const obtemDados = async () => {
			setLoading(true)
			const dados = await getCurrentDay();
			if (!(dados instanceof Error)) {
				setDados(dados)
			}
			setLoading(false)
		}
		obtemDados();
	}, [])

	return (
		<main className={style.container}>

			{loading && (
				<div className={style.loading}>
					<h3>🌎</h3>
					<h5>Carregando..</h5>
				</div>
			)}
	
		{dados && <ExibeDados dados={dados}/>}
		
		</main>
	)
}

export default PaginaDoDia