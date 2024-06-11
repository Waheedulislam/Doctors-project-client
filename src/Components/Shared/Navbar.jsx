import { Link } from 'react-router-dom';
import doctorateIcon from "../../assets/image/doctor.png";
import calendarIcon from '../../assets/image/calendar.png'
const Navbar = () => {
    return (
        <div className='px-20 '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='btn btn-ghost' to={'/'}>Home</Link>
                            <Link className='btn btn-ghost' to={'/services'}>Services</Link>
                            <Link className='btn btn-ghost' to={'/about'}>About Us</Link>

                            <Link className='btn btn-ghost' to={'/contact'}>Contact</Link>
                            <div className='pl-4 flex'>
                                <Link className='btn btn-ghost' to={'/appointment'}>
                                    <img className='w-8' src={calendarIcon} alt="" />
                                    Appointment</Link>
                            </div>
                            {/* Sign in / sign up  */}
                            <div className='pl-4'>
                                <Link className='btn btn-ghost' to={'/Dashboard'}>Dashboard</Link>

                                <Link className='btn btn-ghost' to={'/login'}>Login</Link>
                                <Link className='btn btn-ghost' to={'/register'}>Register</Link>
                            </div>
                        </ul>
                    </div>
                    <Link to={'/'} className='flex pr-8'><img className='w-12' src={doctorateIcon} alt="" /> <h1 className='font-bold  pl-2 text-4xl'>
                        Doctorate</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex pl-10">
                    <ul className="menu menu-horizontal gap-1 px-1 ">
                        <Link className='btn btn-ghost text-lg' to={'/'}>Home</Link>
                        <Link className='btn btn-ghost text-lg' to={'/about'}>About Us</Link>
                        <Link className='btn btn-ghost text-lg' to={'/services'}>Services</Link>
                        <Link className='btn btn-ghost text-lg' to={'/Contact'}>Contact</Link>
                        <div>
                            <Link className='btn btn-ghost text-lg' to={'/appointment'}>
                                <img className='w-8' src={calendarIcon} alt="" />

                                Appointment</Link>
                        </div>

                        {/* Sign in / sign up  */}
                        <div className='pl-12'>
                            <Link className='btn btn-ghost text-lg' to={'/Dashboard'}>Dashboard</Link>

                            <Link className='btn btn-ghost text-lg' to={'/login'}>Login</Link>
                            <Link className='btn btn-ghost text-lg' to={'/register'}>Register</Link>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;