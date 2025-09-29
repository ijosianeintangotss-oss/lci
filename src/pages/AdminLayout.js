import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function AdminLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/admin-quotes', label: 'Quotes', icon: '📋' },
    { path: '/admin-messages', label: 'Messages', icon: '💬' },
    { path: '/logout', label: 'LogOut', icon: '🚪', onClick: () => navigate('/'), className: 'logoutBtn' },
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
    sidebarLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '14px',
      display: 'block',
    },
    content: {
      marginLeft: isMobile ? (isSidebarOpen ? '250px' : '0') : '250px',
      flex: 1,
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
    contentContainer: {
      flex: 1,
      marginTop: isScrolled ? '70px' : '90px',
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
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

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleLogoHover = (e) => {
    e.target.closest('div').style.transform = 'scale(1.05)';
  };

  const handleLogoLeave = (e) => {
    e.target.closest('div').style.transform = 'scale(1)';
  };

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
                  ...(location.pathname === item.path ? styles.sidebarItemActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) e.currentTarget.style.backgroundColor = '#34495e';
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.path === '/logout' ? (
                  <button
                    style={{
                      ...styles.sidebarLink,
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
                    <span style={{ marginRight: '8px' }}>{item.icon}</span>
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    style={styles.sidebarLink}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span style={{ marginRight: '8px' }}>{item.icon}</span>
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
                    LCI Rwanda Admin
                  </div>
                  <div style={styles.tagline}>Admin Dashboard</div>
                </div>
              </div>
            </Link>
          </div>
        </header>

        <div style={styles.contentContainer}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;