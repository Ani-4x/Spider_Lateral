import axios from 'axios';

const url= 'http://localhost:7999'|| '0.0.0.0';

export const addUser = async (data) => {
    try {
        const response = await axios.post(`${url}/add`, data);
        console.log('User added successfully:', response.data);
    } catch (error) {
        console.log('Error with addUser API:', error.message);
    }
};
 