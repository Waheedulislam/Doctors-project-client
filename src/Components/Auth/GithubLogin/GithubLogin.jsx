// import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import githubIcon from '../../../assets/image/github.png'
// import auth from '../../Firebase/firebase.config';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
const GithubLogin = () => {

    // github login off

    // const [signInWithGithub, user] = useSignInWithGithub(auth);
    // const location = useLocation();
    // // const axiosPublic = useAxiosPublic();

    // const navigate = useNavigate();

    // const formLocation = location?.state?.from?.pathname || '/'
    // console.log(formLocation)

    // const handleSignInGithub = () => {
    //     signInWithGithub().then((data) => {
    //         console.log(data)
    //     })
    // }
    // useEffect(() => {
    //     if (user) {
    //         navigate(formLocation, { replace: true })
    //     }
    // }, [user, formLocation, navigate])
    // console.log(user)
    return (
        <div>
            <div className="mx-8 mt-6">
                <button className="  btn rounded-full border-teal-700 bg-white text-teal-700  border-2 hover:text-white hover:border-teal-700 hover:bg-teal-700 text-lg  w-full ">
                    <img className='w-10 h-10 ' src={githubIcon} alt="" />Login With Github</button>
            </div>
        </div>
    );
};

export default GithubLogin;