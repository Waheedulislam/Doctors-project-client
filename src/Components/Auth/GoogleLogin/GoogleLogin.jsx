import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../../assets/image/google.png'
import auth from '../../Firebase/firebase.config';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useEffect } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
const GoogleLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();

    const formLocation = location?.state?.from?.pathname || '/'
    console.log(formLocation)

    const handleSignInGoogle = () => {
        signInWithGoogle().then((data) => {
            console.log(data)
            if (data?.user?.email) {
                const userInfo = {
                    email: data?.user?.email,
                    name: data?.user?.displayName,
                    photoURL: data?.user?.photoURL,
                }
                // Send user Database
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        // Get Token and store Client site
                        const userEmail = { email: userInfo?.email };
                        if (res?.data) {
                            axiosPublic.post('/jwt', userEmail)
                                .then((res) => {
                                    console.log("JWT response: ", res);
                                    if (res.data.token) {
                                        localStorage.setItem('access-token', res?.data?.token)
                                        console.log("Token set in localStorage: ", res?.data?.token);
                                    } else {
                                        console.log("Token not found in response")
                                    }
                                })
                        } else {
                            console.log("User already exists or not inserted");
                        }
                    })

            }

        })
    }
    useEffect(() => {
        if (user) {
            navigate(formLocation, { replace: true })
        }
    }, [user, formLocation, navigate])

    return (
        <div>
            <div className="mx-8 mt-6">
                <button onClick={handleSignInGoogle} className="btn rounded-full border-teal-700 bg-white text-teal-700  border-2 hover:text-white hover:border-teal-700 hover:bg-teal-700 text-lg  w-full ">
                    <img className='w-8 h-8 ' src={googleIcon} alt="" />Login With Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;