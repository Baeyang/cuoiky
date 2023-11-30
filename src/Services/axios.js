import axios from 'axios';
const api = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 30000,
    headers: {
    'Content-Type' : 'application/json',
}
});
api.interceptors.request.use(async function (config) {
    // Do something before request is sent
    const token = await localStorage.getItem('access_token');
    if(token !== null && token !== undefined){
        config.headers.Authorization = 'Bearer ' + token;
        console.log(config.headers.Authorization)
    }
    return config;
}, async function (error) {
    // Do something with request error
    return await Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(async function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return await response.data;
},async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return await Promise.reject(error);
});
export default api;