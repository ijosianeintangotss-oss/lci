import React, { useState } from 'react';

function Quote() {
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

  const [files, setFiles] = useState([]);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
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
      backgroundColor: '#d27b10ff',
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
    }
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

      <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
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
      </div>
    </div>
  );
}

export default Quote;