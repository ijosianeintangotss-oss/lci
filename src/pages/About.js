import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/LCIVision+Mission.png';
import whatsappIcon from '../assets/whatsapp-icon.png'; // Add WhatsApp icon import

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
      icon: "" // Updated icon
    },
    {
      title: "Global Standards",
      description: "Combining global best practices with deep local knowledge for superior results.",
      icon: "" // Updated icon
    },
    {
      title: "Cultural Expertise",
      description: "Promoting inclusive communication that respects cultural and linguistic diversity.",
      icon: "" // Updated icon
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
      background: '#ffffff ',
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
    heroDescription: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: '#0a1d51ff',
      marginBottom: '2rem',
      lineHeight: '1.6',
      maxWidth: '900px',
      margin: isMobile ? '0 auto 2rem' : '0 0 2rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: isMobile ? 'center' : 'flex-start',
      flexWrap: 'wrap',
    },
    primaryButton: {
      background: '#f1eee5ff',
      color: '#0a1d51ff',
      padding: '1rem 2.5rem', // Adjusted padding for better look
      borderRadius: '25px', // Increased border radius for a smoother look
      border: '2px solid #de800dff',
      fontSize: '1.2rem', // Increased font size
      fontWeight: '700', // Increased font weight
      cursor: 'pointer',
      boxShadow: '0 12px 30px rgba(255, 140, 0, 0.4)', // Enhanced shadow
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    whatsappButton: {
      backgroundColor: '#10b981',
      color: '#0a1d51ff',
      padding: '1rem 2rem',
      borderRadius: '20px',
      border: '2px solid #de800dff',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    section: {
      padding: '9rem 9rem',
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
    missionVisionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem',
    },
    missionCard: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '3rem',
      border: '2px solid #de800dff',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)',
      textAlign: 'center',
    },
    visionCard: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '3rem',
      border: '2px solid #de800dff',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1.5rem',
    },
    cardDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#0a1d51ff',
    },
    quoteSection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '3rem',
      textAlign: 'center',
      marginTop: '3rem',
      border: '2px solid #de800dff',
    },
    quote: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
      fontStyle: 'italic',
    },
    quoteSubtext: {
      fontSize: '1.2rem',
      color: '#de800dff',
      lineHeight: '1.6',
    },
    whoWeAreSection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    description: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      color: '#0a1d51ff',
      marginBottom: '2rem',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 2rem',
    },
    highlightBox: {
      background: '#f1eee5ff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #de800dff',
      marginBottom: '2rem',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.1)',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    featureCard: {
      background: '#f1eee5ff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #de800dff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.1)',
    },
    featureIcon: {
      fontSize: '2.5rem', // Reduced size for smaller icons
      marginBottom: '1.5rem',
      display: 'block',
      color: '#de800dff',
    },
    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
    },
    featureDescription: {
      color: '#0a1d51ff',
      lineHeight: '1.6',
    },
    storySection: {
      padding: '6rem 2rem',
      background: '#f1eee5ff',
      borderRadius: '20px',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    strengthsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    strengthItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      background: '#f1eee5ff',
      padding: '1.5rem',
      borderRadius: '10px',
      border: '2px solid #de800dff',
      fontSize: '1.1rem',
      color: '#0a1d51ff',
      fontWeight: '600',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
    },
    valueCard: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '2rem',
      border: '2px solid #de800dff',
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)',
    },
    valueIcon: {
      fontSize: '2.5rem', // Reduced size for smaller icons
      marginBottom: '1.5rem',
      display: 'block',
      color: '#de800dff',
    },
    valueTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
    },
    valueDescription: {
      color: '#0a1d51ff',
      lineHeight: '1.6',
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
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
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
              {/* <Link
                to="/quote"
                style={styles.primaryButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              > */}
                {/* <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Request Quote <span style={{ color: '#de800dff' }}>⭐</span>
                </span> */}
              {/* </Link> */}
              {/* <a
                href="https://wa.me/250788518720"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.backgroundColor = '#10b981';
                  e.target.style.color = '#0a1d51ff';
                }}
              > */}
                {/* <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img src={whatsappIcon} alt="WhatsApp" style={{ width: '20px', height: '20px' }} /> Chat on WhatsApp
                </span> */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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

      {/* Who We Are Section */}
      <section style={styles.whoWeAreSection}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <p style={styles.description}>
          Language Computing International (LCI) is a trusted, Rwanda-registered language service provider dedicated to helping individuals and organizations connect across linguistic and cultural borders.
        </p>
        <div style={styles.highlightBox}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#0a1d51ff', margin: '0 0 1.5rem', textAlign: 'center' }}>
            We are a registered language service provider based in Kigali, with a growing network of native-speaking translators, linguists, and editors who specialize in African and international languages. Our mission: to empower communication that is meaningful, inclusive, and accurate.
          </p>
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#de800dff', marginBottom: '1rem' }}>
              🌱 We Are Also:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: '#0a1d51ff' }}>
              <li style={{ marginBottom: '0.5rem' }}>• A talent incubator for aspiring language professionals</li>
              <li style={{ marginBottom: '0.5rem' }}>• A mentor-driven environment for practical learning</li>
              <li style={{ marginBottom: '0.5rem' }}>• A trusted resource for consistent, culturally adapted content</li>
            </ul>
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#0a1d51ff', textAlign: 'center', marginBottom: '1.5rem' }}>
            Whether you're a business expanding across borders, an NGO localizing content, or a government institution enhancing multilingual communication, LCI brings you precise, culturally adapted, and professionally verified content—on time and on budget.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#0a1d51ff', textAlign: 'center', marginBottom: '2rem' }}>
            We are proud to support diverse industries including legal, medical, educational, financial, and IT sectors with linguistically sound, native-level expertise.
          </p>
          <div style={{ textAlign: 'center', borderTop: '2px solid #de800dff', paddingTop: '2rem' }}>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#0a1d51ff', marginBottom: '1rem' }}>
              🔸 Dedicated to You – Professional. Precise. Perfect.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#de800dff', fontWeight: '600' }}>
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
                background: hoveredCard === `feature-${index}` ? 'rgba(222, 128, 13, 0.1)' : '#f1eee5ff',
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

      {/* Our Story Section */}
      <section style={styles.storySection}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={{ ...styles.description, color: '#0a1d51ff' }}>
          Founded in Rwanda with a vision to bridge communication gaps across Africa and beyond, LCI has grown from a local translation service to a comprehensive language solutions provider.
        </p>
        <p style={{ ...styles.description, color: '#0a1d51ff', marginBottom: '3rem' }}>
          We specialize in delivering fast, affordable, and high-quality language solutions in English, French, Kinyarwanda, Kirundi, Kiswahili, and other languages—serving clients throughout Rwanda, Africa, and across the globe.
        </p>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#de800dff', textAlign: 'center', marginBottom: '2rem' }}>
          Key Strengths
        </h3>
        <div style={styles.strengthsList}>
          {keyStrengths.map((strength, index) => (
            <div key={index} style={styles.strengthItem}>
              <span style={{ fontSize: '1.5rem', color: '#de800dff' }}>{strength.icon}</span>
              <span>{strength.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <p style={styles.sectionSubtitle}>
          The principles that guide everything we do
        </p>
        <div style={styles.valuesGrid}>
          {coreValues.map((value, index) => (
            <div
              key={index}
              style={{
                ...styles.valueCard,
                transform: hoveredCard === `value-${index}` ? 'scale(1.05)' : 'scale(1)',
                background: hoveredCard === `value-${index}` ? 'rgba(222, 128, 13, 0.1)' : '#f1eee5ff',
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

      {/* Call-to-Action Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Work With Us?</h2>
        <p style={styles.ctaDescription}>
          Join the many organizations that trust LCI for their language needs.
        </p>
        <Link
          to="/quote"
          style={styles.primaryButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            Get Started Today <span style={{ color: '#de800dff' }}>✨</span>
          </span>
        </Link>
      </section>
    </div>
  );
}

export default About;