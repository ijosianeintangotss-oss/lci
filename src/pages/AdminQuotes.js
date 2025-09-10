import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminTranslationDashboard() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('submittedAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Stats state
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
    todayRequests: 0
  });

  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'Arial, sans-serif',
      display: 'flex'
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#1a202c',
      color: 'white',
      padding: '24px',
      minHeight: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    sidebarLink: {
      color: '#a0aec0',
      textDecoration: 'none',
      fontSize: '16px',
      padding: '12px 16px',
      borderRadius: '6px',
      transition: 'background-color 0.2s, color 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    sidebarLinkActive: {
      backgroundColor: '#2d3748',
      color: 'white'
    },
    sidebarLinkHover: {
      backgroundColor: '#2d3748',
      color: 'white'
    },
    contentContainer: {
      flex: 1,
      marginLeft: '250px'
    },
    header: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '24px 0'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '32px'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1a202c',
      margin: 0
    },
    subtitle: {
      fontSize: '14px',
      color: '#718096',
      marginTop: '4px'
    },
    refreshButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      padding: '10px 16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'background-color 0.2s'
    },
    logoutButton: {
      backgroundColor: '#ef4444',
      color: 'white',
      padding: '10px 16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'background-color 0.2s'
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 24px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '24px',
      display: 'flex',
      alignItems: 'center'
    },
    statIcon: {
      padding: '8px',
      borderRadius: '8px',
      fontSize: '24px',
      marginRight: '16px'
    },
    statLabel: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#4a5568',
      margin: 0
    },
    statValue: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '4px 0 0 0'
    },
    filtersCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '24px',
      marginBottom: '24px'
    },
    filtersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px'
    },
    filterGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    select: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer'
    },
    sortContainer: {
      display: 'flex',
      gap: '8px'
    },
    sortButton: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '16px'
    },
    errorCard: {
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '6px',
      padding: '16px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'flex-start'
    },
    errorIcon: {
      color: '#f87171',
      fontSize: '20px',
      marginRight: '12px'
    },
    errorTitle: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#991b1b',
      margin: 0
    },
    errorMessage: {
      fontSize: '14px',
      color: '#b91c1c',
      margin: '4px 0 0 0'
    },
    emptyState: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '64px 32px',
      textAlign: 'center'
    },
    emptyIcon: {
      fontSize: '64px',
      marginBottom: '16px',
      display: 'block'
    },
    emptyTitle: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#1a202c',
      margin: '0 0 8px 0'
    },
    emptyText: {
      color: '#718096',
      margin: 0
    },
    tableCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    tableContainer: {
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    tableHeader: {
      backgroundColor: '#f7fafc'
    },
    th: {
      padding: '12px 24px',
      textAlign: 'left',
      fontSize: '12px',
      fontWeight: '500',
      color: '#4a5568',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderBottom: '1px solid #e2e8f0'
    },
    td: {
      padding: '16px 24px',
      borderBottom: '1px solid #e2e8f0',
      fontSize: '14px'
    },
    clientName: {
      fontWeight: '500',
      color: '#1a202c',
      margin: 0
    },
    clientEmail: {
      color: '#718096',
      fontSize: '14px',
      margin: '2px 0 0 0'
    },
    clientPhone: {
      color: '#718096',
      fontSize: '14px',
      margin: '2px 0 0 0'
    },
    serviceMain: {
      color: '#1a202c',
      margin: 0
    },
    serviceDoc: {
      color: '#718096',
      fontSize: '14px',
      margin: '2px 0 0 0'
    },
    languageContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    languageArrow: {
      margin: '0 8px',
      color: '#718096'
    },
    statusSelect: {
      fontSize: '12px',
      padding: '4px 8px',
      borderRadius: '16px',
      border: '1px solid',
      fontWeight: '500',
      cursor: 'pointer'
    },
    urgencyRow: {
      transition: 'background-color 0.2s'
    },
    viewButton: {
      color: '#3182ce',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      padding: 0
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflow: 'auto',
      padding: '24px'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      paddingBottom: '16px',
      borderBottom: '1px solid #e2e8f0'
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1a202c',
      margin: 0
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '4px'
    },
    modalGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    },
    modalSection: {
      marginBottom: '24px'
    },
    modalSectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '12px'
    },
    modalText: {
      margin: '8px 0',
      color: '#4b5563'
    },
    modalLabel: {
      fontWeight: '500',
      marginRight: '8px'
    },
    modalFooter: {
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    modalCloseBtn: {
      padding: '8px 16px',
      backgroundColor: '#e5e7eb',
      color: '#374151',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '500'
    },
    loadingContainer: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loadingContent: {
      textAlign: 'center'
    },
    spinner: {
      width: '48px',
      height: '48px',
      border: '2px solid #e2e8f0',
      borderTop: '2px solid #3182ce',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 16px'
    },
    loadingText: {
      color: '#4a5568',
      margin: 0
    },
    fileLink: {
      color: '#3182ce',
      textDecoration: 'none',
      fontSize: '14px'
    }
  };

  // Add CSS animation for spinner
  const spinnerStyle = document.createElement('style');
  spinnerStyle.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(spinnerStyle);

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://lcirwanda-backend001.onrender.com/api/quotes');
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await response.json();
      setQuotes(data);

      // Calculate stats
      const today = new Date().setHours(0, 0, 0, 0);
      const statsData = {
        total: data.length,
        pending: data.filter(q => q.status === 'pending').length,
        inProgress: data.filter(q => q.status === 'inProgress').length,
        completed: data.filter(q => q.status === 'completed').length,
        todayRequests: data.filter(q => new Date(q.submittedAt).setHours(0, 0, 0, 0) === today).length
      };
      setStats(statsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const updateQuoteStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`https://lcirwanda-backend001.onrender.com/api/quotes/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      fetchQuotes();
    } catch (err) {
      console.error('Status update error:', err);
    }
  };

  const handleSort = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
  };

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          quote.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || quote.status === statusFilter;
    const matchesService = serviceFilter === 'all' || quote.service === serviceFilter;
    return matchesSearch && matchesStatus && matchesService;
  });

  const sortedQuotes = [...filteredQuotes].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];

    if (sortBy === 'submittedAt') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const getUrgencyStyles = (turnaround) => {
    switch (turnaround) {
      case 'Standard':
        return { backgroundColor: '#f0fdf4', borderLeft: '4px solid #22c55e' };
      case 'Express':
        return { backgroundColor: '#fefce8', borderLeft: '4px solid #eab308' };
      case 'Urgent':
        return { backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444' };
      default:
        return {};
    }
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleLogout = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingContent}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading translation requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
            Admin Dashboard
          </h2>
        </div>
        <a
          href="/admin-quotes"
          style={{
            ...styles.sidebarLink,
            ...(window.location.pathname === '/AdminQuotes' ? styles.sidebarLinkActive : {})
          }}
          onMouseEnter={(e) => {
            if (window.location.pathname !== '/AdminQuotes') {
              e.target.style.backgroundColor = styles.sidebarLinkHover.backgroundColor;
              e.target.style.color = styles.sidebarLinkHover.color;
            }
          }}
          onMouseLeave={(e) => {
            if (window.location.pathname !== '/AdminQuotes') {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#a0aec0';
            }
          }}
        >
          📋 Quotes
        </a>
        <a
          href="/messages"
          style={{
            ...styles.sidebarLink,
            ...(window.location.pathname === '/messages' ? styles.sidebarLinkActive : {})
          }}
          onMouseEnter={(e) => {
            if (window.location.pathname !== '/messages') {
              e.target.style.backgroundColor = styles.sidebarLinkHover.backgroundColor;
              e.target.style.color = styles.sidebarLinkHover.color;
            }
          }}
          onMouseLeave={(e) => {
            if (window.location.pathname !== '/messages') {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#a0aec0';
            }
          }}
        >
          💬 Messages
        </a>
      </div>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div>
              <h1 style={styles.title}>Translation Request Dashboard</h1>
              <p style={styles.subtitle}>Manage and track all quote requests</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
                style={styles.refreshButton}
                onClick={fetchQuotes}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3182ce'}
              >
                🔄 Refresh
              </button>
              <button 
                style={styles.logoutButton}
                onClick={handleLogout}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </header>

        <div style={styles.mainContent}>
          {/* Stats */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: '#dbeafe'}}>📋</div>
              <div>
                <p style={styles.statLabel}>Total Requests</p>
                <p style={{...styles.statValue, color: '#1a202c'}}>{stats.total}</p>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: '#fef3c7'}}>⏳</div>
              <div>
                <p style={styles.statLabel}>Pending</p>
                <p style={{...styles.statValue, color: '#d97706'}}>{stats.pending}</p>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: '#dbeafe'}}>🔄</div>
              <div>
                <p style={styles.statLabel}>In Progress</p>
                <p style={{...styles.statValue, color: '#2563eb'}}>{stats.inProgress}</p>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: '#d1fae5'}}>✅</div>
              <div>
                <p style={styles.statLabel}>Completed</p>
                <p style={{...styles.statValue, color: '#059669'}}>{stats.completed}</p>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: '#e0e7ff'}}>📅</div>
              <div>
                <p style={styles.statLabel}>Today's Requests</p>
                <p style={{...styles.statValue, color: '#4f46e5'}}>{stats.todayRequests}</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div style={styles.filtersCard}>
            <div style={styles.filtersGrid}>
              <div style={styles.filterGroup}>
                <label style={styles.label}>Search Client</label>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <div style={styles.filterGroup}>
                <label style={styles.label}>Status Filter</label>
                <select 
                  style={styles.select}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div style={styles.filterGroup}>
                <label style={styles.label}>Service Filter</label>
                <select 
                  style={styles.select}
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                >
                  <option value="all">All Services</option>
                  <option value="Translation">Translation</option>
                  <option value="Interpretation">Interpretation</option>
                  <option value="Localization">Localization</option>
                </select>
              </div>
              <div style={styles.filterGroup}>
                <label style={styles.label}>Sort By</label>
                <div style={styles.sortContainer}>
                  <button 
                    style={{
                      ...styles.sortButton,
                      backgroundColor: sortBy === 'submittedAt' ? '#dbeafe' : 'white'
                    }}
                    onClick={() => handleSort('submittedAt')}
                  >
                    Date {sortBy === 'submittedAt' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </button>
                  <button 
                    style={{
                      ...styles.sortButton,
                      backgroundColor: sortBy === 'fullName' ? '#dbeafe' : 'white'
                    }}
                    onClick={() => handleSort('fullName')}
                  >
                    Name {sortBy === 'fullName' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </button>
                  <button 
                    style={{
                      ...styles.sortButton,
                      backgroundColor: sortBy === 'service' ? '#dbeafe' : 'white'
                    }}
                    onClick={() => handleSort('service')}
                  >
                    Service {sortBy === 'service' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div style={styles.errorCard}>
              <span style={styles.errorIcon}>⚠️</span>
              <div>
                <h3 style={styles.errorTitle}>Error</h3>
                <p style={styles.errorMessage}>{error}</p>
              </div>
            </div>
          )}

          {/* Quotes Table */}
          {sortedQuotes.length === 0 ? (
            <div style={styles.emptyState}>
              <span style={styles.emptyIcon}>📋</span>
              <h3 style={styles.emptyTitle}>No translation requests found</h3>
              <p style={styles.emptyText}>Requests will appear here when customers submit quote forms.</p>
            </div>
          ) : (
            <div style={styles.tableCard}>
              <div style={styles.tableContainer}>
                <table style={styles.table}>
                  <thead style={styles.tableHeader}>
                    <tr>
                      <th style={styles.th}>Client Full Names</th>
                      {/* <th style={styles.th}>Service</th> */}
                      <th style={styles.th}>Languages</th>
                      <th style={styles.th}>Urgency</th>
                      <th style={styles.th}>Status</th>
                      <th style={styles.th}>Submitted</th>
                      <th style={styles.th}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedQuotes.map((quote, index) => {
                      const urgencyStyles = getUrgencyStyles(quote.turnaround);
                      const statusStyles = getStatusStyles(quote.status || 'pending');

                      return (
                        <tr 
                          key={quote.id || index} 
                          style={{...styles.urgencyRow, ...urgencyStyles}}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7fafc'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = urgencyStyles.backgroundColor}
                        >
                          <td style={styles.td}>
                            <div>
                              <p style={styles.clientName}>{quote.fullName || 'N/A'}</p>
                              <p style={styles.clientEmail}>{quote.email || 'N/A'}</p>
                              {quote.phone && <p style={styles.clientPhone}>{quote.phone}</p>}
                            </div>
                          </td>
                          <td style={styles.td}>
                            <p style={styles.serviceMain}>{quote.service || 'N/A'}</p>
                            <p style={styles.serviceDoc}>{quote.documentType || 'N/A'}</p>
                          </td>
                          <td style={styles.td}>
                            <div style={styles.languageContainer}>
                              <span>{quote.sourceLanguage || 'N/A'}</span>
                              <span style={styles.languageArrow}>→</span>
                              <span>{quote.targetLanguage || 'N/A'}</span>
                            </div>
                          </td>
                          <td style={styles.td}>
                            <p style={styles.serviceMain}>{quote.turnaround || 'N/A'}</p>
                            {quote.wordCount && (
                              <p style={styles.serviceDoc}>{quote.wordCount} words</p>
                            )}
                          </td>
                          <td style={styles.td}>
                            <select
                              value={quote.status || 'pending'}
                              onChange={(e) => updateQuoteStatus(quote.id, e.target.value)}
                              style={{...styles.statusSelect, ...statusStyles}}
                            >
                              <option value="pending">Pending</option>
                              <option value="inProgress">In Progress</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td style={styles.td}>
                            {formatDate(quote.submittedAt)}
                          </td>
                          <td style={styles.td}>
                            <button
                              style={styles.viewButton}
                              onClick={() => {
                                setSelectedQuote(quote);
                                setShowModal(true);
                              }}
                              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal for Quote Details */}
        {showModal && selectedQuote && (
          <div style={styles.modal} onClick={() => setShowModal(false)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>Quote Request Details</h3>
                <button
                  style={styles.closeButton}
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              
              <div style={styles.modalGrid}>
                <div>
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Client Information</h4>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Name:</span> {selectedQuote.fullName}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Email:</span> {selectedQuote.email}
                    </p>
                    {selectedQuote.phone && (
                      <p style={styles.modalText}>
                        <span style={styles.modalLabel}>Phone:</span> {selectedQuote.phone}
                      </p>
                    )}
                  </div>
                  
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Service Details</h4>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Service:</span> {selectedQuote.service}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Document Type:</span> {selectedQuote.documentType}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Languages:</span> {selectedQuote.sourceLanguage} → {selectedQuote.targetLanguage}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Turnaround:</span> {selectedQuote.turnaround}
                    </p>
                    {selectedQuote.wordCount && (
                      <p style={styles.modalText}>
                        <span style={styles.modalLabel}>Word Count:</span> {selectedQuote.wordCount}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Files</h4>
                    {selectedQuote.files && selectedQuote.files.length > 0 ? (
                      <ul style={{margin: 0, paddingLeft: '20px'}}>
                        {selectedQuote.files.map((file, idx) => (
                          <li key={idx} style={{margin: '8px 0'}}>
                            <a
                              href={`http://localhost:5000${file}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={styles.fileLink}
                            >
                              📄 {file.split('/').pop()}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{...styles.modalText, color: '#718096'}}>No files uploaded</p>
                    )}
                  </div>
                  
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Payment Screenshot</h4>
                    {selectedQuote.paymentScreenshot ? (
                      <a
                        href={`http://localhost:5000${selectedQuote.paymentScreenshot}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.fileLink}
                      >
                        📸 View Payment Screenshot
                      </a>
                    ) : (
                      <p style={{...styles.modalText, color: '#718096'}}>No payment screenshot</p>
                    )}
                  </div>
                  
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Additional Requirements</h4>
                    <p style={{...styles.modalText, color: '#4b5563'}}>
                      {selectedQuote.additionalRequirements || 'None specified'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={styles.modalFooter}>
                <button
                  style={styles.modalCloseBtn}
                  onClick={() => setShowModal(false)}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#d1d5db'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminTranslationDashboard;