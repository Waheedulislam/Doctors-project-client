import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../../assets/image/google.png'
import auth from '../../Firebase/firebase.config';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useEffect } from 'react';
const GoogleLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const formLocation = location?.state?.form?.pathname || '/'
    const handleSignInGoogle = () => {
        signInWithGoogle()
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