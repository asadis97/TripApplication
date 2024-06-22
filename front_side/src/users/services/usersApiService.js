import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL ;

export const logIn = async (user) => {
    try {
        const { data } = await axios.post(`${apiUrl}/user/login`, user);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export const getUsers = async () => {
    try {
        const { data } = await axios.get(`${apiUrl}/user`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export const logOut = async (user) => {
    try {
        const { data } = await axios.get(`${apiUrl}/user/logout`, user);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export const deleteUser = async (userId) => {
    try {
        const { data } = await axios.get(`${apiUrl}/user/${userId}`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export const signup = async (user) => {
    try {
      const { data } = await axios.post(`${apiUrl}/user`, user);
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
};

