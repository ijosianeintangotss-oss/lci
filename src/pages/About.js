import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import heroImage from '../assets/LCIVision+Mission.png';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreValues = [
    {
      title: "Linguistic Excellence",
      description: "Delivering precise, culturally appropriate translations that maintain the original meaning and intent.",
      icon: "🎯"
    },
    {
      title: "Responsiveness & Reliability",
      description: "Fast turnaround times without compromising quality, with transparent communication throughout.",
      icon: "⚡"
    },
    {
      title: "Ethical Service Delivery",
      description: "Strict confidentiality protocols and ethical standards in all our professional relationships.",
      icon: "🛡️"
    },
    {
      title: "Cost-Effective Solutions",
      description: "Competitive pricing without compromising on quality or professional standards.",
      icon: "💰"
    },
    {
      title: "Cultural Accuracy",
      description: "Deep understanding of local cultures and contexts for authentic communication.",
      icon: "🌍"
    },
    {
      title: "Talent Development",
      description: "Nurturing new talent and giving young linguists real-world opportunities to grow.",
      icon: "🌱"
    }
  ];

  const keyFeatures = [
    {
      title: "Talent Incubator",
      description: "A talent incubator for aspiring language professionals, providing mentorship and real-world opportunities.",
      icon: "🌱"
    },
    {
      title: "Global Standards",
      description: "Combining global best practices with deep local knowledge for superior results.",
      icon: "🌍"
    },
    {
      title: "Cultural Expertise",
      description: "Promoting inclusive communication that respects cultural and linguistic diversity.",
      icon: "🤝"
    }
  ];

  const keyStrengths = [
    { text: "Global standards, local roots", icon: "🌍" },
    { text: "Multilingual specialists in 5+ languages", icon: "💬" },
    { text: "Native-speaking professionals only", icon: "✅" },
    { text: "Stringent quality control", icon: "🔁" },
    { text: "Client-focused solutions", icon: "🤝" },
    { text: "Proven track record in translation & localization", icon: "🏆" }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    },
    section: {
      padding: '6rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      background: '#ffffff'
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
    missionVisionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem'
    },
    missionCard: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '3rem',
      border: '2px solid #ff8c00',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)',
      textAlign: 'center'
    },
    visionCard: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '3rem',
      border: '2px solid #1e3a8a',
      boxShadow: '0 8px 32px rgba(30, 58, 138, 0.1)',
      textAlign: 'center'
    },
    cardTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    cardDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#4b5563'
    },
    quoteSection: {
      background: 'linear-gradient(135deg, #1e3a8a, #ff8c00)',
      borderRadius: '20px',
      padding: '3rem',
      textAlign: 'center',
      marginTop: '3rem'
    },
    quote: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem',
      fontStyle: 'italic'
    },
    quoteSubtext: {
      fontSize: '1.2rem',
      color: '#fbbf24',
      lineHeight: '1.6'
    },
    whoWeAreSection: {
      background: 'linear-gradient(135deg, #f0f9ff, #dbeafe)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem 0'
    },
    description: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      color: '#4b5563',
      marginBottom: '2rem',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 2rem'
    },
    highlightBox: {
      background: '#ffffff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #ff8c00',
      marginBottom: '2rem',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.1)'
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    featureCard: {
      background: '#ffffff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(30, 58, 138, 0.1)'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem'
    },
    featureDescription: {
      color: '#4b5563',
      lineHeight: '1.6'
    },
    storySection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
      borderRadius: '20px',
      margin: '2rem auto',
      maxWidth: '1400px'
    },
    strengthsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem'
    },
    strengthItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      background: '#ffffff',
      padding: '1.5rem',
      borderRadius: '10px',
      border: '2px solid #ff8c00',
      fontSize: '1.1rem',
      color: '#1e3a8a',
      fontWeight: '600'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    valueCard: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)'
    },
    valueIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    valueTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem'
    },
    valueDescription: {
      color: '#4b5563',
      lineHeight: '1.6'
    },
    ctaSection: {
      textAlign: 'center',
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #1e3a8a, #ff8c00)',
      borderRadius: '20px',
      margin: '2rem auto',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    ctaTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1.5rem'
    },
    ctaDescription: {
      fontSize: '1.3rem',
      color: '#fbbf24',
      marginBottom: '3rem',
      lineHeight: '1.6'
    },
    primaryButton: {
      background: '#ffffff',
      color: '#1e3a8a',
      padding: '1.5rem 3rem', // Increased for better visibility
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.2rem', // Increased for better readability
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(255, 255, 255, 0.2)',
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
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
    e.target.style.background = '#ffffff';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.background = '#ffffff';
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section className="hero-section" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">About Language Computing International</h1>
            <p className="hero-description">
              Your trusted partner for professional translation, localization, and multilingual communication services across Africa and beyond.
            </p>
          </div>
          <img src={heroImage} alt="Hero Image" className="hero-image" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission & Vision</h2>
        <div style={styles.missionVisionGrid}>
          <div style={styles.missionCard}>
            <h3 style={{ ...styles.cardTitle, color: '#ff8c00' }}>Our Mission</h3>
            <p style={styles.cardDescription}>
              To empower organizations and individuals to express their ideas accurately and professionally across languages—bridging communication gaps with cultural insight and linguistic excellence.
            </p>
          </div>
          <div style={styles.visionCard}>
            <h3 style={{ ...styles.cardTitle, color: '#1e3a8a' }}>Our Vision</h3>
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
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4b5563', margin: '0 0 1.5rem', textAlign: 'center' }}>
            We are a registered language service provider based in Kigali, with a growing network of native-speaking translators, linguists, and editors who specialize in African and international languages. Our mission: to empower communication that is meaningful, inclusive, and accurate.
          </p>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ff8c00', marginBottom: '1rem' }}>
              🌱 We Are Also:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: '#4b5563' }}>
              <li style={{ marginBottom: '0.5rem' }}>• A talent incubator for aspiring language professionals</li>
              <li style={{ marginBottom: '0.5rem' }}>• A mentor-driven environment for practical learning</li>
              <li style={{ marginBottom: '0.5rem' }}>• A trusted resource for consistent, culturally adapted content</li>
            </ul>
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4b5563', textAlign: 'center', marginBottom: '1.5rem' }}>
            Whether you're a business expanding across borders, an NGO localizing content, or a government institution enhancing multilingual communication, LCI brings you precise, culturally adapted, and professionally verified content—on time and on budget.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4b5563', textAlign: 'center', marginBottom: '2rem' }}>
            We are proud to support diverse industries including legal, medical, educational, financial, and IT sectors with linguistically sound, native-level expertise.
          </p>
          <div style={{ textAlign: 'center', borderTop: '2px solid #ff8c00', paddingTop: '2rem' }}>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1rem' }}>
              🔸 Dedicated to You – Professional. Precise. Perfect.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#ff8c00', fontWeight: '600' }}>
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
                borderColor: hoveredCard === `feature-${index}` ? '#ff8c00' : '#f3f4f6'
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
        <p style={{ ...styles.description, color: '#1e3a8a' }}>
          Founded in Rwanda with a vision to bridge communication gaps across Africa and beyond, LCI has grown from a local translation service to a comprehensive language solutions provider.
        </p>
        <p style={{ ...styles.description, color: '#4b5563', marginBottom: '3rem' }}>
          We specialize in delivering fast, affordable, and high-quality language solutions in English, French, Kinyarwanda, Kirundi, Kiswahili, and other languages—serving clients throughout Rwanda, Africa, and across the globe.
        </p>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff8c00', textAlign: 'center', marginBottom: '2rem' }}>
          Key Strengths
        </h3>
        <div style={styles.strengthsList}>
          {keyStrengths.map((strength, index) => (
            <div key={index} style={styles.strengthItem}>
              <span style={{ fontSize: '1.5rem' }}>{strength.icon}</span>
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
                borderColor: hoveredCard === `value-${index}` ? '#ff8c00' : '#f3f4f6'
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
          to="/contact"
          style={styles.primaryButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            Get Started Today ✨
          </span>
        </Link>
      </section>
    </div>
  );
}

export default About;