import React, { useState, useEffect } from 'react';
import heroImage from '../assets/LCI_ExcellenceinTranslation.png';

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
      icon: "👥",
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
      icon: "💼",
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
      icon: "⚡",
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
      icon: "🎯",
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

  const qualitySteps = [ // Renamed to trainingSteps or keep as is, but adapting to program steps
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

  const supportedLanguages = [ // Keep or adapt to supported training languages
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
    },
    heroSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
      background: '#f1eee5ff',
      borderRadius: '20px',
      border: '2px solid #de800dff',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1s ease-out',
    },
    heroContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      width: '100%',
      gap: '9rem',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
    },
    heroImage: {
      width: isMobile ? '100%' : '45%',
      maxWidth: isMobile ? '100%' : '500px',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '10px',
      margin: isMobile ? '0 auto' : '0',
    },
    heroContent: {
      textAlign: isMobile ? 'center' : 'left',
      width: isMobile ? '100%' : '50%',
      maxWidth: isMobile ? '100%' : '600px',
      zIndex: 10,
      position: 'relative',
      padding: isMobile ? '0' : '0 1rem',
    },
    heroTitle: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
      textAlign: isMobile ? 'center' : 'left',
    },
    heroSubtitle: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: '#0a1d51ff',
      marginBottom: '2rem',
      lineHeight: '1.6',
      maxWidth: '900px',
      margin: isMobile ? '0 auto 2rem' : '0 0 2rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    section: {
      padding: '9rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      background: '#f1eee5ff',
      borderRadius: '20px',
      border: '2px solid #de800dff',
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    sectionSubtitle: {
      fontSize: '1.3rem',
      color: '#0a1d51ff',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '800px',
      margin: '0 auto 4rem',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem',
    },
    serviceCard: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '2rem',
      border: '2px solid #de800dff',
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)',
      position: 'relative',
    },
    serviceHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem',
      marginBottom: '1.5rem',
    },
    serviceIcon: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      display: 'block',
      color: '#de800dff',
    },
    serviceHeaderText: {
      flex: 1,
    },
    serviceTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
    },
    serviceTagline: {
      fontSize: '1rem',
      color: '#de800dff',
      fontWeight: '600',
      fontStyle: 'italic',
    },
    serviceDescription: {
      color: '#0a1d51ff',
      lineHeight: '1.6',
      marginBottom: '2rem',
    },
    featuresSection: {
      marginBottom: '1.5rem',
    },
    featuresTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    featureItem: {
      padding: '0.5rem 0',
      color: '#0a1d51ff',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    useCasesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '0.5rem',
    },
    useCaseItem: {
      background: '#f1eee5ff',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      color: '#0a1d51ff',
      textAlign: 'center',
      border: '2px solid #de800dff',
    },
    expandButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: '#de800dff',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '2.5rem',
      height: '2.5rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
    },
    qualitySection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    qualityGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    qualityStep: {
      textAlign: 'center',
      background: '#f1eee5ff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #de800dff',
      position: 'relative',
    },
    stepNumber: {
      position: 'absolute',
      top: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#de800dff',
      color: 'white',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
    stepTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
      marginTop: '1rem',
    },
    stepDescription: {
      color: '#0a1d51ff',
      fontSize: '1rem',
    },
    languagesSection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    languagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
    },
    languageCard: {
      background: '#f1eee5ff',
      borderRadius: '15px',
      padding: '2rem',
      textAlign: 'center',
      border: '2px solid #de800dff',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.1)',
    },
    languageFlag: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    languageCode: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '0.5rem',
    },
    languageName: {
      color: '#0a1d51ff',
      fontSize: '1rem',
    },
    confidentialitySection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '4rem 2rem',
      textAlign: 'center',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    confidentialityTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '2rem',
    },
    confidentialityDescription: {
      fontSize: '1.2rem',
      color: '#0a1d51ff',
      marginBottom: '2rem',
      lineHeight: '1.6',
    },
    confidentialityFeatures: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    confidentialityFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '1.1rem',
      color: '#0a1d51ff',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '6rem 2rem',
      background: '#f1eee5ff',
      borderRadius: '20px',
      margin: '2rem auto',
      maxWidth: '1200px',
      border: '2px solid #de800dff',
    },
    ctaTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '2rem',
    },
    ctaDescription: {
      fontSize: '1.3rem',
      color: '#0a1d51ff',
      marginBottom: '3rem',
      lineHeight: '1.6',
    },
    primaryButton: {
      background: '#f1eee5ff',
      color: '#0a1d51ff',
      padding: '1rem 2.5rem',
      borderRadius: '25px',
      border: '2px solid #de800dff',
      fontSize: '1.2rem',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 12px 30px rgba(255, 140, 0, 0.4)',
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
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
    e.target.style.background = '#de800dff';
    e.target.style.color = 'white';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.background = '#f1eee5ff';
    e.target.style.color = '#0a1d51ff';
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Training Program</h1>
            <p style={styles.heroSubtitle}>Nurturing the Next Generation of Language Professionals</p>
          </div>
          <img src={heroImage} alt="LCI Excellence in Translation" style={styles.heroImage} />
        </div>
      </section>

      {/* Program Features Grid */}
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
                background: hoveredCard === index ? 'rgba(222, 128, 13, 0.1)' : '#f1eee5ff',
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
                          <span style={{ color: '#de800dff' }}>•</span>
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

      {/* Training Process Section (adapted from Quality Assurance) */}
      <section style={styles.section}>
        <div style={styles.qualitySection}>
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
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem', color: '#0a1d51ff' }}>
            We provide personalized training tailored to your language strengths and career goals.
          </p>
        </div>
      </section>

      {/* Languages Section */}
      <section style={styles.section}>
        <div style={styles.languagesSection}>
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
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem', color: '#0a1d51ff' }}>
            Specializing in African language pairs with global applications.
          </p>
        </div>
      </section>

      {/* Confidentiality Section - Adapt to Professional Standards or something */}
      <section style={styles.section}>
        <div style={styles.confidentialitySection}>
          <div style={styles.confidentialityTitle}>
             Professional Standards Guaranteed
          </div>
          <p style={styles.confidentialityDescription}>
            At LCI Training, we maintain the highest standards of professionalism and ethics in our mentorship program.
          </p>
          <div style={styles.confidentialityFeatures}>
            <div style={styles.confidentialityFeature}>
              <span style={{ color: '#de800dff' }}></span>
              <span>Ethical translation practices</span>
            </div>
            <div style={styles.confidentialityFeature}>
              <span style={{ color: '#de800dff' }}></span>
              <span>Confidentiality in training</span>
            </div>
            <div style={styles.confidentialityFeature}>
              <span style={{ color: '#de800dff' }}></span>
              <span>Industry compliance</span>
            </div>
            <div style={styles.confidentialityFeature}>
              <span style={{ color: '#de800dff' }}></span>
              <span>Quality mentorship</span>
            </div>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '1.2rem', fontWeight: '600', color: '#0a1d51ff' }}>
            🛡️ Professionalism isn't optional. It's our foundation.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={styles.section}>
        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Training?</h2>
          <p style={styles.ctaDescription}>
            Join our mentorship program and launch your career in professional translation.
          </p>
          <button
            style={styles.primaryButton}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Apply Now ✨
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Training;