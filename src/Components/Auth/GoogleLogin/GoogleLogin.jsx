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
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
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