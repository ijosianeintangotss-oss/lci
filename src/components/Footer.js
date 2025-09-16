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
    { label: 'Document Translation', icon: '' },
    { label: 'Website Localization', icon: '' },
    { label: 'Technical Translation', icon: '' },
    { label: 'Legal Translation', icon: '' },
    { label: 'Medical Translation', icon: '' },
    { label: 'Language Training', icon: '' }
  ];

  const languages = [
    { name: 'English', flag: '🇺🇸' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'Kinyarwanda', flag: '🇷🇼' },
    { name: 'Swahili', flag: '🇹🇿' },
    { name: 'Kirundi', flag: 'KR' }
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
      title: 'Head Office',
      details: ['Kigali, Rwanda', 'KG 123 St, Gasabo District']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+250 788 518 720']
    },
    {
      icon: '📧',
      title: 'Email',
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

  const styles = {
    footer: {
      background: '#0a1d51ff',
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
      padding: '3rem 2rem 1rem'
    },
    mainSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    sectionTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'white',
      position: 'relative',
      paddingBottom: '0.5rem'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '50px',
      height: '3px',
      background: 'linear-gradient(90deg, #ff8c00, transparent)',
      borderRadius: '2px'
    },
    companyInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    },
    logo: {
      height: '50px',
      width: 'auto',
      filter: 'brightness(1.2)'
    },
    companyName: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: 'white'
    },
    tagline: {
      fontSize: '0.95rem',
      color: 'rgba(255, 255, 255, 0.9)',
      fontStyle: 'italic'
    },
    description: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '1rem'
    },
    linksList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem'
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.5rem 0',
      color: 'rgba(255, 255, 255, 0.9)',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      borderRadius: '8px',
      paddingLeft: '0.5rem'
    },
    hoveredLink: {
      color: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateX(8px)',
      paddingLeft: '1rem'
    },
    servicesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem'
    },
    serviceItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.5rem 0',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '0.95rem',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      paddingLeft: '0.5rem'
    },
    languageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.8rem'
    },
    languageItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease'
    },
    contactGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    contactItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    contactHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white'
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.3rem',
      paddingLeft: '2rem'
    },
    contactDetail: {
      fontSize: '0.9rem',
      color: 'rgba(255, 255, 255, 0.9)',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    socialSection: {
      marginTop: '2rem',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '2rem'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.8rem 1.2rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '25px',
      textDecoration: 'none',
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    newsletter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '2rem'
    },
    newsletterInput: {
      display: 'flex',
      gap: '0.5rem',
      maxWidth: '400px',
      width: '100%'
    },
    emailInput: {
      flex: 1,
      padding: '0.8rem 1rem',
      border: 'none',
      borderRadius: '25px',
      fontSize: '0.9rem',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#1e3a8a'
    },
    subscribeButton: {
      padding: '0.8rem 1.5rem',
      background: '#ff8c00',
      border: 'none',
      borderRadius: '25px',
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    },
    message: {
      marginTop: '1rem',
      color: '#10b981',
      fontWeight: '500',
      fontSize: '0.9rem'
    },
    bottomSection: {
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      textAlign: 'center'
    },
    copyright: {
      fontSize: '0.9rem',
      color: 'rgba(255, 255, 255, 0.8)'
    },
    legalLinks: {
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    legalLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      fontSize: '0.85rem',
      transition: 'color 0.3s ease'
    },
    copiedNotification: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#10b981',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '25px',
      fontSize: '0.9rem',
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
          {/* Company Information */}
          <div style={styles.section}>
            <div style={styles.companyInfo}>
              <div style={styles.logoSection}>
                <img src={logo} alt="LCI Logo" style={styles.logo} />
                <div>
                  <div style={styles.companyName}>LCI Rwanda</div>
                  <div style={styles.tagline}>Translate. Localize. Connect.</div>
                </div>
              </div>
              
              <p style={styles.description}>
                Language Computing International Rwanda is your trusted partner for professional 
                translation and localization services. We bridge language barriers and connect 
                cultures across East Africa and beyond.
              </p>

              {/* Newsletter Subscription */}
              <div style={{...styles.newsletter, alignItems: 'flex-start'}}>
                <h4 style={{...styles.sectionTitle, fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  Stay Updated
                  <div style={styles.titleUnderline}></div>
                </h4>
                <form onSubmit={handleSubscribe} style={styles.newsletterInput}>
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    value={email}
                    onChange={handleEmailChange}
                    style={styles.emailInput}
                    required
                  />
                  <button 
                    type="submit"
                    style={styles.subscribeButton}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#e57000';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#ff8c00';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Subscribe ✉️
                  </button>
                </form>
                {message && <p style={styles.message}>{message}</p>}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Quick Links
              <div style={styles.titleUnderline}></div>
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
                    <span style={{fontSize: '1.1rem'}}>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Our Services
              <div style={styles.titleUnderline}></div>
            </h3>
            <div style={styles.servicesList}>
              {services.map((service, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.serviceItem,
                    ...(hoveredLink === `service-${index}` ? {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(8px)',
                      color: 'white'
                    } : {})
                  }}
                  onMouseEnter={() => setHoveredLink(`service-${index}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span style={{fontSize: '1.1rem'}}>{service.icon}</span>
                  {service.label}
                </div>
              ))}
            </div>

            {/* Languages We Support */}
            <div style={{marginTop: '2rem'}}>
              <h4 style={{...styles.sectionTitle, fontSize: '1.1rem'}}>
                Languages We Support
                <div style={styles.titleUnderline}></div>
              </h4>
              <div style={styles.languageGrid}>
                {languages.map((language, index) => (
                  <div 
                    key={index}
                    style={{
                      ...styles.languageItem,
                      ...(hoveredLink === `lang-${index}` ? {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'scale(1.05)'
                      } : {})
                    }}
                    onMouseEnter={() => setHoveredLink(`lang-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={{fontSize: '1.2rem'}}>{language.flag}</span>
                    {language.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Get In Touch
              <div style={styles.titleUnderline}></div>
            </h3>
            <div style={styles.contactGrid}>
              {contactInfo.map((contact, index) => (
                <div key={index} style={styles.contactItem}>
                  <div style={styles.contactHeader}>
                    <span style={{fontSize: '1.2rem'}}>{contact.icon}</span>
                    {contact.title}
                  </div>
                  <div style={styles.contactDetails}>
                    {contact.details.map((detail, idx) => (
                      <div
                        key={idx}
                        style={{
                          ...styles.contactDetail,
                          ...(contact.title === 'Email' ? {cursor: 'pointer'} : {}),
                          ...(hoveredLink === `contact-${index}-${idx}` ? {color: 'white'} : {})
                        }}
                        onMouseEnter={() => setHoveredLink(`contact-${index}-${idx}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                        onClick={contact.title === 'Email' ? () => handleEmailCopy(detail) : undefined}
                      >
                        {detail}
                        {contact.title === 'Email' && hoveredLink === `contact-${index}-${idx}` && 
                          <span style={{marginLeft: '0.5rem', fontSize: '0.8rem'}}>📋 Click to copy</span>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div style={styles.socialSection}>
          <h3 style={{...styles.sectionTitle, textAlign: 'center', marginBottom: '1.5rem'}}>
            Connect With Us
            <div style={{...styles.titleUnderline, margin: '0.5rem auto 0'}}></div>
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
                <span style={{fontSize: '1.1rem'}}>{social.icon}</span>
                <img 
                  src={social.image} 
                  alt={social.name} 
                  style={{
                    width: '20px',
                    height: '20px',
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
              {/* Privacy Policy */}
            </a>
            <a href="/terms-of-service" style={{
              ...styles.legalLink,
              ...(hoveredLink === 'terms' ? {color: 'white'} : {})
            }}
            onMouseEnter={() => setHoveredLink('terms')}
            onMouseLeave={() => setHoveredLink(null)}>
              {/* Terms of Service */}
            </a>
            <a href="/sitemap" style={{
              ...styles.legalLink,
              ...(hoveredLink === 'sitemap' ? {color: 'white'} : {})
            }}
            onMouseEnter={() => setHoveredLink('sitemap')}
            onMouseLeave={() => setHoveredLink(null)}>
              {/* Sitemap */}
            </a>
          </div>
          
          <div style={styles.copyright}>
            © 2025 Language Computing International Rwanda. All rights reserved. 
            <br />
            <span style={{fontSize: '0.8rem', marginTop: '0.5rem', display: 'inline-block'}}>
              {/* Proudly serving East Africa with excellence in translation and localization services. */}
            </span>
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
          .footer-grid { grid-template-columns: 1fr !important; }
          .newsletter-input { flex-direction: column !important; }
          .social-links { justify-content: center !important; }
          .legal-links { flex-direction: column !important; gap: 1rem !important; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;