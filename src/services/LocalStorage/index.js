import { Authentication, System, Locales } from '@/constants';
import storage from '@/utils/storage';

export const getBearerToken = () => {
    return `Bearer ${getAccessToken()}`;
};

export const getAccessToken = () => {
    return storage.get({ key: Authentication.AccessToken });
};

export const setAccessToken = (accessToken) => {
    storage.set({ key: Authentication.AccessToken, data: accessToken });
};

export const getRefreshToken = () => {
    return storage.get({ key: Authentication.RefreshToken });
};

export const setRefreshToken = (refreshToken) => {
    storage.set({ key: Authentication.RefreshToken, data: refreshToken });
};

export const getExpiryIn = () => {
    return storage.get({ key: Authentication.ExpiryIn });
};

export const setExpiryIn = (expiryIn) => {
    storage.set({ key: Authentication.ExpiryIn, data: expiryIn });
};

export const getDeviceId = () => {
    return storage.get({ key: Authentication.DeviceId });
};

export const setDeviceId = (deviceId) => {
    storage.set({ key: Authentication.DeviceId, data: deviceId });
};

export const saveToken = (accessToken, refreshToken, expiryIn, deviceId = '') => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setExpiryIn(expiryIn);
    setDeviceId(deviceId);
};

export const destroySensitiveInfo = () => {
    storage.deleteItem({ key: Authentication.AccessToken });
    storage.deleteItem({ key: Authentication.RefreshToken });
    storage.deleteItem({ key: Authentication.ExpiryIn });
};

export const getLocale = () => {
    return storage.get({ key: System.Locale }) || Locales.EN;
};

export const setLocale = (locale) => {
    storage.set({ key: System.Locale, data: locale });
};
