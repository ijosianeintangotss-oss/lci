import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Quote() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    serviceSubType: '',
    sourceLanguage: '',
    targetLanguage: '',
    urgency: '',
    wordCount: '',
    additionalRequirements: ''
  });

  const [files, setFiles] = useState([]);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedService, setSelectedService] = useState(null);
  const [serviceSubTypes, setServiceSubTypes] = useState([]);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [currentServicePrice, setCurrentServicePrice] = useState('');

  const serviceOptions = [
    { id: 1, value: 'translation', label: 'Translation and Interpretation', description: 'Request document translation or book a professional interpreter for conferences, legal proceedings, field interviews, NGO or community outreach. Supported file types: DOCX, PDF, XLSX, HTML, XML, and more.' },
    { id: 2, value: 'localization', label: 'Website & Software Localization', description: 'Submit your app, CMS files, or web platform for UI/UX localization, mobile & e-commerce support, and digital content adaptation.' },
    { id: 3, value: 'certified', label: 'Certified Document Translation', description: 'Submit official documents for certified or notarized translation: birth, marriage, death certificates, diplomas and transcripts, immigration or embassy files. Upload scans, receive certified hard or digital copies.' },
    { id: 4, value: 'transcription', label: 'Audio & Video Transcription', description: 'Upload files for transcription + optional translation: interviews, podcasts, court hearings, webinars.' },
    { id: 5, value: 'proofreading', label: 'Proofreading & Editing', description: 'Submit drafts for refinement or validation: business reports, legal submissions, back-translations for QA (especially medical, donor-funded work).' },
    { id: 6, value: 'cv-support', label: 'CV & Application Support', description: 'Upload your CV or SOP for professional editing, university application review, scholarship document polishing.' },
    { id: 7, value: 'mtpe', label: 'Machine Translation Post-Editing (MTPE)', description: 'Paste raw MT output or upload CMS exports for full human review, terminology consistency, tone/style adaptation.' },
    { id: 8, value: 'glossaries', label: 'Glossaries & Language Resources', description: 'Request custom glossaries or handbooks: internal team vocab lists, standardized Kinyarwanda/English/French terms, NGO or technical field-specific tools.' },
    { id: 9, value: 'back-translation', label: 'Back-Translation & Quality Assurance', description: 'Submit drafts for back-translation validation, especially for medical, legal, and donor-funded work requiring highest accuracy standards.' },
    { id: 10, value: 'ai-translation', label: 'AI Translation Services', description: 'Request AI-powered translation with human post-editing for large volumes, rapid turnaround, and specialized African language pairs.' },
    { id: 11, value: 'social-media', label: 'Social Media Marketing', description: 'Request multilingual social media marketing services for campaigns, content creation, community management across all major platforms.' },
    { id: 12, value: 'content-creation', label: 'Content Creation', description: 'Request original content creation: blog articles, video scripts, SEO web content, newsletters, and visual storytelling in multiple languages.' }
  ];

  const serviceSubTypesMap = {
    translation: [
      { value: 'document-translation', label: 'Document Translation' },
      { value: 'conference-interpreting', label: 'Conference Interpreting' },
      { value: 'legal-interpreting', label: 'Legal Proceedings Interpreting' },
      { value: 'field-interviews', label: 'Field Interviews Interpreting' },
      { value: 'ngo-outreach', label: 'NGO/Community Outreach Interpreting' }
    ],
    localization: [
      { value: 'cms-files', label: 'CMS Files Localization' },
      { value: 'ui-ux-localization', label: 'UI/UX Localization' },
      { value: 'mobile-apps', label: 'Mobile Apps Localization' },
      { value: 'e-commerce', label: 'E-commerce Platform Localization' },
      { value: 'digital-content', label: 'Digital Content Adaptation' }
    ],
    certified: [
      { value: 'birth-certificates', label: 'Birth Certificates' },
      { value: 'marriage-certificates', label: 'Marriage Certificates' },
      { value: 'death-certificates', label: 'Death Certificates' },
      { value: 'diplomas-transcripts', label: 'Diplomas & Transcripts' },
      { value: 'immigration-files', label: 'Immigration/Embassy Files' }
    ],
    transcription: [
      { value: 'interviews', label: 'Interviews Transcription' },
      { value: 'podcasts', label: 'Podcasts Transcription' },
      { value: 'court-hearings', label: 'Court Hearings Transcription' },
      { value: 'webinars', label: 'Webinars Transcription' },
      { value: 'meetings', label: 'Business Meetings Transcription' }
    ],
    proofreading: [
      { value: 'business-reports', label: 'Business Reports' },
      { value: 'legal-submissions', label: 'Legal Submissions' },
      { value: 'back-translations', label: 'Back-Translations QA' },
      { value: 'medical-documents', label: 'Medical Documents' },
      { value: 'donor-funded-work', label: 'Donor-Funded Work' }
    ],
    'cv-support': [
      { value: 'cv-editing', label: 'CV Professional Editing' },
      { value: 'sop-editing', label: 'Statement of Purpose Editing' },
      { value: 'university-applications', label: 'University Application Review' },
      { value: 'scholarship-documents', label: 'Scholarship Document Polishing' },
      { value: 'cover-letters', label: 'Cover Letters' }
    ],
    mtpe: [
      { value: 'raw-mt-output', label: 'Raw MT Output Editing' },
      { value: 'cms-exports', label: 'CMS Exports Editing' },
      { value: 'terminology-consistency', label: 'Terminology Consistency' },
      { value: 'tone-adaptation', label: 'Tone/Style Adaptation' },
      { value: 'full-human-review', label: 'Full Human Review' }
    ],
    glossaries: [
      { value: 'custom-glossaries', label: 'Custom Glossaries' },
      { value: 'team-vocab-lists', label: 'Team Vocabulary Lists' },
      { value: 'kinyarwanda-standards', label: 'Kinyarwanda Standardized Terms' },
      { value: 'french-standards', label: 'French Standardized Terms' },
      { value: 'technical-field-tools', label: 'Technical Field Tools' }
    ],
    'back-translation': [
      { value: 'medical-validation', label: 'Medical Document Validation' },
      { value: 'legal-validation', label: 'Legal Document Validation' },
      { value: 'donor-funded-validation', label: 'Donor-Funded Work Validation' },
      { value: 'quality-assurance', label: 'Quality Assurance' },
      { value: 'accuracy-standards', label: 'Accuracy Standards Check' }
    ],
    'ai-translation': [
      { value: 'large-volumes', label: 'Large Volume Translation' },
      { value: 'rapid-turnaround', label: 'Rapid Turnaround Projects' },
      { value: 'african-language-pairs', label: 'African Language Pairs' },
      { value: 'human-post-editing', label: 'Human Post-Editing' },
      { value: 'specialized-content', label: 'Specialized Content' }
    ],
    'social-media': [
      { value: 'campaigns', label: 'Social Media Campaigns' },
      { value: 'content-creation-sm', label: 'Content Creation' },
      { value: 'community-management', label: 'Community Management' },
      { value: 'multilingual-posts', label: 'Multilingual Posts' },
      { value: 'platform-management', label: 'Platform Management' }
    ],
    'content-creation': [
      { value: 'blog-articles', label: 'Blog Articles' },
      { value: 'video-scripts', label: 'Video Scripts' },
      { value: 'seo-content', label: 'SEO Web Content' },
      { value: 'newsletters', label: 'Newsletters' },
      { value: 'visual-storytelling', label: 'Visual Storytelling' }
    ]
  };

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },
    { value: 'kinyarwanda', label: 'Kinyarwanda' },
    { value: 'swahili', label: 'Kiswahili' },
    { value: 'kirundi', label: 'Kirundi' },
  ];

  const urgencyOptions = [
    { value: 'standard', label: 'Standard (3-5 days)' },
    { value: 'urgent', label: 'Urgent (24-48 hours) - +50% fee' },
    { value: 'very-urgent', label: 'Very Urgent (12-24 hours) - +100% fee' }
  ];

  // Service pricing information
  const servicePricing = {
    translation: "USD25/250 words or its current equivalent in Rwandan currency",
    proofreading: "USD15/250 words or its current equivalent in Rwandan currency",
    mtpe: "USD15/250 words or its current equivalent in Rwandan currency or negotiable based on the raw quality",
    'cv-support': "USD70 words or its current equivalent in Rwandan currency",
    localization: "USD75 words or its current equivalent in Rwandan currency",
    certified: "USD80 words or its current equivalent in Rwandan currency",
    transcription: "USD65 words or its current equivalent in Rwandan currency",
    glossaries: "USD 62 words or its current equivalent in Rwandan currency",
    'back-translation': "USD50 words or its current equivalent in Rwandan currency",
    'ai-translation': "USD55 words or its current equivalent in Rwandan currency",
    'social-media': "USD60 words or its current equivalent in Rwandan currency",
    'content-creation': "USD62 words or its current equivalent in Rwandan currency"
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    
    const searchParams = new URLSearchParams(location.search);
    const serviceId = searchParams.get('service');
    
    if (serviceId) {
      const service = serviceOptions.find(s => s.id === parseInt(serviceId));
      if (service) {
        setSelectedService(service);
        setFormData(prev => ({
          ...prev,
          service: service.value
        }));
        setServiceSubTypes(serviceSubTypesMap[service.value] || []);
      }
    }
    
    return () => window.removeEventListener('resize', handleResize);
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (e) => {
    const serviceValue = e.target.value;
    setFormData(prev => ({
      ...prev,
      service: serviceValue,
      serviceSubType: ''
    }));
    
    const service = serviceOptions.find(s => s.value === serviceValue);
    setSelectedService(service || null);
    setServiceSubTypes(serviceSubTypesMap[serviceValue] || []);
    
    // Show price modal when service is selected
    if (serviceValue && servicePricing[serviceValue]) {
      setCurrentServicePrice(servicePricing[serviceValue]);
      setShowPriceModal(true);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
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
    const requiredFields = ['fullName', 'email', 'service', 'serviceSubType', 'sourceLanguage', 'targetLanguage', 'urgency'];
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
      submitData.append('serviceSubType', formData.serviceSubType);
      submitData.append('documentType', formData.serviceSubType);
      submitData.append('sourceLanguage', formData.sourceLanguage);
      submitData.append('targetLanguage', formData.targetLanguage);
      submitData.append('urgency', formData.urgency);
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
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        serviceSubType: '',
        sourceLanguage: '',
        targetLanguage: '',
        urgency: '',
        wordCount: '',
        additionalRequirements: ''
      });
      setFiles([]);
      setPaymentScreenshot(null);
      setSelectedService(null);
      setServiceSubTypes([]);
      
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

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
    },
    sectionTitle: {
      fontSize: isMobile ? '1.8rem' : '2rem',
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
    serviceBanner: {
      background: '#f1eee5',
      border: '2px solid #de800d',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    serviceBannerTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.5rem',
    },
    serviceBannerDescription: {
      fontSize: '0.95rem',
      color: '#0a1d51',
      lineHeight: '1.5',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '1rem',
      marginBottom: '1.5rem',
    },
    fullWidth: {
      gridColumn: '1 / -1',
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
    select: {
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
    fileUpload: {
      border: '1px dashed #de800d',
      borderRadius: '12px',
      padding: '2rem',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: '#f1eee5',
    },
    fileUpload1: {
      border: '1px dashed #de800d',
      borderRadius: '12px',
      padding: '1rem',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: '#f1eee5',
    },
    fileList: {
      marginTop: '0.8rem',
      padding: '0.8rem',
      background: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #de800d',
    },
    fileItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.4rem 0',
      borderBottom: '1px solid #de800d',
      color: '#0a1d51',
      fontSize: '0.9rem',
    },
    removeFileButton: {
      background: '#ef4444',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '0.2rem 0.4rem',
      fontSize: '0.8rem',
      cursor: 'pointer',
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
    priceModal: {
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
    priceModalContent: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '500px',
      padding: '2rem',
      textAlign: 'center',
    },
    priceModalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#0a1d51',
      marginBottom: '1rem',
    },
    priceModalText: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
    },
    priceModalButton: {
      background: '#de800d',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    priceInfoButton: {
      background: 'transparent',
      border: '1px solid #de800d',
      color: '#de800d',
      padding: '0.3rem 0.8rem',
      borderRadius: '4px',
      fontSize: '0.8rem',
      cursor: 'pointer',
      marginLeft: '0.5rem',
      transition: 'all 0.3s ease',
    },
  };

  const handleButtonHover = (e) => {
    if (!isSubmitting) {
      e.target.style.transform = 'scale(1.05)';
    }
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const handlePriceInfoClick = (serviceValue) => {
    if (serviceValue && servicePricing[serviceValue]) {
      setCurrentServicePrice(servicePricing[serviceValue]);
      setShowPriceModal(true);
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
          
          .file-upload-hover {
            border-color: #de800d !important;
            background: #fff7ed !important;
          }
        `}
      </style>

      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={styles.sectionTitle}>Get a Detailed Quote</h2>
        <p style={styles.sectionSubtitle}>
          Upload your documents and get a professional quote within 2-4 hours. Our advanced form makes it easy to specify your exact requirements.
        </p>
        
        {selectedService && (
          <div style={{...styles.serviceBanner, ...styles.fullWidth}}>
            <h3 style={styles.serviceBannerTitle}>📋 Requesting: {selectedService.label}</h3>
            <p style={styles.serviceBannerDescription}>{selectedService.description}</p>
          </div>
        )}
        
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={styles.label} htmlFor="service">Service Required *</label>
                <button 
                  type="button"
                  style={styles.priceInfoButton}
                  onClick={() => handlePriceInfoClick(formData.service)}
                  disabled={!formData.service || isSubmitting}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#de800d'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  💰 Price Info
                </button>
              </div>
              <select 
                style={styles.select}
                id="service" 
                name="service" 
                value={formData.service}
                onChange={handleServiceChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select a service</option>
                {serviceOptions.map(service => (
                  <option key={service.value} value={service.value}>{service.label}</option>
                ))}
              </select>
            </div>

            {formData.service && serviceSubTypes.length > 0 && (
              <div style={{...styles.formGroup, ...styles.fullWidth}}>
                <label style={styles.label} htmlFor="serviceSubType">Service Specific Options *</label>
                <select 
                  style={styles.select}
                  id="serviceSubType" 
                  name="serviceSubType" 
                  value={formData.serviceSubType}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select specific option</option>
                  {serviceSubTypes.map(subType => (
                    <option key={subType.value} value={subType.value}>{subType.label}</option>
                  ))}
                </select>
              </div>
            )}

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
              <label style={styles.label} htmlFor="urgency">Urgency *</label>
              <select 
                style={styles.select}
                id="urgency" 
                name="urgency" 
                value={formData.urgency}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select urgency level</option>
                {urgencyOptions.map(option => (
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

            <div style={{...styles.formGroup, ...styles.fullWidth}}>
              <label style={styles.label}>Upload Payment Screenshot *</label>
              <label style={{...styles.label, fontSize: '0.85rem', color: '#de800d'}}>
                Dial *182*1*1*0788518720*Amount# 
              </label>
              <div
                style={styles.fileUpload1}
                onClick={() => !isSubmitting && document.getElementById('paymentScreenshotInput').click()}
                onMouseEnter={(e) => !isSubmitting && e.target.classList.add('file-upload-hover')}
                onMouseLeave={(e) => e.target.classList.remove('file-upload-hover')}
              >
                <h3 style={{color: '#0a1d51', marginBottom: '0.5rem', fontSize: '0.95rem'}}>
                  {paymentScreenshot ? '✅ Payment Screenshot Uploaded' : 'Drag & drop your payment screenshot'}
                </h3>
                <p style={{color: '#0a1d51', fontSize: '0.9rem'}}>
                  Or <span style={{color: '#de800d', fontWeight: '500', cursor: 'pointer'}}>click here to browse</span>
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

            <div style={{...styles.formGroup, ...styles.fullWidth}}>
              <label style={styles.label}>Upload Your Documents *</label>
              <div
                style={styles.fileUpload}
                onClick={() => !isSubmitting && document.getElementById('fileInput').click()}
                onMouseEnter={(e) => !isSubmitting && e.target.classList.add('file-upload-hover')}
                onMouseLeave={(e) => e.target.classList.remove('file-upload-hover')}
              >
                <div style={{fontSize: '2rem', color: '#de800d', marginBottom: '0.8rem'}}>
                  📁
                </div>
                <h3 style={{color: '#0a1d51', marginBottom: '0.5rem', fontSize: '0.95rem'}}>
                  {files.length > 0 ? `✅ ${files.length} File(s) Selected` : 'Drag & drop your files'}
                </h3>
                <p style={{color: '#0a1d51', fontSize: '0.9rem'}}>
                  Or <span style={{color: '#de800d', fontWeight: '500', cursor: 'pointer'}}>click here to browse</span>
                </p>
                <p style={{color: '#0a1d51', fontSize: '0.85rem', marginTop: '0.5rem'}}>
                  Supported formats: PDF, Word, PowerPoint, Excel, Text, Images, Audio, Video (Max 10MB per file)
                </p>
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  style={{display: 'none'}}
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.jpg,.jpeg,.png,.mp3,.mp4,.wav"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                />
              </div>
              
              {files.length > 0 && (
                <div style={styles.fileList}>
                  <h4 style={{color: '#0a1d51', marginBottom: '0.8rem', fontSize: '0.95rem'}}>Selected Files:</h4>
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

            <div style={{...styles.formGroup, ...styles.fullWidth}}>
              <label style={styles.label} htmlFor="additionalRequirements">Additional Requirements</label>
              <textarea 
                style={styles.textarea}
                id="additionalRequirements" 
                name="additionalRequirements" 
                value={formData.additionalRequirements}
                onChange={handleInputChange}
                placeholder="Specify any additional requirements or special instructions..."
                disabled={isSubmitting}
              ></textarea>
            </div>
          </div>

          {error && <div style={{...styles.errorMessage, ...styles.fullWidth}}>{error}</div>}
          {success && <div style={{...styles.successMessage, ...styles.fullWidth}}>{success}</div>}

          <div style={{...styles.fullWidth, textAlign: 'center'}}>
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
          </div>
        </form>
      </div>

      {/* Price Information Modal */}
      {showPriceModal && (
        <div style={styles.priceModal} onClick={() => setShowPriceModal(false)}>
          <div style={styles.priceModalContent} onClick={(e) => e.stopPropagation()}>
            <h3 style={styles.priceModalTitle}>💰 Service Pricing</h3>
            <p style={styles.priceModalText}>{currentServicePrice}</p>
            <button
              style={styles.priceModalButton}
              onClick={() => setShowPriceModal(false)}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quote;