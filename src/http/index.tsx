import axios from 'axios';

const http = axios.create({
	baseURL: 'https://api.nasa.gov/planetary/apod?api_key=NqBxvsgm294FLGzK7ObEtTrcOQKp1wSlyu64wYmH'
});

export default http;