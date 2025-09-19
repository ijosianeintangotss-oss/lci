import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/LCIVision+Mission.png';
import whatsappIcon from '../assets/whatsapp-icon.png';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const coreValues = [
    {
      title: "Linguistic Excellence",
      description: "Delivering precise, culturally appropriate translations that maintain the original meaning and intent.",
      icon: ""
    },
    {
      title: "Responsiveness & Reliability",
      description: "Fast turnaround times without compromising quality, with transparent communication throughout.",
      icon: ""
    },
    {
      title: "Ethical Service Delivery",
      description: "Strict confidentiality protocols and ethical standards in all our professional relationships.",
      icon: ""
    },
    {
      title: "Cost-Effective Solutions",
      description: "Competitive pricing without compromising on quality or professional standards.",
      icon: ""
    },
    {
      title: "Cultural Accuracy",
      description: "Deep understanding of local cultures and contexts for authentic communication.",
      icon: ""
    },
    {
      title: "Talent Development",
      description: "Nurturing new talent and giving young linguists real-world opportunities to grow.",
      icon: ""
    }
  ];

  const keyFeatures = [
    {
      title: "Talent Incubator",
      description: "A talent incubator for aspiring language professionals, providing mentorship and real-world opportunities.",
      icon: ""
    },
    {
      title: "Global Standards",
      description: "Combining global best practices with deep local knowledge for superior results.",
      icon: ""
    },
    {
      title: "Cultural Expertise",
      description: "Promoting inclusive communication that respects cultural and linguistic diversity.",
      icon: ""
    }
  ];

  const keyStrengths = [
    { text: "Global standards, local roots", icon: "" },
    { text: "Multilingual specialists in 5+ languages", icon: "" },
    { text: "Native-speaking professionals only", icon: "" },
    { text: "Stringent quality control", icon: "" },
    { text: "Client-focused solutions", icon: "" },
    { text: "Proven track record in translation & localization", icon: "" }
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
    whatsappButton: {
      backgroundColor: '#10b981',
      color: '#0a1d51',
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
    missionVisionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    missionCard: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
      textAlign: 'center',
    },
    visionCard: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    cardDescription: {
      fontSize: '0.95rem',
      lineHeight: '1.5',
      color: '#0a1d51',
    },
    quoteSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '2rem',
      textAlign: 'center',
      marginTop: '2rem',
      border: '1px solid #de800d',
    },
    quote: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
      fontStyle: 'italic',
    },
    quoteSubtext: {
      fontSize: '1rem',
      color: '#de800d',
      lineHeight: '1.5',
    },
    whoWeAreSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 1.5rem',
    },
    highlightBox: {
      background: '#f1eee5',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      marginBottom: '1.5rem',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    featureCard: {
      background: '#f1eee5',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
    },
    featureIcon: {
      fontSize: '2rem',
      marginBottom: '1rem',
      display: 'block',
      color: '#de800d',
    },
    featureTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    featureDescription: {
      color: '#0a1d51',
      lineHeight: '1.5',
      fontSize: '0.95rem',
    },
    storySection: {
      padding: '4rem 1.5rem',
      background: '#f1eee5',
      borderRadius: '15px',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    strengthsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1rem',
      marginTop: '1.5rem',
    },
    strengthItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      background: '#f1eee5',
      padding: '1rem',
      borderRadius: '10px',
      border: '1px solid #de800d',
      fontSize: '0.95rem',
      color: '#0a1d51',
      fontWeight: '500',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
    },
    valueCard: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
    },
    valueIcon: {
      fontSize: '2rem',
      marginBottom: '1rem',
      display: 'block',
      color: '#de800d',
    },
    valueTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    valueDescription: {
      color: '#0a1d51',
      lineHeight: '1.5',
      fontSize: '0.95rem',
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
    e.target.style.backgroundColor = '#10b981';
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
            <h1 style={styles.heroTitle}>About Language Computing International</h1>
            <p style={styles.heroDescription}>
              Your trusted partner for professional translation, localization, and multilingual communication services across Africa and beyond.
            </p>
            <div style={styles.buttonContainer}>
              <Link
                to="/quote"
                style={styles.primaryButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Request Quote <span style={{ color: '#de800d' }}>⭐</span>
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
                  <img src={whatsappIcon} alt="WhatsApp" style={{ width: '18px', height: '18px' }} /> Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission & Vision</h2>
        <div style={styles.missionVisionGrid}>
          <div style={styles.missionCard}>
            <h3 style={styles.cardTitle}>Our Mission</h3>
            <p style={styles.cardDescription}>
              To empower organizations and individuals to express their ideas accurately and professionally across languages—bridging communication gaps with cultural insight and linguistic excellence.
            </p>
          </div>
          <div style={styles.visionCard}>
            <h3 style={styles.cardTitle}>Our Vision</h3>
            <p style={styles.cardDescription}>
              To be Africa's leading hub for multilingual communication and translator development—where global reach meets local expertise.
            </p>
          </div>
        </div>
        <div style={styles.quoteSection}>
          <blockquote style={styles.quote}>
            "Think Globally, Act Locally"
          </blockquote>
          <p style={styles.quoteSubtext}>
            We envision a world where people, cultures, and businesses are better connected—one language at a time.
          </p>
        </div>
      </section>

      <section style={styles.whoWeAreSection}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <p style={styles.description}>
          Language Computing International (LCI) is a trusted, Rwanda-registered language service provider dedicated to helping individuals and organizations connect across linguistic and cultural borders.
        </p>
        <div style={styles.highlightBox}>
          <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#0a1d51', margin: '0 0 1rem', textAlign: 'center' }}>
            We are a registered language service provider based in Kigali, with a growing network of native-speaking translators, linguists, and editors who specialize in African and international languages. Our mission: to empower communication that is meaningful, inclusive, and accurate.
          </p>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#de800d', marginBottom: '0.8rem' }}>
              🌱 We Are Also:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#0a1d51' }}>
              <li style={{ marginBottom: '0.3rem' }}>• A talent incubator for aspiring language professionals</li>
              <li style={{ marginBottom: '0.3rem' }}>• A mentor-driven environment for practical learning</li>
              <li style={{ marginBottom: '0.3rem' }}>• A trusted resource for consistent, culturally adapted content</li>
            </ul>
          </div>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#0a1d51', textAlign: 'center', marginBottom: '1rem' }}>
            Whether you're a business expanding across borders, an NGO localizing content, or a government institution enhancing multilingual communication, LCI brings you precise, culturally adapted, and professionally verified content—on time and on budget.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#0a1d51', textAlign: 'center', marginBottom: '1rem' }}>
            We are proud to support diverse industries including legal, medical, educational, financial, and IT sectors with linguistically sound, native-level expertise.
          </p>
          <div style={{ textAlign: 'center', borderTop: '1px solid #de800d', paddingTop: '1rem' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0a1d51', marginBottom: '0.8rem' }}>
              🔸 Dedicated to You – Professional. Precise. Perfect.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#de800d', fontWeight: '500' }}>
              🔸 Fast turnaround, strict confidentiality, and native-language quality assurance.
            </p>
          </div>
        </div>
        <div style={styles.featureGrid}>
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              style={{
                ...styles.featureCard,
                transform: hoveredCard === `feature-${index}` ? 'scale(1.05)' : 'scale(1)',
                background: hoveredCard === `feature-${index}` ? 'rgba(222, 128, 13, 0.1)' : '#f1eee5',
              }}
              onMouseEnter={() => handleMouseEnter(`feature-${index}`)}
              onMouseLeave={handleMouseLeave}
            >
              <span style={styles.featureIcon}>{feature.icon}</span>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.storySection}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={{ ...styles.description, color: '#0a1d51' }}>
          Founded in Rwanda with a vision to bridge communication gaps across Africa and beyond, LCI has grown from a local translation service to a comprehensive language solutions provider.
        </p>
        <p style={{ ...styles.description, color: '#0a1d51', marginBottom: '2rem' }}>
          We specialize in delivering fast, affordable, and high-quality language solutions in English, French, Kinyarwanda, Kirundi, Kiswahili, and other languages—serving clients throughout Rwanda, Africa, and across the globe.
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#de800d', textAlign: 'center', marginBottom: '1.5rem' }}>
          Key Strengths
        </h3>
        <div style={styles.strengthsList}>
          {keyStrengths.map((strength, index) => (
            <div key={index} style={styles.strengthItem}>
              <span style={{ fontSize: '1.2rem', color: '#de800d' }}>{strength.icon}</span>
              <span>{strength.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <p style={styles.sectionSubtitle}>The principles that guide everything we do</p>
        <div style={styles.valuesGrid}>
          {coreValues.map((value, index) => (
            <div
              key={index}
              style={{
                ...styles.valueCard,
                transform: hoveredCard === `value-${index}` ? 'scale(1.05)' : 'scale(1)',
                background: hoveredCard === `value-${index}` ? 'rgba(222, 128, 13, 0.1)' : '#f1eee5',
              }}
              onMouseEnter={() => handleMouseEnter(`value-${index}`)}
              onMouseLeave={handleMouseLeave}
            >
              <span style={styles.valueIcon}>{value.icon}</span>
              <h3 style={styles.valueTitle}>{value.title}</h3>
              <p style={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Work With Us?</h2>
        <p style={styles.ctaDescription}>Join the many organizations that trust LCI for their language needs.</p>
        <Link
          to="/quote"
          style={styles.primaryButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            Get Started Today <span style={{ color: '#de800d' }}>✨</span>
          </span>
        </Link>
      </section>
    </div>
  );
}

export default About;