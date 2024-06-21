import { Link, NavLink } from "react-router-dom";
import doctorateIcon from "../../assets/image/doctor.png";
import calendarIcon from "../../assets/image/calendar.png";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.config";
import userPhoto from "../../assets/image/user-profile-icon-free-vector.jpg";
import { toast } from "react-toastify";
const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const handleSignOut = () => {
        const successSignOut = signOut();
        if (successSignOut) {
            alert("Do you want to logout...?");
            toast.success("Successfully Logout");
        }
    };
    return (
        <div className="px-20 ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li >
                                <details>
                                    <summary className="btn bg-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg">
                                        Home
                                    </summary>
                                    <ul className="p-2 mt-1 border-teal-700 border-2 rounded-xl">
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-teal-700  bg-base-100 text-lg border-none  hover:border-none hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                    : '  bg-white border-white border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                            } to={"/"}
                                        >
                                            Home 1
                                        </NavLink>
                                        <br />
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-teal-700  bg-base-100 text-lg border-none  hover:border-none hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                    : '  bg-white border-white border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                            } to={"homepage/homeTwo"}
                                        >
                                            Home 2
                                        </NavLink>
                                    </ul>
                                </details>
                            </li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-teal-700 bg-white text-lg btn  hover:bg-white border-2 hover:border-teal-700  border-teal-700 px-3 py-2 rounded-lg  font-medium'
                                        : 'btn  bg-white border-white border-2  hover:bg-white hover:border-teal-700 hover:text-teal-700 px-3 py-2 rounded-lg text-lg font-medium'
                                } to={"/about"}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-teal-700 bg-white text-lg btn  hover:bg-white border-2 hover:border-teal-700  border-teal-700 px-3 py-2 rounded-lg  font-medium'
                                        : 'btn  bg-white border-white border-2  hover:bg-white hover:border-teal-700 hover:text-teal-700 px-3 py-2 rounded-lg text-lg font-medium'
                                } to={"/doctors"}
                            >
                                Doctors
                            </NavLink>
                            < NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-teal-700 bg-white text-lg btn  hover:bg-white border-2 hover:border-teal-700  border-teal-700 px-3 py-2 rounded-lg  font-medium'
                                        : 'btn  bg-white border-white border-2  hover:bg-white hover:border-teal-700 hover:text-teal-700 px-3 py-2 rounded-lg text-lg font-medium'
                                } to={"/service"}
                            >
                                {" "}
                                Services
                            </NavLink>

                            {/* Sign in / sign up  */}
                            {!user?.email ? (
                                <>
                                    <Link
                                        className="btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg  "
                                        to={"/login"}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        className="btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg "
                                        to={"/register"}
                                    >
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <div className=" gap-4 justify-center">
                                        <NavLink className={({ isActive }) =>
                                            isActive
                                                ? 'text-teal-700 w-full bg-white text-lg btn  hover:bg-white border-2 hover:border-teal-700  border-teal-700 px-3 py-2 rounded-lg  font-medium'
                                                : 'btn  bg-white w-full border-white border-2  hover:bg-white hover:border-teal-700 hover:text-teal-700 px-3 py-2 rounded-lg text-lg font-medium'
                                        } to={"/Dashboard"}>
                                            <img className="w-8 ml-4 h-8" src={calendarIcon} alt="" />
                                            Dashboard
                                        </NavLink>

                                        <div className="avatar">
                                            <div className="w-12 mt-3 ml-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user?.photoURL || `${userPhoto}`} />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="btn mt-6 btn-error text-white rounded-full"
                                        onClick={handleSignOut}
                                    >
                                        Log Out
                                    </button>
                                </>
                            )}
                        </ul>
                    </div>
                    <Link to={"/"} className="flex pr-8">
                        <img className="w-12" src={doctorateIcon} alt="" />{" "}
                        <h1 className="font-bold  pl-2 text-4xl">Doctorate</h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu  menu-horizontal gap-1 px-1 ">

                        <div className="dropdown dropdown-end">
                            <li>
                                <details>
                                    <summary className="btn bg-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg">
                                        Home
                                    </summary>
                                    <ul tabIndex={0} className="w-48 h-30 z-[1] mt-1 menu dropdown-content  justify-center bg-base-100  border-teal-700 border-2 rounded-xl">
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-teal-700  bg-base-100 text-lg border-none  hover:border-none hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                    : '  bg-white border-white border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                            }
                                            to={"/"}
                                        >
                                            Home 1
                                        </NavLink>
                                        <br />
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-teal-700  bg-base-100 text-lg border-none hover:border-none hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                    : '  bg-white border-white border-2 border-none  hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                            } to={"homepage/homeTwo"}
                                        >
                                            Home 2
                                        </NavLink>
                                    </ul>
                                </details>
                            </li>
                        </div>

                        <NavLink

                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700 bg-white text-lg btn  hover:bg-white border-2 hover:border-teal-700  border-teal-700 px-3 py-2 rounded-lg  font-medium'
                                    : 'btn  bg-white border-white border-2  hover:bg-white hover:border-teal-700 hover:text-teal-700 px-3 py-2 rounded-lg text-lg font-medium'
                            }
                            to={"/about"}
                        >
                            About Us
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700 bg-white text-lg btn  hover:bg-white border-2 hover:border-teal-700  border-teal-700 px-3 py-2 rounded-lg  font-medium'
                                    : 'btn  bg-white border-white border-2  hover:bg-white hover:border-teal-700 hover:text-teal-700 px-3 py-2 rounded-lg text-lg font-medium'
                            }
                            to={"/doctors"}
                        >
                            Doctors
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700 bg-white text-lg btn  hover:bg-white border-2 hover:border-teal-700  border-teal-700 px-3 py-2 rounded-lg  font-medium'
                                    : 'btn  bg-white border-white border-2  hover:bg-white hover:border-teal-700 hover:text-teal-700 px-3 py-2 rounded-lg text-lg font-medium'
                            }
                            to={"/service"}
                        >
                            Services
                        </NavLink>

                        {/* Sign in / sign up */}
                        <div>
                            {!user?.email ? (
                                <>
                                    <div className="pl-48 ">
                                        <Link
                                            className="btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg "
                                            to={"/login"}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            className="btn rounded-full bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg "
                                            to={"/register"}
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex gap-4 justify-center pl-36">
                                        <NavLink className={({ isActive }) =>
                                            isActive
                                                ? 'text-teal-700 bg-white text-lg btn  hover:bg-white border-2 hover:border-teal-700  border-teal-700 px-3 py-2 rounded-lg  font-medium'
                                                : 'btn  bg-white border-white border-2  hover:bg-white hover:border-teal-700 hover:text-teal-700 px-3 py-2 rounded-lg text-lg font-medium'
                                        } to={"/Dashboard"}>
                                            <img className="w-8 h-8" src={calendarIcon} alt="" />
                                            Dashboard
                                        </NavLink>

                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user?.photoURL || `${userPhoto}`} />{" "}
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-error text-white rounded-full"
                                            onClick={handleSignOut}
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
