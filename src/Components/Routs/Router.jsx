import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import Login from "../Login-Regester/Login";
import Register from "../Login-Regester/Register";
import HomeTwo from "../../Pages/HomeTwo";
import DashboardLayout from "../../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../../Pages/DashboardPage/DashboardHome";
import Services from "../../Pages/Services/Services";
import SeeAllServiceDescription from "../../Pages/SeeAllServiceDescription";
import Doctor from "../../Pages/Doctor/Doctor";
import DoctorAppointment from "../../Pages/DoctorAppointment";
import Appointment from "../../Pages/Appointment/Appointment";
import AddDoctors from "../../Pages/DashboardPage/Admin/ManageDoctors/AddDoctors";
import ManageDoctors from "../../Pages/DashboardPage/Admin/ManageDoctors/ManageDoctors";
import ManageAllService from "../../Pages/DashboardPage/Admin/ManageAllService/ManageAllService";
import AddAllServices from "../../Pages/DashboardPage/Admin/ManageAllService/AddAllServices";
import UserHome from "../../Pages/DashboardPage/User/UserHome";
import AdminHome from "../../Pages/DashboardPage/Admin/AdminHome";
import DashboardContact from "../../Pages/DashboardPage/DashboardContact";
import DashboardMenu from "../../Pages/DashboardPage/DashboardMenu";
import UserReview from "../../Pages/DashboardPage/User/UserReview/UserReview";
import UserHealthRecord from "../../Pages/DashboardPage/User/UserHealthRecord/UserHeaalthRecord";
import UserMedicalTest from "../../Pages/DashboardPage/User/UserMedicalTest/UserMedicalTest";
import UserPrescription from "../../Pages/DashboardPage/User/UserPrescription/UserPrescription";
import UserAppointment from "../../Pages/DashboardPage/User/UserAppointment/UserAppointment";
import AllUsers from "../../Pages/DashboardPage/Admin/AllUsers/AllUsers";
import EditAllServices from "../../Pages/DashboardPage/Admin/ManageAllService/EditAllServices";
import EditDoctor from "../../Pages/DashboardPage/Admin/ManageDoctors/EditDoctor";
import AdminRoute from "./AdminRoute";
import About from "../../Pages/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'homepage/homeTwo',
                element: <HomeTwo />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/service',
                element: <Services />
            },
            {
                path: '/serviceDescription/:id',
                element: <SeeAllServiceDescription />
            },
            {
                path: '/doctors',
                element: <Doctor />
            },
            {
                path: '/doctorAppointment/:id',
                element: <PrivateRoute>
                    <DoctorAppointment />
                </PrivateRoute>

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/appointment',
                element: <PrivateRoute>
                    <Appointment></Appointment>
                </PrivateRoute>
            },

        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>
        ),
        children: [
            {
                index: 'dashboard',
                element: <DashboardHome />
            },
            /////// Admin Route /////////
            {
                path: 'add-Doctors',
                element: <AdminRoute>
                    <AddDoctors />
                </AdminRoute>
            },
            {
                path: 'manage-all-Doctors',
                element: <AdminRoute>
                    <ManageDoctors></ManageDoctors>
                </AdminRoute>
            },
            {
                path: 'manage-all-Service',
                element: <AdminRoute>
                    <ManageAllService />
                </AdminRoute>
            },
            {
                path: 'add-Services',
                element: <AdminRoute>
                    <AddAllServices />
                </AdminRoute>
            },
            {
                path: 'Edit-Services/:id',
                element: <AdminRoute>
                    <EditAllServices />
                </AdminRoute>
            },
            {
                path: 'Edit-Doctor/:id',
                element: <AdminRoute>
                    <EditDoctor />
                </AdminRoute>
            },
            {
                path: 'admin-Home',
                element: <AdminRoute>
                    <AdminHome />
                </AdminRoute>
            },

            {
                path: 'All-Users',
                element: <AdminRoute>
                    <AllUsers />
                </AdminRoute>
            },
            //////// user Route ////////
            {
                path: 'User-Home',
                element: <UserHome />
            },
            {
                path: 'User-Appointment',
                element: <UserAppointment></UserAppointment>
            },
            {
                path: 'User-Prescription',
                element: <UserPrescription />
            },
            {
                path: 'User-MedicalTest',
                element: <UserMedicalTest />
            },
            {
                path: 'User-Health-Record',
                element: <UserHealthRecord></UserHealthRecord>
            },
            {
                path: 'User-Add-Review',
                element: <UserReview />
            },
            //////// public Route ///////
            {
                path: 'Contact',
                element: <DashboardContact />
            },
            {
                path: 'Menu',
                element: <DashboardMenu />
            },
        ]
    }
]);

export default router;