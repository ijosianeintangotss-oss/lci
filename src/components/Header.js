import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👥' },
    { path: '/services', label: 'Services', icon: '🌐' },
    { path: '/training', label: 'Training', icon: '🎓' },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/contact', label: 'Contact', icon: '📞' },
    { path: '/quote', label: 'Quote', icon: '⭐' },
  ];

  const styles = {
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
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
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
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1.5rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: '2px solid #ff8c00',
      padding: '0.4rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      color: '#ff8c00',
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
      background: 'linear-gradient(90deg, transparent, #ff8c00, transparent)',
      margin: '0.8rem 0',
    },
    mobileActions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      marginTop: '0.8rem',
    },
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-2px) scale(1.05)';
    e.target.style.boxShadow = '0 6px 20px rgba(255, 140, 0, 0.4)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0) scale(1)';
    e.target.style.boxShadow = '0 4px 15px rgba(255, 140, 0, 0.3)';
  };

  const handleLogoHover = (e) => {
    e.target.closest('div').style.transform = 'scale(1.05)';
  };

  const handleLogoLeave = (e) => {
    e.target.closest('div').style.transform = 'scale(1)';
  };

  return (
    <>
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
                      ...(location.pathname === item.path
                        ? styles.activeNavLink
                        : {}),
                      ...(hoveredItem === index &&
                      location.pathname !== item.path
                        ? styles.hoveredNavLink
                        : {}),
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
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
            {/* Login Button - Desktop */}
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                display: window.innerWidth >= 768 ? 'block' : 'none',
              }}
            >
              <button
                style={styles.ctaButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span>⭐</span>
                Login
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              style={{
                ...styles.mobileMenuButton,
                display: window.innerWidth < 768 ? 'block' : 'none',
                background: isMobileMenuOpen ? '#ff8c00' : 'none',
                color: isMobileMenuOpen ? 'white' : '#ff8c00',
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onMouseEnter={(e) => {
                if (!isMobileMenuOpen) {
                  e.target.style.background = '#ff8c00';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobileMenuOpen) {
                  e.target.style.background = 'none';
                  e.target.style.color = '#ff8c00';
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
                    ...(location.pathname === item.path
                      ? {
                          background:
                            'linear-gradient(135deg, #ff8c00, #1e3a8a)',
                          color: 'white',
                        }
                      : {}),
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background =
                        'linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(30, 58, 138, 0.1))';
                      e.target.style.transform = 'translateX(5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                      e.target.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                  {item.label}
                  {location.pathname === item.path && (
                    <span style={{ marginLeft: 'auto', fontSize: '0.7rem' }}>
                      ●
                    </span>
                  )}
                </Link>
              </li>
            ))}
            {/* Login Button - Mobile */}
            <li>
              <Link
                to="/login"
                style={{
                  ...styles.mobileNavLink,
                  ...(location.pathname === '/login'
                    ? {
                        background:
                          'linear-gradient(135deg, #ff8c00, #1e3a8a)',
                        color: 'white',
                      }
                    : {}),
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (location.pathname !== '/login') {
                    e.target.style.background =
                      'linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(30, 58, 138, 0.1))';
                    e.target.style.transform = 'translateX(5px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== '/login') {
                    e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                    e.target.style.transform = 'translateX(0)';
                  }
                }}
              >
                <span style={{ fontSize: '1rem' }}>⭐</span>
                Login
                {location.pathname === '/login' && (
                  <span style={{ marginLeft: 'auto', fontSize: '0.7rem' }}>
                    ●
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <div style={styles.mobileDivider}></div>

          <div style={styles.mobileActions}>
            <Link
              to="/contact"
              style={{ textDecoration: 'none' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button
                style={{
                  ...styles.ctaButton,
                  width: '100%',
                  justifyContent: 'center',
                }}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span>⭐</span>
                Request a Quote
              </button>
            </Link>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.8rem',
                marginTop: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://wa.me/250788518720"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.4rem 0.8rem',
                  background: '#10b981',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                📱 WhatsApp
              </a>
              <a
                href="tel:+250788518720"
                style={{
                  padding: '0.4rem 0.8rem',
                  background: '#3b82f6',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                📞 Call
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div
        style={{
          height: isScrolled ? '70px' : '90px',
          transition: 'height 0.3s ease',
        }}
      ></div>
    </>
  );
}

export default Header;