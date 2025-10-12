import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Get In Touch.png';
import mobileMoney from '../assets/mobile money.png';
import visaCard from '../assets/visa card.png';
import masterCard from '../assets/master card.png';
import airtelMoney from '../assets/airtel.jpg';
import whatsappIcon from '../assets/whatsapp-icon.png';
import phoneCallIcon from '../assets/phone-call.jpg';
import emailIcon from '../assets/email-icon.jpg';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [messageData, setMessageData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const faqs = [
    {
      question: "How quickly can you deliver my translation?",
      answer: "Turnaround time depends on the project size and complexity. For short documents (1-3 pages), we typically deliver within 24-48 hours. Larger projects will be scheduled accordingly, and we're always transparent about deadlines."
    },
    {
      question: "What are your rates?",
      answer: "Pricing depends on the word count, language pair, and service type. We offer competitive rates for translation and interpretation services. Please send your document for a free, detailed quote."
    },
    {
      question: "Do you provide certified translations?",
      answer: "Yes, we provide certified translations for legal, academic, and official documents. Our certified translations are accepted by embassies, universities, and immigration authorities. Notarized services are also available upon request."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every project goes through our rigorous quality control process: Translator → Editor → Proofreader. We only work with experienced, native-speaking linguists who have subject-matter expertise in their fields."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept PDF, Word, PowerPoint, Excel, HTML, XML, and most common file formats. For specialized formats, please contact us to confirm compatibility."
    },
    {
      question: "Do you offer rush services?",
      answer: "Yes, we offer rush delivery for urgent projects. Rush services (24-48 hours) include a 50% premium fee to ensure priority handling and quality delivery."
    }
  ];

  const quickActions = [
    {
      title: "WhatsApp Chat",
      description: "Get instant responses to your questions. Chat with us directly on WhatsApp.",
      image: whatsappIcon,
      action: "Start WhatsApp Chat",
      link: "https://wa.me/250788518720"
    },
    {
      title: "Schedule a Call",
      description: "Prefer to talk? Call us during business hours for immediate assistance.",
      image: phoneCallIcon,
      action: "Call Now",
      link: "tel:+250788518720"
    },
    {
      title: "Email Directly",
      description: "Send us an email with your project details for a detailed quote.",
      image: emailIcon,
      action: "Send Email",
      link: "mailto:lcirwanda@gmail.com"
    }
  ];

  const paymentMethods = [
    {
      title: "MTN Mobile Money",
      description: "Pay securely using your MTN Mobile Money account. Dial *182*1*1*0788518720*Amount# to make a payment to our registered number: +250788518720.",
      image: mobileMoney
    },
   {
      title: "",
      description: "Pay securely using your Airtel Money account. Dial *100# to make a payment to our registered number: +250788518720.",
      image: airtelMoney
    },  
  ];

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateMessageForm = () => {
    const requiredFields = ['fullName', 'email', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !messageData[field]);
    
    if (missingFields.length > 0) {
      setError('Please fill in all required fields');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(messageData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (!isRobotChecked) {
      setError('Please verify that you are not a robot');
      return false;
    }

    return true;
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateMessageForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://lci-api.onrender.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setError(responseData.message || 'Failed to send message');
        return;
      }

      setSuccess('Message sent successfully! We will get back to you soon.');
      
      setMessageData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsRobotChecked(false);

    } catch (error) {
      console.error('Message submission error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
    },
    heroSection: {
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      background: '#f1eee5',
      borderRadius: '15px',
      border: '1px solid #de800d',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease-out',
      margin: '1rem',
    },
    heroContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      width: '100%',
      gap: '2rem',
      flexDirection: isMobile ? 'column' : 'row',
    },
    heroImage: {
      width: isMobile ? '100%' : '50%',
      maxWidth: isMobile ? '100%' : '700px',
      height: isMobile ? '300px' : '470px',
      objectFit: 'cover',
      borderRadius: '10px',
      margin: isMobile ? '0 auto 20px auto' : '0',
      display: 'block'
    },
    heroContent: {
      textAlign: isMobile ? 'center' : 'left',
      width: isMobile ? '100%' : '55%',
      maxWidth: isMobile ? '100%' : '600px',
      padding: isMobile ? '0' : '0 1rem',
    },
    heroTitle: {
      fontSize: isMobile ? '2rem' : '2.8rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '1rem',
      lineHeight: '1.3',
      textAlign: isMobile ? 'center' : 'left',
    },
    heroDescription: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
      maxWidth: '800px',
      margin: isMobile ? '0 auto 1.5rem' : '0 0 1.5rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: isMobile ? 'center' : 'flex-start',
      flexWrap: 'wrap',
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      color: '#0a1d51',
      marginBottom: '0.8rem',
      fontWeight: '400',
      textAlign: isMobile ? 'center' : 'left',
    },
    whatsappButton: {
      backgroundColor: '#f1eee5',
      color: '#0a1d51',
      padding: '0.8rem 1.5rem',
      borderRadius: '15px',
      border: '1px solid #de800d',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(16, 185, 129, 0.2)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    primaryButton: {
      background: '#f1eee5',
      color: '#0a1d51',
      padding: '0.8rem 1.8rem',
      borderRadius: '15px',
      border: '1px solid #de800d',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    section: {
      padding: '3rem 1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#0a1d51',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    sectionSubtitle: {
      fontSize: '1rem',
      color: '#0a1d51',
      textAlign: 'center',
      marginBottom: '1.5rem',
      maxWidth: '700px',
      margin: '0 auto 1.5rem',
    },
    contactInfoSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '2rem',
      margin: '1rem 0',
      border: '1px solid #de800d',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
    },
    contactCard: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
    },
    contactCardTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    contactDetails: {
      color: '#0a1d51',
      lineHeight: '1.5',
      fontSize: '0.95rem',
    },
    formSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '2rem',
      margin: '1rem 0',
      border: '1px solid #de800d',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1rem',
      marginBottom: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '0.95rem',
      fontWeight: '500',
      color: '#0a1d51',
      marginBottom: '0.4rem',
    },
    input: {
      padding: '0.8rem',
      border: '1px solid #de800d',
      borderRadius: '8px',
      fontSize: '0.95rem',
      transition: 'border-color 0.3s ease',
      backgroundColor: '#ffffff',
    },
    textarea: {
      padding: '0.8rem',
      border: '1px solid #de800d',
      borderRadius: '8px',
      fontSize: '0.95rem',
      transition: 'border-color 0.3s ease',
      backgroundColor: '#ffffff',
      minHeight: '100px',
      resize: 'vertical',
    },
    submitButton: {
      background: '#de800d',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '12px',
      border: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)',
      transition: 'all 0.3s ease',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0 auto',
    },
    submitButtonDisabled: {
      background: '#9ca3af',
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    quickActionsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
    },
    quickActionCard: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
      textAlign: 'center',
    },
    quickActionTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    quickActionDescription: {
      color: '#0a1d51',
      lineHeight: '1.5',
      marginBottom: '1rem',
      fontSize: '0.95rem',
    },
    quickActionButton: {
      background: '#10b981',
      color: 'white',
      padding: '0.6rem 1.2rem',
      borderRadius: '12px',
      border: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    faqSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '2rem',
      margin: '1rem 0',
      border: '1px solid #de800d',
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(360px, 1fr))',
      gap: '1.5rem',
    },
    faqItem: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
    },
    faqQuestion: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    faqAnswer: {
      color: '#0a1d51',
      lineHeight: '1.5',
      fontSize: '0.95rem',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '3rem 1.5rem',
      background: '#f1eee5',
      borderRadius: '15px',
      margin: '1rem 0',
      border: '1px solid #de800d',
    },
    ctaTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '1rem',
    },
    ctaDescription: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
    },
    ctaButton: {
      background: '#de800d',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '12px',
      border: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)',
      transition: 'all 0.3s ease',
    },
    errorMessage: {
      color: '#dc2626',
      textAlign: 'center',
      marginBottom: '1rem',
      fontWeight: '500',
      padding: '0.8rem',
      background: '#fef2f2',
      borderRadius: '8px',
      border: '1px solid #fecaca',
      fontSize: '0.95rem',
    },
    successMessage: {
      color: '#065f46',
      textAlign: 'center',
      marginBottom: '1rem',
      fontWeight: '500',
      padding: '0.8rem',
      background: '#ecfdf5',
      borderRadius: '8px',
      border: '1px solid #a7f3d0',
      fontSize: '0.95rem',
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '0.9rem',
      height: '0.9rem',
      border: '2px solid transparent',
      borderTop: '2px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    paymentImage: {
      width: '80px',
      height: '40px',
      objectFit: 'contain',
      marginBottom: '1rem',
    },
    clientPortalCard: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
    },
    recaptchaContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '1rem',
      margin: '1.5rem 0',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    recaptchaCheckbox: {
      width: '18px',
      height: '18px',
      marginRight: '10px',
      cursor: 'pointer',
    },
    recaptchaText: {
      fontSize: '14px',
      color: '#333',
    },
    recaptchaFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '8px',
      fontSize: '10px',
      color: '#555',
    },
    termsText: {
      fontSize: '12px',
      color: '#666',
      textAlign: 'center',
      marginTop: '1rem',
      lineHeight: '1.4',
    },
    termsLink: {
      color: '#de800d',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.background = '#de800d';
    e.target.style.color = 'white';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.background = '#f1eee5';
    e.target.style.color = '#0a1d51';
  };

  const handleWhatsAppButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundColor = '#de800d';
    e.target.style.color = '#0a1d51';
  };

  const handleSubmitButtonHover = (e) => {
    if (!isSubmitting) {
      e.target.style.transform = 'scale(1.05)';
    }
  };

  const handleSubmitButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const handleRecaptchaClick = () => {
    if (!isSubmitting) {
      setIsRobotChecked(!isRobotChecked);
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          input:focus, select:focus, textarea:focus {
            border-color: #de800d !important;
            outline: none;
          }
        `}
      </style>

      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <img 
            src={heroImage} 
            alt="Hero Image" 
            style={styles.heroImage}
          />
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Your Trusted Translation & Localization Experts</h1>
            
            <p style={styles.heroSubtitle}>Dedicated to You – Professional. Precise. Perfect.</p>

            <p style={styles.heroDescription}>
              Need a quote? Want to collaborate? We're happy to help! Get in touch with our language experts today.</p>
            <div style={styles.buttonContainer}>
              <Link
                to="/quote"
                style={styles.primaryButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Request a Quote <span style={{ color: '#de800d' }}>⭐</span>
                </span>
              </Link>
              <a
                href="https://wa.me/250788518720"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleWhatsAppButtonLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Let's Chat on<img src={whatsappIcon} alt="WhatsApp" style={{ width: '18px', height: '18px' }} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.contactInfoSection}>
          <h2 style={styles.sectionTitle}>Contact Information</h2>
          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <h3 style={styles.contactCardTitle}>🕒 Business Hours</h3>
              <div style={styles.contactDetails}>
                <strong>Online Services (Translation, Localization, Support):</strong><br />
                📅 Monday – Saturday | ⏰ 08:00 AM – 10:00 PM (CAT)<br />
                🌐 Available via Email, WhatsApp & Online Portal<br /><br />
                <strong>On-Site Consultations & Appointments:</strong><br />
                📅 Monday – Friday | ⏰ 09:00 AM – 05:00 PM (CAT)<br />
                📍 Kigali, Rwanda
              </div>
            </div>
            <div style={styles.contactCard}>
              <h3 style={styles.contactCardTitle}>Contact Us</h3>
              <div style={styles.contactDetails}>
                📧 <strong>Email:</strong> lcirwanda@gmail.com<br />
                📞 <strong>Call / WhatsApp:</strong> +250 788 518 720<br />
                📍 <strong>Location:</strong> Kigali, Rwanda<br />
                🌐 <strong>Services:</strong> Remote & On-site Available<br /><br />
                 <strong>💬 Need urgent support after hours?</strong><br />
                We respond promptly via WhatsApp for priority requests.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.formSection}>
          <h2 style={styles.sectionTitle}>Send Us a Message</h2>
          <p style={styles.sectionSubtitle}>
            Have questions or need assistance? Send us a message and we'll get back to you promptly.
          </p>
          
          <form onSubmit={handleMessageSubmit}>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="messageFullName">Full Name *</label>
                <input 
                  style={styles.input}
                  type="text" 
                  id="messageFullName" 
                  name="fullName" 
                  value={messageData.fullName}
                  onChange={handleMessageChange}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="messageEmail">Email Address *</label>
                <input 
                  style={styles.input}
                  type="email" 
                  id="messageEmail" 
                  name="email" 
                  value={messageData.email}
                  onChange={handleMessageChange}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="subject">Subject *</label>
              <input 
                style={styles.input}
                type="text" 
                id="subject" 
                name="subject" 
                value={messageData.subject}
                onChange={handleMessageChange}
                placeholder="Enter message subject"
                required
                disabled={isSubmitting}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="message">Message *</label>
              <textarea 
                style={styles.textarea}
                id="message" 
                name="message" 
                value={messageData.message}
                onChange={handleMessageChange}
                placeholder="Type your message here..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* reCAPTCHA Section */}
            <div 
              style={{
                ...styles.recaptchaContainer,
                borderColor: isRobotChecked ? '#4285f4' : '#ddd',
                backgroundColor: isRobotChecked ? '#f0f8ff' : '#f9f9f9'
              }}
              onClick={handleRecaptchaClick}
            >
              <input
                type="checkbox"
                checked={isRobotChecked}
                onChange={handleRecaptchaClick}
                style={styles.recaptchaCheckbox}
                disabled={isSubmitting}
              />
              <div style={styles.recaptchaText}>
                I'm not a robot
                <div style={styles.recaptchaFooter}>
                  <span>reCAPTCHA</span>
                  <span>Privacy - Terms</span>
                </div>
              </div>
            </div>

            {error && <div style={styles.errorMessage}>{error}</div>}
            {success && <div style={styles.successMessage}>{success}</div>}

            <div style={{background: '#f1eee5', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #de800d'}}>
              <h4 style={{color: '#0a1d51', marginBottom: '0.8rem', fontSize: '0.95rem'}}>💡 Tips for Faster Quotes:</h4>
              <ul style={{color: '#0a1d51', lineHeight: '1.5', paddingLeft: '1rem', fontSize: '0.9rem'}}>
                <li>Mention source and target languages</li>
                <li>Include document type and estimated word count</li>
                <li>Specify your desired delivery date</li>
                <li>Note any special requirements or formatting needs</li>
              </ul>
            </div>

            <button 
              type="submit" 
              style={{
                ...styles.submitButton,
                ...(isSubmitting ? styles.submitButtonDisabled : {})
              }}
              onMouseEnter={handleSubmitButtonHover}
              onMouseLeave={handleSubmitButtonLeave}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div style={styles.loadingSpinner}></div>
                  Sending...
                </>
              ) : (
                'SUBMIT'
              )}
            </button>

            <div style={styles.termsText}>
              By submitting this form, you agree to the <span style={styles.termsLink}>privacy policy</span> and <span style={styles.termsLink}>terms</span> of this website.
            </div>
          </form>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
        <p style={styles.sectionSubtitle}>
          Need immediate assistance? Choose the fastest way to reach us.
        </p>
        <div style={styles.quickActionsGrid}>
          {quickActions.map((action, index) => (
            <div
              key={index}
              style={{
                ...styles.quickActionCard,
                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                borderColor: hoveredCard === index ? '#de800d' : '#de800d'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={action.image} alt={action.title} style={{width: '48px', height: '48px', marginBottom: '0.8rem'}} />
              <h3 style={styles.quickActionTitle}>{action.title}</h3>
              <p style={styles.quickActionDescription}>{action.description}</p>
              <a href={action.link} target="_blank" rel="noopener noreferrer">
                <button 
                  style={styles.quickActionButton}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  {action.action}
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <div style={{...styles.clientPortalCard, padding: '2rem', textAlign: 'center'}}>
          <h2 style={styles.sectionTitle}>🗂️ Client Portal</h2>
          <h3 style={{fontSize: '1.6rem', color: '#0a1d51', marginBottom: '0.8rem'}}>Your Central Hub for Multilingual Projects</h3>
          <p style={{fontSize: '1.2rem', fontWeight: '600', color: '#0a1d51', marginBottom: '1rem'}}>
            🌍 Translate. Track. Trust.
          </p>
          <p style={styles.sectionSubtitle}>
            Welcome to your personalized LCI Client Portal—your secure, organized, and user-friendly platform to manage all translation, localization, and linguistic service requests in one place.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            <div style={styles.clientPortalCard}>
              <h4 style={{fontSize: '1.1rem', color: '#0a1d51', marginBottom: '0.8rem'}}>✅ Project Dashboard</h4>
              <p style={{color: '#0a1d51', fontSize: '0.95rem'}}>Track all your requests in real-time with full project visibility and progress updates.</p>
            </div>
            <div style={styles.clientPortalCard}>
              <h4 style={{fontSize: '1.1rem', color: '#0a1d51', marginBottom: '0.8rem'}}>📂 Document Repository</h4>
              <p style={{color: '#0a1d51', fontSize: '0.95rem'}}>Secure, encrypted storage for all your project files and deliverables.</p>
            </div>
            <div style={styles.clientPortalCard}>
              <h4 style={{fontSize: '1.1rem', color: '#0a1d51', marginBottom: '0.8rem'}}>💳 Payment Management</h4>
              <p style={{color: '#0a1d51', fontSize: '0.95rem'}}>Transparent billing with secure payment options via Credit Card, PayPal, or Mobile Money.</p>
            </div>
            <div style={styles.clientPortalCard}>
              <h4 style={{fontSize: '1.1rem', color: '#0a1d51', marginBottom: '0.8rem'}}>📊 Performance Reports</h4>
              <p style={{color: '#0a1d51', fontSize: '0.95rem'}}>Analytics and insights to help you make informed decisions about your multilingual projects.</p>
            </div>
          </div>
          <Link to="/client-login">
            <button 
              style={{
                ...styles.ctaButton,
                marginTop: '1.5rem',
              }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Access Client Portal
            </button>
          </Link>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.faqSection}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p style={styles.sectionSubtitle}>
            Get quick answers to the most common questions about our services.
          </p>
          <div style={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>❓ {faq.question}</h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={{...styles.faqSection, padding: '2rem'}}>
          <h2 style={styles.sectionTitle}>💳 Secure Payment Options</h2>
          <p style={styles.sectionSubtitle}>
            We offer convenient and secure payment options for your translation and localization services.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}>
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                style={{
                  ...styles.contactCard,
                  opacity:  1,
                }}
              >
                <img src={method.image} alt={method.title} style={styles.paymentImage} />
                <h4 style={{fontSize: '1.1rem', color: '#0a1d51', marginBottom: '0.5rem'}}>{method.title}</h4>
                <p style={{color: '#0a1d51', fontSize: '0.9rem'}}>{method.description}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '12px',
              padding: '0.8rem 1.5rem',
              color: '#065f46',
              fontWeight: '500',
              fontSize: '0.95rem'
            }}>
              <span style={{fontSize: '1.2rem'}}>🛡️</span>
              <span>All payments are processed securely. We do not store your payment information.</span>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Project?</h2>
          <p style={styles.ctaDescription}>
            Join the many organizations that trust LCI for their language needs. Get your free quote today!
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/quote" rel="noopener noreferrer">
              <button 
                style={styles.ctaButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Get Free Quote Now
              </button>
            </a>
          </div>
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: '#f1eee5',
            borderRadius: '12px',
            border: '1px solid #de800d'
          }}>
            <h3 style={{color: '#0a1d51', marginBottom: '0.8rem', fontSize: '1.2rem'}}>✨ Why Choose LCI?</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              color: '#0a1d51',
              fontSize: '0.9rem'
            }}>
              <div>✅ Native linguists with expertise</div>
              <div>⚡ Fast turnaround times</div>
              <div>🛡️ Confidential & secure</div>
              <div>🏆 Quality guaranteed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;