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

export const deleteUser = async (id) => {
    try{
        return await api.delete(URL_API + `users/${id}`);
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

export const getSuggest = async (values) => {
    try{
        return await api.post(URL_API + 'home/consulting', values)
    } catch (error) {
        throw Error(error);
    }
}

export const editApartment = async (id, values) => {
    try{
        return await api.put(URL_API + `apartments/${id}`, values)
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

export const getApartmentsbyUserID = async (userID) => {
    try{
        return await api.get(URL_API + `apartments/user/${userID}`)
    } catch (error) {
        throw Error(error);
    }
}

export const deleteApartment = async (id) => {
    try{
        return await api.delete(URL_API + `apartments/${id}`)
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


export const getAvgStar = async () => {
    try{
        return await api.get(URL_API + 'surveys/avg-star')
    } catch (error) {
        throw Error(error);
    }
}

export const getCountServey = async () => {
    try{
        return await api.get(URL_API + 'surveys/count-survey')
    } catch (error) {
        throw Error(error);
    }
}

export const getCountUser = async () => {
    try{
        return await api.get(URL_API + 'surveys/count-user')
    } catch (error) {
        throw Error(error);
    }
}
