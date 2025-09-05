import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileMoney from '../assets/mobile money.png';
import visaCard from '../assets/visa card.png';
import masterCard from '../assets/master card.png';
import heroImage from '../assets/WelcometoLCI.png';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      title: "Translation and Interpretation",
      description: "We provide document translation and live interpretation in English, French, Kinyarwanda, Kiswahili, Kirundi, and more—with native fluency and cultural precision.",
      icon: "🌐"
    },
    {
      title: "Website & Software Localization",
      description: "Adapt your content for local markets with cultural sensitivity, seamless UX, and multilingual interface accuracy.",
      icon: "🎯"
    },
    {
      title: "Certified Document Translation",
      description: "We provide accepted translations for embassies, universities, immigration, and government documentation—certified and notarized upon request.",
      icon: "🛡️"
    },
    {
      title: "Audio & Video Transcription",
      description: "Accurate translations for embassies, universities, immigration, and government.",
      icon: "🎵"
    },
    {
      title: "Proofreading, Editing & Back-Translation",
      description: "We refine grammar, structure, tone, and clarity—perfect for publication and professional use.",
      icon: "✅"
    },
    {
      title: "CV & Application Support",
      description: "We refine your CVs, resumes, cover letters, and personal statements to boost your success in job markets and admissions.",
      icon: "👥"
    },
    {
      title: "Machine Translation Post-Editing (MTPE)",
      description: "We transform raw AI-generated text into clear, accurate, culturally relevant communication with our expert linguists.",
      icon: "⚡"
    },
    {
      title: "Glossaries & Language Resources",
      description: "We create bilingual glossaries, field-specific term banks, and custom language tools to support consistency in all your communications.",
      icon: "🏆"
    },
    {
      title: "Back-Translation & Quality Assurance",
      description: "We ensure accuracy, clarity, and risk-free delivery in sensitive sectors like health, law, and development with independent back-translation.",
      icon: "🔒"
    },
    {
      title: "AI Translation Services",
      description: "We enhance multilingual communication with AI-powered translations enhanced by native-speaking linguists—fast, accurate, and locally adapted.",
      icon: "🤖"
    },
    {
      title: "Social Media Marketing",
      description: "Engage multilingual audiences across platforms with culturally adapted social media content, campaign strategies, and community management—in English, French, Kinyarwanda, Kiswahili, and more.",
      icon: "📱"
    },
    {
      title: "Content Creation",
      description: "Professional, SEO-optimized content in multiple languages—tailored for web, print, and multimedia—to help you inform, inspire, and connect across cultures.",
      icon: "✍️"
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Native Linguists",
      description: "All our translators are native speakers with subject-matter expertise",
      icon: "👥"
    },
    {
      title: "Tech-Enabled Workflow",
      description: "We use advanced tools and quality assurance processes for consistent results",
      icon: "⚡"
    },
    {
      title: "Trusted Across Africa & Globally",
      description: "We serve clients throughout Rwanda, Africa, and worldwide",
      icon: "🌍"
    }
  ];

  const paymentMethods = [
    {
      title: "MTN Mobile Money",
      description: "Pay securely using your MTN Mobile Money account. Quick and convenient for local clients.",
      image: mobileMoney
    },
    {
      title: "Visa Card",
      description: "Secure international payments with your Visa credit or debit card.",
      image: visaCard
    },
    {
      title: "Master Card",
      description: "Secure international payments with your MasterCard credit or debit card.",
      image: masterCard
    }
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
      background: 'linear-gradient(135deg, #ff8c00 0%, #1e3a8a 50%, #ff8c00 100%)',
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
      gap: '2rem',
      flexWrap: 'nowrap',
    },
    heroImage: {
      width: isMobile ? '100%' : '45%',
      maxWidth: isMobile ? '100%' : '500px',
      height: 'auto',
      objectFit: 'contain',
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
      color: 'white',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
      textAlign: isMobile ? 'center' : 'left',
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.5rem' : '1.8rem',
      color: '#fbbf24',
      marginBottom: '1rem',
      fontWeight: '300',
      textAlign: isMobile ? 'center' : 'left',
    },
    heroDescription: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: '#f3f4f6',
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
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(255, 140, 0, 0.3)',
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    whatsappButton: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    section: {
      padding: '6rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      background: '#ffffff',
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    sectionSubtitle: {
      fontSize: '1.3rem',
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '800px',
      margin: '0 auto 4rem',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
    },
    serviceCard: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      cursor: 'pointer',
      transform: hoveredCard === null ? 'scale(1)' : 'scale(1)',
      transition: 'all 0.5s ease',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)',
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block',
      color: '#f08b18',
      filter: 'hue-rotate(0deg) saturate(1) brightness(1)',
    },
    serviceTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem',
    },
    serviceDescription: {
      color: '#4b5563',
      lineHeight: '1.6',
    },
    whyChooseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
    },
    whyChooseCard: {
      textAlign: 'center',
    },
    whyChooseIcon: {
      fontSize: '4rem',
      marginBottom: '1.5rem',
      color: '#f08b18',
      filter: 'hue-rotate(0deg) saturate(1) brightness(1)',
    },
    whyChooseTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem',
    },
    whyChooseDescription: {
      color: '#4b5563',
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
    excellenceSection: {
      background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      textAlign: 'center',
      border: '2px solid #ff8c00',
    },
    excellenceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
    },
    excellenceCard: {
      background: '#ffffff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #ff8c00',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.1)',
    },
    testimonial: {
      background: 'linear-gradient(135deg, #1e3a8a, #ff8c00)',
      borderRadius: '20px',
      padding: '3rem',
      border: '2px solid #ff8c00',
      textAlign: 'center',
      marginTop: '2rem',
    },
    stars: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    star: {
      fontSize: '1.5rem',
      color: '#f08b18',
      filter: 'hue-rotate(0deg) saturate(1) brightness(1)',
    },
    quote: {
      fontSize: '1.5rem',
      color: 'white',
      fontStyle: 'italic',
      marginBottom: '1.5rem',
      lineHeight: '1.6',
    },
    cite: {
      color: '#fbbf24',
      fontWeight: '600',
    },
    paymentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
    },
    paymentCard: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      boxShadow: '0 8px 25px rgba(30, 58, 138, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    paymentImage: {
      width: '100px',
      height: '50px',
      objectFit: 'contain',
      marginBottom: '1.5rem',
    },
    securityBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(16, 185, 129, 0.2)',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      borderRadius: '50px',
      padding: '1rem 2rem',
      color: '#6ee7b7',
      fontWeight: '600',
    },
    securityBadgeIcon: {
      fontSize: '1.5rem',
      color: '#f08b18',
      filter: 'hue-rotate(0deg) saturate(1) brightness(1)',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '6rem 2rem',
    },
    ctaTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '2rem',
    },
    ctaDescription: {
      fontSize: '1.3rem',
      color: '#4b5563',
      marginBottom: '3rem',
      lineHeight: '1.6',
    },
    ctaButtons: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    secondaryButton: {
      border: '2px solid #ff8c00',
      background: 'transparent',
      color: '#ff8c00',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    subscribeSection: {
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      borderRadius: '20px',
      margin: '2rem auto',
      maxWidth: '1400px',
      textAlign: 'center',
    },
    subscribeInput: {
      padding: '0.75rem 1rem',
      borderRadius: '25px',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
      width: '250px',
      marginRight: '1rem',
    },
    subscribeButton: {
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '25px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(255, 140, 0, 0.3)',
      transition: 'all 0.3s ease',
    },
    message: {
      marginTop: '1rem',
      color: '#10b981',
      fontWeight: '500',
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
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage('');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Subscribed with email:', email);
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <img src={heroImage} alt="Hero Image" style={styles.heroImage} />
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Your Trusted Translation & Localization Experts
            </h1>
            <p style={styles.heroSubtitle}>
              Dedicated to You – Professional. Precise. Perfect.
            </p>
            <p style={styles.heroDescription}>
              Bridging languages and cultures through high-quality translation, localization, and digital content services across Africa and beyond.
            </p>
            <div style={styles.buttonContainer}>
              <Link
                to="/contact"
                style={styles.primaryButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Request a Free Quote <span style={{ color: '#f08b18', filter: 'hue-rotate(0deg) saturate(1) brightness(1)' }}>⭐</span>
                </span>
              </Link>
              <a
                href="https://wa.me/250788518720"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#f08b18', filter: 'hue-rotate(0deg) saturate(1) brightness(1)' }}>📞</span> Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Services</h2>
        <p style={styles.sectionSubtitle}>
          Comprehensive language solutions tailored to your specific needs
        </p>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.serviceCard,
                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                background: hoveredCard === index ? 'rgba(240, 139, 24, 0.1)' : '#ffffff',
                borderColor: hoveredCard === index ? '#f08b18' : '#f3f4f6',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span style={styles.serviceIcon}>{service.icon}</span>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose LCI Section */}
      <section
        style={{
          ...styles.section,
          background: 'linear-gradient(135deg, #f0f9ff, #dbeafe)',
          padding: '6rem 2rem',
          borderRadius: '20px',
          margin: '2rem auto',
        }}
      >
        <h2 style={styles.sectionTitle}>Why Choose LCI?</h2>
        <p style={styles.sectionSubtitle}>
          Excellence through expertise, technology, and trust
        </p>
        <div style={styles.whyChooseGrid}>
          {whyChooseFeatures.map((feature, index) => (
            <div key={index} style={styles.whyChooseCard}>
              <div style={styles.whyChooseIcon}>{feature.icon}</div>
              <h3 style={styles.whyChooseTitle}>{feature.title}</h3>
              <p style={styles.whyChooseDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Excellence Section */}
      <section style={styles.section}>
        <div style={styles.excellenceSection}>
          <h2 style={styles.sectionTitle}>Excellence Isn't an Act. It's Our Tradition</h2>
          <p style={styles.sectionSubtitle}>
            Building Rwanda's Future of Multilingual Digital Communication
          </p>
          <div style={styles.excellenceGrid}>
            <div style={styles.excellenceCard}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1rem' }}>
                Mentorship & Training
              </h3>
              <p style={{ color: '#4b5563' }}>For Rwandan translators and language professionals</p>
            </div>
            <div style={styles.excellenceCard}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1rem' }}>
                Native-Language Expertise
              </h3>
              <p style={{ color: '#4b5563' }}>Industry precision with cultural understanding</p>
            </div>
            <div style={styles.excellenceCard}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1rem' }}>
                Multi-Stage Quality Control
              </h3>
              <p style={{ color: '#4b5563' }}>Rigorous review processes for perfect results</p>
            </div>
          </div>
          <div style={styles.testimonial}>
            <div style={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={styles.star}>⭐</span>
              ))}
            </div>
            <blockquote style={styles.quote}>
              "LCI helped us launch a fully localized campaign across East Africa. They were fast, responsive, and deeply professional."
            </blockquote>
            <cite style={styles.cite}>
              — Regional Marketing Manager, East Africa NGO
            </cite>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section
        style={{
          ...styles.section,
          background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
          borderRadius: '20px',
          margin: '2rem auto',
          padding: '6rem 2rem',
        }}
      >
        <h2 style={styles.sectionTitle}>Payment Methods We Accept</h2>
        <p style={styles.sectionSubtitle}>
          We offer convenient and secure payment options for your translation and localization services.
        </p>
        <div style={styles.paymentGrid}>
          {paymentMethods.map((method, index) => (
            <div key={index} style={styles.paymentCard}>
              <img src={method.image} alt={method.title} style={styles.paymentImage} />
              <h3 style={styles.serviceTitle}>{method.title}</h3>
              <p style={styles.serviceDescription}>{method.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={styles.securityBadge}>
            <span style={styles.securityBadgeIcon}>🛡️</span>
            <span>All payments are processed securely. We do not store your payment information.</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Connect Across Languages?</h2>
        <p style={styles.ctaDescription}>
          Let's bring your ideas to life in any language. Get started with a free quote today.
        </p>
        <div style={styles.ctaButtons}>
          <Link
            to="/contact"
            style={styles.primaryButton}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Get Free Quote <span style={{ color: '#f08b18', filter: 'hue-rotate(0deg) saturate(1) brightness(1)' }}>⭐</span>
            </span>
          </Link>
          <Link
            to="/about"
            style={styles.secondaryButton}
            onMouseEnter={(e) => {
              e.target.style.background = '#f08b18';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#f08b18';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Subscribe Section */}
      {/* <section style={styles.subscribeSection}>
        <h2 style={styles.sectionTitle}>Stay Updated</h2>
        <p style={styles.sectionSubtitle}>
          Subscribe to our newsletter for the latest updates and offers.
        </p>
        <form onSubmit={handleSubscribe} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={styles.subscribeInput}
            required
          />
          <button type="submit" style={styles.subscribeButton}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Subscribe <span style={{ color: '#f08b18', filter: 'hue-rotate(0deg) saturate(1) brightness(1)' }}>✉️</span>
            </span>
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </section> */}
    </div>
  );
}

export default Home;