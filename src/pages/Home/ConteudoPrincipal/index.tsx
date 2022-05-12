import style from './ConteudoPrincipal.module.scss';
import imgExemplo from 'assets/imgExemplo.jpg';
import Button from 'components/Button'

const ConteudoPrincipal = () => {
	return (
		<>
			<section className={style.sobre}>
				<h2 className={style.titulo}>Sobre o projeto</h2>
				<div className={style.sobre__conteudo}>
					<div className={style.conteudo__img}>
						<img src={imgExemplo} alt="Imagem de exemplo tirada pela Nasa." />
					</div>
					<div className={style.conteudo__texto}>
						<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi similique ipsam nesciunt obcaecati voluptates ullam quos dignissimos minus optio natus qui sed asperiores quas laborum, nihil tempora aliquam? Nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur alias vel. Deserunt nam aspernatur ut incidunt quam unde quae repudiandae doloribus eius hic necessitatibus alias, molestias, dignissimos minima dolorem.
						</p>
					</div>
				</div>

				<Button nome = 'Quero ver mais'/> 
			</section>
		</>
	)
}

export default ConteudoPrincipal