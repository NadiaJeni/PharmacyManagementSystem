import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>PharmaCare Management System</h1>
            <p>Efficient, secure, and user-friendly pharmacy management</p>
            <div className="cta-buttons">
              {user ? (
                <button 
                  className="btn-primary btn-large"
                  onClick={() => navigate(user.roleId === 1 ? '/admin/dashboard' : '/user/dashboard')}
                >
                  Go to Dashboard
                </button>
              ) : (
                <>
                  <button 
                    className="btn-primary btn-large"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </button>
                  <button 
                    className="btn-secondary btn-large"
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Our System?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-pills"></i>
              </div>
              <h3>Inventory Management</h3>
              <p>Track medicine stock, set low stock alerts, and manage suppliers efficiently.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-prescription"></i>
              </div>
              <h3>Prescription Tracking</h3>
              <p>Manage prescriptions, refill requests, and patient history with ease.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Sales Analytics</h3>
              <p>Generate detailed reports and analyze sales trends for better decision making.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3>Secure Access</h3>
              <p>Role-based access control ensures data security and privacy compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"This system has transformed how we manage our pharmacy. Inventory tracking is now a breeze!"</p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <p>Pharmacy Owner</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The prescription management features save me hours every week. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <h4>Dr. Michael Chen</h4>
                <p>General Practitioner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 PharmaCare Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
