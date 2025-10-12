// components/AdminLayout.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#0a1d51',
        color: 'white',
        padding: '1rem'
      }}>
        <div style={{ padding: '1rem', borderBottom: '1px solid #0a1d51', textAlign: 'center' }}>
          <h3 style={{ margin: 0 }}>LCI Admin</h3>
        </div>
        <nav style={{ marginTop: '1rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link 
                to="/admin-quotes" 
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.375rem',
                  backgroundColor: window.location.pathname === '/admin-quotes' ? '#374151' : 'transparent'
                }}
              >
                Quotes Management
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link 
                to="/admin-messages" 
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.375rem',
                  backgroundColor: window.location.pathname === '/admin-messages' ? '#374151' : 'transparent'
                }}
              >
                Messages
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <button
                onClick={handleLogout}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '0.375rem'
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;