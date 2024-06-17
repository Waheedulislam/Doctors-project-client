import { Link } from 'react-router-dom';
import doctorateIcon from "../../assets/image/doctor.png";
import calendarIcon from '../../assets/image/calendar.png'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.config';
import userPhoto from '../../assets/image/user-profile-icon-free-vector.jpg'
import { toast } from 'react-toastify';
const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const handleSignOut = () => {
        const successSignOut = signOut();
        if (successSignOut) {
            alert('Do you want to logout...?')
            toast.success('Successfully Logout')

        }
    }
    return (
        <div className='px-20 '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='btn btn-ghost text-lg' to={'/'}>Home</Link>
                            <Link className='btn btn-ghost text-lg' to={'/about'}>About Us</Link>
                            <Link className='btn btn-ghost text-lg' to={'/doctors'}>Doctors</Link>

                            <Link className='btn btn-ghost text-lg' to={'/Services'}> Services</Link>
                            {/* Sign in / sign up  */}
                            {
                                !user?.email ?
                                    <>

                                        <Link className='btn btn-ghost mx-2 rounded-full btn-primary btn-outline ' to={'/login'}>Login</Link>
                                        <Link className='btn btn-ghost rounded-full mt-2 btn-primary btn-outline ml-2' to={'/register'}>Register</Link>

                                    </> :
                                    <>
                                        <div className=" gap-4 justify-center">
                                            <Link className='btn btn-ghost text-lg' to={'/Dashboard'}><img className='w-8 h-8' src={calendarIcon} alt="" />Dashboard</Link>

                                            <div className="avatar">
                                                <div className="w-12 mt-3 ml-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user?.photoURL || `${userPhoto}`} />                                            </div>
                                            </div>

                                        </div>
                                        <button className="btn mt-6 btn-error text-white rounded-full" onClick={handleSignOut}>Log Out</button>
                                    </>
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className='flex pr-8'><img className='w-12' src={doctorateIcon} alt="" /> <h1 className='font-bold  pl-2 text-4xl'>
                        Doctorate</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal gap-1 px-1 ">
                        <Link className='btn btn-ghost text-lg' to={'/'}>Home</Link>
                        <Link className='btn btn-ghost text-lg' to={'/about'}>About Us</Link>
                        <Link className='btn btn-ghost text-lg' to={'/doctors'}>Doctors</Link>
                        <Link className='btn btn-ghost text-lg' to={'/appointment'}>Services</Link>

                        {/* Sign in / sign up  */}
                        <div >
                            {!user?.email ?
                                <>

                                    <div className='pl-48'>
                                        <Link className='btn btn-ghost text-lg ' to={'/login'}>Login</Link>
                                        <Link className='btn btn-ghost text-lg' to={'/register'}>Register</Link>
                                    </div>
                                </> :
                                <>
                                    <div className="flex gap-4 justify-center pl-36">
                                        <Link className='btn btn-ghost text-lg' to={'/Dashboard'}><img className='w-8 h-8' src={calendarIcon} alt="" />Dashboard</Link>

                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user?.photoURL || `${userPhoto}`} />                                            </div>
                                        </div>
                                        <button className="btn btn-error text-white rounded-full" onClick={handleSignOut}>Log Out</button>
                                    </div>

                                </>
                            }
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;