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

  const trainingBenefits = [
    "Gain practical translation experience",
    "Build a professional portfolio",
    "Network with industry professionals",
    "Learn industry-standard tools and processes",
    "Receive mentorship and career guidance",
    "Potential for ongoing work opportunities"
  ];

  const programRequirements = [
    "Strong command of at least two languages (English, French, Kinyarwanda, Kiswahili, or Kirundi)",
    "Bachelor's degree or equivalent experience",
    "Passion for languages and cultural communication",
    "Commitment to learning and professional development",
    "Basic computer skills and internet access",
    "Availability for training sessions and project work"
  ];

  const careerOpportunities = [
    {
      title: "Freelance Translator",
      description: "Work independently with clients across various industries, setting your own schedule and rates."
    },
    {
      title: "In-House Linguist",
      description: "Join organizations as a full-time language professional, handling all translation and localization needs."
    },
    {
      title: "Localization Specialist",
      description: "Specialize in adapting digital content, software, and websites for local markets and cultures."
    },
    {
      title: "Project Manager",
      description: "Coordinate translation projects, manage teams, and ensure quality delivery for language service providers."
    },
    {
      title: "Quality Assurance",
      description: "Ensure translation quality through review, editing, and linguistic quality assurance processes."
    },
    {
      title: "Language Consultant",
      description: "Provide expert advice on language strategy, cultural adaptation, and multilingual communication."
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Send us your CV, cover letter, and language proficiency details"
    },
    {
      step: 2,
      title: "Assessment",
      description: "Complete a language assessment and interview with our team"
    },
    {
      step: 3,
      title: "Start Training",
      description: "Begin your journey with our comprehensive mentorship program"
    }
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
      padding: '4rem 1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#f1eee5',
      borderRadius: '15px',
      border: '1px solid #de800d',
      marginBottom: '2rem',
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
      marginBottom: '1rem',
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
      fontSize: '1rem',
      color: '#0a1d51',
      fontWeight: '500',
      fontStyle: 'italic',
    },
    serviceDescription: {
      color: '#0a1d51',
      lineHeight: '1.5',
      marginBottom: '1rem',
      fontSize: '0.95rem',
    },
    serviceButtonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1rem',
      gap: '1rem',
    },
    viewMoreButton: {
      background: '#de800d',
      color: '#f1eee5',
      border: '1px solid #de800d',
      borderRadius: '30px',
      padding: '0.6rem 1.2rem',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      width: 'auto',
      minWidth: '10px',
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
    twoColumnGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '2rem',
      marginTop: '2rem',
    },
    benefitsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    benefitItem: {
      padding: '0.5rem 0',
      color: '#0a1d51',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.8rem',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    requirementsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    requirementItem: {
      padding: '0.5rem 0',
      color: '#0a1d51',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.8rem',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    careerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    careerCard: {
      background: '#f1eee5',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      textAlign: 'center',
    },
    careerTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '1rem',
    },
    careerDescription: {
      color: '#0a1d51',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    applicationGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    applicationStep: {
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
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '1rem',
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
    cohortSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
      textAlign: 'center',
    },
    cohortFeatures: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '1rem',
      margin: '2rem 0',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cohortFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      fontSize: '1rem',
      color: '#0a1d51',
      justifyContent: 'flex-start',
    },
    updateButton: {
      background: '#de800d',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '0.8rem 2rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '1rem',
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
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
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

  const handleViewMoreHover = (e) => {
    e.target.style.textDecoration = 'none';
    e.target.style.color = '#ffffffff';
    e.target.style.background = '#de800d';
  };

  const handleViewMoreLeave = (e) => {
    e.target.style.color = '#ffffffff';
    e.target.style.background = '#de800d';
  };

  const handleWhatsAppButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundColor = '#de800d';
    e.target.style.color = '#0a1d51';
  };

  const handleUpdateButtonHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.background = '#0a1d51';
  };

  const handleUpdateButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.background = '#de800d';
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
            <h1 style={styles.heroTitle}>LCI Translator Mentorship Program</h1>
            <p style={styles.heroDescription}>
              We don't just deliver language services—we develop talent. Our mentorship program is designed to nurture the next generation of African language professionals.
            </p>
            <div style={styles.buttonContainer}>
              <Link
                to="/quote"
                style={styles.primaryButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Apply Now <span style={{ color: '#de800d' }}>⭐</span>
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
                  Let's Chat on
                  <img src={whatsappIcon} alt="WhatsApp" style={{ width: '18px', height: '18px' }} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.cohortSection}>
        <h2 style={styles.sectionTitle}>Next Training Cohort Opens Soon</h2>
        <p style={styles.sectionSubtitle}>
          Our comprehensive training program combines theoretical knowledge with practical application, ensuring you're ready for the professional translation industry.
        </p>
        <div style={styles.cohortFeatures}>
          <div style={styles.cohortFeature}>
            <span style={{ color: '#de800d' }}>✓</span>
            <span>12-week intensive program</span>
          </div>
          <div style={styles.cohortFeature}>
            <span style={{ color: '#de800d' }}>✓</span>
            <span>Small cohorts for personalized attention</span>
          </div>
          <div style={styles.cohortFeature}>
            <span style={{ color: '#de800d' }}>✓</span>
            <span>Focus on African language pairs</span>
          </div>
          <div style={styles.cohortFeature}>
            <span style={{ color: '#de800d' }}>✓</span>
            <span>Certificate upon completion</span>
          </div>
        </div>
        <button
          style={styles.updateButton}
          onMouseEnter={handleUpdateButtonHover}
          onMouseLeave={handleUpdateButtonLeave}
        >
          Get Training Updates
        </button>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Training Program Features</h2>
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
              <div style={styles.serviceHeader}>
                <div style={styles.serviceHeaderText}>
                  <h3 style={styles.serviceTitle}>{feature.title}</h3>
                  <p style={styles.serviceTagline}>{feature.tagline}</p>
                </div>
              </div>
              <p style={styles.serviceDescription}>{feature.description}</p>
              
              <div style={styles.serviceButtonsContainer}>
                <button
                  style={styles.viewMoreButton}
                  onClick={() => handleExpandFeature(feature.id)}
                  onMouseEnter={handleViewMoreHover}
                  onMouseLeave={handleViewMoreLeave}
                >
                  {activeFeature === feature.id ? 'View Less' : 'View More'}
                </button>
              </div>

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

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What You'll Gain & Program Requirements</h2>
        <div style={styles.twoColumnGrid}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#0a1d51', marginBottom: '1rem' }}>What You'll Gain</h3>
            <ul style={styles.benefitsList}>
              {trainingBenefits.map((benefit, index) => (
                <li key={index} style={styles.benefitItem}>
                  <span style={{ color: '#de800d', fontSize: '1.2rem' }}>✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#0a1d51', marginBottom: '1rem' }}>Program Requirements</h3>
            <ul style={styles.requirementsList}>
              {programRequirements.map((requirement, index) => (
                <li key={index} style={styles.requirementItem}>
                  <span style={{ color: '#de800d', fontSize: '1.2rem' }}>•</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Career Opportunities</h2>
        <p style={styles.sectionSubtitle}>
          Our graduates go on to successful careers in various areas of the language industry
        </p>
        <div style={styles.careerGrid}>
          {careerOpportunities.map((career, index) => (
            <div key={index} style={styles.careerCard}>
              <h3 style={styles.careerTitle}>{career.title}</h3>
              <p style={styles.careerDescription}>{career.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How to Apply</h2>
        <div style={styles.applicationGrid}>
          {applicationSteps.map((step, index) => (
            <div key={index} style={styles.applicationStep}>
              <div style={styles.stepNumber}>{step.step}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Start Your Language Career?</h2>
        <p style={styles.ctaDescription}>
          Join the next generation of African language professionals. Applications are now open for our upcoming cohort.
        </p>
        <div style={styles.ctaButtons}>
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
          <a
            href="https://wa.me/250788518720"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappButton}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleWhatsAppButtonLeave}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Learn More 
              {/* <img src={whatsappIcon} alt="WhatsApp" style={{ width: '18px', height: '18px' }} /> */}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Training;