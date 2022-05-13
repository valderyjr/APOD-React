import { IDados } from '../interface/IDados';
import axios from "axios";
import { DiaAtual } from '../helpers/data';


export async function getCurrentDay() {
	try {
		const currentDay = DiaAtual();

		const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=NqBxvsgm294FLGzK7ObEtTrcOQKp1wSlyu64wYmH&date=${currentDay}`);

		const dados: IDados = response.data;
		return dados
	} catch (error) {
		return Error('Erro ao acessar a foto do dia.')
	}
}

export async function getOneDay(data: string) {
	try {
		if (data.length > 0) {
			const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=NqBxvsgm294FLGzK7ObEtTrcOQKp1wSlyu64wYmH&date=${data}`)
			const dados: IDados = response.data;
			return dados
		}

	} catch (error) {
		return Error('Erro interno.')
	}
}