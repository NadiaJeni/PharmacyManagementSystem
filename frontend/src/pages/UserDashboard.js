import React, { useState } from "react"; 
import { useAuth } from '../auth/AuthContext';
import "./UserDashboard.css";

const UserDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("medicines");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [cart, setCart] = useState([]);

  // Sample medicines
  const medicines = [
    {
      id: 1,
      name: "Amoxicillin 500mg",
      category: "Antibiotic",
      price: 12.99,
      stock: 145,
      description: "Used to treat a wide variety of bacterial infections.",
      image: "https://via.placeholder.com/100x100/4cd7d0/ffffff?text=A"
    },
    {
      id: 2,
      name: "Lipitor 20mg",
      category: "Cholesterol",
      price: 24.50,
      stock: 8,
      description: "Lowers cholesterol and triglyceride levels in the blood.",
      image: "https://via.placeholder.com/100x100/2c6bac/ffffff?text=L"
    },
    {
      id: 3,
      name: "Ventolin Inhaler",
      category: "Asthma",
      price: 18.75,
      stock: 42,
      description: "Relieves asthma symptoms and bronchospasm.",
      image: "https://via.placeholder.com/100x100/4bb543/ffffff?text=V"
    },
    {
      id: 4,
      name: "Metformin 500mg",
      category: "Diabetes",
      price: 8.99,
      stock: 89,
      description: "Used to treat type 2 diabetes.",
      image: "https://via.placeholder.com/100x100/ff6b35/ffffff?text=M"
    }
  ];

  // Sample orders
  const orders = [
    {
      id: "ORD-001",
      date: "2023-08-15",
      status: "Completed",
      total: 125.00,
      items: 3
    },
    {
      id: "ORD-002",
      date: "2023-08-10",
      status: "Processing",
      total: 89.50,
      items: 2
    },
    {
      id: "ORD-003",
      date: "2023-08-05",
      status: "Completed",
      total: 215.75,
      items: 5
    }
  ];

  const filteredMedicines = medicines.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (medicine) => {
    setCart([...cart, { ...medicine, quantity: 1 }]);
    alert(`${medicine.name} added to cart!`);
  };

  const viewMedicineDetails = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const downloadInvoice = (orderId) => {
    alert(`Invoice for ${orderId} would be downloaded in a real application.`);
  };

  return (
    <div className="user-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1>User Dashboard</h1>
          <div className="user-info">
            <span>Welcome, {user?.fullName || "User"}</span>
            <div className="user-avatar">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <div className="sidebar-nav">
            <button
              className={activeTab === "medicines" ? "active" : ""}
              onClick={() => setActiveTab("medicines")}
            >
              <i className="fas fa-pills"></i>
              Browse Medicines
            </button>
            <button
              className={activeTab === "cart" ? "active" : ""}
              onClick={() => setActiveTab("cart")}
            >
              <i className="fas fa-shopping-cart"></i>
              Shopping Cart ({cart.length})
            </button>
            <button
              className={activeTab === "orders" ? "active" : ""}
              onClick={() => setActiveTab("orders")}
            >
              <i className="fas fa-history"></i>
              Order History
            </button>
            <button
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => setActiveTab("profile")}
            >
              <i className="fas fa-user"></i>
              Profile
            </button>
          </div>

          <div className="sidebar-stats">
            <div className="stat-card">
              <i className="fas fa-shopping-cart"></i>
              <div className="stat-info">
                <span className="stat-number">{orders.length}</span>
                <span className="stat-label">Total Orders</span>
              </div>
            </div>
            <div className="stat-card">
              <i className="fas fa-check-circle"></i>
              <div className="stat-info">
                <span className="stat-number">
                  {orders.filter(o => o.status === "Completed").length}
                </span>
                <span className="stat-label">Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="dashboard-main">
          {/* Search Bar */}
          {activeTab === "medicines" && (
            <div className="search-section">
              <div className="search-bar">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search medicines by name or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="clear-search"
                    onClick={() => setSearchTerm("")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
              <div className="search-results">
                <span>{filteredMedicines.length} medicines found</span>
              </div>
            </div>
          )}

          {/* Medicines Tab */}
          {activeTab === "medicines" && (
            <div className="medicines-grid">
              {filteredMedicines.map(medicine => (
                <div key={medicine.id} className="medicine-card">
                  <div className="medicine-image">
                    <img src={medicine.image} alt={medicine.name} />
                  </div>
                  <div className="medicine-info">
                    <h3>{medicine.name}</h3>
                    <span className="medicine-category">{medicine.category}</span>
                    <p className="medicine-description">{medicine.description}</p>
                    <div className="medicine-details">
                      <span className="medicine-price">${medicine.price}</span>
                      <span className={`medicine-stock ${medicine.stock === 0 ? "out-of-stock" : medicine.stock < 10 ? "low-stock" : ""}`}>
                        {medicine.stock === 0 ? "Out of Stock" : medicine.stock < 10 ? "Low Stock" : "In Stock"}
                      </span>
                    </div>
                  </div>
                  <div className="medicine-actions">
                    <button
                      className="btn btn-outline"
                      onClick={() => viewMedicineDetails(medicine)}
                    >
                      <i className="fas fa-info-circle"></i>
                      Details
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(medicine)}
                      disabled={medicine.stock === 0}
                    >
                      <i className="fas fa-cart-plus"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Shopping Cart Tab */}
          {activeTab === "cart" && (
            <div className="cart-section">
              <h2>Shopping Cart</h2>
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <i className="fas fa-shopping-cart"></i>
                  <p>Your cart is empty</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setActiveTab("medicines")}
                  >
                    Browse Medicines
                  </button>
                </div>
              ) : (
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <span>{item.category}</span>
                      </div>
                      <div className="item-price">${item.price}</div>
                      <div className="item-quantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                      <button className="remove-item">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  ))}
                  <div className="cart-total">
                    <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h3>
                    <button className="btn btn-primary btn-large">
                      <i className="fas fa-check"></i>
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Order History Tab */}
          {activeTab === "orders" && (
            <div className="orders-section">
              <h2>Order History</h2>
              <div className="orders-table">
                <div className="table-header">
                  <span>Order ID</span>
                  <span>Date</span>
                  <span>Items</span>
                  <span>Total</span>
                  <span>Status</span>
                  <span>Action</span>
                </div>
                {orders.map(order => (
                  <div key={order.id} className="table-row">
                    <span className="order-id">{order.id}</span>
                    <span className="order-date">{order.date}</span>
                    <span className="order-items">{order.items} items</span>
                    <span className="order-total">${order.total}</span>
                    <span className={`order-status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                    <button
                      className="btn btn-outline"
                      onClick={() => downloadInvoice(order.id)}
                    >
                      <i className="fas fa-download"></i>
                      Invoice
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="profile-section">
              <h2>User Profile</h2>
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="profile-info">
                    <h3>{user?.fullName || "User Name"}</h3>
                    <p>{user?.email || "user@example.com"}</p>
                    <span>Member since {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="profile-details">
                  <div className="detail-item">
                    <label>Phone Number</label>
                    <span>{user?.phone || "+1 (555) 123-4567"}</span>
                  </div>
                  <div className="detail-item">
                    <label>Address</label>
                    <span>{user?.address || "123 Main St, City, State 12345"}</span>
                  </div>
                  <div className="detail-item">
                    <label>Default Payment Method</label>
                    <span>Credit Card ending in 4567</span>
                  </div>
                </div>
                <div className="profile-actions">
                  <button className="btn btn-outline">
                    <i className="fas fa-edit"></i>
                    Edit Profile
                  </button>
                  <button className="btn btn-primary">
                    <i className="fas fa-lock"></i>
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Medicine Detail Modal */}
      {selectedMedicine && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedMedicine.name}</h2>
              <button
                className="modal-close"
                onClick={() => setSelectedMedicine(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="medicine-detail">
                <img src={selectedMedicine.image} alt={selectedMedicine.name} />
                <div className="detail-info">
                  <div className="detail-item">
                    <label>Category</label>
                    <span>{selectedMedicine.category}</span>
                  </div>
                  <div className="detail-item">
                    <label>Price</label>
                    <span className="price">${selectedMedicine.price}</span>
                  </div>
                  <div className="detail-item">
                    <label>Stock Availability</label>
                    <span className={`stock ${selectedMedicine.stock < 10 ? "low" : "good"}`}>
                      {selectedMedicine.stock} units available
                      {selectedMedicine.stock < 10 && " (Low Stock)"}
                    </span>
                  </div>
                  <div className="detail-item">
                    <label>Description</label>
                    <p>{selectedMedicine.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline"
                onClick={() => setSelectedMedicine(null)}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToCart(selectedMedicine);
                  setSelectedMedicine(null);
                }}
                disabled={selectedMedicine.stock === 0}
              >
                <i className="fas fa-cart-plus"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
