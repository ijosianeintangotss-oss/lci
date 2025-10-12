import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure this path is correct

function AdminTranslationDashboard() {
  const [quotes, setQuotes] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('submittedAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('quotes');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigate = useNavigate();

  // Stats state
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
    todayRequests: 0,
  });

  const navItems = [
    { path: '/admin-quotes', label: 'Quotes', icon: '📋' },
    { path: '/messages', label: 'Messages', icon: '💬' },
  ];

  const styles = {
    // Header Styles (Responsive)
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled
        ? 'rgba(255, 255, 255, 0.95)'
        : 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      borderBottom: isScrolled
        ? '2px solid rgba(255, 140, 0, 0.3)'
        : '2px solid rgba(255, 140, 0, 0.1)',
      padding: isScrolled ? '0.5rem 1rem' : '1rem 1rem',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled
        ? '0 4px 20px rgba(30, 58, 138, 0.1)'
        : '0 2px 10px rgba(30, 58, 138, 0.05)',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1400px',
      margin: '0 auto',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    logo: {
      height: isScrolled ? '40px' : '50px',
      width: 'auto',
      transition: 'all 0.3s ease',
      filter: 'drop-shadow(2px 2px 4px rgba(30, 58, 138, 0.1))',
    },
    tagline: {
      fontSize: '0.8rem',
      color: '#1e3a8a',
      fontWeight: '600',
      fontStyle: 'italic',
      display: isScrolled ? 'none' : 'block',
      transition: 'all 0.3s ease',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flex: 1,
      justifyContent: 'center',
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '0.3rem',
      flexWrap: 'wrap',
    },
    navItem: {
      position: 'relative',
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      padding: '0.6rem 1rem',
      textDecoration: 'none',
      color: '#1e3a8a',
      fontWeight: '600',
      fontSize: '0.9rem',
      borderRadius: '20px',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    activeNavLink: {
      background: 'linear-gradient(135deg, #ff8c00, #ff8c00)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)',
    },
    hoveredNavLink: {
      background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(30, 58, 138, 0.1))',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(30, 58, 138, 0.2)',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    ctaButton: {
      background: '#d27b10ff', // Matches original logoutButton color
      color: 'white',
      border: 'none',
      padding: '0.6rem 1.5rem',
      borderRadius: '8px', // Matches original logoutButton
      fontSize: '0.9rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: '2px solid #ef4444', // Matches logoutButton color
      padding: '0.4rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      color: '#ef4444',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 140, 0, 0.2)',
      borderTop: 'none',
      borderRadius: '0 0 15px 15px',
      padding: '1rem',
      display: isMobileMenuOpen ? 'block' : 'none',
      boxShadow: '0 8px 25px rgba(30, 58, 138, 0.15)',
    },
    mobileNavList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    mobileNavLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      padding: '0.8rem',
      textDecoration: 'none',
      color: '#1e3a8a',
      fontWeight: '600',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      background: 'rgba(255, 255, 255, 0.5)',
    },
    mobileDivider: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #ef4444, transparent)', // Matches logoutButton color
      margin: '0.8rem 0',
    },
    mobileActions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      marginTop: '0.8rem',
    },
    // Original Dashboard Styles
    contentContainer: {
      flex: 1,
      marginTop: isScrolled ? '70px' : '90px', // Adjusted for header height
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 24px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      marginBottom: '32px',
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
    },
    statIcon: {
      padding: '8px',
      borderRadius: '8px',
      fontSize: '24px',
      marginRight: '16px',
    },
    statLabel: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#4a5568',
      margin: 0,
    },
    statValue: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '4px 0 0 0',
    },
    filtersCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '24px',
      marginBottom: '24px',
    },
    filtersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
    },
    filterGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    select: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
    },
    sortContainer: {
      display: 'flex',
      gap: '8px',
    },
    sortButton: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '16px',
    },
    errorCard: {
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '6px',
      padding: '16px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'flex-start',
    },
    errorIcon: {
      color: '#f87171',
      fontSize: '20px',
      marginRight: '12px',
    },
    errorTitle: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#991b1b',
      margin: 0,
    },
    errorMessage: {
      fontSize: '14px',
      color: '#b91c1c',
      margin: '4px 0 0 0',
    },
    emptyState: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '64px 32px',
      textAlign: 'center',
    },
    emptyIcon: {
      fontSize: '64px',
      marginBottom: '16px',
      display: 'block',
    },
    emptyTitle: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#1a202c',
      margin: '0 0 8px 0',
    },
    emptyText: {
      color: '#718096',
      margin: 0,
    },
    tableCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
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
      padding: '12px 24px',
      textAlign: 'left',
      fontSize: '12px',
      fontWeight: '500',
      color: '#4a5568',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderBottom: '1px solid #e2e8f0',
    },
    td: {
      padding: '16px 24px',
      borderBottom: '1px solid #e2e8f0',
      fontSize: '14px',
    },
    clientName: {
      fontWeight: '500',
      color: '#1a202c',
      margin: 0,
    },
    clientEmail: {
      color: '#718096',
      fontSize: '14px',
      margin: '2px 0 0 0',
    },
    clientPhone: {
      color: '#718096',
      fontSize: '14px',
      margin: '2px 0 0 0',
    },
    serviceMain: {
      color: '#1a202c',
      margin: 0,
    },
    serviceDoc: {
      color: '#718096',
      fontSize: '14px',
      margin: '2px 0 0 0',
    },
    languageContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    languageArrow: {
      margin: '0 8px',
      color: '#718096',
    },
    statusSelect: {
      fontSize: '12px',
      padding: '4px 8px',
      borderRadius: '16px',
      border: '1px solid',
      fontWeight: '500',
      cursor: 'pointer',
    },
    urgencyRow: {
      transition: 'background-color 0.2s',
    },
    viewButton: {
      color: '#3182ce',
      textDecoration: 'none',
      fontSize: '14px',
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
      borderRadius: '8px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflow: 'auto',
      padding: '24px',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      paddingBottom: '16px',
      borderBottom: '1px solid #e2e8f0',
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1a202c',
      margin: 0,
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '4px',
    },
    modalGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
    },
    modalSection: {
      marginBottom: '24px',
    },
    modalSectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '12px',
    },
    modalText: {
      margin: '8px 0',
      color: '#4b5563',
    },
    modalLabel: {
      fontWeight: '500',
      marginRight: '8px',
    },
    modalFooter: {
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    modalCloseBtn: {
      padding: '8px 16px',
      backgroundColor: '#e5e7eb',
      color: '#374151',
      border: 'none',
      borderRadius: '6px',
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
      width: '48px',
      height: '48px',
      border: '2px solid #e2e8f0',
      borderTop: '2px solid #3182ce',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 16px',
    },
    loadingText: {
      color: '#4a5568',
      margin: 0,
    },
    fileLink: {
      color: '#3182ce',
      textDecoration: 'none',
      fontSize: '14px',
    },
  };

  // Add CSS animation for spinner
  useEffect(() => {
    const spinnerStyle = document.createElement('style');
    spinnerStyle.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(spinnerStyle);
    return () => document.head.removeChild(spinnerStyle);
  }, []);

  // Header Scroll and Resize Effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://lci-api.onrender.com/api/quotes');
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await response.json();
      setQuotes(data);

      const today = new Date().setHours(0, 0, 0, 0);
      const statsData = {
        total: data.length,
        pending: data.filter((q) => q.status === 'pending').length,
        inProgress: data.filter((q) => q.status === 'inProgress').length,
        completed: data.filter((q) => q.status === 'completed').length,
        todayRequests: data.filter(
          (q) => new Date(q.submittedAt).setHours(0, 0, 0, 0) === today
        ).length,
      };
      setStats(statsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://lci-api.onrender.com/api/messages');
      if (!response.ok) {
        throw new Error(`Failed to fetch messages: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Messages data:', data); // Log for debugging
      setMessages(
        data.map((msg) => ({
          name: msg.name || 'messages',
          documents: data.length,
          logicalDataSize: msg.logicalDataSize || '162B', // Use actual data if available
          avgDocumentSize: msg.avgDocumentSize || '162B', // Use actual data if available
          storageSize: msg.storageSize || '20KB', // Use actual data if available
          indexes: msg.indexes || 1, // Use actual data if available
          indexSize: msg.indexSize || '20KB', // Use actual data if available
        }))
      );
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === 'quotes') {
      fetchQuotes();
    } else if (activeTab === 'messages') {
      fetchMessages();
    }
  }, [activeTab, fetchQuotes, fetchMessages]);

  const updateQuoteStatus = async (id, newStatus) => {
    try {
      // url link to check push status update
      const response = await fetch(
        `https://lci-api.onrender.com/api/quotes/${id}/status`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
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

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      (quote.fullName && quote.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (quote.email && quote.email.toLowerCase().includes(searchTerm.toLowerCase()));
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
      minute: '2-digit',
    });
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleButtonHover = (e) => {
    e.target.style.background = '#dc2626'; // Hover color from original logoutButton
    e.target.style.transform = 'translateY(-2px) scale(1.05)';
    e.target.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.4)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.background = '#ef4444'; // Original logoutButton color
    e.target.style.transform = 'translateY(0) scale(1)';
    e.target.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3)';
  };

  const handleLogoHover = (e) => {
    e.target.closest('div').style.transform = 'scale(1.05)';
  };

  const handleLogoLeave = (e) => {
    e.target.closest('div').style.transform = 'scale(1)';
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingContent}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>
            Loading {activeTab === 'quotes' ? 'translation requests...' : 'messages...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          {/* Logo Section */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div
              style={styles.logoSection}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            >
              <img src={logo} alt="LCI Logo" style={styles.logo} />
              <div>
                {/* <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#1e3a8a',
                    lineHeight: '1.2',
                  }}
                >
                  LCI Rwanda
                </div> */}
                {/* <div style={styles.tagline}>Translate. Localize. Connect.</div> */}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              ...styles.nav,
              display: window.innerWidth >= 768 ? 'flex' : 'none',
            }}
          >
            <ul style={styles.navList}>
              {navItems.map((item, index) => (
                <li key={index} style={styles.navItem}>
                  <Link
                    to={item.path}
                    style={{
                      ...styles.navLink,
                      ...(activeTab === item.label.toLowerCase()
                        ? styles.activeNavLink
                        : {}),
                      ...(hoveredItem === index &&
                      activeTab !== item.label.toLowerCase()
                        ? styles.hoveredNavLink
                        : {}),
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setActiveTab(item.label.toLowerCase())}
                  >
                    <span style={{ fontSize: '0.8rem' }}>{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div style={styles.rightSection}>
            {/* Refresh Button - Desktop */}
            {/* <button
              style={{
                ...styles.ctaButton,
                backgroundColor: '#3182ce', // Matches original refreshButton
                boxShadow: '0 4px 15px rgba(49, 130, 206, 0.3)',
                display: window.innerWidth >= 768 ? 'flex' : 'none',
              }}
              onClick={activeTab === 'quotes' ? fetchQuotes : fetchMessages}
              onMouseEnter={(e) => {
                e.target.style.background = '#2563eb'; // Hover color from original
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 6px 20px rgba(49, 130, 206, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#3182ce';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(49, 130, 206, 0.3)';
              }}
            >
              <span>🔄</span>
              Refresh
            </button> */}
            {/* Logout Button - Desktop */}
            <button
              style={{
                ...styles.ctaButton,
                display: window.innerWidth >= 768 ? 'flex' : 'none',
              }}
              onClick={handleLogout}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              <span>🚪</span>
              Logout
            </button>
            {/* Mobile Menu Button */}
            <button
              style={{
                ...styles.mobileMenuButton,
                display: window.innerWidth < 768 ? 'block' : 'none',
                background: isMobileMenuOpen ? '#ef4444' : 'none',
                color: isMobileMenuOpen ? 'white' : '#ef4444',
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onMouseEnter={(e) => {
                if (!isMobileMenuOpen) {
                  e.target.style.background = '#ef4444';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobileMenuOpen) {
                  e.target.style.background = 'none';
                  e.target.style.color = '#ef4444';
                }
              }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          <ul style={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  style={{
                    ...styles.mobileNavLink,
                    ...(activeTab === item.label.toLowerCase()
                      ? {
                          background:
                            'linear-gradient(135deg, #ff8c00, #ff8c00)',
                          color: 'white',
                        }
                      : {}),
                  }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveTab(item.label.toLowerCase());
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== item.label.toLowerCase()) {
                      e.target.style.background =
                        'linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(30, 58, 138, 0.1))';
                      e.target.style.transform = 'translateX(5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== item.label.toLowerCase()) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                      e.target.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                  {item.label}
                  {activeTab === item.label.toLowerCase() && (
                    <span style={{ marginLeft: 'auto', fontSize: '0.7rem' }}>
                      ●
                    </span>
                  )}
                </Link>
              </li>
            ))}
            <li style={styles.mobileDivider}></li>
            {/* Refresh Button - Mobile */}
            <li>
              <button
                style={{
                  ...styles.mobileNavLink,
                  width: '100%',
                  textAlign: 'left',
                  backgroundColor: '#3182ce',
                  color: 'white',
                }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  activeTab === 'quotes' ? fetchQuotes() : fetchMessages();
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#2563eb';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#3182ce';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>🔄</span>
                Refresh
              </button>
            </li>
            {/* Logout Button - Mobile */}
            <li>
              <button
                style={{
                  ...styles.mobileNavLink,
                  width: '100%',
                  textAlign: 'left',
                  backgroundColor: '#ef4444',
                  color: 'white',
                }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogout();
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#dc2626';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ef4444';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>🚪</span>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <div style={styles.mainContent}>
          {activeTab === 'quotes' ? (
            <>
              {/* Stats */}
              <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                  <div style={{ ...styles.statIcon, backgroundColor: '#dbeafe' }}>📋</div>
                  <div>
                    <p style={styles.statLabel}>Total Requests</p>
                    <p style={{ ...styles.statValue, color: '#1a202c' }}>{stats.total}</p>
                  </div>
                </div>
                <div style={styles.statCard}>
                  <div style={{ ...styles.statIcon, backgroundColor: '#fef3c7' }}>⏳</div>
                  <div>
                    <p style={styles.statLabel}>Pending</p>
                    <p style={{ ...styles.statValue, color: '#d97706' }}>{stats.pending}</p>
                  </div>
                </div>
                <div style={styles.statCard}>
                  <div style={{ ...styles.statIcon, backgroundColor: '#dbeafe' }}>🔄</div>
                  <div>
                    <p style={styles.statLabel}>In Progress</p>
                    <p style={{ ...styles.statValue, color: '#2563eb' }}>{stats.inProgress}</p>
                  </div>
                </div>
                <div style={styles.statCard}>
                  <div style={{ ...styles.statIcon, backgroundColor: '#d1fae5' }}>✅</div>
                  <div>
                    <p style={styles.statLabel}>Completed</p>
                    <p style={{ ...styles.statValue, color: '#059669' }}>{stats.completed}</p>
                  </div>
                </div>
                <div style={styles.statCard}>
                  <div style={{ ...styles.statIcon, backgroundColor: '#e0e7ff' }}>📅</div>
                  <div>
                    <p style={styles.statLabel}>Today's Requests</p>
                    <p style={{ ...styles.statValue, color: '#4f46e5' }}>{stats.todayRequests}</p>
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
                      onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                      onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
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
                          backgroundColor: sortBy === 'submittedAt' ? '#dbeafe' : 'white',
                        }}
                        onClick={() => handleSort('submittedAt')}
                      >
                        Date {sortBy === 'submittedAt' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                      </button>
                      <button
                        style={{
                          ...styles.sortButton,
                          backgroundColor: sortBy === 'fullName' ? '#dbeafe' : 'white',
                        }}
                        onClick={() => handleSort('fullName')}
                      >
                        Name {sortBy === 'fullName' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                      </button>
                      <button
                        style={{
                          ...styles.sortButton,
                          backgroundColor: sortBy === 'service' ? '#dbeafe' : 'white',
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
                  <p style={styles.emptyText}>
                    Requests will appear here when customers submit quote forms.
                  </p>
                </div>
              ) : (
                <div style={styles.tableCard}>
                  <div style={styles.tableContainer}>
                    <table style={styles.table}>
                      <thead style={styles.tableHeader}>
                        <tr>
                          <th style={styles.th}>Client Full Names</th>
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
                              style={{ ...styles.urgencyRow, ...urgencyStyles }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = '#f7fafc')
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  urgencyStyles.backgroundColor)
                              }
                            >
                              <td style={styles.td}>
                                <div>
                                  <p style={styles.clientName}>{quote.fullName || 'N/A'}</p>
                                  <p style={styles.clientEmail}>{quote.email || 'N/A'}</p>
                                  {quote.phone && (
                                    <p style={styles.clientPhone}>{quote.phone}</p>
                                  )}
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
                                  style={{ ...styles.statusSelect, ...statusStyles }}
                                >
                                  <option value="pending">Pending</option>
                                  <option value="inProgress">In Progress</option>
                                  <option value="completed">Completed</option>
                                  <option value="cancelled">Cancelled</option>
                                </select>
                              </td>
                              <td style={styles.td}>{formatDate(quote.submittedAt)}</td>
                              <td style={styles.td}>
                                <button
                                  style={styles.viewButton}
                                  onClick={() => {
                                    setSelectedQuote(quote);
                                    setShowModal(true);
                                  }}
                                  onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                                  onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
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
            </>
          ) : (
            <>
              {/* Messages Table */}
              {messages.length === 0 ? (
                <div style={styles.emptyState}>
                  <span style={styles.emptyIcon}>💬</span>
                  <h3 style={styles.emptyTitle}>No messages found</h3>
                  <p style={styles.emptyText}>
                    Messages will appear here when customers submit messages.
                  </p>
                </div>
              ) : (
                <div style={styles.tableCard}>
                  <div style={styles.tableContainer}>
                    <table style={styles.table}>
                      <thead style={styles.tableHeader}>
                        <tr>
                          <th style={styles.th}>Collection Name</th>
                          <th style={styles.th}>Documents</th>
                          <th style={styles.th}>Logical Data Size</th>
                          <th style={styles.th}>Avg Document Size</th>
                          <th style={styles.th}>Storage Size</th>
                          <th style={styles.th}>Indexes</th>
                          <th style={styles.th}>Index Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messages.map((msg, index) => (
                          <tr key={index} style={{ ...styles.urgencyRow }}>
                            <td style={styles.td}>{msg.name}</td>
                            <td style={styles.td}>{msg.documents}</td>
                            <td style={styles.td}>{msg.logicalDataSize}</td>
                            <td style={styles.td}>{msg.avgDocumentSize}</td>
                            <td style={styles.td}>{msg.storageSize}</td>
                            <td style={styles.td}>{msg.indexes}</td>
                            <td style={styles.td}>{msg.indexSize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
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
                      <span style={styles.modalLabel}>Name:</span>{' '}
                      {selectedQuote.fullName}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Email:</span>{' '}
                      {selectedQuote.email}
                    </p>
                    {selectedQuote.phone && (
                      <p style={styles.modalText}>
                        <span style={styles.modalLabel}>Phone:</span>{' '}
                        {selectedQuote.phone}
                      </p>
                    )}
                  </div>
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Service Details</h4>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Service:</span>{' '}
                      {selectedQuote.service}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Document Type:</span>{' '}
                      {selectedQuote.documentType}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Languages:</span>{' '}
                      {selectedQuote.sourceLanguage} → {selectedQuote.targetLanguage}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Turnaround:</span>{' '}
                      {selectedQuote.turnaround}
                    </p>
                    {selectedQuote.wordCount && (
                      <p style={styles.modalText}>
                        <span style={styles.modalLabel}>Word Count:</span>{' '}
                        {selectedQuote.wordCount}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Files</h4>
                    {selectedQuote.files && selectedQuote.files.length > 0 ? (
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        {selectedQuote.files.map((file, idx) => (
                          <li key={idx} style={{ margin: '8px 0' }}>
                            <a
                              href={`https://lcirwanda-backend01.onrender.com${file}`}
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
                      <p style={{ ...styles.modalText, color: '#718096' }}>
                        No files uploaded
                      </p>
                    )}
                  </div>
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Payment Screenshot</h4>
                    {selectedQuote.paymentScreenshot ? (
                      <a
                        href={`https://lcirwanda-backend01.onrender.com${selectedQuote.paymentScreenshot}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.fileLink}
                      >
                        📸 View Payment Screenshot
                      </a>
                    ) : (
                      <p style={{ ...styles.modalText, color: '#718096' }}>
                        No payment screenshot
                      </p>
                    )}
                  </div>
                  <div style={styles.modalSection}>
                    <h4 style={styles.modalSectionTitle}>Additional Requirements</h4>
                    <p style={{ ...styles.modalText, color: '#4b5563' }}>
                      {selectedQuote.additionalRequirements || 'None specified'}
                    </p>
                  </div>
                </div>
              </div>
              <div style={styles.modalFooter}>
                <button
                  style={styles.modalCloseBtn}
                  onClick={() => setShowModal(false)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#d1d5db')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#e5e7eb')}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminTranslationDashboard;
