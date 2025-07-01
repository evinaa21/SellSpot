import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="admin-layout">
            <AdminSidebar />
            <div className="admin-main-content">
                <header className="admin-header">
                    <div className="header-title">
                        {/* This could be dynamic based on the page */}
                    </div>
                    <div className="user-menu">
                        <span>Welcome, {user?.name || 'Admin'}</span>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </header>
                <main className="admin-page-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;