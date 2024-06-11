export const fakePOSTFormResponse = (jsonObject) => {
    try {
        const jsonString = JSON.stringify(jsonObject);
        localStorage.setItem('feedback-form-response', jsonString);
        console.log('Data has been written to localStorage');
    } catch (error) {
        console.error('Error writing to localStorage:', error);
    }
};

export const readJsonFromLocalStorage = () => {
    try {
        const jsonString = localStorage.getItem('feedback-form-response');
        if (jsonString) {
            return JSON.parse(jsonString);
        }
        return null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
};
