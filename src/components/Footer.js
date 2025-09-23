import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import whatsappIcon from '../assets/whatsapp-icon.png';
import linkedinIcon from '../assets/LinkedIn-icon.png';
import twitterIcon from '../assets/X-icon.png';
import facebookIcon from '../assets/facebook-icon.jpg';
import instagramIcon from '../assets/instagram-icon.png';

function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [email, setEmail] = useState(''); // State for email input
  const [message, setMessage] = useState(''); // State for subscription feedback

  const quickLinks = [
    { path: '/', label: 'Home', icon: '' },
    { path: '/about', label: 'About Us', icon: '' },
    { path: '/services', label: 'Services', icon: '' },
    { path: '/training', label: 'Training', icon: '' },
    { path: '/blog', label: 'Blog', icon: '' },
    { path: '/contact', label: 'Contact', icon: '' }
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
      icon: '📍',
      title: 'Kigali, Rwanda Gasabo District',
      details: ['']
    },
    {
      icon: '📞',
      title: '+250 788 518 720',
      details: ['']
    },
    {
      icon: '📧',
      title: '',
      details: ['lcirwanda@gmail.com', 'lcirwanda@yahoo.com']
    },
    {
      icon: '🕒',
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
    setMessage(''); // Clear message when typing
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Simulate subscription (e.g., send to backend or log)
      console.log('Subscribed with email:', email);
      setMessage('Thank you for subscribing!');
      setEmail(''); // Clear input after successful subscription
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const handleServiceClick = (serviceId) => {
    // Navigate to services page and scroll to the specific service
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
      padding: '2rem 1rem 1rem'
    },
    mainSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr 1fr', // Adjusted to give Services more space
      gap: '2rem', // Balanced gap
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
      alignItems: 'flex-start',
      textAlign: 'left'
    },
    servicesSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0rem',
      alignItems: 'center', // Center align services
      textAlign: 'left'
    },
    contactSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0rem',
      alignItems: 'flex-end', // Align contact to the right
      textAlign: 'right'
    },
    sectionTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '0.75rem',
      color: 'white',
      position: 'relative',
      paddingBottom: '0.3rem',
      width: '100%'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
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
      marginBottom: '0.75rem'
    },
    logo: {
      height: '40px',
      width: 'auto',
      filter: 'brightness(1.2)'
    },
    companyName: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: 'white'
    },
    tagline: {
      fontSize: '0.85rem',
      color: 'rgba(255, 255, 255, 0.9)',
      fontStyle: 'italic'
    },
    description: {
      fontSize: '0.85rem',
      lineHeight: '1.5',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '0.75rem'
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
      fontSize: '0.85rem',
      transition: 'all 0.3s ease',
      borderRadius: '6px',
      paddingLeft: '0.3rem',
      cursor: 'pointer'
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
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.5rem',
      width: '100%',
      maxWidth: '500px' // Limit max width for better centering
    },
    serviceItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.3rem 0',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '0.85rem',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
      paddingLeft: '0.3rem',
      cursor: 'pointer'
    },
    languageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.5rem'
    },
    languageItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
      padding: '0.3rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '6px',
      fontSize: '0.8rem',
      transition: 'all 0.3s ease'
    },
    contactGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'flex-end',
      width: '100%'
    },
    contactItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      alignItems: 'flex-end',
      width: '100%'
    },
    contactHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: '600',
      color: 'white'
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      alignItems: 'flex-end',
      width: '100%'
    },
    contactDetail: {
      fontSize: '0.8rem',
      color: 'rgba(255, 255, 255, 0.9)',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      textAlign: 'right'
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
      width: '100%'
    },
    emailInput: {
      flex: 1,
      padding: '0.6rem 0.75rem',
      border: 'none',
      borderRadius: '20px',
      fontSize: '0.8rem',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#1e3a8a'
    },
    subscribeButton: {
      padding: '0.6rem 1.2rem',
      background: '#ff8c00',
      border: 'none',
      borderRadius: '20px',
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
      fontSize: '0.8rem'
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
      fontSize: '0.8rem',
      color: 'rgba(255, 255, 255, 0.8)'
    },
    legalLinks: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    legalLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      fontSize: '0.75rem',
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
                <div style={styles.titleUnderline}></div>
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
                <div style={{...styles.titleUnderline, left: '50%', transform: 'translateX(-50%)', width: '80%'}}></div>
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

          {/* Contact Information */}
          <div style={styles.contactSection}>
            <h3 style={styles.sectionTitle}>
              <span style={{position: 'relative'}}>
                Get In Touch
                <div style={styles.titleUnderline}></div>
              </span>
            </h3>
            <div style={styles.contactGrid}>
              {contactInfo.map((contact, index) => (
                <div key={index} style={styles.contactItem}>
                  <div style={styles.contactHeader}>
                    <span style={{fontSize: '1rem'}}>{contact.icon}</span>
                    {contact.title}
                  </div>
                  {contact.details.length > 0 && (
                    <div style={styles.contactDetails}>
                      {contact.details.map((detail, idx) => (
                        <div
                          key={idx}
                          style={{
                            ...styles.contactDetail,
                            ...(hoveredLink === `contact-${index}-${idx}` ? {color: 'white'} : {})
                          }}
                          onMouseEnter={() => setHoveredLink(`contact-${index}-${idx}`)}
                          onMouseLeave={() => setHoveredLink(null)}
                          onClick={() => {
                            if (contact.icon === '📧') {
                              handleEmailCopy(detail);
                            }
                          }}
                        >
                          {detail}
                          {contact.icon === '📧' && hoveredLink === `contact-${index}-${idx}` && 
                            <span style={{marginLeft: '0.5rem', fontSize: '0.8rem'}}>📋 Click to copy</span>
                          }
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div style={styles.socialSection}>
          <h3 style={{...styles.sectionTitle, margin: '0 auto 1.5rem', width: 'fit-content'}}>
            <span style={{position: 'relative'}}>
              Connect With Us
              <div style={styles.titleUnderline}></div>
            </span>
          </h3>
          <div style={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.socialLink,
                  backgroundColor: hoveredSocial === index ? social.color : 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <span style={{fontSize: '1rem'}}>{social.icon}</span>
                <img 
                  src={social.image} 
                  alt={social.name} 
                  style={{
                    width: '18px',
                    height: '18px',
                    objectFit: 'contain'
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.bottomSection}>
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
        
        @media (max-width: 768px) {
          [style*="grid-template-columns: 1fr 1.5fr 1fr"] { 
            grid-template-columns: 1fr !important; 
            gap: 2rem !important;
          }
          .services-section { 
            align-items: flex-start !important; 
            text-align: left !important;
          }
          .contact-section { 
            align-items: flex-start !important; 
            text-align: left !important;
          }
          .contact-grid {
            align-items: flex-start !important;
          }
          .contact-item {
            align-items: flex-start !important;
          }
          .contact-details {
            align-items: flex-start !important;
            padding-left: 1.5rem !important;
          }
          .contact-detail {
            text-align: left !important;
          }
          .newsletter-input { flex-direction: column !important; }
          .social-links { justify-content: center !important; }
          .legal-links { flex-direction: column !important; gap: 1rem !important; }
        }

        @media (max-width: 480px) {
          [style*="grid-template-columns: 1fr 1.5fr 1fr"] { 
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;