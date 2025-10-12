// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Static credentials
  const ADMIN_USER = 'admin';
  const ADMIN_PASS = 'lci2025';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      try {
        // Create admin token
        const adminToken = btoa(JSON.stringify({
          role: 'admin',
          username: 'admin',
          email: 'admin@lcirwanda.com',
          fullName: 'Administrator',
          timestamp: Date.now()
        }));

        // Store the admin token in multiple places for compatibility
        localStorage.setItem('adminToken', adminToken);
        localStorage.setItem('authToken', adminToken); // For compatibility with existing code
        localStorage.setItem('user', JSON.stringify({
          username: 'admin',
          role: 'admin',
          email: 'admin@lcirwanda.com',
          fullName: 'Administrator'
        }));

        console.log('Admin login successful, token stored');
        
        // Navigate to admin quotes
        navigate('/admin-quotes', { replace: true });
      } catch (err) {
        console.error('Login error:', err);
        setError('Login failed. Please try again.');
      }
    } else {
      setError('Invalid credentials. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '2rem 2.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
          minWidth: '320px',
        }}
      >
        <h2 style={{ marginBottom: '1.5rem', color: '#1e3a8a', textAlign: 'center' }}>Admin Login</h2>
        {error && (
          <div style={{ 
            color: '#dc2626', 
            marginBottom: '1rem',
            padding: '0.5rem',
            backgroundColor: '#fef2f2',
            borderRadius: '4px',
            border: '1px solid #fecaca',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
        <div style={{ marginBottom: '1rem'}}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '0.7rem',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '1rem',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.7rem',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '1rem',
            }}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            backgroundColor: loading ? '#9ca3af' : '#d27b10ff',
            color: 'white',
            padding: '0.8rem',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <small style={{ color: '#6b7280' }}>
            Default: admin / lci2025
          </small>
        </div>
      </form>
    </div>
  );
}

export default Login;