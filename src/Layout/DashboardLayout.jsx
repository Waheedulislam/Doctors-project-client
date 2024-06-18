import { Link, Outlet, useNavigate } from "react-router-dom";
import doctorateIcon from '../assets/image/doctor.png'
import auth from "../Components/Firebase/firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";

const DashboardLayout = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        const successSignOut = signOut();
        if (successSignOut) {
            alert("Do you want to logout...?");
            toast.success("Successfully Logout");
        }
    };
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])
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
                        <div className="mb-24">
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </div>

                        {/* Logout */}
                        <div className="flex mt-96 justify-center gap-28">
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