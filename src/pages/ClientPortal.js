import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ClientPortal() {
  const [activeTab, setActiveTab] = useState('quotes');
  const [clientQuotes, setClientQuotes] = useState([]);
  const [clientMessages, setClientMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const clientData = JSON.parse(localStorage.getItem('clientData') || '{}');

  useEffect(() => {
    if (!localStorage.getItem('clientToken')) {
      navigate('/client-login');
      return;
    }
    fetchClientData();
  }, [navigate]);

  const fetchClientData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('clientToken');
      
      // Fetch client's quotes
      const quotesResponse = await fetch(`https://lcirwanda-backend001.onrender.com/api/client-quotes?email=${clientData.email}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (quotesResponse.ok) {
        const quotesData = await quotesResponse.json();
        setClientQuotes(quotesData);
      }

      // Fetch client's messages
      const messagesResponse = await fetch(`https://lcirwanda-backend001.onrender.com/api/client-messages?email=${clientData.email}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (messagesResponse.ok) {
        const messagesData = await messagesResponse.json();
        setClientMessages(messagesData);
      }

    } catch (err) {
      setError('Failed to load data');
      console.error('Data fetch error:', err);
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
        return {};
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#f8fafc',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      background: '#1e3a8a',
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
    logo: {
      height: '40px',
      width: 'auto'
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
      color: '#1e3a8a',
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
      color: '#1e3a8a',
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
      color: '#1e3a8a',
      borderBottomColor: '#1e3a8a',
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
      display: 'inline-block'
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
      borderTop: '3px solid #1e3a8a',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 1rem'
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
              <p style={styles.clientName}>{clientData.fullName}</p>
              <p style={styles.clientEmail}>{clientData.email}</p>
            </div>
            <button style={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.welcomeSection}>
          <h1 style={styles.welcomeTitle}>Welcome back, {clientData.fullName}!</h1>
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
              <h2 style={{ marginBottom: '1.5rem', color: '#1e3a8a' }}>My Translation Requests</h2>
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
                        <th style={styles.th}>Submitted</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Admin Reply</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clientQuotes.map((quote, index) => {
                        const statusStyles = getStatusStyles(quote.status || 'pending');
                        return (
                          <tr key={index}>
                            <td style={styles.td}>
                              <strong>{quote.service}</strong>
                              <br />
                              <small style={{ color: '#6b7280' }}>{quote.documentType}</small>
                            </td>
                            <td style={styles.td}>
                              {quote.sourceLanguage} → {quote.targetLanguage}
                            </td>
                            <td style={styles.td}>{formatDate(quote.submittedAt)}</td>
                            <td style={styles.td}>
                              <span style={{ ...styles.statusBadge, ...statusStyles }}>
                                {quote.status || 'pending'}
                              </span>
                            </td>
                            <td style={styles.td}>
                              {quote.adminReply || 'No reply yet'}
                            </td>
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
              <h2 style={{ marginBottom: '1.5rem', color: '#1e3a8a' }}>My Messages</h2>
              {clientMessages.length === 0 ? (
                <div style={styles.emptyState}>
                  <div style={styles.emptyIcon}>💬</div>
                  <h3>No messages yet</h3>
                  <p>Send us a message through the contact form</p>
                </div>
              ) : (
                <div>
                  {clientMessages.map((message, index) => (
                    <div key={index} style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      marginBottom: '1rem',
                      background: index % 2 === 0 ? '#f8fafc' : 'white'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <strong>{message.subject}</strong>
                        <small style={{ color: '#6b7280' }}>{formatDate(message.submittedAt)}</small>
                      </div>
                      <p style={{ marginBottom: '1rem' }}>{message.message}</p>
                      {message.adminReply && (
                        <div style={{
                          background: '#eff6ff',
                          borderLeft: '4px solid #3b82f6',
                          padding: '1rem',
                          borderRadius: '4px'
                        }}>
                          <strong>Admin Reply:</strong>
                          <p style={{ margin: '0.5rem 0 0 0' }}>{message.adminReply}</p>
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