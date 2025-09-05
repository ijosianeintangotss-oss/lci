import React, { useState, useEffect } from 'react';
import heroImage from '../assets/LCI_ExcellenceinTranslation.png';

function Training() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programFeatures = [
    {
      title: "Mentorship from Experienced Linguists",
      description: "Learn directly from industry professionals with years of translation experience and deep cultural understanding.",
      icon: "👥",
      details: "Get personalized guidance from seasoned translators who have worked across various industries and language pairs."
    },
    {
      title: "Practical, Project-Based Training",
      description: "Work on real client projects under supervision to gain hands-on experience in professional translation environments.",
      icon: "💼",
      details: "Build your skills through actual translation assignments, learning industry workflows and client expectations."
    },
    {
      title: "Industry Tools & Technology",
      description: "Master professional CAT tools, quality assurance software, and industry standards used by top translation companies.",
      icon: "⚡",
      details: "Gain proficiency in SDL Trados, MemoQ, quality assurance tools, and project management platforms."
    },
    {
      title: "Real Client Exposure",
      description: "Build your portfolio while contributing to actual translation projects and understanding client requirements.",
      icon: "🎯",
      details: "Experience real-world challenges and develop professional relationships within the translation industry."
    }
  ];

  const benefits = [
    {
      title: "Practical Translation Experience",
      description: "Work on real projects and build professional competency",
      icon: "🎓"
    },
    {
      title: "Professional Portfolio Development",
      description: "Create a compelling portfolio showcasing your best work",
      icon: "📁"
    },
    {
      title: "Industry Professional Network",
      description: "Connect with established translators and language professionals",
      icon: "🌐"
    },
    {
      title: "Industry-Standard Tools Training",
      description: "Master the software and processes used by professional translators",
      icon: "🛠️"
    },
    {
      title: "Career Guidance & Mentorship",
      description: "Receive ongoing support and guidance for your translation career",
      icon: "🚀"
    },
    {
      title: "Ongoing Work Opportunities",
      description: "Access to freelance and full-time opportunities within our network",
      icon: "💼"
    }
  ];

  const careerPaths = [
    {
      title: "Freelance Translator",
      description: "Work independently with clients across various industries, setting your own schedule and rates.",
      icon: "🏠",
      salary: "Flexible earnings",
      growth: "High flexibility"
    },
    {
      title: "In-House Linguist",
      description: "Join organizations as a full-time language professional, handling all translation and localization needs.",
      icon: "🏢",
      salary: "Stable income",
      growth: "Career progression"
    },
    {
      title: "Localization Specialist",
      description: "Specialize in adapting digital content, software, and websites for local markets and cultures.",
      icon: "🌍",
      salary: "Premium rates",
      growth: "High demand"
    },
    {
      title: "Project Manager",
      description: "Coordinate translation projects, manage teams, and ensure quality delivery for language service providers.",
      icon: "📊",
      salary: "Leadership roles",
      growth: "Management track"
    },
    {
      title: "Quality Assurance Specialist",
      description: "Ensure translation quality through review, editing, and linguistic quality assurance processes.",
      icon: "✅",
      salary: "Specialized rates",
      growth: "Expert recognition"
    },
    {
      title: "Language Consultant",
      description: "Provide expert advice on language strategy, cultural adaptation, and multilingual communication.",
      icon: "🎯",
      salary: "Consultancy fees",
      growth: "Industry influence"
    }
  ];

  const requirements = [
    {
      title: "Language Proficiency",
      description: "Strong command of at least two languages (English, French, Kinyarwanda, Kiswahili, or Kirundi)",
      icon: "🗣️"
    },
    {
      title: "Educational Background",
      description: "Bachelor's degree or equivalent professional experience in relevant field",
      icon: "🎓"
    },
    {
      title: "Passion for Languages",
      description: "Genuine interest in languages, cultural communication, and bridging linguistic barriers",
      icon: "❤️"
    },
    {
      title: "Learning Commitment",
      description: "Dedication to professional development and continuous learning in the translation industry",
      icon: "📚"
    },
    {
      title: "Technical Skills",
      description: "Basic computer skills, internet access, and willingness to learn new software tools",
      icon: "💻"
    },
    {
      title: "Time Availability",
      description: "Available for training sessions, project work, and mentorship meetings throughout the program",
      icon: "⏰"
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Send us your CV, cover letter, and language proficiency details through our online application portal.",
      details: "Include work samples, language certifications, and your motivation for joining the program.",
      icon: "📝"
    },
    {
      step: "2",
      title: "Assessment & Interview",
      description: "Complete a comprehensive language assessment and interview with our experienced team members.",
      details: "We'll evaluate your language skills, cultural awareness, and potential for professional growth.",
      icon: "🎯"
    },
    {
      step: "3",
      title: "Start Your Training Journey",
      description: "Begin your comprehensive mentorship program with personalized learning paths and real project experience.",
      details: "Join a select cohort and start building your professional translation career.",
      icon: "🚀"
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    },
    heroSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #ff8c00 0%, #1e3a8a 50%, #ff8c00 100%)',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1s ease-out'
    },
    heroContent: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1400px',
      width: '100%',
      zIndex: 10,
      position: 'relative',
      gap: '2rem',
      flexWrap: 'wrap'
    },
    heroText: {
      flex: '1',
      minWidth: '300px',
      textAlign: 'left'
    },
    heroImage: {
      flex: '1',
      minWidth: '300px',
      maxWidth: '600px',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1.5rem',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.8rem',
      color: '#fbbf24',
      marginBottom: '1rem',
      fontWeight: '300'
    },
    heroDescription: {
      fontSize: '1.3rem',
      color: '#f3f4f6',
      marginBottom: '2rem',
      lineHeight: '1.6',
      maxWidth: '600px'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      color: 'white',
      padding: '1.2rem 2.5rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(255, 140, 0, 0.3)',
      transform: 'scale(1)',
      transition: 'all 0.3s ease'
    },
    secondaryButton: {
      border: '2px solid white',
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '1.2rem 2.5rem',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease'
    },
    section: {
      padding: '6rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      textAlign: 'center',
      marginBottom: '1.5rem'
    },
    sectionSubtitle: {
      fontSize: '1.3rem',
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '800px',
      margin: '0 auto 4rem'
    },
    programSection: {
      background: 'linear-gradient(135deg, #f0f9ff, #dbeafe)',
      borderRadius: '20px',
      padding: '6rem 2rem',
      margin: '2rem auto'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '2.5rem',
      border: '2px solid #f3f4f6',
      cursor: 'pointer',
      transform: hoveredCard === null ? 'scale(1)' : 'scale(1)',
      transition: 'all 0.5s ease',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)',
      position: 'relative'
    },
    featureIcon: {
      fontSize: '3.5rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    featureTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem'
    },
    featureDescription: {
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '1rem'
    },
    featureDetails: {
      color: '#6b7280',
      fontSize: '0.95rem',
      fontStyle: 'italic'
    },
    cohortSection: {
      background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      textAlign: 'center',
      border: '2px solid #ff8c00',
      margin: '4rem auto'
    },
    programDetails: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    },
    detailCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #ff8c00',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.1)'
    },
    detailTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '0.5rem'
    },
    detailValue: {
      color: '#ff8c00',
      fontSize: '1.1rem',
      fontWeight: '600'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    benefitCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      textAlign: 'center',
      boxShadow: '0 5px 20px rgba(30, 58, 138, 0.1)',
      transition: 'all 0.3s ease'
    },
    benefitIcon: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    benefitTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '0.8rem'
    },
    benefitDescription: {
      color: '#6b7280',
      lineHeight: '1.5'
    },
    careerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    careerCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '2.5rem',
      border: '2px solid #f3f4f6',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.08)'
    },
    careerIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      color: '#ff8c00'
    },
    careerTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem'
    },
    careerDescription: {
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    careerMeta: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    careerBadge: {
      background: '#f0f9ff',
      color: '#1e3a8a',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    requirementsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    requirementCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      boxShadow: '0 5px 20px rgba(30, 58, 138, 0.08)'
    },
    requirementIcon: {
      fontSize: '2.5rem',
      flexShrink: 0
    },
    requirementContent: {
      flex: 1
    },
    requirementTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '0.5rem'
    },
    requirementDescription: {
      color: '#6b7280',
      lineHeight: '1.5'
    },
    applicationSection: {
      background: 'linear-gradient(135deg, #1e3a8a, #ff8c00)',
      borderRadius: '20px',
      padding: '6rem 2rem',
      color: 'white'
    },
    stepsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '3rem'
    },
    stepCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '2.5rem',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    stepNumber: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#fbbf24',
      marginBottom: '1rem'
    },
    stepTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    stepDescription: {
      lineHeight: '1.6',
      marginBottom: '1rem',
      opacity: 0.9
    },
    stepDetails: {
      fontSize: '0.95rem',
      opacity: 0.8,
      fontStyle: 'italic'
    },
    ctaSection: {
      textAlign: 'center',
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      borderRadius: '20px',
      margin: '4rem auto'
    },
    ctaTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '2rem'
    },
    ctaDescription: {
      fontSize: '1.3rem',
      color: '#4b5563',
      marginBottom: '3rem',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto 3rem'
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Empowering Future Language Professionals
            </h1>
            <p style={styles.heroSubtitle}>
              Launch Your Translation Career with Expert Mentorship
            </p>
            <p style={styles.heroDescription}>
              Join our comprehensive Translator Mentorship Program and become part of Africa's next generation of professional linguists. Learn from industry experts, work on real projects, and build a successful career in translation and localization.
            </p>
            <div style={styles.buttonContainer}>
              <button 
                style={styles.primaryButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  🚀 Apply for Mentorship
                </span>
              </button>
              <button 
                style={styles.secondaryButton}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#1e3a8a';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  🌐 Join Our Talent Network
                </span>
              </button>
            </div>
          </div>
          <img src={heroImage} alt="Hero Image" className="hero-image" />
        </div>
      </section>

      {/* LCI Translator Mentorship Program Section */}
      <section style={{...styles.section, ...styles.programSection}}>
        <h2 style={styles.sectionTitle}>LCI Translator Mentorship Program</h2>
        <p style={styles.sectionSubtitle}>
          We don't just deliver language services—we develop talent. Our mentorship program is designed to nurture the next generation of African language professionals through hands-on experience and expert guidance.
        </p>
        <div style={styles.featuresGrid}>
          {programFeatures.map((feature, index) => (
            <div
              key={index}
              style={{
                ...styles.featureCard,
                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                background: hoveredCard === index ? '#f9f9f9' : 'white',
                borderColor: hoveredCard === index ? '#ff8c00' : '#f3f4f6'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span style={styles.featureIcon}>{feature.icon}</span>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
              <p style={styles.featureDetails}>{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Training Cohort Section */}
      <section style={styles.section}>
        <div style={styles.cohortSection}>
          <h2 style={styles.sectionTitle}>Next Training Cohort Opens Soon</h2>
          <p style={styles.sectionSubtitle}>
            Our comprehensive training program combines theoretical knowledge with practical application, ensuring you're ready for the professional translation industry.
          </p>
          
          <div style={styles.programDetails}>
            <div style={styles.detailCard}>
              <div style={styles.detailTitle}>Program Duration</div>
              <div style={styles.detailValue}>12-Week Intensive</div>
            </div>
            <div style={styles.detailCard}>
              <div style={styles.detailTitle}>Class Size</div>
              <div style={styles.detailValue}>Small Cohorts</div>
            </div>
            <div style={styles.detailCard}>
              <div style={styles.detailTitle}>Language Focus</div>
              <div style={styles.detailValue}>African Language Pairs</div>
            </div>
            <div style={styles.detailCard}>
              <div style={styles.detailTitle}>Certification</div>
              <div style={styles.detailValue}>Upon Completion</div>
            </div>
          </div>

          <button 
            style={styles.primaryButton}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              📧 Get Training Updates
            </span>
          </button>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What You'll Gain</h2>
        <p style={styles.sectionSubtitle}>
          Our program provides comprehensive training and support to launch your successful translation career
        </p>
        <div style={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                ...styles.benefitCard,
                transform: hoveredCard === `benefit-${index}` ? 'scale(1.05)' : 'scale(1)',
                borderColor: hoveredCard === `benefit-${index}` ? '#ff8c00' : '#f3f4f6'
              }}
              onMouseEnter={() => handleMouseEnter(`benefit-${index}`)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.benefitIcon}>{benefit.icon}</div>
              <h3 style={styles.benefitTitle}>{benefit.title}</h3>
              <p style={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section style={{...styles.section, background: 'linear-gradient(135deg, #f0f9ff, #dbeafe)', borderRadius: '20px', margin: '2rem auto', padding: '6rem 2rem'}}>
        <h2 style={styles.sectionTitle}>Career Opportunities</h2>
        <p style={styles.sectionSubtitle}>
          Our graduates go on to successful careers in various areas of the language industry. Explore the diverse paths available to you.
        </p>
        <div style={styles.careerGrid}>
          {careerPaths.map((career, index) => (
            <div
              key={index}
              style={{
                ...styles.careerCard,
                transform: hoveredCard === `career-${index}` ? 'scale(1.03)' : 'scale(1)',
                borderColor: hoveredCard === `career-${index}` ? '#ff8c00' : '#f3f4f6'
              }}
              onMouseEnter={() => handleMouseEnter(`career-${index}`)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.careerIcon}>{career.icon}</div>
              <h3 style={styles.careerTitle}>{career.title}</h3>
              <p style={styles.careerDescription}>{career.description}</p>
              <div style={styles.careerMeta}>
                <div style={styles.careerBadge}>{career.salary}</div>
                <div style={styles.careerBadge}>{career.growth}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Requirements Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Program Requirements</h2>
        <p style={styles.sectionSubtitle}>
          We're looking for passionate individuals ready to commit to their professional development in the translation industry
        </p>
        <div style={styles.requirementsGrid}>
          {requirements.map((requirement, index) => (
            <div
              key={index}
              style={{
                ...styles.requirementCard,
                transform: hoveredCard === `req-${index}` ? 'scale(1.02)' : 'scale(1)',
                borderColor: hoveredCard === `req-${index}` ? '#ff8c00' : '#f3f4f6'
              }}
              onMouseEnter={() => handleMouseEnter(`req-${index}`)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.requirementIcon}>{requirement.icon}</div>
              <div style={styles.requirementContent}>
                <h3 style={styles.requirementTitle}>{requirement.title}</h3>
                <p style={styles.requirementDescription}>{requirement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Apply Section */}
      <section style={styles.section}>
        <div style={styles.applicationSection}>
          <h2 style={{...styles.sectionTitle, color: 'white'}}>How to Apply</h2>
          <p style={{...styles.sectionSubtitle, color: '#fbbf24'}}>
            Start your journey to becoming a professional translator with our streamlined application process
          </p>
          <div style={styles.stepsContainer}>
            {applicationSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  ...styles.stepCard,
                  transform: activeStep === index ? 'scale(1.05)' : 'scale(1)',
                  background: activeStep === index ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div style={styles.stepNumber}>{step.step}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
                <p style={styles.stepDetails}>{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={styles.section}>
        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>
            Ready to Start Your Language Career?
          </h2>
          <p style={styles.ctaDescription}>
            Join the next generation of African language professionals. Applications are now open for our upcoming cohort. Don't miss this opportunity to transform your passion for languages into a thriving career.
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={styles.primaryButton}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                🚀 Apply Now
              </span>
            </button>
            <button 
              style={{
                ...styles.secondaryButton,
                border: '2px solid #ff8c00',
                background: 'transparent',
                color: '#ff8c00'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ff8c00';
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ff8c00';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                📞 Schedule a Call
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Training;