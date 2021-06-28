import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";

let config = {
    baseURL: "https://api-dev-v5.garyportal.tomk.online/api/"
};

const httpClient = axios.create(config);

const loggerInterceptor = config => {
    return config;
};

httpClient.interceptors.request.use(loggerInterceptor);
httpClient.interceptors.response.use(response => response, error => {
    return Promise.reject(error);
});


class ApiClient {

  static get(url, authToken) {
    return httpClient.get(url, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${authToken ?? parseCookies().jwt}`
        }
    });
  }

  static post(url, body, authToken) {
    return httpClient.post(url, JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${authToken ?? parseCookies().jwt}`
      },
    });
  }
}

export default ApiClient;
