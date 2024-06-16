import githubIcon from '../../../assets/image/github.png'
const GithubLogin = () => {
    return (
        <div>
            <div className="mx-8 mt-6">
                <button className="btn btn-outline w-full text-white btn-primary"><img className='w-10 h-10' src={githubIcon} alt="" />Login With Github</button>
            </div>
        </div>
    );
};

export default GithubLogin;