import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function AdminQuotes() {
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalQuotes: 0,
    pendingQuotes: 0,
    inProgressQuotes: 0,
    completedQuotes: 0,
    todayRequests: 0,
  });

  const navItems = [
    { path: '/admin-quotes', label: 'Quotes', icon: '' },
    { path: '/admin-messages', label: 'Messages', icon: '' },
    { path: '/logout', label: 'LogOut ', icon: '', onClick: () => navigate('/'), className: 'logoutBtn' },
  ];

  const styles = {
    app: {
      display: 'flex',
      minHeight: '100vh',
    },
    sidebar: {
      position: 'fixed',
      left: 0,
      top: 0,
      height: '100vh',
      width: '250px',
      backgroundColor: '#1e3a8a',
      color: 'white',
      padding: '20px 0',
      overflowY: 'auto',
      transform: isMobile ? `translateX(${isSidebarOpen ? '0' : '-100%'})` : 'translateX(0)',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 1001,
    },
    sidebarLogo: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    sidebarLogoImg: {
      height: '40px',
      width: 'auto',
    },
    sidebarNav: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },
    sidebarItem: {
      padding: '12px 16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      display: 'block',
    },
    sidebarItemActive: {
      backgroundColor: '#34495e',
      fontWeight: 'bold',
    },
    sidebarItemHover: {
      backgroundColor: '#34495e',
    },
    sidebarLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '14px',
      display: 'block',
    },
    content: {
      marginLeft: isMobile ? (isSidebarOpen ? '250px' : '0') : '250px',
      flex: 1,
      padding: '16px',
      transition: 'margin-left 0.3s ease-in-out',
    },
    header: {
      position: 'fixed',
      top: 0,
      left: isMobile ? (isSidebarOpen ? '250px' : '0') : '250px',
      right: 0,
      zIndex: 1000,
      background: isScrolled
        ? 'rgba(255, 255, 255, 0.95)'
        : 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      borderBottom: isScrolled
        ? '2px solid rgba(229, 133, 17, 0.3)'
        : '2px solid rgba(229, 133, 17, 0.1)',
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
      gap: '1rem',
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
    sidebarToggle: {
      background: 'none',
      border: 'none',
      color: '#1e3a8a',
      fontSize: '1.5rem',
      cursor: 'pointer',
      display: isMobile ? 'block' : 'none',
      padding: '0.5rem',
    },
    nav: {
      display: 'none',
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '0.3rem',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    logoutBtn: {
      marginLeft: 'auto',
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
      color: 'white',
    },
    hoveredNavLink: {
      transform: 'translateY(-2px)',
    },
    contentContainer: {
      flex: 1,
      marginTop: isScrolled ? '70px' : '90px',
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
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px',
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
    filtersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '12px',
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
    select: {
      width: '100%',
      padding: '6px 8px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      fontSize: '12px',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
    },
    sortContainer: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
    },
    sortButton: {
      padding: '6px 8px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '12px',
    },
    errorCard: {
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '4px',
      padding: '12px',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'flex-start',
    },
    errorIcon: {
      color: '#f87171',
      fontSize: '16px',
      marginRight: '8px',
    },
    errorTitle: {
      fontSize: '12px',
      fontWeight: '500',
      color: '#991b1b',
      margin: 0,
    },
    errorMessage: {
      fontSize: '12px',
      color: '#b91c1c',
      margin: '2px 0 0 0',
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
    clientPhone: {
      color: '#718096',
      fontSize: '12px',
      margin: '1px 0 0 0',
    },
    serviceMain: {
      color: '#1a202c',
      margin: 0,
    },
    serviceDoc: {
      color: '#718096',
      fontSize: '12px',
      margin: '1px 0 0 0',
    },
    requestingText: {
      color: '#4a5568',
      fontSize: '11px',
      margin: '2px 0 0 0',
      fontStyle: 'italic',
    },
    languageContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    languageArrow: {
      margin: '0 4px',
      color: '#718096',
    },
    statusSelect: {
      fontSize: '11px',
      padding: '3px 6px',
      borderRadius: '12px',
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
    modalGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
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
    fileLink: {
      color: '#3182ce',
      textDecoration: 'none',
      fontSize: '12px',
    },
  };

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Helper function to map backend urgency to frontend turnaround
  const mapUrgencyToTurnaround = (urgency) => {
    const urgencyMap = {
      'standard': 'Standard',
      'urgent': 'Express', 
      'very-urgent': 'Urgent',
      'rush': 'Urgent'
    };
    return urgencyMap[urgency] || 'Standard';
  };

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching quotes from API...');
      
      const response = await fetch('https://lcirwanda-backend001.onrender.com/api/public/quotes', {
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
        throw new Error(`Failed to fetch quotes: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Fetched quotes data:', data);
      
      // Process data to ensure compatibility
      const processedData = data.map(quote => ({
        ...quote,
        // Map urgency to turnaround for frontend compatibility
        turnaround: mapUrgencyToTurnaround(quote.urgency),
        // Map additionalRequirements to additionalNotes
        additionalRequirements: quote.additionalNotes || quote.additionalRequirements,
        // Ensure all required fields exist
        status: quote.status || 'pending',
        submittedAt: quote.submittedAt || quote.createdAt,
        // Map service names to match frontend
        service: quote.service || 'translation'
      }));
      
      setQuotes(processedData);

      const today = new Date().setHours(0, 0, 0, 0);
      const statsData = {
        totalQuotes: processedData.length,
        pendingQuotes: processedData.filter((q) => q.status === 'pending').length,
        inProgressQuotes: processedData.filter((q) => q.status === 'inProgress').length,
        completedQuotes: processedData.filter((q) => q.status === 'completed').length,
        todayRequests: processedData.filter(
          (q) => {
            const quoteDate = new Date(q.submittedAt);
            return !isNaN(quoteDate.getTime()) && quoteDate.setHours(0, 0, 0, 0) === today;
          }
        ).length,
      };
      setStats(statsData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching quotes:', err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const updateQuoteStatus = async (id, newStatus) => {
    try {
      const response = await fetch(
        `https://lcirwanda-backend001.onrender.com/api/public/quotes/${id}/status`,
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
      setError(`Failed to update status: ${err.message}`);
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
    const fullName = quote.fullName || '';
    const email = quote.email || '';
    const matchesSearch =
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || (quote.status || '').toLowerCase() === statusFilter.toLowerCase();
    const matchesService = serviceFilter === 'all' || (quote.service || '').toLowerCase() === serviceFilter.toLowerCase();
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

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-2px) scale(1.05)';
    e.target.style.boxShadow = '0 6px 20px rgba(229, 133, 17, 0.4)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0) scale(1)';
    e.target.style.boxShadow = '0 4px 15px rgba(229, 133, 17, 0.3)';
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
          <p style={styles.loadingText}>Loading translation requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={styles.sidebarLogo}>
            <img src={logo} alt="LCI Logo" style={styles.sidebarLogoImg} />
          </div>
        </Link>
        <nav>
          <ul style={styles.sidebarNav}>
            {navItems.map((item, index) => (
              <li
                key={index}
                style={{
                  ...styles.sidebarItem,
                  ...(window.location.pathname === item.path ? styles.sidebarItemActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (window.location.pathname !== item.path) e.currentTarget.style.backgroundColor = '#34495e';
                }}
                onMouseLeave={(e) => {
                  if (window.location.pathname !== item.path) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.path === '/logout' ? (
                  <button
                    style={{
                      ...styles.sidebarLink,
                      ...(window.location.pathname === item.path ? styles.activeNavLink : {}),
                      ...(hoveredItem === index && window.location.pathname !== item.path ? styles.hoveredNavLink : {}),
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'left',
                    }}
                    onClick={item.onClick}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span style={{ fontSize: '0.8rem' }}>{item.icon}</span>
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      ...styles.sidebarLink,
                      ...(window.location.pathname === item.path ? styles.activeNavLink : {}),
                      ...(hoveredItem === index && window.location.pathname !== item.path ? styles.hoveredNavLink : {}),
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span style={{ fontSize: '0.8rem' }}>{item.icon}</span>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div style={styles.content}>
        <header style={styles.header}>
          <div style={styles.container}>
            <button style={styles.sidebarToggle} onClick={toggleSidebar}>
              ☰
            </button>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div
                style={styles.logoSection}
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}
              >
                <img src={logo} alt="LCI Logo" style={styles.logo} />
                <div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: '#1e3a8a',
                      lineHeight: '1.2',
                    }}
                  >
                    LCI Rwanda
                  </div>
                  <div style={styles.tagline}>Translate. Localize. Connect.</div>
                </div>
              </div>
            </Link>
            <nav style={styles.nav}>
              <ul style={styles.navList}>
                {navItems.map((item, index) => (
                  <li key={index} style={styles.navItem}>
                    {item.path === '/logout' ? (
                      <button
                        style={{
                          ...styles.navLink,
                          ...(window.location.pathname === item.path ? styles.activeNavLink : {}),
                          ...(hoveredItem === index && window.location.pathname !== item.path ? styles.hoveredNavLink : {}),
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          width: '100%',
                          textAlign: 'left',
                        }}
                        onClick={item.onClick}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span style={{ fontSize: '0.8rem' }}>{item.icon}</span>
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        style={{
                          ...styles.navLink,
                          ...(window.location.pathname === item.path ? styles.activeNavLink : {}),
                          ...(hoveredItem === index && window.location.pathname !== item.path ? styles.hoveredNavLink : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span style={{ fontSize: '0.8rem' }}>{item.icon}</span>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <div style={styles.contentContainer}>
          <div style={styles.mainContent}>
            <div style={styles.dashboardHeader}>
              <div style={styles.headerContent}>
                <div>
                  <h1 style={styles.title}>Quotes Dashboard</h1>
                  <p style={styles.subtitle}>Manage translation requests efficiently</p>
                </div>
                <button 
                  style={styles.refreshButton} 
                  onClick={fetchQuotes} 
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2c5282'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#3182ce'}
                >
                  🔄 Refresh
                </button>
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
                  <p style={styles.statLabel}>In Progress Quotes</p>
                  <p style={{ ...styles.statValue, color: '#2563eb' }}>{stats.inProgressQuotes}</p>
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={{ ...styles.statIcon, backgroundColor: '#d1fae5' }}>✅</div>
                <div>
                  <p style={styles.statLabel}>Completed Quotes</p>
                  <p style={{ ...styles.statValue, color: '#059669' }}>{stats.completedQuotes}</p>
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
                    <option value="translation">Translation and Interpretation</option>
                    <option value="localization">Website & Software Localization</option>
                    <option value="certified">Certified Document Translation</option>
                    <option value="transcription">Audio & Video Transcription</option>
                    <option value="proofreading">Proofreading & Editing</option>
                    <option value="cv-support">CV & Application Support</option>
                    <option value="mtpe">Machine Translation Post-Editing (MTPE)</option>
                    <option value="glossaries">Glossaries & Language Resources</option>
                    <option value="back-translation">Back-Translation & Quality Assurance</option>
                    <option value="ai-translation">AI Translation Services</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="content-creation">Content Creation</option>
                  </select>
                </div>
              </div>
            </div>
            {error && (
              <div style={styles.errorCard}>
                <span style={styles.errorIcon}>⚠️</span>
                <div>
                  <h3 style={styles.errorTitle}>Error</h3>
                  <p style={styles.errorMessage}>{error}</p>
                  <button 
                    onClick={fetchQuotes}
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
            {sortedQuotes.length === 0 ? (
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
                  Refresh Quotes
                </button>
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
          </div>
        </div>
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
                      {selectedQuote.fullName || 'N/A'}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Email:</span>{' '}
                      {selectedQuote.email || 'N/A'}
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
                      {selectedQuote.service || 'N/A'}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Document Type:</span>{' '}
                      {selectedQuote.documentType || 'N/A'}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Languages:</span>{' '}
                      {selectedQuote.sourceLanguage || 'N/A'} → {selectedQuote.targetLanguage || 'N/A'}
                    </p>
                    <p style={styles.modalText}>
                      <span style={styles.modalLabel}>Turnaround:</span>{' '}
                      {selectedQuote.turnaround || 'N/A'}
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
                      <ul style={{ margin: 0, paddingLeft: '16px' }}>
                        {selectedQuote.files.map((file, idx) => (
                          <li key={idx} style={{ margin: '4px 0' }}>
                            <a
                              href={`https://lcirwanda-backend001.onrender.com${file}`}
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
                        href={`https://lcirwanda-backend001.onrender.com${selectedQuote.paymentScreenshot}`}
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
                      {selectedQuote.additionalRequirements || selectedQuote.additionalNotes || 'None specified'}
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
    </div>
  );
}

export default AdminQuotes;