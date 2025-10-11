import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ClientPortal() {
  const [activeTab, setActiveTab] = useState('quotes');
  const [clientQuotes, setClientQuotes] = useState([]);
  const [clientMessages, setClientMessages] = useState([]);
  const [clientInfo, setClientInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('clientToken')) {
      navigate('/client-login');
      return;
    }
    fetchClientDashboard();
  }, [navigate]);

  const fetchClientDashboard = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem('clientToken');
      const clientData = JSON.parse(localStorage.getItem('clientData') || '{}');

      console.log('Fetching dashboard with token:', token ? 'Token exists' : 'No token');
      console.log('Client data:', clientData);

      const response = await fetch(`https://lcirwanda-backend001.onrender.com/api/users/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Dashboard response status:', response.status);

      if (response.status === 401) {
        // Token is invalid, redirect to login
        localStorage.removeItem('clientToken');
        localStorage.removeItem('clientData');
        navigate('/client-login');
        return;
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const dashboardData = await response.json();
      console.log('Dashboard data received:', dashboardData);
      
      setClientInfo(dashboardData.user || {});
      setClientQuotes(dashboardData.quotes || []);
      setClientMessages(dashboardData.messages || []);

    } catch (err) {
      console.error('Dashboard fetch error:', err);
      
      if (err.message.includes('401') || err.message.includes('token')) {
        // Token related error, redirect to login
        localStorage.removeItem('clientToken');
        localStorage.removeItem('clientData');
        navigate('/client-login');
        return;
      }
      
      setError(err.message || 'Failed to load dashboard data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('clientToken');
    localStorage.removeItem('clientData');
    navigate('/client-login');
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'pending':
        return { backgroundColor: '#fefce8', color: '#ca8a04', borderColor: '#fde047' };
      case 'inProgress':
        return { backgroundColor: '#eff6ff', color: '#3b82f6', borderColor: '#93c5fd' };
      case 'completed':
        return { backgroundColor: '#f0fdf4', color: '#16a34a', borderColor: '#86efac' };
      case 'cancelled':
        return { backgroundColor: '#fef2f2', color: '#ef4444', borderColor: '#fca5a5' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#6b7280', borderColor: '#d1d5db' };
    }
  };

  const getMessageStatusStyles = (status) => {
    switch (status) {
      case 'pending':
        return { backgroundColor: '#fefce8', color: '#ca8a04', borderColor: '#fde047' };
      case 'replied':
        return { backgroundColor: '#eff6ff', color: '#3b82f6', borderColor: '#93c5fd' };
      case 'resolved':
        return { backgroundColor: '#f0fdf4', color: '#16a34a', borderColor: '#86efac' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#6b7280', borderColor: '#d1d5db' };
    }
  };

  const getUrgencyStyles = (urgency) => {
    switch (urgency) {
      case 'urgent':
        return { backgroundColor: '#fef2f2', color: '#ef4444' };
      case 'very-urgent':
        return { backgroundColor: '#fef2f2', color: '#dc2626', fontWeight: 'bold' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#6b7280' };
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#f8fafc',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      background: '#0a1d51',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    clientInfo: {
      textAlign: 'right'
    },
    clientName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      margin: 0
    },
    clientEmail: {
      fontSize: '0.9rem',
      opacity: 0.8,
      margin: 0
    },
    logoutButton: {
      background: 'rgba(255,255,255,0.2)',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.3)',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      marginLeft: '1rem'
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    },
    welcomeSection: {
      background: 'white',
      borderRadius: '12px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      textAlign: 'center'
    },
    welcomeTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '0.5rem'
    },
    welcomeSubtitle: {
      fontSize: '1.1rem',
      color: '#6b7280',
      marginBottom: '1.5rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    },
    statCard: {
      background: 'white',
      borderRadius: '8px',
      padding: '1.5rem',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#0a1d51',
      margin: '0.5rem 0'
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#6b7280',
      margin: 0
    },
    tabContainer: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      borderBottom: '1px solid #e5e7eb'
    },
    tab: {
      background: 'none',
      border: 'none',
      padding: '1rem 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
      color: '#6b7280'
    },
    activeTab: {
      color: '#0a1d51',
      borderBottomColor: '#0a1d51',
      fontWeight: '600'
    },
    contentSection: {
      background: 'white',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    tableHeader: {
      background: '#f8fafc',
      borderBottom: '1px solid #e5e7eb'
    },
    th: {
      padding: '1rem',
      textAlign: 'left',
      fontWeight: '600',
      color: '#374151',
      fontSize: '0.9rem'
    },
    td: {
      padding: '1rem',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '0.9rem'
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.8rem',
      fontWeight: '500',
      display: 'inline-block',
      border: '1px solid'
    },
    emptyState: {
      textAlign: 'center',
      padding: '3rem',
      color: '#6b7280'
    },
    emptyIcon: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    loadingContainer: {
      textAlign: 'center',
      padding: '3rem'
    },
    spinner: {
      width: '32px',
      height: '32px',
      border: '3px solid #f3f4f6',
      borderTop: '3px solid #0a1d51',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 1rem'
    },
    errorContainer: {
      background: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      color: '#dc2626'
    },
    retryButton: {
      background: '#0a1d51',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      marginTop: '0.5rem'
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <div style={styles.spinner}></div>
          <p>Loading your portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoSection}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>LCI Client Portal</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={styles.clientInfo}>
              <p style={styles.clientName}>{clientInfo.fullName || 'User'}</p>
              <p style={styles.clientEmail}>{clientInfo.email || 'No email'}</p>
            </div>
            <button style={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main style={styles.mainContent}>
        {error && (
          <div style={styles.errorContainer}>
            <strong>Error:</strong> {error}
            <button style={styles.retryButton} onClick={fetchClientDashboard}>
              Retry
            </button>
          </div>
        )}

        <div style={styles.welcomeSection}>
          <h1 style={styles.welcomeTitle}>Welcome back, {clientInfo.fullName || 'User'}!</h1>
          <p style={styles.welcomeSubtitle}>
            Track your translation projects and communicate with our team
          </p>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statValue}>{clientQuotes.length}</div>
            <div style={styles.statLabel}>Total Quotes</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>
              {clientQuotes.filter(q => q.status === 'completed').length}
            </div>
            <div style={styles.statLabel}>Completed</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>
              {clientQuotes.filter(q => q.status === 'inProgress').length}
            </div>
            <div style={styles.statLabel}>In Progress</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>{clientMessages.length}</div>
            <div style={styles.statLabel}>Messages</div>
          </div>
        </div>

        <div style={styles.tabContainer}>
          <button 
            style={{ ...styles.tab, ...(activeTab === 'quotes' ? styles.activeTab : {}) }}
            onClick={() => setActiveTab('quotes')}
          >
            My Quotes ({clientQuotes.length})
          </button>
          <button 
            style={{ ...styles.tab, ...(activeTab === 'messages' ? styles.activeTab : {}) }}
            onClick={() => setActiveTab('messages')}
          >
            My Messages ({clientMessages.length})
          </button>
        </div>

        <div style={styles.contentSection}>
          {activeTab === 'quotes' && (
            <>
              <h2 style={{ marginBottom: '1.5rem', color: '#0a1d51' }}>My Translation Requests</h2>
              {clientQuotes.length === 0 ? (
                <div style={styles.emptyState}>
                  <div style={styles.emptyIcon}>📋</div>
                  <h3>No quotes yet</h3>
                  <p>Submit your first translation request to get started</p>
                </div>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={styles.table}>
                    <thead style={styles.tableHeader}>
                      <tr>
                        <th style={styles.th}>Service</th>
                        <th style={styles.th}>Languages</th>
                        <th style={styles.th}>Word Count</th>
                        <th style={styles.th}>Urgency</th>
                        <th style={styles.th}>Submitted</th>
                        <th style={styles.th}>Status</th>
                        {/* <th style={styles.th}>Price</th> */}
                        {/* <th style={styles.th}>Admin Reply</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {clientQuotes.map((quote) => {
                        const statusStyles = getStatusStyles(quote.status || 'pending');
                        const urgencyStyles = getUrgencyStyles(quote.urgency);
                        return (
                          <tr key={quote.id}>
                            <td style={styles.td}>
                              <strong>{quote.service}</strong>
                              <br />
                              <small style={{ color: '#6b7280' }}>{quote.documentType}</small>
                            </td>
                            <td style={styles.td}>
                              {quote.sourceLanguage} → {quote.targetLanguage}
                            </td>
                            <td style={styles.td}>{quote.wordCount || 'N/A'}</td>
                            <td style={styles.td}>
                              <span style={{ ...styles.statusBadge, ...urgencyStyles }}>
                                {quote.urgency || 'standard'}
                              </span>
                            </td>
                            <td style={styles.td}>{formatDate(quote.submittedAt)}</td>
                            <td style={styles.td}>
                              <span style={{ ...styles.statusBadge, ...statusStyles }}>
                                {quote.status || 'pending'}
                              </span>
                            </td>
                            {/* <td style={styles.td}>
                              {quote.price ? `$${quote.price}` : 'Not quoted yet'}
                            </td> */}
                            {/* <td style={styles.td}>
                              {quote.adminReply || 'No reply yet'}
                              {quote.estimatedTime && (
                                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#6b7280' }}>
                                  <strong>Est. Time:</strong> {quote.estimatedTime}
                                </div>
                              )}
                            </td> */}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          {activeTab === 'messages' && (
            <>
              <h2 style={{ marginBottom: '1.5rem', color: '#0a1d51' }}>My Messages</h2>
              {clientMessages.length === 0 ? (
                <div style={styles.emptyState}>
                  <div style={styles.emptyIcon}>💬</div>
                  <h3>No messages yet</h3>
                  <p>Send us a message through the contact form</p>
                </div>
              ) : (
                <div>
                  {clientMessages.map((message) => (
                    <div key={message.id} style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      marginBottom: '1rem',
                      background: '#f8fafc'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <strong>{message.subject}</strong>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <span style={{ ...styles.statusBadge, ...getMessageStatusStyles(message.status) }}>
                            {message.status}
                          </span>
                          <small style={{ color: '#6b7280' }}>{formatDate(message.submittedAt)}</small>
                        </div>
                      </div>
                      <p style={{ marginBottom: '1rem', whiteSpace: 'pre-wrap' }}>{message.message}</p>
                      {message.adminReply && (
                        <div style={{
                          background: '#eff6ff',
                          borderLeft: '4px solid #3b82f6',
                          padding: '1rem',
                          borderRadius: '4px',
                          marginTop: '1rem'
                        }}>
                          {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <strong style={{ color: '#1e40af' }}>Admin Reply:</strong>
                            <small style={{ color: '#6b7280' }}>{formatDate(message.updatedAt)}</small>
                          </div> */}
                          <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{message.adminReply}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default ClientPortal;