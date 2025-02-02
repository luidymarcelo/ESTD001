import axios from 'axios';
/*import { inAxios } from "../config_axios";*/

export const inAxios = axios.create({baseURL: 'http://localhost:3001/'})