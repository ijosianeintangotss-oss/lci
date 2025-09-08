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

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👥' },
    { path: '/services', label: 'Services', icon: '🌐' },
    { path: '/training', label: 'Training', icon: '🎓' },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/contact', label: 'Contact', icon: '📞' },
    { path: '/quote', label: 'Quote', icon: '⭐' }
  ];

  // const languages = [
  //   { code: 'EN', flag: '🇺🇸', label: 'English' },
  //   { code: 'FR', flag: '🇫🇷', label: 'Français' },
  //   { code: 'RW', flag: '🇷🇼', label: 'Kinyarwanda' }
  // ];

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
      padding: isScrolled ? '0.5rem 2rem' : '1rem 2rem',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled 
        ? '0 4px 20px rgba(30, 58, 138, 0.1)' 
        : '0 2px 10px rgba(30, 58, 138, 0.05)'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      maxWidth: '1400px',
      margin: '0 auto',
      gap: '3rem'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    logo: {
      height: isScrolled ? '45px' : '55px',
      width: 'auto',
      transition: 'all 0.3s ease',
      filter: 'drop-shadow(2px 2px 4px rgba(30, 58, 138, 0.1))'
    },
    tagline: {
      fontSize: '0.9rem',
      color: '#ffffffff',
      fontWeight: '600',
      fontStyle: 'italic',
      display: isScrolled ? 'none' : 'block',
      transition: 'all 0.3s ease'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flex: 1
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '0.5rem'
    },
    navItem: {
      position: 'relative'
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.8rem 1.2rem',
      textDecoration: 'none',
      color: '#1e3a8a',
      fontWeight: '600',
      fontSize: '0.95rem',
      borderRadius: '25px',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    activeNavLink: {
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)'
    },
    hoveredNavLink: {
      background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(30, 58, 138, 0.1))',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(30, 58, 138, 0.2)'
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginLeft: 'auto'
    },
    // languageSelector: {
    //   position: 'relative',
    //   display: 'inline-block'
    // },
    // languageSelect: {
    //   padding: '0.6rem 1rem',
    //   border: '2px solid #e5e7eb',
    //   borderRadius: '20px',
    //   background: 'white',
    //   color: '#1e3a8a',
    //   fontSize: '0.9rem',
    //   fontWeight: '600',
    //   cursor: 'pointer',
    //   transition: 'all 0.3s ease',
    //   appearance: 'none',
    //   paddingRight: '2.5rem',
    //   backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff8c00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'right 0.7rem center',
    //   backgroundSize: '1rem'
    // },
    ctaButton: {
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      color: 'white',
      border: 'none',
      padding: '0.8rem 1.8rem',
      borderRadius: '25px',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: '2px solid #ff8c00',
      padding: '0.5rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1.2rem',
      color: '#ff8c00',
      transition: 'all 0.3s ease'
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
      borderRadius: '0 0 20px 20px',
      padding: '1rem',
      display: isMobileMenuOpen ? 'block' : 'none',
      boxShadow: '0 8px 25px rgba(30, 58, 138, 0.15)'
    },
    mobileNavList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    mobileNavLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '1rem',
      textDecoration: 'none',
      color: '#1e3a8a',
      fontWeight: '600',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      background: 'rgba(255, 255, 255, 0.5)'
    },
    mobileDivider: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #ff8c00, transparent)',
      margin: '1rem 0'
    },
    mobileActions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      marginTop: '1rem'
    }
  };

  // Media queries using JavaScript
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <Link to="/" style={{textDecoration: 'none'}}>
            <div 
              style={styles.logoSection}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            >
              <img src={logo} alt="LCI Logo" style={styles.logo} />
              <div>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#ffffffff',
                  lineHeight: '1.2'
                }}>
                  LCI Rwanda
                </div>
                <div style={styles.tagline}>
                  Translate. Localize. Connect.
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{...styles.nav, display: window.innerWidth >= 768 ? 'flex' : 'none'}}>
            <ul style={styles.navList}>
              {navItems.map((item, index) => (
                <li key={index} style={styles.navItem}>
                  <Link
                    to={item.path}
                    style={{
                      ...styles.navLink,
                      ...(location.pathname === item.path ? styles.activeNavLink : {}),
                      ...(hoveredItem === index && location.pathname !== item.path ? styles.hoveredNavLink : {})
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span style={{fontSize: '0.9rem'}}>{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div style={styles.rightSection}>
            {/* Language Selector */}
            {/* <div style={styles.languageSelector}>
              <select 
                style={styles.languageSelect}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#ff8c00';
                  e.target.style.boxShadow = '0 2px 8px rgba(255, 140, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {languages.map((lang, index) => (
                  <option key={index} value={lang.code}>
                    {lang.flag} {lang.code}
                  </option>
                ))}
              </select>
            </div> */}

            {/* CTA Button - Desktop */}
            <Link to="/login" style={{textDecoration: 'none', display: window.innerWidth >= 768 ? 'block' : 'none'}}> {/* Updated to /login */}
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
                color: isMobileMenuOpen ? 'white' : '#ff8c00'
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
                    ...(location.pathname === item.path ? {
                      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
                      color: 'white'
                    } : {})
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(30, 58, 138, 0.1))';
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
                  <span style={{fontSize: '1.2rem'}}>{item.icon}</span>
                  {item.label}
                  {location.pathname === item.path && (
                    <span style={{marginLeft: 'auto', fontSize: '0.8rem'}}>●</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div style={styles.mobileDivider}></div>

          <div style={styles.mobileActions}>
            <Link to="/contact" style={{textDecoration: 'none'}} onClick={() => setIsMobileMenuOpen(false)}>
              <button 
                style={{
                  ...styles.ctaButton,
                  width: '100%',
                  justifyContent: 'center'
                }}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span>⭐</span>
                Request a Quote
              </button>
            </Link>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '0.5rem'
            }}>
              <a 
                href="https://wa.me/250788518720" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  padding: '0.5rem 1rem',
                  background: '#10b981',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '15px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all 0.3s ease'
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
                  padding: '0.5rem 1rem',
                  background: '#3b82f6',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '15px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all 0.3s ease'
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
      <div style={{height: isScrolled ? '80px' : '100px', transition: 'height 0.3s ease'}}></div>
    </>
  );
}

export default Header;