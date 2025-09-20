import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileMoney from '../assets/mobile money.png';
// import visaCard from '../assets/visa card.png';
// import masterCard from '../assets/master card.png';
import heroImage from '../assets/Welcome_Message_Update.mp4';
import whatsappIcon from '../assets/whatsapp-icon.png';
import translationImage from '../assets/translation-interpretation.png';
import websiteImage from '../assets/website-and-software-localization.png';
import certifiedImage from '../assets/certified-document-translation.png';
import aImage from '../assets/audio.png';
import proofreadingImage from '../assets/proofreading-and-editing.png';
import cvImage from '../assets/cv-and-application-support.png';
import contentImage from '../assets/content-creation.png';
import socialImage from '../assets/social-media-marketing.png';
import aiImage from '../assets/ai-translation.png';
import backImage from '../assets/back-translation-and-quality-assuarance.png';
import grossariesImage from '../assets/grossaries-and-language-resource.png';
import machineImage from '../assets/machine.png';

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
      description: "Document translation and live interpretation in English, French, Kinyarwanda, Kiswahili, Kirundi, and more—with native fluency and cultural precision.",
      icon: translationImage
    },
    {
      title: "Website & Software Localization",
      description: "Adapt your content for local markets with cultural sensitivity, seamless UX, and multilingual interface accuracy.",
      icon: websiteImage
    },
    {
      title: "Certified Document Translation",
      description: "Accepted translations for embassies, universities, immigration, and government documentation—certified and notarized upon request.",
      icon: certifiedImage
    },
    {
      title: "Audio & Video Transcription",
      description: "Accurate translations for embassies, universities, immigration, and government.",
      icon: aImage
    },
    {
      title: "Proofreading & Editing",
      description: "Refine grammar, structure, tone, and clarity—perfect for publication and professional use.",
      icon: proofreadingImage
    },
    {
      title: "CV & Application Support",
      description: "Refine your CVs, resumes, cover letters, and personal statements to boost your success in job markets and admissions.",
      icon: cvImage
    },
    {
      title: "Machine Translation Post-Editing (MTPE)",
      description: "Transform raw AI-generated text into clear, accurate, culturally relevant communication with our expert linguists.",
      icon: machineImage
    },
    {
      title: "Glossaries & Language Resources",
      description: "Create bilingual glossaries, field-specific term banks, and custom language tools to support consistency in all your communications.",
      icon: grossariesImage
    },
    {
      title: "Back-Translation & Quality Assurance",
      description: "Ensure accuracy, clarity, and risk-free delivery in sensitive sectors like health, law, and development with independent back-translation.",
      icon: backImage
    },
    {
      title: "AI Translation Services",
      description: "Enhance multilingual communication with AI-powered translations enhanced by native-speaking linguists—fast, accurate, and locally adapted.",
      icon: aiImage
    },
    {
      title: "Social Media Marketing",
      description: "Engage multilingual audiences across platforms with culturally adapted social media content, campaign strategies, and community management—in English, French, Kinyarwanda, Kiswahili, and more.",
      icon: socialImage
    },
    {
      title: "Content Creation",
      description: "Professional, SEO-optimized content in multiple languages—tailored for web, print, and multimedia—to help you inform, inspire, and connect across cultures.",
      icon: contentImage
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Native Linguists",
      description: "All our translators are native speakers with subject-matter expertise",
      icon: ""
    },
    {
      title: "Tech-Enabled Workflow",
      description: "We use advanced tools and quality assurance processes for consistent results",
      icon: ""
    },
    {
      title: "Trusted Across Africa & Globally",
      description: "We serve clients throughout Rwanda, Africa, and worldwide",
      icon: ""
    }
  ];

  const paymentMethods = [
    {
      title: "MTN Mobile Money",
      description: "Pay securely using your MTN Mobile Money account. Dial *182*1*1# to make a payment to our registered number: +250788518720. This text should be visible on the page.",
      image: mobileMoney
    },
    // {
    //   title: "",
    //   description: "Currently unavailable. Please use MTN Mobile Money for secure payments.",
    //   image: visaCard
    // },
    // {
    //   title: "",
    //   description: "Currently unavailable. Please use MTN Mobile Money for secure payments.",
    //   image: masterCard
    // }
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
      gap: '1.5rem',
      flexDirection: isMobile ? 'column' : 'row',
    },
    heroVideo: {
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
    heroSubtitle: {
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      color: '#0a1d51',
      marginBottom: '0.8rem',
      fontWeight: '400',
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
      padding: '0.8rem 1.5rem',
      borderRadius: '15px',
      border: '1px solid #de800d',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    whatsappButton: {
      backgroundColor: '#e4ece9',
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
    section: {
      padding: '4rem 1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#f1eee5',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
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
      overflow: 'hidden',
    },
    serviceIcon: {
      fontSize: '1.8rem',
      marginBottom: '1rem',
      display: 'block',
      color: '#de800d',
    },
    serviceTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    serviceDescription: {
      color: '#0a1d51',
      lineHeight: '1.5',
      fontSize: '0.95rem',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease',
    },
    expandedDescription: {
      maxHeight: '100px',
    },
    whyChooseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    whyChooseCard: {
      textAlign: 'center',
    },
    whyChooseIcon: {
      fontSize: '2rem',
      marginBottom: '1rem',
      color: '#de800d',
    },
    whyChooseTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    whyChooseDescription: {
      color: '#0a1d51',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    excellenceSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      textAlign: 'center',
      border: '1px solid #de800d',
    },
    excellenceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    excellenceCard: {
      background: '#f1eee5',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
    },
    testimonial: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '2rem',
      border: '1px solid #de800d',
      textAlign: 'center',
      marginTop: '1.5rem',
    },
    stars: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.3rem',
      marginBottom: '1rem',
    },
    star: {
      fontSize: '1.2rem',
      color: '#de800d',
    },
    quote: {
      fontSize: '1.1rem',
      color: '#0a1d51',
      fontStyle: 'italic',
      marginBottom: '1rem',
      lineHeight: '1.5',
    },
    cite: {
      color: '#fbbf24',
      fontWeight: '500',
      fontSize: '0.95rem',
    },
    paymentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    paymentCard: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      boxShadow: '0 5px 15px rgba(30, 58, 138, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    paymentImage: {
      width: '80px',
      height: '40px',
      objectFit: 'contain',
      marginBottom: '1rem',
    },
    paymentDescription: {
      color: '#0a1d51',
      fontSize: '0.95rem',
      lineHeight: '1.5',
      textAlign: 'center',
      marginTop: '0.5rem',
    },
    securityBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      background: 'rgba(16, 185, 129, 0.2)',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      borderRadius: '15px',
      padding: '0.8rem 1.5rem',
      color: '#0a1d51',
      fontWeight: '500',
      fontSize: '0.95rem',
    },
    securityBadgeIcon: {
      fontSize: '1.2rem',
      color: '#de800d',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '4rem 1.5rem',
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
    secondaryButton: {
      border: '1px solid #de800d',
      background: 'transparent',
      color: '#0a1d51',
      padding: '0.8rem 1.5rem',
      borderRadius: '15px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    subscribeSection: {
      padding: '3rem 1.5rem',
      background: '#f1eee5',
      borderRadius: '15px',
      margin: '1rem auto',
      maxWidth: '1200px',
      textAlign: 'center',
      border: '1px solid #de800d',
    },
    subscribeInput: {
      padding: '0.6rem 1rem',
      borderRadius: '15px',
      border: '1px solid #de800d',
      fontSize: '0.95rem',
      width: '220px',
      marginRight: '0.8rem',
      color: '#0a1d51',
    },
    subscribeButton: {
      background: '#f1eee5',
      color: '#0a1d51',
      padding: '0.6rem 1.2rem',
      borderRadius: '15px',
      border: '1px solid #de800d',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)',
      transition: 'all 0.3s ease',
    },
    message: {
      marginTop: '0.8rem',
      color: '#10b981',
      fontWeight: '500',
      fontSize: '0.95rem',
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

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.play().catch(error => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
        <video 
  src={heroImage} 
  style={styles.heroVideo}
  controls
  loop
  playsInline
/>


          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Your Trusted Translation & Localization Experts</h1>
            <p style={styles.heroSubtitle}>Dedicated to You – Professional. Precise. Perfect.</p>
            <p style={styles.heroDescription}>
              Bridging languages and cultures through high-quality translation, localization, and digital content services across Africa and beyond.
            </p>
            <div style={styles.buttonContainer}>
              <Link
                to="/quote"
                style={styles.primaryButton}
                onMouseEnter={(e) => {
                  e.target.style.background = '#de800d';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f1eee5';
                  e.target.style.color = '#0a1d51';
                  e.target.style.transform = 'scale(1)';
                }}
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
                onMouseLeave={handleButtonLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Chat on<img src={whatsappIcon} alt="WhatsApp" style={{ width: '18px', height: '18px' }} /> 
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Services</h2>
        <p style={styles.sectionSubtitle}>Comprehensive language solutions tailored to your specific needs</p>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.serviceCard,
                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                background: hoveredCard === index ? 'rgba(222, 128, 13, 0.1)' : '#f1eee5',
                borderColor: hoveredCard === index ? '#de800d' : '#de800d',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredCard === index ? (
                <>
                  <img src={service.icon} alt={service.title} style={{ width: '40px', height: '40px', marginBottom: '1rem' }} />
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={{ ...styles.serviceDescription, ...styles.expandedDescription }}>{service.description}</p>
                </>
              ) : (
                <>
                  <img src={service.icon} alt={service.title} style={{ width: '40px', height: '40px', marginBottom: '1rem' }} />
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...styles.section, borderRadius: '15px', margin: '1rem auto', border: '1px solid #de800d' }}>
        <h2 style={styles.sectionTitle}>Why Choose LCI?</h2>
        <p style={styles.sectionSubtitle}>Excellence through expertise, technology, and trust</p>
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

      <section style={styles.section}>
        <div style={styles.excellenceSection}>
          <h2 style={styles.sectionTitle}>Excellence Isn't an Act. It's Our Tradition</h2>
          <p style={styles.sectionSubtitle}>Building Rwanda's Future of Multilingual Digital Communication</p>
          <div style={styles.excellenceGrid}>
            <div style={styles.excellenceCard}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#0a1d51', marginBottom: '0.8rem' }}>
                Mentorship & Training
              </h3>
              <p style={{ color: '#0a1d51', fontSize: '0.95rem' }}>For Rwandan translators and language professionals</p>
            </div>
            <div style={styles.excellenceCard}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#0a1d51', marginBottom: '0.8rem' }}>
                Native-Language Expertise
              </h3>
              <p style={{ color: '#0a1d51', fontSize: '0.95rem' }}>Industry precision with cultural understanding</p>
            </div>
            <div style={styles.excellenceCard}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#0a1d51', marginBottom: '0.8rem' }}>
                Multi-Stage Quality Control
              </h3>
              <p style={{ color: '#0a1d51', fontSize: '0.95rem' }}>Rigorous review processes for perfect results</p>
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
            <cite style={styles.cite}>— Regional Marketing Manager, East Africa NGO</cite>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, borderRadius: '15px', margin: '1rem auto', border: '1px solid #de800d' }}>
        <h2 style={styles.sectionTitle}>Payment Methods We Accept</h2>
        <p style={styles.sectionSubtitle}>Convenient and secure payment options for your translation and localization services.</p>
        <div style={styles.paymentGrid}>
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              style={{
                ...styles.paymentCard,
                opacity: method.title !== "MTN Mobile Money" ? 0.6 : 1,
                pointerEvents: method.title !== "MTN Mobile Money" ? 'none' : 'auto',
              }}
            >
              <img src={method.image} alt={method.title} style={styles.paymentImage} />
              <h3 style={styles.serviceTitle}>{method.title}</h3>
              <p style={styles.paymentDescription}>{method.description}</p>
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

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Connect Across Languages?</h2>
        <p style={styles.ctaDescription}>Let's bring your ideas to life in any language. Get started with a free quote today.</p>
        <div style={styles.ctaButtons}>
          <Link
            to="/quote"
            style={styles.primaryButton}
            onMouseEnter={(e) => {
              e.target.style.background = '#de800d';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#f1eee5';
              e.target.style.color = '#0a1d51';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Get Quote <span style={{ color: '#de800d' }}>⭐</span>
            </span>
          </Link>
          <Link
            to="/about"
            style={styles.secondaryButton}
            onMouseEnter={(e) => {
              e.target.style.background = '#de800d';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#0a1d51';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Learn More
          </Link>
        </div>
      </section>

      <section style={styles.subscribeSection}>
        <h2 style={styles.sectionTitle}>Stay Updated</h2>
        <p style={styles.sectionSubtitle}>Subscribe to our newsletter for the latest updates and offers.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={styles.subscribeInput}
            required
          />
          <button type="submit" style={styles.subscribeButton} onClick={handleSubscribe}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Subscribe <span style={{ color: '#de800d' }}></span>
            </span>
          </button>
        </div>
        {message && <p style={styles.message}>{message}</p>}
      </section>
    </div>
  );
}

export default Home;