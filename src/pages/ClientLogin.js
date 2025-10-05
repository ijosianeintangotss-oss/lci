import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ClientLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    company: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError('Please fill in all required fields');
        return false;
      }
    } else {
      if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all required fields');
        return false;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return false;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (isLogin) {
        // Login logic
        const response = await fetch('https://lcirwanda-backend001.onrender.com/api/client-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });

        const data = await response.json();

        if (response.ok) {
          if (data.status === 'approved') {
            localStorage.setItem('clientToken', data.token);
            localStorage.setItem('clientData', JSON.stringify(data.user));
            setSuccess('Login successful!');
            setTimeout(() => navigate('/client-portal'), 1000);
          } else {
            setError('Your account is pending approval. Please wait for admin approval.');
          }
        } else {
          setError(data.message || 'Login failed');
        }
      } else {
        // Registration logic
        const response = await fetch('https://lcirwanda-backend001.onrender.com/api/client-register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
          setSuccess('Registration successful! Your account is pending admin approval. You will receive an email when approved.');
          setIsLogin(true);
          setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            company: ''
          });
        } else {
          setError(data.message || 'Registration failed');
        }
      }
    } catch (error) {
      console.error('Auth error:', error);
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    // Google OAuth implementation would go here
    setError('Google login functionality will be implemented soon');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      padding: '2rem 1rem'
    },
    card: {
      background: '#fff',
      padding: '2.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
      width: '100%',
      maxWidth: '450px'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#1e3a8a',
      marginBottom: '0.5rem',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '1rem',
      color: '#6b7280',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    toggleText: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#6b7280'
    },
    toggleButton: {
      background: 'none',
      border: 'none',
      color: '#1e3a8a',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'underline'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      padding: '0.8rem',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '0.95rem',
      transition: 'border-color 0.3s ease'
    },
    submitButton: {
      background: '#d27b10ff',
      color: 'white',
      padding: '0.8rem',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '0.5rem'
    },
    submitButtonDisabled: {
      background: '#9ca3af',
      cursor: 'not-allowed'
    },
    googleButton: {
      background: 'white',
      color: '#374151',
      padding: '0.8rem',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    errorMessage: {
      color: '#dc2626',
      textAlign: 'center',
      marginBottom: '1rem',
      fontWeight: '500',
      padding: '0.8rem',
      background: '#fef2f2',
      borderRadius: '8px',
      border: '1px solid #fecaca'
    },
    successMessage: {
      color: '#065f46',
      textAlign: 'center',
      marginBottom: '1rem',
      fontWeight: '500',
      padding: '0.8rem',
      background: '#ecfdf5',
      borderRadius: '8px',
      border: '1px solid #a7f3d0'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '1rem',
      height: '1rem',
      border: '2px solid transparent',
      borderTop: '2px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    backButton: {
      background: 'none',
      border: 'none',
      color: '#6b7280',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem',
      fontSize: '0.9rem'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          input:focus {
            border-color: #d27b10ff !important;
            outline: none;
          }
        `}
      </style>

      <div style={styles.card}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={styles.backButton}>
            ← Back to Home
          </button>
        </Link>

        <h1 style={styles.title}>
          {isLogin ? 'Client Login' : 'Client Registration'}
        </h1>
        <p style={styles.subtitle}>
          {isLogin 
            ? 'Access your client portal to track your projects' 
            : 'Create your client account to get started'}
        </p>

        <div style={styles.toggleText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            style={styles.toggleButton}
            onClick={() => setIsLogin(!isLogin)}
            type="button"
          >
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </div>

        {!isLogin && (
          <button 
            style={styles.googleButton}
            onClick={handleGoogleLogin}
            type="button"
          >
            <span>🔗</span>
            Sign up with Google
          </button>
        )}

        {error && <div style={styles.errorMessage}>{error}</div>}
        {success && <div style={styles.successMessage}>{success}</div>}

        <form style={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="fullName">Full Name *</label>
              <input
                style={styles.input}
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email Address *</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {!isLogin && (
            <>
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="phone">Phone Number</label>
                <input
                  style={styles.input}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="company">Company</label>
                <input
                  style={styles.input}
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>
            </>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">
              Password {!isLogin && '(min. 6 characters)'} *
            </label>
            <input
              style={styles.input}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="confirmPassword">Confirm Password *</label>
              <input
                style={styles.input}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          <button 
            type="submit" 
            style={{
              ...styles.submitButton,
              ...(isSubmitting ? styles.submitButtonDisabled : {})
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div style={styles.loadingSpinner}></div>
                {isLogin ? 'Logging in...' : 'Registering...'}
              </>
            ) : (
              isLogin ? 'Login to Portal' : 'Create Account'
            )}
          </button>
        </form>

        <div style={{ ...styles.toggleText, marginTop: '1.5rem', fontSize: '0.8rem', color: '#9ca3af' }}>
          {isLogin 
            ? 'Forgot your password? Contact admin for assistance.' 
            : 'By registering, you agree to our terms and conditions.'}
        </div>
      </div>
    </div>
  );
}

export default ClientLogin;