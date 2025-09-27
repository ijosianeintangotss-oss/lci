import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/LCI_ExcellenceinTranslation.png';
import whatsappIcon from '../assets/whatsapp-icon.png';

function Training() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const programFeatures = [
    {
      id: 1,
      title: "Mentorship from Experienced Linguists",
      tagline: "Personalized Guidance",
      icon: "",
      description: "Learn directly from industry professionals with years of translation experience and deep cultural understanding.",
      keyFeatures: [
        "One-on-one mentoring sessions",
        "Industry insights and best practices",
        "Career advice from experts",
        "Feedback on your work"
      ],
      useCases: [
        "Language pair specialization",
        "Cultural nuance understanding",
        "Professional development",
        "Network building"
      ]
    },
    {
      id: 2,
      title: "Practical, Project-Based Training",
      tagline: "Hands-On Experience",
      icon: "",
      description: "Work on real client projects under supervision to gain hands-on experience in professional translation environments.",
      keyFeatures: [
        "Real-world assignments",
        "Supervised translation work",
        "Project management skills",
        "Client interaction basics"
      ],
      useCases: [
        "Document translation",
        "Website localization",
        "Interpretation practice",
        "Specialized field projects"
      ]
    },
    {
      id: 3,
      title: "Industry Tools & Technology",
      tagline: "Modern Toolkit",
      icon: "",
      description: "Master professional CAT tools, quality assurance software, and industry standards used by top translation companies.",
      keyFeatures: [
        "CAT tools training (Trados, MemoQ)",
        "QA software proficiency",
        "Translation memory management",
        "File format handling"
      ],
      useCases: [
        "Large-scale projects",
        "Team collaboration",
        "Efficiency optimization",
        "Quality control"
      ]
    },
    {
      id: 4,
      title: "Real Client Exposure",
      tagline: "Professional Portfolio",
      icon: "",
      description: "Build your portfolio while contributing to actual translation projects and understanding client requirements.",
      keyFeatures: [
        "Portfolio development",
        "Client feedback integration",
        "Professional standards",
        "Industry exposure"
      ],
      useCases: [
        "Job applications",
        "Freelance pitching",
        "Career advancement",
        "Skill demonstration"
      ]
    }
  ];

  const qualitySteps = [
    {
      step: 1,
      title: "Theoretical Foundation",
      description: "Build strong linguistic knowledge"
    },
    {
      step: 2,
      title: "Practical Training",
      description: "Hands-on project experience"
    },
    {
      step: 3,
      title: "Mentorship Review",
      description: "Expert feedback and guidance"
    },
    {
      step: 4,
      title: "Professional Certification",
      description: "Industry-recognized completion"
    }
  ];

  const supportedLanguages = [
    { code: "EN", name: "English", flag: "🇬🇧" },
    { code: "FR", name: "French", flag: "🇫🇷" },
    { code: "RW", name: "Kinyarwanda", flag: "🇷🇼" },
    { code: "SW", name: "Kiswahili", flag: "🇹🇿" },
    { code: "RN", name: "Kirundi", flag: "🇧🇮" }
  ];

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
      width: isMobile ? '100%' : '40%',
      maxWidth: isMobile ? '100%' : '450px',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '10px',
      margin: isMobile ? '0 auto' : '0',
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
    whatsappButton: {
      backgroundColor: '#de800d',
      padding: '0.8rem 1.8rem',
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
      padding: '4rem 1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#f1eee5',
      borderRadius: '15px',
      border: '1px solid #de800d',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#0a1d51',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    sectionSubtitle: {
      fontSize: '1rem',
      color: '#0a1d51',
      textAlign: 'center',
      marginBottom: '2rem',
      maxWidth: '700px',
      margin: '0 auto 2rem',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    serviceCard: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
      position: 'relative',
    },
    serviceHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem',
    },
    serviceIcon: {
      fontSize: '2rem',
      color: '#de800d',
    },
    serviceHeaderText: {
      flex: 1,
    },
    serviceTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.5rem',
    },
    serviceTagline: {
      fontSize: '0.95rem',
      color: '#de800d',
      fontWeight: '500',
      fontStyle: 'italic',
    },
    serviceDescription: {
      color: '#0a1d51',
      lineHeight: '1.5',
      marginBottom: '1rem',
      fontSize: '0.95rem',
    },
    featuresSection: {
      marginBottom: '1rem',
    },
    featuresTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    featureItem: {
      padding: '0.3rem 0',
      color: '#0a1d51',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.95rem',
    },
    useCasesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '0.8rem',
    },
    useCaseItem: {
      background: '#f1eee5',
      padding: '0.5rem 1rem',
      borderRadius: '12px',
      fontSize: '0.9rem',
      color: '#0a1d51',
      textAlign: 'center',
      border: '1px solid #de800d',
    },
    expandButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: '#de800d',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '2rem',
      height: '2rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    },
    qualitySection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    qualityGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.5rem',
    },
    qualityStep: {
      textAlign: 'center',
      background: '#f1eee5',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      position: 'relative',
    },
    stepNumber: {
      position: 'absolute',
      top: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#de800d',
      color: 'white',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '0.9rem',
    },
    stepTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
      marginTop: '1rem',
    },
    stepDescription: {
      color: '#0a1d51',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    languagesSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    languagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '1.5rem',
    },
    languageCard: {
      background: '#f1eee5',
      borderRadius: '12px',
      padding: '1.5rem',
      textAlign: 'center',
      border: '1px solid #de800d',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
    },
    languageFlag: {
      fontSize: '2rem',
      marginBottom: '0.8rem',
    },
    languageCode: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.5rem',
    },
    languageName: {
      color: '#0a1d51',
      fontSize: '0.95rem',
    },
    confidentialitySection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      textAlign: 'center',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    confidentialityTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '1rem',
    },
    confidentialityDescription: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
      maxWidth: '800px',
      margin: '0 auto 1.5rem',
    },
    confidentialityFeatures: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1rem',
      marginTop: '1.5rem',
    },
    confidentialityFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      fontSize: '0.95rem',
      color: '#0a1d51',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '4rem 1.5rem',
      background: '#f1eee5',
      borderRadius: '15px',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    ctaTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '1rem',
    },
    ctaDescription: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '2rem',
      lineHeight: '1.5',
    },
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleExpandFeature = (featureId) => {
    setActiveFeature(activeFeature === featureId ? null : featureId);
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

  const handleRequestServiceHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.background = '#0a1d51';
    e.target.style.color = 'white';
  };

  const handleRequestServiceLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.background = '#f1eee5';
    e.target.style.color = '#0a1d51';
  };

  const handleViewMoreHover = (e) => {
    e.target.style.textDecoration = 'underline';
    e.target.style.color = '#de800d';
  };

  const handleViewMoreLeave = (e) => {
    e.target.style.textDecoration = 'none';
    e.target.style.color = '#0a1d51';
  };

  const handleWhatsAppButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundColor = '#de800d';
    e.target.style.color = '#0a1d51';
  };

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <img 
            src={heroImage} 
            alt="Hero Image" 
            style={styles.heroImage}
          />
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Your Trusted Translation & Localization Experts</h1>
            <p style={styles.heroDescription}>
              Nurturing the Next Generation of Language Professionals
            </p>
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
        <h2 style={styles.sectionTitle}>Our Training Program</h2>
        <p style={styles.sectionSubtitle}>
          Comprehensive mentorship and hands-on experience for aspiring translators
        </p>
        <div style={styles.servicesGrid}>
          {programFeatures.map((feature, index) => (
            <div
              key={feature.id}
              style={{
                ...styles.serviceCard,
                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                background: hoveredCard === index ? 'rgba(222, 128, 13, 0.1)' : '#f1eee5',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  ...styles.expandButton,
                  transform: activeFeature === feature.id ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
                onClick={() => handleExpandFeature(feature.id)}
              >
                +
              </button>
              <div style={styles.serviceHeader}>
                <span style={styles.serviceIcon}>{feature.icon}</span>
                <div style={styles.serviceHeaderText}>
                  <h3 style={styles.serviceTitle}>{feature.title}</h3>
                  <p style={styles.serviceTagline}>{feature.tagline}</p>
                </div>
              </div>
              <p style={styles.serviceDescription}>{feature.description}</p>
              {activeFeature === feature.id && (
                <>
                  <div style={styles.featuresSection}>
                    <h4 style={styles.featuresTitle}>✅ Key Features:</h4>
                    <ul style={styles.featuresList}>
                      {feature.keyFeatures.map((feat, idx) => (
                        <li key={idx} style={styles.featureItem}>
                          <span style={{ color: '#de800d' }}>•</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={styles.featuresSection}>
                    <h4 style={styles.featuresTitle}>🎯 Benefits:</h4>
                    <div style={styles.useCasesGrid}>
                      {feature.useCases.map((use, idx) => (
                        <div key={idx} style={styles.useCaseItem}>
                          {use}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={styles.qualitySection}>
        <h2 style={styles.sectionTitle}>Our Training Process</h2>
        <p style={styles.sectionSubtitle}>
          Structured approach to developing professional translators
        </p>
        <div style={styles.qualityGrid}>
          {qualitySteps.map((step, index) => (
            <div key={index} style={styles.qualityStep}>
              <div style={styles.stepNumber}>{step.step}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem', color: '#0a1d51' }}>
          We provide personalized training tailored to your language strengths and career goals.
        </p>
      </section>

      <section style={styles.languagesSection}>
        <h2 style={styles.sectionTitle}>Languages We Train In</h2>
        <p style={styles.sectionSubtitle}>
          Focus on major African and international languages
        </p>
        <div style={styles.languagesGrid}>
          {supportedLanguages.map((language, index) => (
            <div key={index} style={styles.languageCard}>
              <div style={styles.languageFlag}>{language.flag}</div>
              <div style={styles.languageCode}>{language.code}</div>
              <div style={styles.languageName}>{language.name}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem', color: '#0a1d51' }}>
          Specializing in African language pairs with global applications.
        </p>
      </section>

      <section style={styles.confidentialitySection}>
        <div style={styles.confidentialityTitle}>
          Professional Standards Guaranteed
        </div>
        <p style={styles.confidentialityDescription}>
          At LCI Training, we maintain the highest standards of professionalism and ethics in our mentorship program.
        </p>
        <div style={styles.confidentialityFeatures}>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Ethical translation practices</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Confidentiality in training</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Industry compliance</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Quality mentorship</span>
          </div>
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '1rem', fontWeight: '600', color: '#0a1d51' }}>
          🛡️ Professionalism isn't optional. It's our foundation.
        </p>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Start Your Training?</h2>
        <p style={styles.ctaDescription}>
          Join our mentorship program and launch your career in professional translation.
        </p>
        <Link
          to="/quote"
          style={styles.primaryButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Apply Now <span style={{ color: '#de800d' }}>✨</span>
          </span>
        </Link>
      </section>
    </div>
  );
}

export default Training;