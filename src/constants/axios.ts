import axios from 'axios';
import { API_URL } from './url';

export const FETCH_AXIOS = axios.create({
	baseURL: API_URL,
	timeout: 3000,
	withCredentials: true,
});
