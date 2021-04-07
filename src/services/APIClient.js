import axios from "axios";

let config = {
    baseURL: "https://localhost:5001/api/"
};

axios.defaults.headers.post['Content-Type'] = 'application/json';
const httpClient = axios.create(config);


const authInterceptor = config => {
    return config;
};

const loggerInterceptor = config => {
    return config;
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

httpClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export { httpClient };