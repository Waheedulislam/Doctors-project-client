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
                <button onClick={handleSignInGoogle} className="btn btn-outline w-full text-white btn-primary">
                    <img className='w-10 h-10' src={googleIcon} alt="" />Login With Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;