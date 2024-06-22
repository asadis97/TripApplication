import axios from "axios";
import { useEffect } from "react";
import { useUser } from "../users/providers/UserProvider";

const useAxios = () => {
  const { token } = useUser(); 

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token; 

    const requestInterceptor = axios.interceptors.request.use((data) => {
      return Promise.resolve(data);
    }, null);

    const responseInterceptor = axios.interceptors.response.use(
      null, 
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {

      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [token]); 
};

export default useAxios;