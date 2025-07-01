import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/admin/login');
    };

    return (
        <aside className="admin-sidebar">
            <div className="sidebar-header">
                <Link className="navbar-brand brand-logo" to="/">
                    <span className="brand-text">SellSpot</span>
                    <span className="brand-dot">.</span>
                </Link>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><NavLink to="/admin/dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></NavLink></li>
                    <li><NavLink to="/admin/categories"><i className="fas fa-list"></i><span>Categories</span></NavLink></li>
                    <li><NavLink to="/admin/brands"><i className="fas fa-tags"></i><span>Brands</span></NavLink></li>
                    <li><NavLink to="/admin/products"><i className="fas fa-box-open"></i><span>Products</span></NavLink></li>
                    <li><NavLink to="/admin/orders"><i className="fas fa-shopping-cart"></i><span>Orders</span></NavLink></li>
                    <li><NavLink to="/admin/users"><i className="fas fa-users"></i><span>Users</span></NavLink></li>
                    <li><NavLink to="/admin/shipping"><i className="fas fa-shipping-fast"></i><span>Shipping</span></NavLink></li>
                    <li><NavLink to="/admin/change-password"><i className="fas fa-key"></i><span>Change Password</span></NavLink></li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <button onClick={handleLogout} className="logout-btn">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;