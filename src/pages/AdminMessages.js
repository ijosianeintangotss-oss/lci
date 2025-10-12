import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messageSearchTerm, setMessageSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replyFiles, setReplyFiles] = useState(null);
  const [generatingPDF, setGeneratingPDF] = useState(false);
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalMessages: 0,
    todayMessages: 0,
  });

  const styles = {
    mainContent: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    },
    dashboardHeader: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginBottom: '24px'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerActions: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0
    },
    subtitle: {
      color: '#6b7280',
      margin: '4px 0 0 0'
    },
    refreshButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    pdfButton: {
      backgroundColor: '#dc2626',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '24px'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    statIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px',
      fontSize: '20px'
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
      margin: 0
    },
    statValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '4px 0 0 0'
    },
    filtersCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
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
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px'
    },
    tableCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
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
      backgroundColor: '#f9fafb'
    },
    th: {
      padding: '12px 16px',
      textAlign: 'left',
      fontSize: '12px',
      fontWeight: '500',
      color: '#6b7280',
      textTransform: 'uppercase',
      borderBottom: '1px solid #e5e7eb'
    },
    td: {
      padding: '16px',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '14px'
    },
    clientName: {
      fontWeight: '500',
      color: '#1f2937',
      margin: 0
    },
    clientEmail: {
      color: '#6b7280',
      fontSize: '12px',
      margin: '4px 0 0 0'
    },
    viewButton: {
      color: '#3b82f6',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
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
      padding: '16px'
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflow: 'auto'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px',
      borderBottom: '1px solid #e5e7eb'
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      color: '#6b7280',
      cursor: 'pointer'
    },
    modalSection: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb'
    },
    modalSectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '12px'
    },
    modalText: {
      margin: '8px 0',
      color: '#4b5563',
      fontSize: '14px'
    },
    modalLabel: {
      fontWeight: '500',
      color: '#374151'
    },
    adminReplySection: {
      backgroundColor: '#eff6ff',
      borderLeft: '4px solid #3b82f6',
      padding: '16px',
      margin: '24px',
      borderRadius: '4px'
    },
    fileList: {
      marginTop: '8px'
    },
    fileItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#3b82f6',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontSize: '12px',
      marginBottom: '4px'
    },
    replySection: {
      padding: '24px'
    },
    textarea: {
      width: '100%',
      minHeight: '100px',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      resize: 'vertical',
      marginBottom: '16px'
    },
    fileInput: {
      width: '100%',
      padding: '8px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      marginBottom: '16px'
    },
    modalFooter: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '16px',
      paddingTop: '16px',
      borderTop: '1px solid #e5e7eb'
    },
    modalCloseBtn: {
      padding: '12px 24px',
      backgroundColor: '#6b7280',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '500'
    },
    submitButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    loadingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px'
    },
    loadingContent: {
      textAlign: 'center'
    },
    spinner: {
      width: '40px',
      height: '40px',
      border: '4px solid #f3f4f6',
      borderTop: '4px solid #3b82f6',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 16px'
    },
    loadingText: {
      color: '#6b7280'
    },
    emptyState: {
      textAlign: 'center',
      padding: '48px'
    },
    emptyIcon: {
      fontSize: '48px',
      marginBottom: '16px'
    },
    emptyTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#374151',
      margin: '0 0 8px 0'
    },
    emptyText: {
      color: '#6b7280',
      margin: 0
    }
  };

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      let token = localStorage.getItem('adminToken') || 
                  localStorage.getItem('authToken') || 
                  localStorage.getItem('token');
      
      if (!token) {
        setError('No admin token found. Please log in again.');
        setLoading(false);
        navigate('/login');
        return;
      }

      const response = await fetch('https://lci-api.onrender.com/api/messages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      
      if (response.status === 401) {
        setError('Authentication failed. Please log in again.');
        localStorage.removeItem('adminToken');
        localStorage.removeItem('authToken');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLoading(false);
        navigate('/login');
        return;
      }
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response error:', errorText);
        throw new Error(`Failed to fetch messages: ${response.status}`);
      }
      
      const data = await response.json();
      
      setMessages(data);

      const today = new Date().setHours(0, 0, 0, 0);
      const statsData = {
        totalMessages: data.length,
        todayMessages: data.filter(m => {
          const messageDate = new Date(m.createdAt);
          return !isNaN(messageDate.getTime()) && messageDate.setHours(0, 0, 0, 0) === today;
        }).length,
      };
      setStats(statsData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err.message);
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    const spinnerStyle = document.createElement('style');
    spinnerStyle.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(spinnerStyle);
    
    fetchMessages();
    
    return () => document.head.removeChild(spinnerStyle);
  }, [fetchMessages]);

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

  const handleReplySubmit = async () => {
    if (!replyText.trim()) {
      setError('Please enter a reply message');
      return;
    }

    setReplying(true);
    try {
      const token = localStorage.getItem('adminToken') || localStorage.getItem('authToken');
      if (!token) {
        setError('No admin token found. Please log in again.');
        setReplying(false);
        navigate('/login');
        return;
      }

      const formData = new FormData();
      formData.append('adminReply', replyText);

      if (replyFiles) {
        for (let i = 0; i < replyFiles.length; i++) {
          formData.append('replyFiles', replyFiles[i]);
        }
      }

      const response = await fetch(`https://lci-api.onrender.com/api/messages/${selectedMessage.id}/reply`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.status === 401) {
        setError('Authentication failed. Please log in again.');
        localStorage.removeItem('adminToken');
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setReplying(false);
        navigate('/login');
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send reply');
      }

      const result = await response.json();
      console.log('Reply sent successfully:', result);

      const updatedMessages = messages.map(msg =>
        msg.id === selectedMessage.id ? result.updatedMessage : msg
      );
      setMessages(updatedMessages);
      
      setReplyText('');
      setReplyFiles(null);
      setShowModal(false);
      setError(null);
      fetchMessages();
    } catch (err) {
      console.error('Error sending reply:', err);
      setError(err.message);
    } finally {
      setReplying(false);
    }
  };

  const downloadFile = (fileUrl) => {
    const fullUrl = `https://lci-api.onrender.com${fileUrl}`;
    window.open(fullUrl, '_blank');
  };

  // Enhanced PDF Generation with better error handling
  const generatePDFReport = async () => {
    setGeneratingPDF(true);
    setError(null);
    
    try {
      // Dynamically import jsPDF to avoid initial bundle issues
      const { default: jsPDF } = await import('jspdf');
      
      // Check if jsPDF loaded properly
      if (!jsPDF) {
        throw new Error('PDF library failed to load');
      }

      const doc = new jsPDF();
      
      // Title
      doc.setFontSize(20);
      doc.setTextColor(40, 40, 40);
      doc.text('Customer Messages Report', 105, 15, { align: 'center' });
      
      // Report Date
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 22, { align: 'center' });
      
      // Statistics
      doc.setFontSize(12);
      doc.setTextColor(40, 40, 40);
      doc.text(`Total Messages: ${stats.totalMessages}`, 14, 35);
      doc.text(`Today's Messages: ${stats.todayMessages}`, 14, 42);
      
      // Filter info
      if (messageSearchTerm) {
        doc.text(`Search Filter: "${messageSearchTerm}"`, 14, 49);
      }
      
      // Simple table without autoTable for better compatibility
      let yPosition = 60;
      
      // Table headers
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.setFillColor(41, 128, 185);
      doc.rect(14, yPosition, 182, 8, 'F');
      doc.text('Sender', 16, yPosition + 6);
      doc.text('Email', 60, yPosition + 6);
      doc.text('Subject', 100, yPosition + 6);
      doc.text('Status', 150, yPosition + 6);
      doc.text('Date', 170, yPosition + 6);
      
      yPosition += 12;
      
      // Table rows
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(8);
      
      filteredMessages.forEach((message, index) => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        
        // Alternate row background
        if (index % 2 === 0) {
          doc.setFillColor(245, 245, 245);
          doc.rect(14, yPosition, 182, 8, 'F');
        }
        
        // Row content
        const sender = message.fullName || 'Unknown';
        const email = message.email || 'N/A';
        const subject = message.subject || 'No Subject';
        const status = message.status || 'pending';
        const date = formatDate(message.createdAt);
        
        // Truncate long text
        const truncateText = (text, maxLength) => {
          return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
        };
        
        doc.text(truncateText(sender, 20), 16, yPosition + 6);
        doc.text(truncateText(email, 25), 60, yPosition + 6);
        doc.text(truncateText(subject, 30), 100, yPosition + 6);
        doc.text(truncateText(status, 10), 150, yPosition + 6);
        doc.text(truncateText(date, 15), 170, yPosition + 6);
        
        yPosition += 8;
      });
      
      // Footer
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Report generated by LCI Admin System - Total Records: ${filteredMessages.length}`, 105, 285, { align: 'center' });
      
      // Save the PDF
      const fileName = `messages-report-${new Date().toISOString().split('T')[0]}.pdf`;
      doc.save(fileName);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Fallback to print version if PDF fails
      setError('PDF generation failed. Using print version instead.');
      setTimeout(() => {
        generatePrintReport();
      }, 1000);
      
    } finally {
      setGeneratingPDF(false);
    }
  };

  // Print Function as fallback
  const generatePrintReport = () => {
    try {
      // Create a printable HTML content
      const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Customer Messages Report</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 20px; 
              color: #333;
            }
            .header { 
              text-align: center; 
              margin-bottom: 30px; 
              border-bottom: 2px solid #333; 
              padding-bottom: 10px; 
            }
            .title { 
              font-size: 24px; 
              font-weight: bold; 
              color: #333; 
              margin: 0;
            }
            .subtitle { 
              color: #666; 
              font-size: 14px; 
              margin: 5px 0 0 0;
            }
            .stats { 
              margin: 20px 0; 
              padding: 15px; 
              background: #f5f5f5; 
              border-radius: 5px; 
              font-size: 14px;
            }
            .table { 
              width: 100%; 
              border-collapse: collapse; 
              margin-top: 20px; 
              font-size: 12px;
            }
            .table th { 
              background: #333; 
              color: white; 
              padding: 10px; 
              text-align: left; 
              border: 1px solid #ddd;
            }
            .table td { 
              padding: 8px 10px; 
              border: 1px solid #ddd; 
            }
            .table tr:nth-child(even) { 
              background: #f9f9f9; 
            }
            .footer { 
              margin-top: 30px; 
              text-align: center; 
              color: #666; 
              font-size: 12px; 
            }
            @media print {
              body { margin: 0.5in; }
              .no-print { display: none; }
            }
            @page {
              size: landscape;
              margin: 0.5in;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">Customer Messages Report</div>
            <div class="subtitle">Generated on ${new Date().toLocaleDateString()}</div>
          </div>
          
          <div class="stats">
            <strong>Statistics:</strong> Total Messages: ${stats.totalMessages} | Today's Messages: ${stats.todayMessages}
            ${messageSearchTerm ? `<br><strong>Search Filter:</strong> "${messageSearchTerm}"` : ''}
          </div>
          
          <table class="table">
            <thead>
              <tr>
                <th>Sender</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Date</th>
                <th>Message Preview</th>
              </tr>
            </thead>
            <tbody>
              ${filteredMessages.map(message => `
                <tr>
                  <td>${message.fullName || 'Unknown'}</td>
                  <td>${message.email || 'N/A'}</td>
                  <td>${message.subject || 'No Subject'}</td>
                  <td>${message.status || 'pending'}</td>
                  <td>${formatDate(message.createdAt)}</td>
                  <td>${message.message ? (message.message.length > 50 ? message.message.substring(0, 50) + '...' : message.message) : 'No message'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <div class="footer">
            Report generated by LCI Admin System | Total Records: ${filteredMessages.length}
          </div>
        </body>
        </html>
      `;

      // Open print window
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        throw new Error('Popup blocked. Please allow popups for this site.');
      }
      
      printWindow.document.write(printContent);
      printWindow.document.close();
      
      // Wait for content to load then print
      printWindow.onload = () => {
        printWindow.print();
        // Close window after printing
        setTimeout(() => {
          printWindow.close();
        }, 500);
      };
      
    } catch (error) {
      console.error('Error generating print report:', error);
      setError(`Failed to generate report: ${error.message}`);
    }
  };

  const filteredMessages = messages.filter((message) =>
    (message.fullName && message.fullName.toLowerCase().includes(messageSearchTerm.toLowerCase())) ||
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
            <div style={styles.headerActions}>
              <button 
                style={styles.refreshButton} 
                onClick={fetchMessages}
              >
                🔄 Refresh
              </button>
              <button 
                style={styles.pdfButton}
                onClick={generatePDFReport}
                disabled={generatingPDF || filteredMessages.length === 0}
              >
                {generatingPDF ? '⏳ Generating...' : '📊 PDF Report'}
              </button>
              <button 
                style={{...styles.pdfButton, backgroundColor: '#059669'}}
                onClick={generatePrintReport}
                disabled={filteredMessages.length === 0}
              >
                🖨️ Print Report
              </button>
            </div>
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
            />
          </div>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}>
            <span style={{ color: '#f87171', fontSize: '16px' }}>⚠️</span>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#991b1b', margin: '0 0 8px 0' }}>
                Error
              </h3>
              <p style={{ fontSize: '14px', color: '#b91c1c', margin: '0 0 8px 0' }}>
                {error}
              </p>
              <button 
                onClick={() => setError(null)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Dismiss
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
                marginTop: '16px',
                padding: '8px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
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
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Sent At</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMessages.map((message, index) => (
                    <tr key={message.id || index}>
                      <td style={styles.td}>
                        <p style={styles.clientName}>{message.fullName || 'Unknown Sender'}</p>
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
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backgroundColor: message.status === 'replied' ? '#d1fae5' : 
                                         message.status === 'resolved' ? '#dbeafe' : '#fef3c7',
                          color: message.status === 'replied' ? '#065f46' : 
                                message.status === 'resolved' ? '#1e40af' : '#92400e'
                        }}>
                          {message.status || 'pending'}
                        </span>
                      </td>
                      <td style={styles.td}>
                        {formatDate(message.createdAt)}
                      </td>
                      <td style={styles.td}>
                        <button
                          style={styles.viewButton}
                          onClick={() => {
                            setSelectedMessage(message);
                            setReplyText(message.adminReply || '');
                            setReplyFiles(null);
                            setShowModal(true);
                          }}
                        >
                          {message.adminReply ? 'View/Update' : 'Reply'}
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
                  <span style={styles.modalLabel}>Name:</span> {selectedMessage.fullName || 'N/A'}
                </p>
                <p style={styles.modalText}>
                  <span style={styles.modalLabel}>Email:</span> {selectedMessage.email || 'N/A'}
                </p>
              </div>
              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Message Content</h4>
                <p style={styles.modalText}>
                  <span style={styles.modalLabel}>Subject:</span> {selectedMessage.subject || 'No Subject'}
                </p>
                <p style={{...styles.modalText, whiteSpace: 'pre-wrap'}}>
                  <span style={styles.modalLabel}>Message:</span><br />
                  {selectedMessage.message || 'No message content'}
                </p>
              </div>
              <div style={styles.modalSection}>
                <p style={styles.modalText}>
                  <span style={styles.modalLabel}>Sent At:</span> {formatDate(selectedMessage.createdAt)}
                </p>
                <p style={styles.modalText}>
                  <span style={styles.modalLabel}>Status:</span>{' '}
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: selectedMessage.status === 'replied' ? '#d1fae5' : 
                                   selectedMessage.status === 'resolved' ? '#dbeafe' : '#fef3c7',
                    color: selectedMessage.status === 'replied' ? '#065f46' : 
                          selectedMessage.status === 'resolved' ? '#1e40af' : '#92400e'
                  }}>
                    {selectedMessage.status || 'pending'}
                  </span>
                </p>
              </div>

              {selectedMessage.adminReply && (
                <div style={styles.adminReplySection}>
                  <h4 style={styles.modalSectionTitle}>Current Reply</h4>
                  <p style={{...styles.modalText, whiteSpace: 'pre-wrap'}}>
                    {selectedMessage.adminReply}
                  </p>
                  {selectedMessage.replyFiles && selectedMessage.replyFiles.length > 0 && (
                    <div style={styles.fileList}>
                      <p style={{...styles.modalText, fontWeight: '500'}}>Attached Files:</p>
                      {selectedMessage.replyFiles.map((file, index) => (
                        <div 
                          key={index} 
                          style={styles.fileItem}
                          onClick={() => downloadFile(file)}
                        >
                          📎 {file.split('/').pop()}
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedMessage.repliedAt && (
                    <p style={{...styles.modalText, fontSize: '12px', color: '#6b7280'}}>
                      Replied: {formatDate(selectedMessage.repliedAt)}
                    </p>
                  )}
                </div>
              )}

              <div style={styles.replySection}>
                <h4 style={styles.modalSectionTitle}>
                  {selectedMessage.adminReply ? 'Update Reply' : 'Send Reply'}
                </h4>
                <textarea
                  style={styles.textarea}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply message here..."
                />
                <input
                  type="file"
                  style={styles.fileInput}
                  multiple
                  onChange={(e) => setReplyFiles(e.target.files)}
                />
                <div style={styles.modalFooter}>
                  <button
                    style={styles.modalCloseBtn}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    style={styles.submitButton}
                    onClick={handleReplySubmit}
                    disabled={replying || !replyText.trim()}
                  >
                    {replying ? 'Sending...' : (selectedMessage.adminReply ? 'Update Reply' : 'Send Reply')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default AdminMessages;