import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import whatsappIcon from '../assets/whatsapp-icon.png';
import linkedinIcon from '../assets/LinkedIn-icon.png';
import twitterIcon from '../assets/X-icon.png';
import facebookIcon from '../assets/facebook-icon.jpg';
import instagramIcon from '../assets/instagram-icon.png';
import locationIcon from '../assets/lolo-removebg-preview.png';
import contactIcon from '../assets/phone_icon-removebg-preview.png';
import emailIcon from '../assets/emailll-removebg-preview.png';
import businessIcon from '../assets/hour-removebg-preview.png';

function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const quickLinks = [
    { path: '/', label: 'Home', icon: '' },
    { path: '/about', label: 'About Us', icon: '' },
    { path: '/services', label: 'Services', icon: '' },
    { path: '/training', label: 'Training', icon: '' },
    { path: '/blog', label: 'Blog', icon: '' },
    { path: '/contact', label: 'Contact Us', icon: '' },
    { path: '/quote', label: 'Request a Quote', icon: '' }
  ];

  const services = [
    { label: 'Translation and Interpretation', icon: '', id: 1 },
    { label: 'Website & Software Localization', icon: '', id: 2 },
    { label: 'Certified Document Translation', icon: '', id: 3 },
    { label: 'Audio & Video Transcription', icon: '', id: 4 },
    { label: 'Proofreading & Editing', icon: '', id: 5 },
    { label: 'CV & Application Support', icon: '', id: 6 },
    { label: 'Machine Translation Post-Editing (MTPE)', icon: '', id: 7 },
    { label: 'Glossaries & Language Resources', icon: '', id: 8 },
    { label: 'Back-Translation & Quality Assurance', icon: '', id: 9 },
    { label: 'AI Translation Services', icon: '', id: 10 },
    { label: 'Social Media Marketing', icon: '', id: 11 },
    { label: 'Content Creation', icon: '', id: 12 }
  ];

  const languages = [
    { name: 'English', flag: '🇺🇸' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'Kinyarwanda', flag: '🇷🇼' },
    { name: 'Swahili', flag: '🇹🇿' },
    { name: 'Kirundi', flag: '🇧🇮' }
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/250788518720',
      icon: '',
      color: '#10b981',
      hoverColor: '#059669',
      image: whatsappIcon
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/language-computing-international-498050369/',
      icon: '',
      color: '#0077b5',
      hoverColor: '#005885',
      image: linkedinIcon
    },
    {
      name: 'Twitter',
      url: 'https://x.com/LCITranslations',
      icon: '',
      color: '#1da1f2',
      hoverColor: '#0d8bd9',
      image: twitterIcon
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61577012938010&__tn__=-UC',
      icon: '',
      color: '#4267b2',
      hoverColor: '#365899',
      image: facebookIcon
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lcitranslations/',
      icon: '',
      color: '#e4405f',
      hoverColor: '#d62a4a',
      image: instagramIcon
    }
  ];

  const contactInfo = [
    {
      icon: locationIcon,
      title: 'Kigali, Rwanda Gasabo District',
      details: []
    },
    {
      icon: contactIcon,
      title: '+250 788 518 720',
      details: []
    },
    {
      icon: emailIcon,
      title: '',
      details: ['lcirwanda@gmail.com', 'lcirwanda@yahoo.com']
    },
    {
      icon: businessIcon,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM']
    }
  ];

  const handleEmailCopy = (email) => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage('');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Subscribed with email:', email);
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const handleServiceClick = (serviceId) => {
    window.location.href = `/services#service-${serviceId}`;
  };

  const styles = {
    footer: {
      background: '#051132ff',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    },
    container: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '1.5rem 1rem 1rem' : '2rem 1rem 1rem'
    },
    mainSection: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1.5fr 1fr',
      gap: isMobile ? '2rem' : '2rem',
      marginBottom: '2rem',
      alignItems: 'start'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0rem',
      textAlign: 'left'
    },
    quickLinksSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0rem',
      alignItems: isMobile ? 'center' : 'flex-start',
      textAlign: isMobile ? 'center' : 'left'
    },
    servicesSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0rem',
      alignItems: isMobile ? 'center' : 'center',
      textAlign: isMobile ? 'center' : 'left'
    },
    connectSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      textAlign: 'center'
    },
    sectionTitle: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: 'bold',
      marginBottom: '0.75rem',
      color: '#ff8c00',
      position: 'relative',
      paddingBottom: '0.3rem',
      width: '100%'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      height: '2px',
      background: '#ff8c00',
      borderRadius: '2px'
    },
    companyInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '0.75rem',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    logo: {
      height: isMobile ? '35px' : '40px',
      width: 'auto',
      filter: 'brightness(1.2)'
    },
    companyName: {
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      fontWeight: 'bold',
      color: 'white'
    },
    tagline: {
      fontSize: '0.85rem',
      color: 'rgba(255, 255, 255, 0.9)',
      fontStyle: 'italic',
      textAlign: isMobile ? 'center' : 'left'
    },
    description: {
      fontSize: '0.85rem',
      lineHeight: '1.5',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '0.75rem',
      textAlign: isMobile ? 'center' : 'left'
    },
    linksList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.3rem 0',
      color: 'rgba(255, 255, 255, 0.9)',
      textDecoration: 'none',
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      transition: 'all 0.3s ease',
      borderRadius: '6px',
      paddingLeft: '0.3rem',
      cursor: 'pointer',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    hoveredLink: {
      color: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateX(6px)',
      paddingLeft: '0.75rem'
    },
    servicesList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '0.5rem',
      width: '100%',
      maxWidth: '500px'
    },
    serviceItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.3rem 0',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
      paddingLeft: '0.3rem',
      cursor: 'pointer',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    socialIconsContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? '0.75rem' : '1rem',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    },
    socialIcon: {
      width: isMobile ? '40px' : '45px',
      height: isMobile ? '40px' : '45px',
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid rgba(255, 255, 255, 0.3)'
    },
    socialIconImage: {
      width: isMobile ? '20px' : '22px',
      height: isMobile ? '20px' : '22px',
      objectFit: 'contain',
      transition: 'transform 0.3s ease'
    },
    socialSection: {
      marginTop: '1.5rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)'
    },
    socialLinks: {
      display: 'flex',
      gap: '0.75rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '1.5rem'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
      padding: '0.6rem 0.9rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      textDecoration: 'none',
      color: 'white',
      fontSize: '0.8rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    newsletter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    newsletterInput: {
      display: 'flex',
      gap: '0.3rem',
      maxWidth: '350px',
      width: '100%',
      flexDirection: isMobile ? 'column' : 'row'
    },
    emailInput: {
      flex: 1,
      padding: '0.6rem 0.75rem',
      border: 'none',
      borderRadius: isMobile ? '12px' : '20px',
      fontSize: '0.8rem',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#1e3a8a',
      marginBottom: isMobile ? '0.5rem' : '0'
    },
    subscribeButton: {
      padding: '0.6rem 1.2rem',
      background: '#ff8c00',
      border: 'none',
      borderRadius: isMobile ? '12px' : '20px',
      color: 'white',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    },
    message: {
      marginTop: '0.75rem',
      color: '#10b981',
      fontWeight: '500',
      fontSize: '0.8rem',
      textAlign: 'center'
    },
    bottomSection: {
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
      textAlign: 'center'
    },
    copyright: {
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center'
    },
    legalLinks: {
      display: 'flex',
      gap: isMobile ? '1rem' : '1.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    legalLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      fontSize: isMobile ? '0.7rem' : '0.75rem',
      transition: 'color 0.3s ease'
    },
    copiedNotification: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#10b981',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600',
      zIndex: 9999,
      display: emailCopied ? 'block' : 'none',
      animation: emailCopied ? 'fadeInOut 2s ease-in-out' : 'none'
    },
    connectDescription: {
      fontSize: '0.9rem',
      color: 'rgba(255, 255, 255, 0.9)',
      textAlign: 'center',
      lineHeight: '1.5',
      marginBottom: '1rem',
      maxWidth: '300px'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '1rem' : '1rem',
      width: '100%',
      margin: '1.5rem 0',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
      minWidth: '0',
      whiteSpace: 'nowrap',
      textAlign: isMobile ? 'center' : 'left',
      fontSize: isMobile ? '0.7rem' : '0.75rem',
      gap: '0.5rem'
    },
    contactRow: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      gap: '0.5rem',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      width: '100%',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.2rem',
      alignItems: isMobile ? 'center' : 'flex-start'
    },
    contactDetailItem: {
      fontSize: isMobile ? '0.7rem' : '0.75rem',
      lineHeight: '1.2',
      textAlign: isMobile ? 'center' : 'left'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.container}>
        {/* Main Footer Content */}
        <div style={styles.mainSection}>
          {/* Quick Links */}
          <div style={styles.quickLinksSection}>
            <h3 style={styles.sectionTitle}>
              <span style={{position: 'relative'}}>
                Quick Links
              </span>
            </h3>
            <ul style={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    style={{
                      ...styles.link,
                      ...(hoveredLink === `quick-${index}` ? styles.hoveredLink : {})
                    }}
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={{fontSize: '1rem'}}>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div style={styles.servicesSection}>
            <h3 style={styles.sectionTitle}>
              <span style={{position: 'relative', textAlign: 'center', display: 'block'}}>
                Our Services
              </span>
            </h3>
            <ul style={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index}>
                  <span
                    style={{
                      ...styles.link,
                      ...(hoveredLink === `service-${index}` ? styles.hoveredLink : {})
                    }}
                    onMouseEnter={() => setHoveredLink(`service-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <span style={{fontSize: '1rem'}}>{service.icon}</span>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div style={styles.connectSection}>
            <div style={styles.socialIconsContainer}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.socialIcon,
                    transform: hoveredSocial === index ? 'scale(1.15)' : 'scale(1)',
                    boxShadow: hoveredSocial === index 
                      ? '0 6px 20px rgba(0, 0, 0, 0.25)' 
                      : '0 4px 15px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <img 
                    src={social.image} 
                    alt={social.name}
                    style={{
                      ...styles.socialIconImage,
                      transform: hoveredSocial === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                </a>
              ))}
            </div>

            <h3 style={styles.sectionTitle}>
              <span style={{position: 'relative'}}>
                Connect With Us
              </span>
            </h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.bottomSection}>
          {/* Contact Grid */}
          <div style={styles.contactGrid}>
            {contactInfo.map((contact, index) => (
              <div key={index} style={styles.contactItem}>
                <div style={styles.contactRow}>
                  <img
                    src={contact.icon}
                    alt=""
                    style={{ 
                      width: isMobile ? 16 : 18, 
                      height: isMobile ? 16 : 18, 
                      verticalAlign: 'middle', 
                      objectFit: 'contain', 
                      flexShrink: 0 
                    }}
                  />
                  <div style={styles.contactDetails}>
                    {contact.title && (
                      <div style={{ 
                        fontWeight: 500, 
                        fontSize: isMobile ? '0.7rem' : '0.75rem',
                        textAlign: isMobile ? 'center' : 'left'
                      }}>
                        {contact.title}
                      </div>
                    )}
                    {contact.details.length > 0 && (
                      <div>
                        {contact.details.map((detail, idx) => (
                          <div key={idx} style={styles.contactDetailItem}>
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beige Solid Divider */}
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(247, 247, 242, 0.3)',
              margin: '1.5rem 0 1rem 0',
              border: 'none',
              borderRadius: '1px',
            }}
          />

          {/* Legal Links */}
          <div style={styles.legalLinks}>
            <a href="/privacy-policy" style={{
              ...styles.legalLink,
              ...(hoveredLink === 'privacy' ? {color: 'white'} : {})
            }}
            onMouseEnter={() => setHoveredLink('privacy')}
            onMouseLeave={() => setHoveredLink(null)}>
              Privacy Policy
            </a>
            <a href="/terms-of-service" style={{
              ...styles.legalLink,
              ...(hoveredLink === 'terms' ? {color: 'white'} : {})
            }}
            onMouseEnter={() => setHoveredLink('terms')}
            onMouseLeave={() => setHoveredLink(null)}>
              Terms of Service
            </a>
            <a href="/sitemap" style={{
              ...styles.legalLink,
              ...(hoveredLink === 'sitemap' ? {color: 'white'} : {})
            }}
            onMouseEnter={() => setHoveredLink('sitemap')}
            onMouseLeave={() => setHoveredLink(null)}>
              Sitemap
            </a>
            <a href="/accessibility" style={{
              ...styles.legalLink,
              ...(hoveredLink === 'accessibility' ? {color: 'white'} : {})
            }}
            onMouseEnter={() => setHoveredLink('accessibility')}
            onMouseLeave={() => setHoveredLink(null)}>
              Accessibility
            </a>
          </div>
          <div style={styles.copyright}>
            © 2025 Language Computing International. All rights reserved. 
          </div>
        </div>
      </div>

      {/* Copy Email Notification */}
      <div style={styles.copiedNotification}>
        📋 Email copied to clipboard!
      </div>

      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        @media (max-width: 480px) {
          .social-icons-container {
            gap: 0.5rem !important;
          }
          .social-icon {
            width: 35px !important;
            height: 35px !important;
          }
          .social-icon-image {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;