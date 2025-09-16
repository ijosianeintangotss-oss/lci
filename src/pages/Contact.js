import React, { useState, useEffect } from 'react';
import mobileMoney from '../assets/mobile money.png';
import visaCard from '../assets/visa card.png';
import masterCard from '../assets/master card.png';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState('quote');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    documentType: '',
    sourceLanguage: '',
    targetLanguage: '',
    turnaround: '',
    wordCount: '',
    additionalRequirements: ''
  });

  const [messageData, setMessageData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [files, setFiles] = useState([]);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { value: 'translation', label: 'Translation' },
    { value: 'interpretation', label: 'Interpretation' },
    { value: 'localization', label: 'Localization' },
    { value: 'proofreading', label: 'Proofreading' },
    { value: 'transcription', label: 'Audio/Video Transcription' },
    { value: 'certified', label: 'Certified Translation' },
    { value: 'cv-support', label: 'CV & Application Support' },
    { value: 'mtpe', label: 'Machine Translation Post-Editing' }
  ];

  const documentTypes = [
    { value: 'legal', label: 'Legal Documents' },
    { value: 'medical', label: 'Medical Documents' },
    { value: 'technical', label: 'Technical Documents' },
    { value: 'business', label: 'Business Documents' },
    { value: 'academic', label: 'Academic Documents' },
    { value: 'personal', label: 'Personal Documents' },
    { value: 'marketing', label: 'Marketing Materials' },
    { value: 'website', label: 'Website Content' }
  ];

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },
    { value: 'kinyarwanda', label: 'Kinyarwanda' },
    { value: 'swahili', label: 'Kiswahili' },
    { value: 'kirundi', label: 'Kirundi' },
  ];

  const turnaroundOptions = [
    { value: 'rush', label: 'Rush (24-48 hours) - +50% fee' },
    { value: 'standard', label: 'Standard (3-5 days)' },
    { value: 'extended', label: 'Extended (1-2 weeks) - 10% discount' }
  ];

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
    image: "../assets/whatsapp-icon.png", // Replace with your actual image path
    action: "Start WhatsApp Chat",
    link: "https://wa.me/250788518720"
  },
  {
    title: "Schedule a Call",
    description: "Prefer to talk? Call us during business hours for immediate assistance.",
    image: "../assets/call.png", // Replace with your actual image path
    action: "Call Now",
    link: "tel:+250788518720"
  },
  {
    title: "Email Directly",
    description: "Send us an email with your project details for a detailed quote.",
    image: "../assets/email.png", // Replace with your actual image path
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
      title: "Visa",
      description: "Currently unavailable. Please use MTN Mobile Money for secure payments.",
      image: visaCard
    },
    {
      title: "MasterCard",
      description: "Currently unavailable. Please use MTN Mobile Money for secure payments.",
      image: masterCard
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Validate file sizes
    const oversizedFiles = selectedFiles.filter(file => file.size > 10 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setError(`Files too large: ${oversizedFiles.map(f => f.name).join(', ')}. Maximum size is 10MB per file.`);
      return;
    }
    
    setFiles(selectedFiles);
    setError(null);
  };

  const handlePaymentScreenshotChange = (e) => {
    const file = e.target.files[0];
    
    if (file && file.size > 10 * 1024 * 1024) {
      setError('Payment screenshot too large. Maximum size is 10MB.');
      return;
    }
    
    setPaymentScreenshot(file);
    setError(null);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const removePaymentScreenshot = () => {
    setPaymentScreenshot(null);
    const paymentInput = document.getElementById('paymentScreenshotInput');
    if (paymentInput) paymentInput.value = '';
  };

  const validateQuoteForm = () => {
    const requiredFields = ['fullName', 'email', 'service', 'documentType', 'sourceLanguage', 'targetLanguage', 'turnaround'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setError('Please fill in all required fields');
      return false;
    }

    if (files.length === 0) {
      setError('Please upload at least one document');
      return false;
    }

    if (!paymentScreenshot) {
      setError('Please upload a payment screenshot');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
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

    return true;
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateQuoteForm()) return;

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('service', formData.service);
      submitData.append('documentType', formData.documentType);
      submitData.append('sourceLanguage', formData.sourceLanguage);
      submitData.append('targetLanguage', formData.targetLanguage);
      submitData.append('turnaround', formData.turnaround);
      submitData.append('wordCount', formData.wordCount);
      submitData.append('additionalRequirements', formData.additionalRequirements);

      files.forEach(file => submitData.append('files', file));
      if (paymentScreenshot) submitData.append('paymentScreenshot', paymentScreenshot);

      const response = await fetch('https://lcirwanda-backend001.onrender.com/api/quotes', {
        method: 'POST',
        body: submitData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        setError(responseData.message || 'Failed to submit quote');
        return;
      }

      setSuccess('Quote submitted successfully! We will respond within 2-4 hours.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        documentType: '',
        sourceLanguage: '',
        targetLanguage: '',
        turnaround: '',
        wordCount: '',
        additionalRequirements: ''
      });
      setFiles([]);
      setPaymentScreenshot(null);
      
      // Reset file inputs
      const fileInput = document.getElementById('fileInput');
      const paymentInput = document.getElementById('paymentScreenshotInput');
      if (fileInput) fileInput.value = '';
      if (paymentInput) paymentInput.value = '';

    } catch (error) {
      console.error('Submission error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateMessageForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://lcirwanda-backend001.onrender.com/api/messages', {
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
      
      // Reset form
      setMessageData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });

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
      fontFamily: 'Arial, sans-serif'
    },
    heroSection: {
      minHeight: '30vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#ffffff  ',
      // background: 'linear-gradient(135deg, #ff8c00 0%, #1e3a8a 50%, #ff8c00 100%)',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1s ease-out'
    },
    heroContent: {
      textAlign: 'center',
      maxWidth: '1200px',
      zIndex: 10,
      position: 'relative'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1.5rem',
      lineHeight: '1.2'
    },
    heroDescription: {
      fontSize: '1.3rem',
      color: '#0a1d51ff',
      marginBottom: '2rem',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto 2rem'
    },
    section: {
      padding: '4rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#0f2460ff',
      textAlign: 'center',
      marginBottom: '1rem'
    },
    sectionSubtitle: {
      fontSize: '1.2rem',
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: '3rem',
      maxWidth: '800px',
      margin: '0 auto 3rem'
    },
    contactInfoSection: {

      // background: 'linear-gradient(135deg, #f0f9ff, #dbeafe)',
      background: '#ffffff  ',
      borderRadius: '20px',
      padding: '3rem',
      margin: '2rem 0',
      border: '2px solid #ff8c00'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    contactCard: {
      background: '#ffffff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.1)'
    },
    contactCardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#0f2460ff',
      marginBottom: '1rem'
    },
    contactDetails: {
      color: '#4b5563',
      lineHeight: '1.8',
      fontSize: '1.1rem'
    },
    formSection: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '3rem',
      margin: '2rem 0',
      border: '2px solid #f3f4f6',
      boxShadow: '0 8px 32px rgba(30, 58, 138, 0.1)'
    },
    tabContainer: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      borderBottom: '2px solid #f3f4f6'
    },
    tab: {
      padding: '1rem 2rem',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderBottom: '3px solid transparent',
      transition: 'all 0.3s ease'
    },
    activeTab: {
      color: '#ff8c00',
      borderBottom: '3px solid #ff8c00'
    },
    inactiveTab: {
      color: '#6b7280'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      padding: '1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      backgroundColor: '#ffffff'
    },
    select: {
      padding: '1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      backgroundColor: '#ffffff'
    },
    textarea: {
      padding: '1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      backgroundColor: '#ffffff',
      minHeight: '120px',
      resize: 'vertical'
    },
    fileUpload: {
      border: '2px dashed #d1d5db',
      borderRadius: '15px',
      padding: '3rem',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: '#f9fafb'
    },
    fileUpload1: {
      border: '2px dashed #d1d5db',
      borderRadius: '15px',
      padding: '1.5rem',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: '#f9fafb'
    },
    fileList: {
      marginTop: '1rem',
      padding: '1rem',
      background: '#f8fafc',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    },
    fileItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem 0',
      borderBottom: '1px solid #e2e8f0',
      color: '#1e3a8a'
    },
    removeFileButton: {
      background: '#ef4444',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '0.25rem 0.5rem',
      fontSize: '0.8rem',
      cursor: 'pointer'
    },
    submitButton: {
      // background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      background: ' #d27b10ff',
      color: 'white',
      padding: '1rem 3rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(255, 140, 0, 0.3)',
      transition: 'all 0.3s ease',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0 auto'
    },
    submitButtonDisabled: {
      background: '#9ca3af',
      cursor: 'not-allowed',
      boxShadow: 'none'
    },
    quickActionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    quickActionCard: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      cursor: 'pointer',
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.1)',
      textAlign: 'center'
    },
    quickActionIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem'
    },
    quickActionTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem'
    },
    quickActionDescription: {
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    quickActionButton: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '25px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    faqSection: {
      backgroundColor: '#f1eee5ff',
      // background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
      borderRadius: '20px',
      padding: '3rem',
      margin: '2rem 0',
      border: '2px solid #ff8c00'
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem'
    },
    faqItem: {
      background: '#ffffff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      boxShadow: '0 4px 15px rgba(255, 140, 0, 0.1)'
    },
    faqQuestion: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem'
    },
    faqAnswer: {
      color: '#4b5563',
      lineHeight: '1.6'
    },
    ctaSection: {
      textAlign: 'center',
      padding: '4rem 2rem',
      backgroundColor: '#f1eee5ff',
      // background: 'linear-gradient(135deg, #1e3a8a, #ff8c00)',
      borderRadius: '20px',
      margin: '2rem 0'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#0f2460ff',
      marginBottom: '1rem'
    },
    ctaDescription: {
      fontSize: '1.2rem',
      color: '#0a1d51ff',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    ctaButton: {
      // background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      backgroundColor: '#d27b10ff',
      color: '#1e3a8a',
      padding: '1rem 3rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3)',
      transition: 'all 0.3s ease'
    },
    errorMessage: {
      color: '#dc2626',
      textAlign: 'center',
      marginBottom: '1rem',
      fontWeight: '600',
      padding: '1rem',
      background: '#fef2f2',
      borderRadius: '10px',
      border: '1px solid #fecaca'
    },
    successMessage: {
      color: '#065f46',
      textAlign: 'center',
      marginBottom: '1rem',
      fontWeight: '600',
      padding: '1rem',
      background: '#ecfdf5',
      borderRadius: '10px',
      border: '1px solid #a7f3d0'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '1rem',
      height: '1rem',
      border: '2px solid transparent',
      borderTop: '2px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    paymentImage: {
      width: '100px',
      height: '50px',
      objectFit: 'contain',
      marginBottom: '1.5rem',
    },
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleButtonHover = (e) => {
    if (!isSubmitting) {
      e.target.style.transform = 'scale(1.05)';
    }
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
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
            border-color: #ff8c00 !important;
            outline: none;
          }
          
          .file-upload-hover {
            border-color: #ff8c00 !important;
            background: #fff7ed !important;
          }
        `}
      </style>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Let's Talk Language</h1>
          <p style={styles.heroDescription}>
            Need a quote? Want to collaborate? We're happy to help! Get in touch with our language experts today.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
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
                📞  <strong>Call / WhatsApp:</strong> +250 788 518 720<br />
                📍 <strong>Location:</strong> Kigali, Rwanda<br />
                🌐 <strong>Services:</strong> Remote & On-site Available<br /><br />
                💬 <strong>Need urgent support after hours?</strong><br />
                We respond promptly via WhatsApp for priority requests.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote and Message Forms */}
      <section style={styles.section}>
        <div style={styles.formSection}>
          
          <div style={styles.tabContainer}>
            <button 
              style={{
                ...styles.tab,
                ...(activeSection === 'quote' ? styles.activeTab : styles.inactiveTab)
              }}
              onClick={() => setActiveSection('quote')}
            >
              Get Detailed Quote
            </button>
            <button 
              style={{
                ...styles.tab,
                ...(activeSection === 'message' ? styles.activeTab : styles.inactiveTab)
              }}
              onClick={() => setActiveSection('message')}
            >
              Send Message
            </button>
          </div>

          {activeSection === 'quote' && (
            <>
              <h2 style={styles.sectionTitle}>Get a Detailed Quote</h2>
              <p style={styles.sectionSubtitle}>
                Upload your documents and get a professional quote within 2-4 hours. Our advanced form makes it easy to specify your exact requirements.
              </p>
              
              <form onSubmit={handleQuoteSubmit}>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="fullName">Full Name *</label>
                    <input 
                      style={styles.input}
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="email">Email Address *</label>
                    <input 
                      style={styles.input}
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="phone">Phone Number</label>
                    <input 
                      style={styles.input}
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="service">Service Required *</label>
                    <select 
                      style={styles.select}
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.value} value={service.value}>{service.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="documentType">Document Type *</label>
                    <select 
                      style={styles.select}
                      id="documentType" 
                      name="documentType" 
                      value={formData.documentType}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select document type</option>
                      {documentTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="sourceLanguage">Source Language *</label>
                    <select 
                      style={styles.select}
                      id="sourceLanguage" 
                      name="sourceLanguage" 
                      value={formData.sourceLanguage}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select source language</option>
                      {languages.map(lang => (
                        <option key={lang.value} value={lang.value}>{lang.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="targetLanguage">Target Language *</label>
                    <select 
                      style={styles.select}
                      id="targetLanguage" 
                      name="targetLanguage" 
                      value={formData.targetLanguage}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select target language</option>
                      {languages.map(lang => (
                        <option key={lang.value} value={lang.value}>{lang.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="turnaround">Turnaround Time *</label>
                    <select 
                      style={styles.select}
                      id="turnaround" 
                      name="turnaround" 
                      value={formData.turnaround}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select timeframe</option>
                      {turnaroundOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="wordCount">Estimated Word Count</label>
                    <input 
                      style={styles.input}
                      type="number" 
                      id="wordCount" 
                      name="wordCount" 
                      value={formData.wordCount}
                      onChange={handleInputChange}
                      placeholder="Approximate number of words"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Upload Payment Screenshot *</label>
                    <label style={styles.label}>Dial *182*1*1*0788518720*Amount# *</label>
                    <div
                      style={styles.fileUpload1}
                      onClick={() => !isSubmitting && document.getElementById('paymentScreenshotInput').click()}
                      onMouseEnter={(e) => !isSubmitting && e.target.classList.add('file-upload-hover')}
                      onMouseLeave={(e) => e.target.classList.remove('file-upload-hover')}
                    >
                      <h3 style={{color: '#1e3a8a', marginBottom: '0.5rem'}}>
                        {paymentScreenshot ? '✅ Payment Screenshot Uploaded' : 'Drag & drop your payment screenshot'}
                      </h3>
                      <p style={{color: '#6b7280'}}>
                        Or <span style={{color: '#ff8c00', fontWeight: '600', cursor: 'pointer'}}>click here to browse</span> your computer
                      </p>
                      <input
                        id="paymentScreenshotInput"
                        type="file"
                        style={{display: 'none'}}
                        accept=".png,.jpg,.jpeg"
                        onChange={handlePaymentScreenshotChange}
                        disabled={isSubmitting}
                      />
                      {paymentScreenshot && (
                        <div style={styles.fileList}>
                          <div style={styles.fileItem}>
                            <span>📄 {paymentScreenshot.name}</span>
                            <button
                              type="button"
                              style={styles.removeFileButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                removePaymentScreenshot();
                              }}
                              disabled={isSubmitting}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Upload Your Documents *</label>
                  <div
                    style={styles.fileUpload}
                    onClick={() => !isSubmitting && document.getElementById('fileInput').click()}
                    onMouseEnter={(e) => !isSubmitting && e.target.classList.add('file-upload-hover')}
                    onMouseLeave={(e) => e.target.classList.remove('file-upload-hover')}
                  >
                    <div style={{fontSize: '3rem', color: '#8B5CF6', marginBottom: '1rem'}}>
                      📄
                    </div>
                    <h3 style={{color: '#1e3a8a', marginBottom: '0.5rem'}}>
                      {files.length > 0 ? `✅ ${files.length} File(s) Selected` : 'Drag & drop your files'}
                    </h3>
                    <p style={{color: '#6b7280'}}>
                      Or <span style={{color: '#ff8c00', fontWeight: '600', cursor: 'pointer'}}>click here to browse</span> your computer
                    </p>
                    <p style={{color: '#9ca3af', fontSize: '0.9rem', marginTop: '1rem'}}>
                      Supported formats: PDF, Word, PowerPoint, Excel, Text (Max 10MB per file)
                    </p>
                    <input
                      id="fileInput"
                      type="file"
                      multiple
                      style={{display: 'none'}}
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {files.length > 0 && (
                    <div style={styles.fileList}>
                      <h4 style={{color: '#1e3a8a', marginBottom: '1rem'}}>Selected Files:</h4>
                      {files.map((file, idx) => (
                        <div key={idx} style={styles.fileItem}>
                          <span>📄 {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          <button
                            type="button"
                            style={styles.removeFileButton}
                            onClick={() => removeFile(idx)}
                            disabled={isSubmitting}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="additionalRequirements">Additional Requirements</label>
                  <textarea 
                    style={styles.textarea}
                    id="additionalRequirements" 
                    name="additionalRequirements" 
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    placeholder="Please specify any additional requirements, special instructions, or important details about your project..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {error && <div style={styles.errorMessage}>{error}</div>}
                {success && <div style={styles.successMessage}>{success}</div>}

                <button 
                  type="submit" 
                  style={{
                    ...styles.submitButton,
                    ...(isSubmitting ? styles.submitButtonDisabled : {})
                  }}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div style={styles.loadingSpinner}></div>
                      Submitting...
                    </>
                  ) : (
                    'Get Quote'
                  )}
                </button>
              </form>
            </>
          )}

          {activeSection === 'message' && (
            <>
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

                {error && <div style={styles.errorMessage}>{error}</div>}
                {success && <div style={styles.successMessage}>{success}</div>}

                <div style={{background: '#f1eee5ff', padding: '1.5rem', borderRadius: '10px', marginBottom: '2rem', border: '1px solid #dbeafe'}}>
                  <h4 style={{color: '#1e3a8a', marginBottom: '1rem'}}>💡 Tips for Faster Quotes:</h4>
                  <ul style={{color: '#4b5563', lineHeight: '1.6', paddingLeft: '1.5rem'}}>
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
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div style={styles.loadingSpinner}></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Quick Actions Section */}
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
                borderColor: hoveredCard === index ? '#ff8c00' : '#f3f4f6'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.quickActionIcon}>{action.icon}</div>
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

      {/* Client Portal Section */}
      <section style={styles.section}>
        <div style={{
          // background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
          backgroundColor: '#f1eee5ff',
          borderRadius: '20px',
          padding: '4rem 2rem',
          border: '2px solid #de800dff',
          textAlign: 'center'
        }}>
          <h2 style={styles.sectionTitle}>🗂️ Client Portal</h2>
          <h3 style={{fontSize: '2rem', color: '#d27b10ff', marginBottom: '1rem'}}>Your Central Hub for Multilingual Projects</h3>
          <p style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1.5rem'}}>
            🌍 Translate. Track. Trust.
          </p>
          <p style={styles.sectionSubtitle}>
            Welcome to your personalized LCI Client Portal—your secure, organized, and user-friendly platform to manage all translation, localization, and linguistic service requests in one place.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={styles.contactCard}>
              <h4 style={{fontSize: '1.3rem', color: '#1e3a8a', marginBottom: '1rem'}}>✅ Project Dashboard</h4>
              <p style={{color: '#4b5563'}}>Track all your requests in real-time with full project visibility and progress updates.</p>
            </div>
            <div style={styles.contactCard}>
              <h4 style={{fontSize: '1.3rem', color: '#1e3a8a', marginBottom: '1rem'}}>📂 Document Repository</h4>
              <p style={{color: '#4b5563'}}>Secure, encrypted storage for all your project files and deliverables.</p>
            </div>
            <div style={styles.contactCard}>
              <h4 style={{fontSize: '1.3rem', color: '#1e3a8a', marginBottom: '1rem'}}>💳 Payment Management</h4>
              <p style={{color: '#4b5563'}}>Transparent billing with secure payment options via Credit Card, PayPal, or Mobile Money.</p>
            </div>
            <div style={styles.contactCard}>
              <h4 style={{fontSize: '1.3rem', color: '#1e3a8a', marginBottom: '1rem'}}>📊 Performance Reports</h4>
              <p style={{color: '#4b5563'}}>Analytics and insights to help you make informed decisions about your multilingual projects.</p>
            </div>
          </div>

          <button 
            style={{
              ...styles.ctaButton,
              marginTop: '2rem',
              fontSize: '1.2rem',
              padding: '1.2rem 3rem'
            }}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            🔗 Access Client Portal
          </button>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Payment Methods Section */}
      <section style={styles.section}>
        <div style={{
          // background: 'linear-gradient(135deg, #fef7ff, #fae8ff)',
          backgroundColor: '#f1eee5ff',
          borderRadius: '20px',
          padding: '3rem',
          border: '2px solid #de800dff'
        }}>
          <h2 style={styles.sectionTitle}>💳 Secure Payment Options</h2>
          <p style={styles.sectionSubtitle}>
            We offer convenient and secure payment options for your translation and localization services.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                style={{
                  ...styles.contactCard,
                  opacity: method.title !== "MTN Mobile Money" ? 0.6 : 1,
                  pointerEvents: method.title !== "MTN Mobile Money" ? 'none' : 'auto',
                }}
              >
                <img src={method.image} alt={method.title} style={styles.paymentImage} />
                <h4 style={{fontSize: '1.2rem', color: '#1e3a8a', marginBottom: '0.5rem'}}>{method.title}</h4>
                <p style={{color: '#4b5563', fontSize: '0.9rem'}}>{method.description}</p>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '50px',
              padding: '1rem 2rem',
              color: '#065f46',
              fontWeight: '600'
            }}>
              <span style={{fontSize: '1.5rem'}}>🛡️</span>
              <span>All payments are processed securely. We do not store your payment information.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🌍 Our Service Coverage</h2>
        <p style={styles.sectionSubtitle}>
          Serving clients across Rwanda, Africa, and globally with professional language services.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          {['🇷🇼 Rwanda', '🌍 East Africa', '🌎 International', '🌐 Remote Services'].map((area, index) => (
            <div key={index} style={{
              ...styles.contactCard,
              padding: '1.5rem',
              border: '2px solid #ff8c00'
            }}>
              <h4 style={{fontSize: '1.1rem', color: '#1e3a8a'}}>{area}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={styles.section}>
        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Project?</h2>
          <p style={styles.ctaDescription}>
            Join the many organizations that trust LCI for their language needs. Get your free quote today!
          </p>
          <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button 
              style={styles.ctaButton}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => setActiveSection('quote')}
            >
              <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                 Get Free Quote Now
              </span>
            </button>
            <a href="https://wa.me/250788518720" target="_blank" rel="noopener noreferrer">
              <button 
                style={{
                  ...styles.ctaButton,
                  background: 'linear-gradient(135deg, #10b981, #059669)'
                }}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  Chat on WhatsApp
                </span>
              </button>
            </a>
          </div>
          
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <h3 style={{color: '#1e3a8a', marginBottom: '1rem'}}>✨ Why Choose LCI?</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              color: '#1e3a8a',
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