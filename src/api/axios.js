import axios from "axios";
import queryString from "query-string";

const AUTH_KEY = "lcdm_auth";

// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.paramsSerializer = (params) => queryString.stringify(params);

export const doFetch = async (method, url, config) => {
    const axiosConfig = {
        method,
        url: "/api" + url,
        headers: config.headers,
        timeout: 30000,
    };

    if (method === "get" && config?.params) axiosConfig.params = config.params;
    else if (method !== "get" && config?.params) axiosConfig.data = config.params;

    if (!axios.defaults.headers.common["Authorization"]) {
        const sessionToken = sessionStorage.getItem(AUTH_KEY);

        if (sessionToken) {
            const token = `Token ${sessionToken}`;
            if (axiosConfig.headers) axiosConfig.headers.authorization = token;
            else config.headers = { authorization: token };
        }
    }

    try {
        const { data } = await axios(axiosConfig);

        if (data.token) {
            sessionStorage.setItem(AUTH_KEY, data.token);
            axios.defaults.headers.common[
                "Authorization"
            ] = `Token ${data.token}`;
        }

        return data;
    } catch (e) {
        throw e;
    }
};