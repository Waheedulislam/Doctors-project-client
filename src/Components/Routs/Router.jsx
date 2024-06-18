import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Login from "../Login-Regester/Login";
import Register from "../Login-Regester/Register";
import Doctors from "../../Pages/Doctors";
import Services from "../../Pages/Services";
import HomeTwo from "../../Pages/HomeTwo";
import HomeOne from "../../Pages/HomeOne";
import DashboardLayout from "../../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../../Pages/DashboardPage/DashboardHome";

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
                path: 'homepage/homeOne',
                element: <HomeOne />
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
                path: '/doctors',
                element: <Doctors />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
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