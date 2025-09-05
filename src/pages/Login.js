import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Static credentials
  const ADMIN_USER = 'admin';
  const ADMIN_PASS = 'lci2025';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      navigate('/admin-quotes');
    } else {
      setError('Invalid credentials. Please try again.');
    }
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
        <h2 style={{ marginBottom: '1.5rem', color: '#1e3a8a' }}>Admin Login</h2>
        {error && (
          <div style={{ color: '#dc2626', marginBottom: '1rem' }}>{error}</div>
        )}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
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
              border: '1px solid #dbeafe',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
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
              border: '1px solid #dbeafe',
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
            color: 'white',
            padding: '0.8rem',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;