import React, { useEffect, useState, useCallback } from 'react';
import AdminLayout from './AdminLayout';

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messageSearchTerm, setMessageSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [stats, setStats] = useState({
    totalMessages: 0,
    todayMessages: 0,
  });

  const styles = {
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px',
    },
    dashboardHeader: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '16px 0',
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1a202c',
      margin: 0,
    },
    subtitle: {
      fontSize: '12px',
      color: '#718096',
      marginTop: '2px',
    },
    refreshButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12px',
      fontWeight: '500',
      transition: 'background-color 0.2s',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
      marginBottom: '16px',
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '6px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
    },
    statIcon: {
      padding: '6px',
      borderRadius: '6px',
      fontSize: '18px',
      marginRight: '12px',
    },
    statLabel: {
      fontSize: '12px',
      fontWeight: '500',
      color: '#4a5568',
      margin: 0,
    },
    statValue: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '2px 0 0 0',
    },
    filtersCard: {
      backgroundColor: 'white',
      borderRadius: '6px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '16px',
      marginBottom: '16px',
    },
    filterGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '12px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '6px',
    },
    input: {
      width: '100%',
      padding: '6px 8px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      fontSize: '12px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    tableCard: {
      backgroundColor: 'white',
      borderRadius: '6px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginBottom: '16px',
    },
    tableContainer: {
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#f7fafc',
    },
    th: {
      padding: '8px 12px',
      textAlign: 'left',
      fontSize: '11px',
      fontWeight: '500',
      color: '#4a5568',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderBottom: '1px solid #e2e8f0',
    },
    td: {
      padding: '12px 16px',
      borderBottom: '1px solid #e2e8f0',
      fontSize: '12px',
    },
    clientName: {
      fontWeight: '500',
      color: '#1a202c',
      margin: 0,
    },
    clientEmail: {
      color: '#718096',
      fontSize: '12px',
      margin: '1px 0 0 0',
    },
    viewButton: {
      color: '#3182ce',
      textDecoration: 'none',
      fontSize: '12px',
      fontWeight: '500',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      padding: 0,
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
      padding: '20px',
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '6px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      maxHeight: '80vh',
      overflow: 'auto',
      padding: '16px',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
      paddingBottom: '8px',
      borderBottom: '1px solid #e2e8f0',
    },
    modalTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1a202c',
      margin: 0,
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '20px',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '4px',
    },
    modalSection: {
      marginBottom: '12px',
    },
    modalSectionTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '6px',
    },
    modalText: {
      margin: '4px 0',
      color: '#4b5563',
      fontSize: '12px',
    },
    modalLabel: {
      fontWeight: '500',
      marginRight: '6px',
    },
    modalFooter: {
      marginTop: '12px',
      paddingTop: '8px',
      borderTop: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    modalCloseBtn: {
      padding: '6px 12px',
      backgroundColor: '#e5e7eb',
      color: '#374151',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '500',
    },
    loadingContainer: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingContent: {
      textAlign: 'center',
    },
    spinner: {
      width: '32px',
      height: '32px',
      border: '2px solid #e2e8f0',
      borderTop: '2px solid #3182ce',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 12px',
    },
    loadingText: {
      color: '#4a5568',
      margin: 0,
      fontSize: '14px',
    },
    emptyState: {
      backgroundColor: 'white',
      borderRadius: '6px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '32px 16px',
      textAlign: 'center',
    },
    emptyIcon: {
      fontSize: '48px',
      marginBottom: '12px',
      display: 'block',
    },
    emptyTitle: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#1a202c',
      margin: '0 0 6px 0',
    },
    emptyText: {
      color: '#718096',
      margin: 0,
    },
  };

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching messages from API...');
      
      const response = await fetch('https://lcirwanda-backend001.onrender.com/api/public/messages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response error:', errorText);
        throw new Error(`Failed to fetch messages: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Fetched messages data:', data);
      
      // Process the data to ensure proper date handling and field mapping
      const processedData = data.map(message => ({
        ...message,
        // Map fields for consistency
        sender: message.fullName || 'Unknown Sender',
        email: message.email || 'No email',
        subject: message.subject || 'No Subject',
        message: message.message || 'No message content',
        // Ensure we have a valid date
        sentAt: message.sentAt && !isNaN(new Date(message.sentAt).getTime()) 
          ? message.sentAt 
          : new Date().toISOString()
      }));
      
      setMessages(processedData);

      const today = new Date().setHours(0, 0, 0, 0);
      const statsData = {
        totalMessages: processedData.length,
        todayMessages: processedData.filter(
          (m) => {
            const messageDate = new Date(m.sentAt);
            return !isNaN(messageDate.getTime()) && messageDate.setHours(0, 0, 0, 0) === today;
          }
        ).length,
      };
      setStats(statsData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    try {
      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        console.warn('Invalid date:', dateString);
        return 'Invalid Date';
      }
      
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Date Error';
    }
  };

  const filteredMessages = messages.filter((message) =>
    (message.sender && message.sender.toLowerCase().includes(messageSearchTerm.toLowerCase())) ||
    (message.subject && message.subject.toLowerCase().includes(messageSearchTerm.toLowerCase())) ||
    (message.message && message.message.toLowerCase().includes(messageSearchTerm.toLowerCase())) ||
    (message.email && message.email.toLowerCase().includes(messageSearchTerm.toLowerCase()))
  );

  if (loading) {
    return (
      <AdminLayout>
        <div style={styles.loadingContainer}>
          <div style={styles.loadingContent}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Loading messages...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div style={styles.mainContent}>
        <div style={styles.dashboardHeader}>
          <div style={styles.headerContent}>
            <div>
              <h1 style={styles.title}>Customer Messages</h1>
              <p style={styles.subtitle}>Manage and respond to customer inquiries</p>
            </div>
            <button 
              style={styles.refreshButton} 
              onClick={fetchMessages}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2c5282'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3182ce'}
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, backgroundColor: '#e0e7ff' }}>💬</div>
            <div>
              <p style={styles.statLabel}>Total Messages</p>
              <p style={{ ...styles.statValue, color: '#4f46e5' }}>{stats.totalMessages}</p>
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, backgroundColor: '#dbeafe' }}>📅</div>
            <div>
              <p style={styles.statLabel}>Today's Messages</p>
              <p style={{ ...styles.statValue, color: '#2563eb' }}>{stats.todayMessages}</p>
            </div>
          </div>
        </div>

        <div style={styles.filtersCard}>
          <div style={styles.filterGroup}>
            <label style={styles.label}>Search Messages</label>
            <input
              style={styles.input}
              type="text"
              placeholder="Search by sender, subject, or message content..."
              value={messageSearchTerm}
              onChange={(e) => setMessageSearchTerm(e.target.value)}
              onFocus={(e) => e.target.style.borderColor = '#3182ce'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '4px',
            padding: '12px',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'flex-start',
          }}>
            <span style={{ color: '#f87171', fontSize: '16px', marginRight: '8px' }}>⚠️</span>
            <div>
              <h3 style={{ fontSize: '12px', fontWeight: '500', color: '#991b1b', margin: 0 }}>
                Error
              </h3>
              <p style={{ fontSize: '12px', color: '#b91c1c', margin: '2px 0 0 0' }}>
                {error}
              </p>
              <button 
                onClick={fetchMessages}
                style={{
                  marginTop: '8px',
                  padding: '4px 8px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '11px',
                  cursor: 'pointer'
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {filteredMessages.length === 0 ? (
          <div style={styles.emptyState}>
            <span style={styles.emptyIcon}>💬</span>
            <h3 style={styles.emptyTitle}>No messages found</h3>
            <p style={styles.emptyText}>
              {messages.length === 0 
                ? "No messages have been received yet." 
                : "No messages match your search criteria."}
            </p>
            <button 
              onClick={fetchMessages}
              style={{
                marginTop: '12px',
                padding: '6px 12px',
                backgroundColor: '#3182ce',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              Refresh Messages
            </button>
          </div>
        ) : (
          <div style={styles.tableCard}>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead style={styles.tableHeader}>
                  <tr>
                    <th style={styles.th}>Sender</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Subject</th>
                    <th style={styles.th}>Message Preview</th>
                    <th style={styles.th}>Sent At</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMessages.map((message, index) => (
                    <tr
                      key={message.id || index}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f7fafc')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                    >
                      <td style={styles.td}>
                        <p style={styles.clientName}>{message.sender || 'Unknown Sender'}</p>
                      </td>
                      <td style={styles.td}>
                        <p style={styles.clientEmail}>{message.email || 'N/A'}</p>
                      </td>
                      <td style={styles.td}>
                        <p style={styles.clientName}>{message.subject || 'No Subject'}</p>
                      </td>
                      <td style={styles.td}>
                        <p style={styles.clientEmail}>
                          {message.message 
                            ? (message.message.length > 100 
                                ? `${message.message.substring(0, 100)}...` 
                                : message.message)
                            : 'No message content'}
                        </p>
                      </td>
                      <td style={styles.td}>
                        {formatDate(message.sentAt)}
                      </td>
                      <td style={styles.td}>
                        <button
                          style={styles.viewButton}
                          onClick={() => {
                            setSelectedMessage(message);
                            setShowModal(true);
                          }}
                          onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                          onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showModal && selectedMessage && (
          <div style={styles.modal} onClick={() => setShowModal(false)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>Message Details</h3>
                <button
                  style={styles.closeButton}
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Sender Information</h4>
                <p style={styles.modalText}>
                  <span style={styles.modalLabel}>Name:</span>{' '}
                  {selectedMessage.sender || 'N/A'}
                </p>
                <p style={styles.modalText}>
                  <span style={styles.modalLabel}>Email:</span>{' '}
                  {selectedMessage.email || 'N/A'}
                </p>
              </div>
              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Message Content</h4>
                <p style={styles.modalText}>
                  <span style={styles.modalLabel}>Subject:</span>{' '}
                  {selectedMessage.subject || 'No Subject'}
                </p>
                <p style={{...styles.modalText, whiteSpace: 'pre-wrap'}}>
                  <span style={styles.modalLabel}>Message:</span><br />
                  {selectedMessage.message || 'No message content'}
                </p>
              </div>
              <div style={styles.modalSection}>
                <p style={styles.modalText}>
                  <span style={styles.modalLabel}>Sent At:</span>{' '}
                  {formatDate(selectedMessage.sentAt)}
                </p>
              </div>
              <div style={styles.modalFooter}>
                <button
                  style={styles.modalCloseBtn}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default AdminMessages;