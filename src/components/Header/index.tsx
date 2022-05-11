import Logo from 'assets/logo.png'
import style from './Header.module.scss'

const Header = () => {
	return (
		<header className={style.cabecalho}>
			<img src={Logo} alt="Logo da APOD" className={style.cabecalho__logo}/>
			<nav className={style.cabecalho__menu}>
				<a href="/" className={style.menu__item}>Início</a>
				<a href="/" className={style.menu__item}>Foto do Dia</a>
				<a href="/" className={style.menu__item}>Escolha uma data</a>
			</nav>
		</header>
	)
}

export default Header