import React from 'react';
import classNames from 'classnames';
import style from './Button.module.scss'

interface Props {
	nome: string,
	type?: "button" | "submit" | "reset" | undefined
	margem?: boolean
}

const Button = ({nome, type, margem}: Props) => {
	return (
		<button type={type || 'button'} className={classNames({
			[style.button]: true,
			[style.button__margem]: margem === true
		})}>
			{nome}
		</button>
	)
}

export default Button