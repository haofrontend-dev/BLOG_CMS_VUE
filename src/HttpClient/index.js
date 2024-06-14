import axios from 'axios';
import queryString from 'query-string';
import { getBearerToken, getDeviceId } from '@/services/LocalStorage';
import AuthService from '@/services/AuthService'; // Assumed to be defined
import storage from '@/utils/storage';

class Http {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.VUE_BASE_PATH,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        this.axiosInstance.interceptors.request.use(this.handleRequest);
        this.axiosInstance.interceptors.response.use((response) => response, this.handleResponseError);
    }

    handleRequest = (config) => {
        const token = getBearerToken();
        const deviceId = getDeviceId();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (deviceId) {
            config.headers['Device-Id'] = deviceId;
        }
        return config;
    };

    handleResponseError = async (error) => {
        const status = error.response ? error.response.status : null;
        if (status === 401) {
            const refreshToken = storage.get({ key: 'refreshToken' });
            try {
                const { accessToken, refreshToken: newRefreshToken } = await AuthService.refresh(refreshToken);
                storage.set('accessToken', accessToken);
                storage.setItem('refreshToken', newRefreshToken);
                error.config.headers.Authorization = `Bearer ${accessToken}`;
                return this.axiosInstance(error.config);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        if (status === 403) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    };

    static getError(error) {
        if (error.code === 'ERR_CANCELED') {
            console.log('Request aborted:', error.message);
        } else if (error.response) {
            const { data, status, statusText } = error.response;
            throw data !== '' ? data : { message: `${status} ${statusText}` };
        } else {
            throw error;
        }
    }

    static getConfig(config) {
        const defaultConfig = {
            headers: {
                'Device-Id': getDeviceId(),
                Authorization: getBearerToken()
            }
        };

        if (!config) {
            return { ...defaultConfig };
        }

        const { headers, ...rest } = config;
        return {
            ...rest,
            headers: {
                ...defaultConfig.headers,
                ...headers
            }
        };
    }

    async get(url, queryParams, config) {
        try {
            if (queryParams) {
                const query = queryString.stringify(queryParams);
                url = url.indexOf('?') === -1 ? `${url}?${query}` : `${url}&${query}`;
            }
            const res = await this.axiosInstance.get(url, Http.getConfig(config));
            return res?.data;
        } catch (error) {
            Http.getError(error);
        }
    }

    async post(url, data, config) {
        try {
            const res = await this.axiosInstance.post(url, data, Http.getConfig(config));
            return res?.data;
        } catch (error) {
            Http.getError(error);
        }
    }

    async put(url, data, config) {
        try {
            const res = await this.axiosInstance.put(url, data, Http.getConfig(config));
            return res?.data;
        } catch (error) {
            Http.getError(error);
        }
    }

    async delete(url, config) {
        try {
            const res = await this.axiosInstance.delete(url, Http.getConfig(config));
            return res?.data;
        } catch (error) {
            Http.getError(error);
        }
    }
}

export default new Http();
