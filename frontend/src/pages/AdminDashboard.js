import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data
  const stats = {
    totalUsers: 1247,
    totalOrders: 568,
    revenue: 12458,
    lowStock: 23,
  };

  const recentOrders = [
    { id: "ORD-1001", customer: "John Doe", date: "2023-08-15", amount: 125.0, status: "Completed" },
    { id: "ORD-1002", customer: "Jane Smith", date: "2023-08-14", amount: 89.5, status: "Processing" },
    { id: "ORD-1003", customer: "Robert Johnson", date: "2023-08-14", amount: 215.75, status: "Completed" },
    { id: "ORD-1004", customer: "Sarah Wilson", date: "2023-08-13", amount: 45.99, status: "Shipped" },
  ];

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Admin Dashboard</h1>
          <div className="user-info">
            <span>Welcome, {user?.fullName}</span>
            <div className="user-avatar">
              <i className="fas fa-user-shield"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <div className="sidebar-nav">
            {[
              { tab: "overview", icon: "fas fa-chart-pie", label: "Overview" },
              { tab: "users", icon: "fas fa-users", label: "Users" },
              { tab: "orders", icon: "fas fa-shopping-cart", label: "Orders" },
              { tab: "medicines", icon: "fas fa-pills", label: "Medicines" },
              { tab: "settings", icon: "fas fa-cog", label: "Settings" },
            ].map((item) => (
              <button
                key={item.tab}
                className={activeTab === item.tab ? "active" : ""}
                onClick={() => setActiveTab(item.tab)}
              >
                <i className={item.icon}></i>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="dashboard-main">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="overview-section">
              <h2>Dashboard Overview</h2>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.totalUsers}</h3>
                    <p>Total Users</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.totalOrders}</h3>
                    <p>Total Orders</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <div className="stat-info">
                    <h3>${stats.revenue.toLocaleString()}</h3>
                    <p>Total Revenue</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.lowStock}</h3>
                    <p>Low Stock Items</p>
                  </div>
                </div>
              </div>

              <div className="recent-orders">
                <h3>Recent Orders</h3>
                <div className="orders-table">
                  <div className="table-header">
                    <span>Order ID</span>
                    <span>Customer</span>
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Status</span>
                  </div>
                  {recentOrders.map((order) => (
                    <div key={order.id} className="table-row">
                      <span className="order-id">{order.id}</span>
                      <span className="customer">{order.customer}</span>
                      <span className="date">{order.date}</span>
                      <span className="amount">${order.amount.toFixed(2)}</span>
                      <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div className="users-section">
              <h2>User Management</h2>
              <p>User management content goes here...</p>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="orders-section">
              <h2>Order Management</h2>
              <p>Order management content goes here...</p>
            </div>
          )}

          {/* Medicines Tab */}
          {activeTab === "medicines" && (
            <div className="medicines-section">
              <h2>Medicine Management</h2>
              <p>Medicine management content goes here...</p>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="settings-section">
              <h2>System Settings</h2>
              <p>System settings content goes here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
