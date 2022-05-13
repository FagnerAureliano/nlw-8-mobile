import axios from "axios";
export const api = axios.create({
    //verificar porta
    baseURL: 'http://172.30.21.162:3333'
})