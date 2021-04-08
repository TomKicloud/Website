import axios from "axios";

let config = {
    baseURL: "https://localhost:5001/api/"
};

axios.defaults.headers.post['Content-Type'] = 'application/json';
const httpClient = axios.create(config);


const authInterceptor = config => {
    config.headers = {
        'Authorization': `Bearer ${window.getCookie("jwt")}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    return config;
};

const loggerInterceptor = config => {
    return config;
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

window.getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

export { httpClient };