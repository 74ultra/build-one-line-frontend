import axios from 'axios';

export const apiAuth = () => {
    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token') 
        }
    })
}