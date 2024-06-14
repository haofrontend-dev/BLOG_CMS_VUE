const storage = {
    get: ({ key }) => {
        try {
            const serializedData = localStorage.getItem(key);
            return serializedData ? JSON.parse(serializedData) : null;
        } catch (error) {
            console.error('Error getting data from localStorage:', error);
            return null;
        }
    },

    set: ({ key, data }) => {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem(key, serializedData);
        } catch (error) {
            console.error('Error setting data in localStorage:', error);
        }
    },

    deleteItem: ({ key }) => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error deleting data from localStorage:', error);
        }
    },

    deleteAll: () => {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error deleting all data from localStorage:', error);
        }
    }
};

export default storage;
