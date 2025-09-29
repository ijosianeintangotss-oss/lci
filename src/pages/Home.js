import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileMoney from '../assets/mobile money.png';
import airtelMoney from '../assets/airtel-removebg-preview.png';
// import visaCard from '../assets/visa card.png';
// import masterCard from '../assets/master card.png';
import heroImage from '../assets/Welcome_Message_Update.mp4';
import whatsappIcon from '../assets/whatsapp-icon.png';
import translationImage from '../assets/Translation___Interpretation-removebg-preview.png';
import websiteImage from '../assets/Website___Software_Localization-removebg-preview.png';
import certifiedImage from '../assets/Certified_Document_Translation-removebg-preview.png';
import aImage from '../assets/Audio___Video_Transcription-removebg-preview.png';
import proofreadingImage from '../assets/Proofreading___Editing-removebg-preview.png';
import cvImage from '../assets/CV___Application_Support-removebg-preview.png';
import contentImage from '../assets/Content_Creation-removebg-preview.png';
import socialImage from '../assets/Social_Media_Marketing-removebg-preview.png';
import aiImage from '../assets/AI_Translation_Services-removebg-preview.png';
import backImage from '../assets/Back-Translation___Quality_Assurance-removebg-preview.png';
import grossariesImage from '../assets/Glossaries___Language_Resources-removebg-preview.png';
import machineImage from '../assets/Machine_Translation_Post-Editing__MTPE_-removebg-preview.png';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

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
      id: 1,
      title: "Translation and Interpretation",
      description: "We provide professional document translation and live interpretation in English, French, Kinyarwanda, Kiswahili, Kirundi, and more—with native fluency and cultural precision.",
      icon: translationImage
    },
    {
      id: 2,
      title: "Website & Software Localization",
      description: "We adapt your content for local markets with cultural sensitivity, seamless UX, and multilingual interface accuracy.",
      icon: websiteImage
    },
    {
      id: 3,
      title: "Certified Document Translation",
      description: "We provide legally accepted translations for embassies, universities, immigration, and government documentation—certified and notarized upon request.",
      icon: certifiedImage
    },
    {
      id: 4,
      title: "Audio & Video Transcription",
      description: "We transcribe audio/video files (MP3, MP4, WAV, etc.) with optional time-coding and translation services.",
      icon: aImage
    },
    {
      id: 5,
      title: "Proofreading & Editing",
      description: "We refine grammar, structure, tone, and clarity—perfect for publication and professional use.",
      icon: proofreadingImage
    },
    {
      id: 6,
      title: "CV & Application Support",
      description: "We refine your CVs, cover letters, and personal statements to boost your success in job markets and admissions.",
      icon: cvImage
    },
    {
      id: 7,
      title: "Machine Translation Post-Editing (MTPE)",
      description: "We refine raw AI-generated text into clear, accurate, culturally relevant communication with our expert linguists.",
      icon: machineImage
    },
    {
      id: 8,
      title: "Glossaries & Language Resources",
      description: "We build bilingual glossaries, field-specific term banks, and custom language tools to support consistency in all your communications.",
      icon: grossariesImage
    },
    {
      id: 9,
      title: "Back-Translation & Quality Assurance",
      description: "We ensure accuracy, clarity, and risk-free delivery in sensitive sectors like health, law, and development with independent back-translation.",
      icon: backImage
    },
    {
      id: 10,
      title: "AI Translation Services",
      description: "We accelerate multilingual communication with AI-powered translations enhanced by native-speaking linguists—fast, accurate, and locally adapted.",
      icon: aiImage
    },
    {
      id: 11,
      title: "Social Media Marketing",
      description: "We engage multilingual audiences across platforms with culturally adapted social media content, campaign strategies, and community management—in English, French, Kinyarwanda, Kiswahili, and more.",
      icon: socialImage
    },
    {
      id: 12,
      title: "Content Creation",
      description: "We create professional, SEO-optimized content in multiple languages—tailored for web, print, and multimedia—to help you inform, inspire, and connect across cultures.",
      icon: contentImage
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Native Linguists",
      description: "All our translators are native speakers with subject-matter expertise.",
      icon: ""
    },
    {
      title: "Tech-Enabled Workflow",
      description: "We use advanced tools and quality assurance processes for consistent results.",
      icon: ""
    },
    {
      title: "Trusted Across Africa & Globally",
      description: "We serve clients throughout Rwanda, Africa, and worldwide.",
      icon: ""
    },
    {
      title: "Mentorship & Training",
      description: "For Rwandan translators and language professionals.",
      icon: ""
    },
    {
      title: "Local Expertise",
      description: "Industry precision with cultural understanding.",
      icon: ""
    },
    {
      title: "Multi-Stage Quality Control",
      description: "Rigorous review processes for perfect results.",
      icon: ""
    }
    
  ];

  const testimonials = [
    {
      quote: "LCI helped us launch a fully localized campaign across East Africa. They were fast, responsive, and deeply professional.",
      cite: "— Regional Marketing Manager, East Africa NGO"
    },
    {
      quote: "Their translation services are top-notch! Accurate and timely delivery every time.",
      cite: "— CEO, Tech Startup"
    },
    {
      quote: "LCI's localization expertise helped us expand into new markets seamlessly.",
      cite: "— Marketing Director, E-commerce Company"
    },
    {
      quote: "Excellent customer service and high-quality interpretations for our international conferences.",
      cite: "— Event Organizer, Global Firm"
    },
    {
      quote: "The certified document translations were perfect for our visa applications.",
      cite: "— Immigration Consultant"
    },
    {
      quote: "Their proofreading turned our content into professional masterpieces.",
      cite: "— Content Manager, Publishing House"
    },
    {
      quote: "AI-enhanced translations saved us time without compromising quality.",
      cite: "— Project Manager, Software Development"
    },
    {
      quote: "Great social media marketing in multiple languages boosted our engagement.",
      cite: "— Social Media Specialist"
    },
    {
      quote: "The back-translation ensured accuracy for our medical documents.",
      cite: "— Healthcare Administrator"
    },
    {
      quote: "Custom glossaries improved consistency across our technical manuals.",
      cite: "— Technical Writer"
    },
    {
      quote: "Outstanding CV support that landed me my dream job abroad.",
      cite: "— Job Seeker"
    }
  ];

  const paymentMethods = [
    {
      title: "",
      description: "Pay securely using your MTN Mobile Money account. Dial *182*1*1# to make a payment to our registered number: +250788518720.",
      image: mobileMoney
    },
    {
      title: "",
      description: "Pay securely using your Airtel Money account. Dial *100# to make a payment to our registered number: +250788518720.",
      image: airtelMoney
    },
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
      backgroundColor: '#f1eee5',
      color: '#0a1d51',
      padding: '0.8rem 1.5rem',
      borderRadius: '15px',
      border: '1px solid #de800d',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      // boxShadow: '0 5px 15px rgba(16, 185, 129, 0.2)',
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
      padding: '1.3rem',
      border: '1px solid #de800d',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(255, 140, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      display: 'block',
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
      fontSize: '0.85rem',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease',
    },
    expandedDescription: {
      maxHeight: '100px',
    },
    learnMoreLink: {
      display: 'inline-block',
      marginTop: '1rem',
      color: '#de800d',
      fontWeight: '600',
      fontSize: '0.9rem',
      textDecoration: 'none',
      border: '1px solid #de800d',
      padding: '0.3rem 0.8rem',
      borderRadius: '10px',
      transition: 'all 0.3s ease',
    },
    whyChooseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, auto)',
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
    dropdown: {
      marginBottom: '1rem',
      padding: '0.5rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #de800d',
      background: '#f1eee5',
      color: '#0a1d51',
      cursor: 'pointer',
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
      width: '100px',
      height: '60px',
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
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '0.95rem',
      width: '250px',
      marginRight: '1rem',
      color: '#0a1d51',
    },
    checkbox: {
      marginRight: '0.5rem',
      verticalAlign: 'middle',
    },
    reCaptcha: {
      display: 'inline-flex',
      alignItems: 'center',
      marginLeft: '0.5rem',
      verticalAlign: 'middle',
    },
    submitButton: {
      background: '#de800d',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '20px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(255, 98, 0, 0.2)',
      transition: 'all 0.3s ease',
    },
    privacyTerms: {
      fontSize: '0.8rem',
      color: '#6b7280',
      marginTop: '0.5rem',
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
                  Request a Quote <span style={{ color: '#de800d' }}>⭐</span>
                </span>
              </Link>
              <a
                href="https://wa.me/250788518720"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappButton}
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
                  Let's Chat on <span style={{ color: '#de800d' }}><img src={whatsappIcon} alt="WhatsApp" style={{ width: '18px', height: '18px' }} /></span>
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
            <Link
              key={index}
              to={`/services#service-${service.id}`}
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
                  <span style={styles.learnMoreLink}>View More →</span>
                </>
              ) : (
                <>
                  <img src={service.icon} alt={service.title} style={{ width: '40px', height: '40px', marginBottom: '1rem' }} />
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                </>
              )}
            </Link>
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
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <select 
              value={selectedTestimonial} 
              onChange={(e) => setSelectedTestimonial(parseInt(e.target.value))}
              style={styles.dropdown}
            >
              {testimonials.map((testimonial, index) => (
                <option key={index} value={index}>
                  {testimonial.cite.replace('— ', '')}
                </option>
              ))}
            </select>
            <div style={styles.testimonial}>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={styles.star}>⭐</span>
                ))}
              </div>
              <blockquote style={styles.quote}>
                "{testimonials[selectedTestimonial].quote}"
              </blockquote>
              <cite style={styles.cite}>{testimonials[selectedTestimonial].cite}</cite>
            </div>
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
                opacity: 1,
                pointerEvents: 'auto',
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
        <h2 style={styles.sectionTitle}>Stay updated</h2>
        {/* <p style={styles.sectionSubtitle}>Stay updated with the latest news and offers.</p> */}
        <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              style={styles.subscribeInput}
              required
            />
            <label style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
              <input
                type="checkbox"
                style={styles.checkbox}
              /> I'm not a robot
            </label>
            <div style={styles.reCaptcha}>
              reCAPTCHA &nbsp;&nbsp;&nbsp; <span style={{ color: '#4285f4' }}>Privacy - Terms</span>
            </div>
          </div>
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={(e) => {
              e.target.style.background = '#e5944a';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ff6200';
              e.target.style.transform = 'scale(1)';
            }}
          >
            SUBMIT
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
        <p style={styles.privacyTerms}>By submitting this form, you agree to the privacy policy and terms of this website.</p>
      </section>
    </div>
  );
}

export default Home;