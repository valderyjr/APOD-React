import { useState } from "react";
import style from './EscolhaData.module.scss'

const EscolhaData = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	

	return (
		<main className = {style.container}>
			Oi
		</main>
	)
};

export default EscolhaData;