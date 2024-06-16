// import emailIcon from '../../assets/image/email_icon.png'
// import passwordIcon from '../../assets/image/password_icon.png'
// import nameIcon from '../../assets/image/password_icon.png'

import { Link } from "react-router-dom";
import GithubLogin from "../Auth/GithubLogin/GithubLogin";
import GoogleLogin from "../Auth/GoogleLogin/GoogleLogin";

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-4xl font-bold text-center">Sign Up now...!</h1>

                            {/* Name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name"
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
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required />
                            </div>

                            {/* password  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="flex justify-center ">
                                <p className="font-semibold">Already have an account ?</p>
                                <Link to={'/login'} className="pr-52 font-bold hover:text-primary">Login </Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
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