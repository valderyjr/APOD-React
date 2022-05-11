import React from 'react';
import classNames from 'classnames';
import style from './Button.module.scss'

interface Props {
	nome: String;
	margem?: boolean
}

const Button = ({nome, margem}: Props) => {
	return (
		<button type='button' className={classNames({
			[style.button]: true,
			[style['button--margem']]: margem === true
		})}>
			{nome}
		</button>
	)
}

export default Button