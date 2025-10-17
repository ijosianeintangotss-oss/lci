import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';

function AdminQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatingQuote, setUpdatingQuote] = useState(false);
  const [adminReply, setAdminReply] = useState('');
  const [price, setPrice] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [status, setStatus] = useState('pending');
  const [replyFiles, setReplyFiles] = useState(null);
  const [generatingPDF, setGeneratingPDF] = useState(false);

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalQuotes: 0,
    pendingQuotes: 0,
    inProgressQuotes: 0,
    completedQuotes: 0,
    todayRequests: 0,
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
      backgroundColor: '#de800dff',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    pdfButton: {
      backgroundColor: '#0a1d51ff',
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
    filtersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px'
    },
    select: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      backgroundColor: 'white'
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
      maxWidth: '800px',
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
    modalGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      padding: '24px'
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
      color: '#4b5563',
      fontSize: '14px'
    },
    modalLabel: {
      fontWeight: '500',
      color: '#374151'
    },
    fileLink: {
      color: '#3b82f6',
      textDecoration: 'none',
      fontSize: '14px',
      cursor: 'pointer'
    },
    adminReplySection: {
      backgroundColor: '#eff6ff',
      borderLeft: '4px solid #3b82f6',
      padding: '16px',
      margin: '0 24px',
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
      padding: '24px',
      borderTop: '1px solid #e5e7eb'
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
    errorCard: {
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
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

  const fetchQuotes = useCallback(async () => {
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

      const response = await fetch('https://lci-api.onrender.com/api/quotes', {
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
        throw new Error(`Failed to fetch quotes: ${response.status}`);
      }
      
      const data = await response.json();
      setQuotes(data);

      const today = new Date().setHours(0, 0, 0, 0);
      const statsData = {
        totalQuotes: data.length,
        pendingQuotes: data.filter(q => q.status === 'pending').length,
        inProgressQuotes: data.filter(q => q.status === 'inProgress').length,
        completedQuotes: data.filter(q => q.status === 'completed').length,
        todayRequests: data.filter(q => {
          const quoteDate = new Date(q.submittedAt || q.createdAt);
          return !isNaN(quoteDate.getTime()) && quoteDate.setHours(0, 0, 0, 0) === today;
        }).length,
      };
      setStats(statsData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching quotes:', err);
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
    
    fetchQuotes();
    
    return () => document.head.removeChild(spinnerStyle);
  }, [fetchQuotes]);

  const updateQuoteStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken') || localStorage.getItem('authToken');
      const response = await fetch(
        `https://lci-api.onrender.com/api/quotes/${id}/status`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      
      fetchQuotes();
    } catch (err) {
      console.error('Status update error:', err);
      setError(`Failed to update status: ${err.message}`);
    }
  };

  const handleQuoteUpdate = async () => {
    if (!adminReply.trim()) {
      setError('Please enter a reply message');
      return;
    }

    setUpdatingQuote(true);
    try {
      const token = localStorage.getItem('adminToken') || localStorage.getItem('authToken');
      if (!token) {
        setError('No admin token found. Please log in again.');
        setUpdatingQuote(false);
        navigate('/login');
        return;
      }

      const formData = new FormData();
      formData.append('adminReply', adminReply);
      formData.append('status', status);
      
      if (price) formData.append('price', price);
      if (estimatedTime) formData.append('estimatedTime', estimatedTime);

      if (replyFiles) {
        for (let i = 0; i < replyFiles.length; i++) {
          formData.append('replyFiles', replyFiles[i]);
        }
      }

      const response = await fetch(
        `https://lci-api.onrender.com/api/quotes/${selectedQuote.id}/status`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData,
        }
      );

      if (response.status === 401) {
        setError('Authentication failed. Please log in again.');
        localStorage.removeItem('adminToken');
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUpdatingQuote(false);
        navigate('/login');
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update quote');
      }

      const result = await response.json();
      console.log('Quote updated successfully:', result);

      const updatedQuotes = quotes.map(quote =>
        quote.id === selectedQuote.id ? result.quote : quote
      );
      setQuotes(updatedQuotes);
      
      setShowModal(false);
      setError(null);
      fetchQuotes();
    } catch (err) {
      console.error('Error updating quote:', err);
      setError(err.message);
    } finally {
      setUpdatingQuote(false);
    }
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
      doc.text('Translation Quotes Report', 105, 15, { align: 'center' });
      
      // Report Date
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 22, { align: 'center' });
      
      // Statistics
      doc.setFontSize(12);
      doc.setTextColor(40, 40, 40);
      doc.text(`Total Quotes: ${stats.totalQuotes}`, 14, 35);
      doc.text(`Pending: ${stats.pendingQuotes} | In Progress: ${stats.inProgressQuotes} | Completed: ${stats.completedQuotes}`, 14, 42);
      
      // Filter info
      if (searchTerm || statusFilter !== 'all' || serviceFilter !== 'all') {
        let filterText = 'Filters: ';
        if (searchTerm) filterText += `Search: "${searchTerm}" `;
        if (statusFilter !== 'all') filterText += `Status: ${statusFilter} `;
        if (serviceFilter !== 'all') filterText += `Service: ${serviceFilter}`;
        doc.text(filterText, 14, 49);
      }
      
      // Simple table without autoTable for better compatibility
      let yPosition = 60;
      
      // Table headers
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.setFillColor(41, 128, 185);
      doc.rect(14, yPosition, 182, 8, 'F');
      doc.text('Client', 16, yPosition + 6);
      doc.text('Service', 50, yPosition + 6);
      doc.text('Languages', 80, yPosition + 6);
      doc.text('Status', 120, yPosition + 6);
      doc.text('Submitted', 140, yPosition + 6);
      doc.text('Price', 180, yPosition + 6);
      
      yPosition += 12;
      
      // Table rows
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(8);
      
      filteredQuotes.forEach((quote, index) => {
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
        const client = quote.fullName || 'Unknown';
        const service = quote.service || 'N/A';
        const languages = `${quote.sourceLanguage || 'N/A'} → ${quote.targetLanguage || 'N/A'}`;
        const status = quote.status || 'pending';
        const submitted = formatDate(quote.submittedAt || quote.createdAt);
        const price = quote.price ? `$${quote.price}` : 'N/A';
        
        // Truncate long text
        const truncateText = (text, maxLength) => {
          return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
        };
        
        doc.text(truncateText(client, 15), 16, yPosition + 6);
        doc.text(truncateText(service, 12), 50, yPosition + 6);
        doc.text(truncateText(languages, 20), 80, yPosition + 6);
        doc.text(truncateText(status, 8), 120, yPosition + 6);
        doc.text(truncateText(submitted, 12), 140, yPosition + 6);
        doc.text(truncateText(price, 8), 180, yPosition + 6);
        
        yPosition += 8;
      });
      
      // Footer
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Report generated by LCI Admin System - Total Records: ${filteredQuotes.length}`, 105, 285, { align: 'center' });
      
      // Save the PDF
      const fileName = `quotes-report-${new Date().toISOString().split('T')[0]}.pdf`;
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
      const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Translation Quotes Report</title>
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
            <div class="title">Translation Quotes Report</div>
            <div class="subtitle">Generated on ${new Date().toLocaleDateString()}</div>
          </div>
          
          <div class="stats">
            <strong>Statistics:</strong> 
            Total: ${stats.totalQuotes} | 
            Pending: ${stats.pendingQuotes} | 
            In Progress: ${stats.inProgressQuotes} | 
            Completed: ${stats.completedQuotes}
            ${searchTerm ? `<br><strong>Search Filter:</strong> "${searchTerm}"` : ''}
            ${statusFilter !== 'all' ? `<br><strong>Status Filter:</strong> ${statusFilter}` : ''}
            ${serviceFilter !== 'all' ? `<br><strong>Service Filter:</strong> ${serviceFilter}` : ''}
          </div>
          
          <table class="table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Service</th>
                <th>Languages</th>
                <th>Urgency</th>
                <th>Status</th>
                <th>Submitted</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${filteredQuotes.map(quote => `
                <tr>
                  <td>${quote.fullName || 'Unknown'}<br><small>${quote.email || 'N/A'}</small></td>
                  <td>${quote.service || 'N/A'}<br><small>${quote.documentType || 'N/A'}</small></td>
                  <td>${quote.sourceLanguage || 'N/A'} → ${quote.targetLanguage || 'N/A'}</td>
                  <td>${quote.urgency || 'standard'}</td>
                  <td>${quote.status || 'pending'}</td>
                  <td>${formatDate(quote.submittedAt || quote.createdAt)}</td>
                  <td>${quote.price ? `$${quote.price}` : 'N/A'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <div class="footer">
            Report generated by LCI Admin System | Total Records: ${filteredQuotes.length}
          </div>
        </body>
        </html>
      `;

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

  const filteredQuotes = quotes.filter((quote) => {
    const fullName = quote.fullName || '';
    const email = quote.email || '';
    const matchesSearch =
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || (quote.status || '').toLowerCase() === statusFilter.toLowerCase();
    const matchesService = serviceFilter === 'all' || (quote.service || '').toLowerCase() === serviceFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesService;
  });

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

  const downloadFile = (fileUrl) => {
    const fullUrl = `https://lci-api.onrender.com${fileUrl}`;
    window.open(fullUrl, '_blank');
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

  useEffect(() => {
    if (selectedQuote) {
      setAdminReply(selectedQuote.adminReply || '');
      setPrice(selectedQuote.price || '');
      setEstimatedTime(selectedQuote.estimatedTime || '');
      setStatus(selectedQuote.status || 'pending');
      setReplyFiles(null);
    }
  }, [selectedQuote]);

  if (loading) {
    return (
      <AdminLayout>
        <div style={styles.loadingContainer}>
          <div style={styles.loadingContent}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Loading translation requests...</p>
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
              <h1 style={styles.title}>Quotes Dashboard</h1>
              <p style={styles.subtitle}>Manage translation requests efficiently</p>
            </div>
            <div style={styles.headerActions}>
              <button 
                style={styles.refreshButton} 
                onClick={fetchQuotes}
              >
                🔄 Refresh
              </button>
              <button 
                style={styles.pdfButton}
                onClick={generatePDFReport}
                disabled={generatingPDF || filteredQuotes.length === 0}
              >
                {generatingPDF ? '⏳ Generating...' : '📊 PDF Report'}
              </button>
              <button 
                style={{...styles.pdfButton, backgroundColor: '#059669'}}
                onClick={generatePrintReport}
                disabled={filteredQuotes.length === 0}
              >
                🖨️ Print Report
              </button>
            </div>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, backgroundColor: '#dbeafe' }}>📋</div>
            <div>
              <p style={styles.statLabel}>Total Quotes</p>
              <p style={{ ...styles.statValue, color: '#1a202c' }}>{stats.totalQuotes}</p>
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, backgroundColor: '#fef3c7' }}>⏳</div>
            <div>
              <p style={styles.statLabel}>Pending Quotes</p>
              <p style={{ ...styles.statValue, color: '#d97706' }}>{stats.pendingQuotes}</p>
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, backgroundColor: '#dbeafe' }}>🔄</div>
            <div>
              <p style={styles.statLabel}>In Progress</p>
              <p style={{ ...styles.statValue, color: '#2563eb' }}>{stats.inProgressQuotes}</p>
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, backgroundColor: '#d1fae5' }}>✅</div>
            <div>
              <p style={styles.statLabel}>Completed</p>
              <p style={{ ...styles.statValue, color: '#059669' }}>{stats.completedQuotes}</p>
            </div>
          </div>
        </div>

        <div style={styles.filtersCard}>
          <div style={styles.filtersGrid}>
            <div style={styles.filterGroup}>
              <label style={styles.label}>Search Quotes</label>
              <input
                style={styles.input}
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                <option value="translation">Translation</option>
                <option value="localization">Localization</option>
                <option value="proofreading">Proofreading</option>
                <option value="interpretation">Interpretation</option>
              </select>
            </div>
          </div>
        </div>

        {error && (
          <div style={styles.errorCard}>
            <span>⚠️</span>
            <div>
              <h3 style={{ margin: '0 0 8px 0', color: '#dc2626' }}>Error</h3>
              <p style={{ margin: 0, color: '#b91c1c' }}>{error}</p>
              <button 
                onClick={() => setError(null)}
                style={{
                  marginTop: '8px',
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

        {filteredQuotes.length === 0 ? (
          <div style={styles.emptyState}>
            <span style={styles.emptyIcon}>📋</span>
            <h3 style={styles.emptyTitle}>No translation requests found</h3>
            <p style={styles.emptyText}>
              {quotes.length === 0 
                ? "Requests will appear here when customers submit quote forms." 
                : "No quotes match your search criteria."}
            </p>
            <button 
              onClick={fetchQuotes}
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
              Refresh Quotes
            </button>
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
                  {filteredQuotes.map((quote, index) => {
                    const statusStyles = getStatusStyles(quote.status || 'pending');
                    const urgencyStyles = getUrgencyStyles(quote.urgency);

                    return (
                      <tr key={quote.id || index}>
                        <td style={styles.td}>
                          <div>
                            <p style={styles.clientName}>{quote.fullName || 'N/A'}</p>
                            <p style={styles.clientEmail}>{quote.email || 'N/A'}</p>
                            {quote.phone && (
                              <p style={styles.clientEmail}>{quote.phone}</p>
                            )}
                          </div>
                        </td>
                        <td style={styles.td}>
                          <p style={styles.clientName}>{quote.service || 'N/A'}</p>
                          <p style={styles.clientEmail}>{quote.documentType || 'N/A'}</p>
                        </td>
                        <td style={styles.td}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>{quote.sourceLanguage || 'N/A'}</span>
                            <span>→</span>
                            <span>{quote.targetLanguage || 'N/A'}</span>
                          </div>
                        </td>
                        <td style={styles.td}>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            ...urgencyStyles
                          }}>
                            {quote.urgency || 'standard'}
                          </span>
                        </td>
                        <td style={styles.td}>
                          <select
                            value={quote.status || 'pending'}
                            onChange={(e) => updateQuoteStatus(quote.id, e.target.value)}
                            style={{
                              padding: '4px 8px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              cursor: 'pointer',
                              ...statusStyles,
                              border: '1px solid'
                            }}
                          >
                            <option value="pending">Pending</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td style={styles.td}>{formatDate(quote.submittedAt || quote.createdAt)}</td>
                        <td style={styles.td}>
                          <button
                            style={styles.viewButton}
                            onClick={() => {
                              setSelectedQuote(quote);
                              setShowModal(true);
                            }}
                          >
                            {quote.adminReply ? 'View/Update' : 'Reply'}
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
                      <span style={styles.modalLabel}>Name:</span> {selectedQuote.fullName || 'N/A'}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Email:</span> {selectedQuote.email || 'N/A'}
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
                      <span style={styles.modalLabel}>Service:</span> {selectedQuote.service || 'N/A'}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Document Type:</span> {selectedQuote.documentType || 'N/A'}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Languages:</span> {selectedQuote.sourceLanguage || 'N/A'} → {selectedQuote.targetLanguage || 'N/A'}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Urgency:</span> {selectedQuote.urgency || 'standard'}
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
                      <div>
                        {selectedQuote.files.map((file, idx) => (
                          <div key={idx} style={{ margin: '4px 0' }}>
                            <span
                              style={styles.fileLink}
                              onClick={() => downloadFile(file)}
                            >
                              📄 {file.split('/').pop()}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ ...styles.modalText, color: '#6b7280' }}>No files uploaded</p>
                    )}
                  </div>
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Additional Notes</h4>
                    <p style={{ ...styles.modalText, color: '#4b5563' }}>
                      {selectedQuote.additionalNotes || selectedQuote.additionalRequirements || 'None specified'}
                    </p>
                  </div>
                </div>
              </div>

              {selectedQuote.adminReply && (
                <div style={styles.adminReplySection}>
                  <h4 style={styles.modalSectionTitle}>Current Admin Response</h4>
                  <p style={{...styles.modalText, whiteSpace: 'pre-wrap'}}>
                    {selectedQuote.adminReply}
                  </p>
                  {selectedQuote.price && (
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Price:</span> ${selectedQuote.price}
                    </p>
                  )}
                  {selectedQuote.estimatedTime && (
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Estimated Time:</span> {selectedQuote.estimatedTime}
                    </p>
                  )}
                  {selectedQuote.replyFiles && selectedQuote.replyFiles.length > 0 && (
                    <div style={styles.fileList}>
                      <p style={{...styles.modalText, fontWeight: '500'}}>Attached Files:</p>
                      {selectedQuote.replyFiles.map((file, index) => (
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
                  {selectedQuote.repliedAt && (
                    <p style={{...styles.modalText, fontSize: '12px', color: '#6b7280'}}>
                      Replied: {formatDate(selectedQuote.repliedAt)}
                    </p>
                  )}
                </div>
              )}

              <div style={styles.replySection}>
                <h4 style={styles.modalSectionTitle}>
                  {selectedQuote.adminReply ? 'Update Admin Response' : 'Send Admin Response'}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <label style={styles.label}>Price ($)</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      style={styles.input}
                      placeholder="Enter price"
                    />
                  </div>
                  <div>
                    <label style={styles.label}>Estimated Time</label>
                    <input
                      type="text"
                      value={estimatedTime}
                      onChange={(e) => setEstimatedTime(e.target.value)}
                      style={styles.input}
                      placeholder="e.g., 3-5 days"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <label style={styles.label}>Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={styles.select}
                  >
                    <option value="pending">Pending</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <textarea
                  style={styles.textarea}
                  value={adminReply}
                  onChange={(e) => setAdminReply(e.target.value)}
                  placeholder="Type your response to the client here..."
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
                    onClick={handleQuoteUpdate}
                    disabled={updatingQuote || !adminReply.trim()}
                  >
                    {updatingQuote ? 'Updating...' : (selectedQuote.adminReply ? 'Update Response' : 'Send Response')}
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

export default AdminQuotes;