import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCartShopping, FaWallet, FaCalendar} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden text-white">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                
                    <li><Link><FaHome />User Home</Link></li>
                    <li><Link><FaCalendar />Reservation</Link></li>
                    <li><Link><FaCartShopping />My Cart</Link></li>
                    <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                    <div className='divider'></div>
                    <li><Link to="/"><FaWallet />Home</Link></li>
                    <li><Link to="/"><FaWallet />Our Menu</Link></li>
                    <li><Link to="/"><FaWallet />Order Food</Link></li>
                    <li><Link to="/"><FaWallet />Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;