import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCartShopping, FaWallet, FaCalendar, FaUtensils } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import useCart from '../hooks/useCart';
import { TiThMenuOutline } from "react-icons/ti";
import { MdFastfood } from "react-icons/md";

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: laod data from the server to have dynamic isAdmin based on data
    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaUtensils />Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet />Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><MdFastfood />All Users</NavLink></li>
                        </> : 
                        
                        <>
                            <li><NavLink to='/dashboard/home'><FaHome />User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaCalendar />Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><FaCartShopping />My Cart
                                <span className="badge badge-secondary">+{cart?.length || 0}</span>
                            </NavLink></li>
                            <div className='divider'></div>
                            <li><NavLink to="/"><FaWallet />Home</NavLink></li>
                            <li><NavLink to="/menu"><TiThMenuOutline />Our Menu</NavLink></li>
                            <li><NavLink to="/order/salad"><MdFastfood />Order Food</NavLink></li>
                        </>
                    }
                    {/* Sidebar content here */}



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;