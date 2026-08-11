import axios from "axios";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "https://event-hub-server-sandy.vercel.app"
});

const useAxiosSecure = () => {

  return axiosSecure;
};

export default useAxiosSecure;