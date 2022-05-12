import { IDados } from "interface/IDados"
import style from './ExibeDados.module.scss'

interface Props {
	dados: IDados
}

const ExibeDados = ({dados}: Props) => {
	console.log(dados)
	return (
		<section className={style.secao}>
		
		<div className={style.secao__img}>
			{dados.media_type === 'image' &&
			<img src={dados?.url} className={style.img} alt='Imagem tirada pelo satélite da NASA no dia de hoje' />
			}
			{dados.media_type ==='video' &&
			<iframe src={dados?.url} frameBorder='0' className={style.video} title="Video gravado pelo satélite da NASA no dia de hoje." width='0'></iframe>
			}
		</div>
		<div className={style.secao__dados}>
			<h2 className={style.dados__titulo}>{dados?.title}</h2>
			<h5 className={style.dados__autor}>{dados?.copyright || 'Sem autor'}</h5>
			<div className={style.dados__explicacao}>
				<p className={style.explicacao}>{dados?.explanation}</p>
			</div>
		</div>
	</section>
	)
}

export default ExibeDados