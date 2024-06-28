import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
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
                element: <DoctorAppointment />
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
        ]
    }
]);

export default router;