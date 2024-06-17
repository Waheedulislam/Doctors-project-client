import githubIcon from '../../../assets/image/github.png'
const GithubLogin = () => {
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