import googleIcon from '../../../assets/image/google.png'
import auth from '../../Firebase/firebase.config';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
const GoogleLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const handleSignInGoogle = () => {
        signInWithGoogle()
    }
    console.log(user)
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