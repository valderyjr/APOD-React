import React from 'react';
import classNames from 'classnames';
import style from './Button.module.scss'

interface Props {
	nome: String;
}

const Button = ({nome}: Props) => {
	return (
		<button type='button' className={classNames({
			[style.button]: true
		})}>
			{nome}
		</button>
	)
}

export default Button