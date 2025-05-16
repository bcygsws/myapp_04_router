import axios from 'axios';
import {API_KEY} from "./constant.tsx";

const $http = axios.create({
    baseURL: 'https://n63p3xwu98.re.qweatherapi.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
$http.interceptors.request.use((config) => {
    config.headers['X-QW-Api-Key'] = API_KEY;
    console.log('请求拦截器');
    return config;
}, (error) => {
    console.log("error", error);
    return Promise.reject(error);
})

$http.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error);
})

export default $http;
