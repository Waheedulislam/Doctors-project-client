import { Link, useLocation, useNavigate } from "react-router-dom";
import GithubLogin from "../Auth/GithubLogin/GithubLogin";
import GoogleLogin from "../Auth/GoogleLogin/GoogleLogin";
import auth from "../Firebase/firebase.config";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Reset password
    const [email, setEmail] = useState('');

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const from = location?.state?.from?.pathname || '/'

    const handleWithSingIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setLoginError('Password should be at least 6 characters');
            return;
        }// password upper case check
        else if (!/[A-Z]/.test(password)) {
            setLoginError('Error: Password should have at least One Upper case characters')
            return;
        }
        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [navigate, user, from])

    const handleResetPassword = async () => {
        const success = await sendPasswordResetEmail(
            email
        );

        if (success) {
            alert('Please Check your email.')
            toast.success('Sent email.')
        }
    };
    return (
        <div>
            <div>

                <div className="hero min-h-screen ">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />

                        </div>
                        <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                            <form onSubmit={handleWithSingIn} className="card-body">
                                <h1 className="text-4xl font-bold text-center text-teal-700">Login now...!</h1>

                                {/* Email  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="input input-bordered"
                                        required />
                                </div>

                                {/* password  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative ">
                                        <input type={showPassword ? 'text' : "password"}//note: show password true hole 'text' are wrong hole 'password'
                                            name='password'
                                            placeholder="password"
                                            className="input input-bordered w-full"
                                            required />
                                        <span className="absolute pt-4  right-4" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash className="w-5 h-5"></FaEyeSlash> : <FaEye className="w-5 h-5" />
                                            }
                                        </span>
                                    </div>
                                </div>

                                <label className="label">
                                    <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                                {/* error massage  */}

                                {
                                    error && <p style={{ color: 'red' }} className="text-start font-semibold">{error?.message?.slice(10, 44)}</p>
                                }

                                {
                                    loginError && <p style={{ color: 'red' }} className="text-start ">{loginError}</p>
                                }

                                <div className="flex justify-center ">
                                    <p className="font-semibold">Do not have any account ?</p>
                                    <Link to={'/register'} className="mr-48 font-bold hover:text-teal-600">Register</Link>
                                </div>


                                <div className="form-control mt-6">
                                    <button type="submit" disabled={loading} className="btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg "> {loading ? 'Loading...' : 'Logins'}</button>
                                </div>
                            </form>
                            <div className="flex flex-col w-full">
                                <div className="divider divider-neutral mx-8">OR</div>
                            </div>
                            <div className="w-full mb-5">
                                <GoogleLogin></GoogleLogin>
                                <GithubLogin></GithubLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;