import api from "./axios";
const URL_API = 'http://26.134.194.89:8080/api/'
export const LoginAPI = async (values) => {
    try{
        return await api.post(URL_API + 'v1/auth/login', values);
    } catch (error) {
        throw Error(error);
    }
}

export const RegisterAPI = async (values) => {
    try{
        return await api.post(URL_API + 'v1/auth/register', values);
    } catch (error) {
        throw Error(error);
    }
}

export const getAllUsers = async () => {
    try{
        return await api.get(URL_API + 'users');
    } catch (error) {
        throw Error(error);
    }
}

export const addApartment = async (values) => {
    try{
        return await api.post(URL_API + 'apartments', values)
    } catch (error) {
        throw Error(error);
    }
}

export const getApartments = async () => {
    try{
        return await api.get(URL_API + 'home')
    } catch (error) {
        throw Error(error);
    }
}

export const getDetailApartment = async (id) => {
    try{
        return await api.get(URL_API + `home/${id}`)
    } catch (error) {
        throw Error(error);
    }
}

export const addRating = async (values) => {
    try{
        return await api.post(URL_API + 'surveys',values)
    } catch (error) {
        throw Error(error);
    }
}


export const getListRating = async () => {
    try{
        return await api.get(URL_API + 'surveys')
    } catch (error) {
        throw Error(error);
    }
}

