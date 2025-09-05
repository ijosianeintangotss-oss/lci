import React, { useEffect, useState, useCallback } from 'react';

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

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'Arial, sans-serif'
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
      alignItems: 'center'
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

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        // Removed 'credentials: 'include'' to avoid potential CORS/network issues since no auth is required
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('API response is not an array');
      }

      // Validate and enhance quotes data
      const validQuotes = data.filter(q => 
        q && 
        typeof q === 'object' && 
        'fullName' in q && 
        'email' in q && 
        'service' in q && 
        'documentType' in q && 
        'sourceLanguage' in q && 
        'targetLanguage' in q && 
        'turnaround' in q && 
        'submittedAt' in q
        // Removed strict check for 'paymentScreenshot' since it can be null/undefined in schema
      ).map(quote => ({
        ...quote,
        status: quote.status || 'pending',
        id: quote.id || `quote_${Date.now()}_${Math.random()}`
      }));

      setQuotes(validQuotes);
      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Failed to fetch quotes: ${err.message}`);
      setLoading(false);
    }
  };

  const calculateStats = useCallback(() => {
    const today = new Date().toDateString();
    const todayRequests = quotes.filter(q => 
      new Date(q.submittedAt).toDateString() === today
    ).length;

    const statusCounts = quotes.reduce((acc, quote) => {
      const status = quote.status || 'pending';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    setStats({
      total: quotes.length,
      pending: statusCounts.pending || 0,
      inProgress: statusCounts.inProgress || 0,
      completed: statusCounts.completed || 0,
      todayRequests
    });
  }, [quotes]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    calculateStats();
  }, [calculateStats]);

  const updateQuoteStatus = async (quoteId, newStatus) => {
    try {
      // Update locally first for immediate feedback
      setQuotes(prev => prev.map(quote => 
        quote.id === quoteId ? { ...quote, status: newStatus } : quote
      ));

      // Make the API call to update the status (uncommented and added error handling)
      const response = await fetch(`http://localhost:5000/api/quotes/${quoteId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
      }
      
    } catch (err) {
      console.error('Error updating status:', err);
      // Revert on error
      fetchQuotes();
    }
  };

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.service?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || (quote.status || 'pending') === statusFilter;
    const matchesService = serviceFilter === 'all' || quote.service === serviceFilter;
    
    return matchesSearch && matchesStatus && matchesService;
  });

  const sortedQuotes = [...filteredQuotes].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];
    
    if (sortBy === 'submittedAt') {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    }
    
    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const getStatusStyles = (status) => {
    const colors = {
      pending: { backgroundColor: '#fef3c7', color: '#92400e', borderColor: '#fed7aa' },
      inProgress: { backgroundColor: '#dbeafe', color: '#1e40af', borderColor: '#bfdbfe' },
      completed: { backgroundColor: '#d1fae5', color: '#047857', borderColor: '#a7f3d0' },
      cancelled: { backgroundColor: '#fee2e2', color: '#dc2626', borderColor: '#fca5a5' }
    };
    return colors[status] || colors.pending;
  };

  const getUrgencyStyles = (turnaround) => {
    if (turnaround?.includes('Rush') || turnaround?.includes('24')) {
      return { borderLeft: '4px solid #dc2626', backgroundColor: '#fef2f2' };
    }
    if (turnaround?.includes('48') || turnaround?.includes('2-3')) {
      return { borderLeft: '4px solid #d97706', backgroundColor: '#fffbeb' };
    }
    return { borderLeft: '4px solid #059669', backgroundColor: '#f0fdf4' };
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

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingContent}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.title}>Translation Admin Dashboard</h1>
            <p style={styles.subtitle}>Manage translation quote requests and track progress</p>
          </div>
          <button 
            style={styles.refreshButton}
            onClick={fetchQuotes}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2c5aa0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3182ce'}
          >
            <span>🔄</span> Refresh
          </button>
        </div>
      </div>

      <div style={styles.mainContent}>
        {/* Stats Cards */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{...styles.statIcon, backgroundColor: '#dbeafe'}}>📊</div>
            <div>
              <p style={styles.statLabel}>Total Requests</p>
              <p style={{...styles.statValue, color: '#1a202c'}}>{stats.total}</p>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={{...styles.statIcon, backgroundColor: '#fef3c7'}}>⏳</div>
            <div>
              <p style={styles.statLabel}>Pending</p>
              <p style={{...styles.statValue, color: '#d69e2e'}}>{stats.pending}</p>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={{...styles.statIcon, backgroundColor: '#dbeafe'}}>🔄</div>
            <div>
              <p style={styles.statLabel}>In Progress</p>
              <p style={{...styles.statValue, color: '#3182ce'}}>{stats.inProgress}</p>
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
            <div style={{...styles.statIcon, backgroundColor: '#fed7aa'}}>📅</div>
            <div>
              <p style={styles.statLabel}>Today</p>
              <p style={{...styles.statValue, color: '#ea580c'}}>{stats.todayRequests}</p>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div style={styles.filtersCard}>
          <div style={styles.filtersGrid}>
            <div style={styles.filterGroup}>
              <label style={styles.label}>Search</label>
              <input
                style={styles.input}
                type="text"
                placeholder="Search by name, email, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={(e) => e.target.style.borderColor = '#3182ce'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <div style={styles.filterGroup}>
              <label style={styles.label}>Status</label>
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
              <label style={styles.label}>Service</label>
              <select
                style={styles.select}
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
              >
                <option value="all">All Services</option>
                <option value="translation">Translation</option>
                <option value="interpretation">Interpretation</option>
                <option value="localization">Localization</option>
                <option value="proofreading">Proofreading</option>
                <option value="transcription">Transcription</option>
              </select>
            </div>

            <div style={styles.filterGroup}>
              <label style={styles.label}>Sort By</label>
              <div style={styles.sortContainer}>
                <select
                  style={{...styles.select, flex: 1}}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="submittedAt">Date</option>
                  <option value="fullName">Name</option>
                  <option value="service">Service</option>
                  <option value="status">Status</option>
                </select>
                <button
                  style={styles.sortButton}
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
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
                    <th style={styles.th}>Client</th>
                    <th style={styles.th}>Service</th>
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
  );
}

export default AdminTranslationDashboard;