import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          PharmaCare
        </Link>
        
        <ul className="nav-menu">
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-user">Welcome, {user.fullName}</span>
              </li>
              <li className="nav-item">
                <Link 
                  to={user.roleId === 1 ? '/admin/dashboard' : '/dashboard'} 
                  className="nav-link"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <button 
                  onClick={handleLogout} 
                  className="nav-link btn-logout"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
