import axios, {AxiosInstance} from "axios";


const axios_instance: () => AxiosInstance = () => {

    return axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
    });
}


export {axios_instance}