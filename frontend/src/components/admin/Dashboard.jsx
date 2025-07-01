import React from 'react';
import AdminLayout from './AdminLayout';

const Dashboard = () => {
  return (
    <AdminLayout>
        <h1 className="page-title">Dashboard</h1>
        <div className="stat-cards-grid">
            <div className="stat-card">
                <div className="card-icon icon-revenue">
                    <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="card-info">
                    <p className="card-title">Total Revenue</p>
                    <h3 className="card-value">$45,231.89</h3>
                    <p className="card-trend">+20.1% from last month</p>
                </div>
            </div>
            <div className="stat-card">
                <div className="card-icon icon-orders">
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="card-info">
                    <p className="card-title">Total Orders</p>
                    <h3 className="card-value">2,350</h3>
                    <p className="card-trend">+15.5% from last month</p>
                </div>
            </div>
            <div className="stat-card">
                <div className="card-icon icon-customers">
                    <i className="fas fa-users"></i>
                </div>
                <div className="card-info">
                    <p className="card-title">New Customers</p>
                    <h3 className="card-value">1,204</h3>
                    <p className="card-trend">+12% from last month</p>
                </div>
            </div>
            <div className="stat-card">
                <div className="card-icon icon-products">
                    <i className="fas fa-box-open"></i>
                </div>
                <div className="card-info">
                    <p className="card-title">Products in Stock</p>
                    <h3 className="card-value">5,890</h3>
                    <p className="card-trend">12 out of stock</p>
                </div>
            </div>
        </div>
        {/* You can add charts or recent activity tables here */}
    </AdminLayout>
  );
};

export default Dashboard;