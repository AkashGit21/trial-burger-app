import axios from 'axios';

const axiosInstance  = axios.create({
    baseURL: 'https://trial-burger-app.firebaseio.com/'
});

export default axiosInstance;