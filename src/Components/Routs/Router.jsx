import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Appointment from "../../Pages/Appointment";
import Services from "../../Pages/Services";
import Contact from "../../Pages/Contact";
import Login from "../Login-Regester/Login";
import Register from "../Login-Regester/Register";

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
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/services',
                element: <Services />
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
]);

export default router;