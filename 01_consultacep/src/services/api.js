import axios from "axios";

/*
BaseURL
https://viacep.com.br/ws/

Rota
01548020/json
*/

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default api