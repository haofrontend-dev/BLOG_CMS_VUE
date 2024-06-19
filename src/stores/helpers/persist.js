/**
 * @description pinia
 * @param {String} key  name
 * @param {Array} paths  state name
 * @return persist
 * */
const piniaPersistConfig = (key, paths) => {
    const persist = {
        key,
        storage: localStorage,
        // storage: sessionStorage,
        paths
    };
    return persist;
};

export default piniaPersistConfig;
