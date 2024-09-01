import axios from 'axios';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.config';

const axiosSecure = axios.create({
    baseURL: 'https://doctors-project-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const [signOut] = useSignOut(auth);

    // Request interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })


    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {

        return response;
    }, async (error) => {
        console.log('interceptor error', status)
        // for 401 and 403 logout the user and move the user to the login page
        if (status === 401 || status === 403) {
            await signOut()
            navigate('/login')
            localStorage.removeItem('access-token');
        }
        return Promise.reject(error);
    });
    return axiosSecure
};

export default useAxiosSecure;