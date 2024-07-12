import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import doctorateIcon from '../assets/image/doctor.png'
import auth from "../Components/Firebase/firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { FaAlignJustify, FaHome, FaUsers } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaPrescriptionBottleMedical, FaUserDoctor } from "react-icons/fa6";
import { MdContactMail, MdMenuOpen, MdNoteAlt } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { GiHypodermicTest } from "react-icons/gi";
import useAdmin from "../Components/Hooks/useAdmin";

const DashboardLayout = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        const successSignOut = signOut();
        if (successSignOut) {
            alert("Do you want to logout...?");
            toast.success("Successfully Logout");
            localStorage.removeItem('access-token');
        }
    };
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])

    // To do isAdmin
    const [isAdmin] = useAdmin();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">

                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu  p-4 w-80 min-h-full bg-base-200 text-base-content">

                        {/* title  */}
                        <div className="flex mb-8 justify-center pr-8">
                            <img className="w-12" src={doctorateIcon} alt="" />{" "}
                            <h1 className="font-bold  pl-2 text-4xl">Doctorate</h1>
                        </div>

                        {/* Sidebar content here */}
                        <div className="mb-10">
                            <ul>
                                {
                                    isAdmin ?
                                        <>
                                            <li><NavLink
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-teal-700  bg-base-100 text-lg border-none  hover:border-none hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                        : '  bg-white border-white border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                } to={"/dashboard/admin-Home"}
                                            >
                                                <FaHome /> Admin Home
                                            </NavLink>
                                            </li>

                                            <li className="mt-2">
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                            : '  bg-white border-white border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                    }
                                                    to={'/Dashboard/manage-all-Doctors'}
                                                >
                                                    <FaAlignJustify />  Manage-All-Doctors
                                                </NavLink>
                                            </li>
                                            <li className="mt-2">
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                            : '  bg-white border-white border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                    }
                                                    to={'/Dashboard/manage-all-Service'}
                                                >
                                                    <CiServer />  Manage-All-Service
                                                </NavLink>
                                            </li>
                                            <li className="mt-2">
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                            : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                    }
                                                    to={'/Dashboard/add-Doctors'}
                                                >
                                                    <FaUserDoctor /> Add Doctors
                                                </NavLink>
                                            </li>
                                            <li className="mt-2">
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                            : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                    }
                                                    to={'/Dashboard/add-Services'}
                                                >
                                                    <FcAddDatabase /> Add Services
                                                </NavLink>
                                            </li>
                                            <li className="mt-2">
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                            : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                    }
                                                    to={'/Dashboard/All-Users'}
                                                >
                                                    <FaUsers />  All Users
                                                </NavLink>
                                            </li>
                                        </> :

                                        // user rout 
                                        <>
                                            <li >
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                            : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                    } to={"/dashboard/user-Home"}
                                                >
                                                    <FaHome /> User Home
                                                </NavLink>
                                            </li>
                                            <li className='mt-2'><NavLink
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                } to={"/dashboard/User-Appointment"}
                                            >
                                                <IoIosApps /> Appointments
                                            </NavLink>
                                            </li>
                                            <li className='mt-2'><NavLink
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                } to={"/dashboard/User-prescription"}
                                            >
                                                <FaPrescriptionBottleMedical /> Prescription
                                            </NavLink>
                                            </li>
                                            <li className='mt-2'><NavLink
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                } to={"/dashboard/User-MedicalTest"}
                                            >
                                                <GiHypodermicTest /> Medical Test
                                            </NavLink>
                                            </li>
                                            <li className='mt-2'><NavLink
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                } to={"/dashboard/User-Health-Record"}
                                            >
                                                <MdNoteAlt /> Health Record
                                            </NavLink>
                                            </li>
                                            <li className='mt-2'><NavLink
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                                } to={"/dashboard/User-Add-Review"}
                                            >
                                                <FaHome /> Add Review
                                            </NavLink>
                                            </li>
                                        </>
                                }

                                <div className="divider"></div>

                                {/* shared NavLink */}

                                <li className="mt-2">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-teal-700  bg-base-100 text-lg border-none  hover:border-none hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                                : '  bg-white border-white border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                        } to={"/dashboard"}
                                    >
                                        <FaHome />Home
                                    </NavLink>
                                </li>
                                <li className="mt-2"><NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                            : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                    } to={"/dashboard/menu"}
                                >
                                    <MdMenuOpen />Menu
                                </NavLink>
                                </li>
                                <li className="mt-2"><NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                            : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                                    } to={"/dashboard/contact"}
                                >
                                    <MdContactMail />Contact
                                </NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* Logout */}
                        <div className="flex  justify-center gap-28">
                            <Link className="btn rounded-xl bg-teal-600 text-white border-white border-2 hover:text-teal-700 hover:border-teal-700 hover:bg-white text-lg " to={'/'}>Home</Link>
                            <button onClick={handleSignOut} className="btn btn-error text-white" >
                                Log Out
                            </button>
                        </div>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;