import Main from "../Layout/Main";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home"
import Menu from "../pages/home/Menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/home/Login";
import Signup from "../pages/home/Signup";
import Privateroutes from "./Privateroutes";
import Secret from "../Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../pages/dashboard/Mycart"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "secret",
                element: <Privateroutes><Secret></Secret></Privateroutes>
            },
        ],
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <Mycart></Mycart>
            }
        ]
    },
]);
