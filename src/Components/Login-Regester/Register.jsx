// // import emailIcon from '../../assets/image/email_icon.png'
// // import passwordIcon from '../../assets/image/password_icon.png'
// // import nameIcon from '../../assets/image/password_icon.png'

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.config";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLogin from "../Auth/GoogleLogin/GoogleLogin";
import GithubLogin from "../Auth/GithubLogin/GithubLogin";


const Register = () => {

    // create user email and password 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // password show
    const [showPassword, setShowPassword] = useState(false);



    const location = useLocation();
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const formLocation = location?.state?.form?.pathname || '/';

    const handleWithSignUp = async (e) => {
        e.preventDefault();

        // reset error
        setRegisterError('');

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        // password length check error
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }// password upper case check
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Error: Password should have at least One Upper case characters')
            return;
        }
        createUserWithEmailAndPassword(email, password, name)

    }


    useEffect(() => {
        if (user) {
            navigate(formLocation, { replace: true });
        }
    }, [formLocation, user, navigate])

    console.log(error)
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleWithSignUp} className="card-body ">
                            <h1 className="text-4xl font-bold text-center text-teal-700">Sign Up now...!</h1>

                            {/* Name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required />
                            </div>

                            {/* Email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
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
                            {
                                error && <p style={{ color: 'red' }} className="text-start font-semibold">{error?.message?.slice(10, 44)}</p>
                            }
                            {
                                registerError && <p style={{ color: 'red' }} className="text-start ">{registerError}</p>
                            }
                            <div className="flex justify-center ">
                                <p className="font-semibold">Already have an account ?</p>
                                <Link to={'/login'} className="mr-52 font-bold hover:text-teal-600">Login </Link>
                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" disabled={loading} className="btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg "> {loading ? 'Loading...' : 'Register'}</button>
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
    );
};

export default Register;