import Main from "../Layout/Main";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home"
import Menu from "../pages/home/Menu/Menu";
import Order from "../pages/order/Order";

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
            }
        ]
    },
]);
