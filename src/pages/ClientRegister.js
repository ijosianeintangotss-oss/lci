// src/pages/ClientRegister.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ClientRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    company: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      width: '100%',
      maxWidth: '480px',
      border: '1px solid #e2e8f0'
    },
    header: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1e293b',
      margin: '0 0 8px 0'
    },
    subtitle: {
      color: '#64748b',
      fontSize: '16px',
      margin: 0
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    required: {
      color: '#ef4444',
      fontSize: '12px',
      fontWeight: 'normal'
    },
    input: {
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      outline: 'none'
    },
    inputError: {
      borderColor: '#ef4444',
      backgroundColor: '#fef2f2'
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '14px',
      marginTop: '6px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    apiError: {
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    },
    successMessage: {
      backgroundColor: '#f0fdf4',
      border: '1px solid #bbf7d0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      textAlign: 'center'
    },
    successIcon: {
      fontSize: '24px',
      marginBottom: '8px'
    },
    successText: {
      color: '#15803d',
      fontSize: '16px',
      fontWeight: '500',
      margin: '0 0 8px 0'
    },
    button: {
      padding: '14px 20px',
      backgroundColor: '#d27b10ff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginTop: '8px'
    },
    buttonDisabled: {
      backgroundColor: '#9ca3af',
      cursor: 'not-allowed'
    },
    buttonHover: {
      backgroundColor: '#b45309',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(210, 123, 16, 0.3)'
    },
    loginLink: {
      textAlign: 'center',
      marginTop: '24px',
      color: '#64748b',
      fontSize: '14px'
    },
    loginLinkText: {
      color: '#3b82f6',
      textDecoration: 'none',
      fontWeight: '500',
      marginLeft: '4px'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid transparent',
      borderTop: '2px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '8px'
    }
  };

  // Add spinner animation
  const spinnerStyle = document.createElement('style');
  spinnerStyle.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(spinnerStyle);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear API error when user makes changes
    if (apiError) {
      setApiError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Phone validation (optional but validate format if provided)
    // if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
    //   newErrors.phone = 'Please enter a valid phone number';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setApiError('');

    try {
      const response = await fetch('https://lci-backend.onrender.com/api/auth/client-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          phone: formData.phone.trim(),
          company: formData.company.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed. Please try again.');
      }

      // Registration successful
      setSuccess(true);
      
      // Store token and user data
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/client-login');
      }, 2000);

    } catch (err) {
      console.error('Registration error:', err);
      setApiError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getInputStyle = (fieldName) => {
    let style = { ...styles.input };
    
    if (errors[fieldName]) {
      style = { ...style, ...styles.inputError };
    }
    
    return style;
  };

  const getButtonStyle = () => {
    let style = { ...styles.button };
    
    if (loading) {
      style = { ...style, ...styles.buttonDisabled };
    }
    
    return style;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Create Your Account</h1>
          <p style={styles.subtitle}>
            Join LCI Rwanda to access professional translation services
          </p>
        </div>

        {apiError && (
          <div style={styles.apiError}>
            <span style={{ color: '#ef4444' }}>⚠️</span>
            <div>
              <strong style={{ color: '#dc2626', display: 'block', marginBottom: '4px' }}>
                Registration Error
              </strong>
              <span style={{ color: '#b91c1c' }}>{apiError}</span>
            </div>
          </div>
        )}

        {success && (
          <div style={styles.successMessage}>
            <div style={styles.successIcon}>✅</div>
            <p style={styles.successText}>
              Registration Successful!
            </p>
            <p style={{ color: '#15803d', fontSize: '14px', margin: 0 }}>
              Redirecting to your dashboard...
            </p>
          </div>
        )}

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="fullName">
              Full Name
              <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={getInputStyle('fullName')}
              disabled={loading || success}
            />
            {errors.fullName && (
              <span style={styles.errorText}>
                ⚠️ {errors.fullName}
              </span>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">
              Email Address
              <span style={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              style={getInputStyle('email')}
              disabled={loading || success}
            />
            {errors.email && (
              <span style={styles.errorText}>
                ⚠️ {errors.email}
              </span>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number (optional)"
              style={getInputStyle('phone')}
              disabled={loading || success}
            />
            {errors.phone && (
              <span style={styles.errorText}>
                ⚠️ {errors.phone}
              </span>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name (optional)"
              style={getInputStyle('company')}
              disabled={loading || success}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">
              Password
              <span style={styles.required}>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              style={getInputStyle('password')}
              disabled={loading || success}
            />
            {errors.password && (
              <span style={styles.errorText}>
                ⚠️ {errors.password}
              </span>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="confirmPassword">
              Confirm Password
              <span style={styles.required}>*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              style={getInputStyle('confirmPassword')}
              disabled={loading || success}
            />
            {errors.confirmPassword && (
              <span style={styles.errorText}>
                ⚠️ {errors.confirmPassword}
              </span>
            )}
          </div>

          <button
            type="submit"
            style={getButtonStyle()}
            disabled={loading || success}
            onMouseEnter={(e) => {
              if (!loading && !success) {
                e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
                e.target.style.transform = styles.buttonHover.transform;
                e.target.style.boxShadow = styles.buttonHover.boxShadow;
              }
            }}
            onMouseLeave={(e) => {
              if (!loading && !success) {
                e.target.style.backgroundColor = styles.button.backgroundColor;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {loading && <span style={styles.loadingSpinner}></span>}
            {loading ? 'Creating Account...' : success ? 'Registration Successful!' : 'Create Account'}
          </button>
        </form>

        <div style={styles.loginLink}>
          Already have an account?{' '}
          <Link 
            to="/client-login" 
            style={styles.loginLinkText}
            onClick={(e) => {
              if (loading) e.preventDefault();
            }}
          >
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientRegister;