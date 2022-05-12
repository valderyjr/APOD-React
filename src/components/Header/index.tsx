import Logo from 'assets/logo.png'
import style from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
	const rotas = [
		{
			label: 'Início',
			to: '/'
		},
		{
			label: 'Foto do dia',
			to: '/dia'
		},
		{
			label: 'Escolha uma data',
			to: '/data'
		}
	]
	return (
		<header className={style.cabecalho}>
			<img src={Logo} alt="Logo da APOD" className={style.cabecalho__logo}/>
			<nav className={style.cabecalho__menu}>
				{rotas.map((rota, index) => {
					return (
						<Link key= {index} to={rota.to} className={style.menu__item}>{rota.label}</Link>	
					)
				})}
			</nav>
		</header>
	)
}

export default Header