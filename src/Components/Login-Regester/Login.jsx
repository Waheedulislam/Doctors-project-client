import { Link } from "react-router-dom";
import GithubLogin from "../Auth/GithubLogin/GithubLogin";
import GoogleLogin from "../Auth/GoogleLogin/GoogleLogin";

const Login = () => {
    return (
        <div>

            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-4xl font-bold text-center">Login now...!</h1>

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
                                <div className="flex justify-center ">
                                    <p className="font-semibold">Do not have any account ?</p>
                                    <Link to={'/register'} className="pr-48 font-bold hover:text-primary">Register</Link>
                                </div>
                            </div>
                            <div className="form-control mt-3">
                                <button className='btn btn-primary'>Login</button>
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

export default Login;