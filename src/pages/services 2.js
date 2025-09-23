import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    
    // Enhanced anchor link handling
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const serviceId = parseInt(hash.replace('#service-', ''));
        if (!isNaN(serviceId)) {
          setActiveService(serviceId);
          
          // Scroll to the service with smooth behavior
          setTimeout(() => {
            const element = document.getElementById(hash.slice(1));
            if (element) {
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - 100;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 300);
        }
      }
    };
    
    // Handle initial hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Translation and Interpretation",
      tagline: "Fluent. Accurate. Native-quality.",
      icon: "🌐",
      description: "We translate documents in English, French, Kinyarwanda, Kiswahili, Kirundi, and more with precision and contextual understanding. Our multi-stage review process—handled by native-speaking translators, editors, and proofreaders—ensures accurate, culturally appropriate translations. We also provide professional interpretation services—both simultaneous and consecutive—for conferences, legal proceedings, training sessions, field interviews, and community outreach. Our interpreters are not only fluent in target languages, but also trained to navigate tone, cultural nuance, and subject-specific terminology in real time. Whether remote or in-person, we ensure that every conversation is clear, respectful, and impactful.<br><b>We handle all file types: Word, Excel, PowerPoint, HTML, XML, and PDF—delivered on time and within budget.</b>",
      keyFeatures: [
        "Native-speaking translators only",
        "Multi-stage review process",
        "Specialized field expertise",
        "Multiple document formats supported"
      ],
      useCases: [
        "Health & Life Sciences",
        "Law, Finance, and Economics",
        "Governance and Education",
        "Software and Website Localization",
        "Agriculture and Technology"
      ]
    },
    {
      id: 2,
      title: "Website & Software Localization",
      tagline: "Global Content, Local Impact.",
      icon: "🎯",
      description: "Localization isn't just translation—it's adaptation. Adapt your website, software, or app for specific regions and languages with LCI's cultural and linguistic expertise.",
      keyFeatures: [
        "UI/UX translation",
        "Mobile app localization",
        "CMS & plugin-ready formatting",
        "Culturally adapted content",
        "Digital, e-commerce platforms",
        "Quality assurance testing"
      ],
      useCases: [
        "eCommerce platforms",
        "Mobile applications",
        "Software interfaces",
        "Digital platforms"
      ]
    },
    {
      id: 3,
      title: "Certified Document Translation",
      tagline: "Certified. Accepted by Embassies, Universities, and Institutions.",
      icon: "🛡️",
      description: "Need certified translations for legal, academic use, or for immigration and visa application? We translate marriage certificates, birth records, court rulings, diplomas, and more. Certified and notarized services available on request.",
      keyFeatures: [
        "Legally recognized certifications",
        "Notarized services available",
        "Fast turnaround times",
        "Secure handling of documents"
      ],
      useCases: [
        "Birth certificates",
        "Marriage certificates",
        "Academic diplomas",
        "Legal documents",
        "Immigration paperwork, etc."
      ]
    },
    {
      id: 4,
      title: "Audio & Video Transcription",
      tagline: "From Sound or Video to Transcript.",
      icon: "🎵",
      description: "We offer fast, accurate transcription in formats like MP3, MP4, WAV, WMA, and WMV with optional time stamps and translation.",
      keyFeatures: [
        "Multiple audio/video formats",
        "Timestamp inclusion",
        "Clean and verbatim options",
        "Translation services available"
      ],
      useCases: [
        "Interviews and focus groups",
        "Podcasts and webinars",
        "Legal hearings",
        "Academic research"
      ]
    },
    {
      id: 5,
      title: "Proofreading & Editing",
      tagline: "Polish Your Message. Boost Your Impact.",
      icon: "✅",
      description: "We refine grammar, structure, tone, and clarity—perfect for publication and professional use.",
      keyFeatures: [
        "Grammar and style correction",
        "Structural improvements",
        "Tone and clarity enhancement",
        "Tracked changes for transparency"
      ],
      useCases: [
        "Business proposals",
        "Marketing content",
        "Academic theses",
        "Website content"
      ]
    },
    {
      id: 6,
      title: "CV & Application Support",
      tagline: "Stand Out with Confidence.",
      icon: "👥",
      description: "We help you present your best self to employers and universities—with polished CVs and compelling personal statements.",
      keyFeatures: [
        "Professional CV editing",
        "Cover letter optimization",
        "Personal statement refinement",
        "University application support",
        "Available in English, French, Kinyarwanda, Kirundi, Kiswahili, and more"
      ],
      useCases: [
        "Job applications",
        "University admissions",
        "Scholarship applications",
        "Professional networking"
      ]
    },
    {
      id: 7,
      title: "Machine Translation Post-Editing (MTPE)",
      tagline: "Speed Meets Accuracy—with a Human Touch.",
      icon: "⚡",
      description: "MTPE bridges the gap between fast, affordable machine translation and the precision of human language experts. At LCI, we enhance raw MT output with expert linguists who ensure clarity, cultural relevance, and error-free communication. We humanize your machine output to meet real-world standards.",
      keyFeatures: [
        "Full post-editing (accuracy, tone, clarity)",
        "Light post-editing for non-critical content",
        "Human review of AI-generated translations",
        "Terminology consistency checks",
        "Style and tone optimization",
        "Industry-specific language correction"
      ],
      useCases: [
        "Large-scale document batches",
        "Technical manuals & internal reports",
        "Multilingual knowledge bases",
        "Fast-turnaround marketing copy",
        "MT-integrated CMS workflows"
      ]
    },
    {
      id: 8,
      title: "Glossaries & Language Resources",
      tagline: "Clarity, Consistency, Confidence.",
      icon: "📚",
      description: "We build bilingual glossaries and custom language tools tailored to your organization's field.",
      keyFeatures: [
        "Custom terminology development",
        "Bilingual vocabulary creation",
        "Industry-specific glossaries",
        "Kinyarwanda language handbooks"
      ],
      useCases: [
        "Staff training materials",
        "Localization projects",
        "Terminology consistency",
        "Language standardization"
      ]
    },
    {
      id: 9,
      title: "Back-Translation & Quality Assurance",
      tagline: "Accuracy You Can Trust.",
      icon: "🔒",
      description: "Back-Translation is a quality assurance process where a translated document is independently retranslated back into the source language. In medical, legal, and donor-funded work, accuracy isn't a luxury—it's a necessity. At LCI, we offer back-translation and bilingual proofreading to eliminate ambiguity and ensure clarity.",
      keyFeatures: [
        "Independent back-translation",
        "Quality verification process",
        "Accuracy validation",
        "Risk mitigation"
      ],
      useCases: [
        "Medical translations",
        "Legal documents",
        "Technical manuals",
        "Regulatory submissions"
      ]
    },
    {
      id: 10,
      title: "AI Translation Services",
      tagline: "Smart Translations. Human Touch. Local Impact.",
      icon: "🤖",
      description: "LCI's AI Translation Services combine the efficiency of machine translation with the cultural and linguistic precision of native-speaking experts. Our neural machine translation (NMT) solutions are optimized for African language pairs.",
      keyFeatures: [
        "Neural machine translation optimized for African and global language pairs",
        "Human post-editing by native linguists for tone, clarity, and accuracy",
        "Translation Memory & glossary integration for consistency",
        "Support for Kinyarwanda, Kirundi, Kiswahili, French, English, and more",
        "Scalable processing for large volumes and short deadlines",
        "Custom MT engine integration available"
      ],
      useCases: [
        "Educational platforms and online learning content",
        "High-volume document translation (reports, manuals)",
        "Multilingual chatbot and AI assistant localization",
        "Customer support & helpdesk content",
        "Marketing content that requires rapid turnaround",
        "Internal communications and bulk email campaigns"
      ]
    },
    {
      id: 11,
      title: "Social Media Marketing",
      tagline: "Build Visibility. Drive Engagement. Amplify in Every Language.",
      icon: "📱",
      description: "LCI offers multilingual social media marketing tailored to your audience and goals. Whether you're launching a campaign, raising awareness, or building brand loyalty, we help you craft content that resonates—across borders, platforms, and languages. From Facebook to Instagram, LinkedIn to X, we manage strategy, design, captions, scheduling, and community engagement—all in your target language and cultural context.",
      keyFeatures: [
        "Multilingual content creation and localization",
        "Platform-specific campaign strategies (Meta, LinkedIn, X, Instagram, TikTok)",
        "Community management & analytics tracking",
        "Captioning, scheduling, and engagement optimization",
        "AI-assisted performance monitoring"
      ],
      useCases: [
        "Advocacy & awareness campaigns",
        "Product launches",
        "Event promotion",
        "Bilingual educational outreach",
        "Youth-targeted digital marketing"
      ]
    },
    {
      id: 12,
      title: "Content Creation",
      tagline: "Powerful Stories. Locally Told.",
      icon: "✍️",
      description: "From blog articles to branded video scripts, LCI creates original, compelling content that speaks your audience's language—literally and figuratively. We specialize in multilingual content strategy, development, and adaptation for print, digital, and multimedia formats.",
      keyFeatures: [
        "Multilingual blog writing and translation",
        "Scriptwriting for explainer videos, radio, and storytelling",
        "SEO-optimized web content and landing pages",
        "Newsletter and email marketing content",
        "Visual storytelling support (infographics, short reels, quote cards)"
      ],
      useCases: [
        "Monthly multilingual blog content",
        "Educational scripts for children and youth",
        "SEO-focused web copy for local startups",
        "Multilingual newsletters and email sequences",
        "Grant report narratives and summaries"
      ]
    }
  ];

  const qualitySteps = [
    {
      step: 1,
      title: "Translator",
      description: "Native-speaking professional with subject expertise"
    },
    {
      step: 2,
      title: "Editor",
      description: "Independent review for accuracy and consistency"
    },
    {
      step: 3,
      title: "Proofreader",
      description: "Final quality check for grammar and formatting"
    },
    {
      step: 4,
      title: "Delivery",
      description: "Cultural and context-appropriate final product"
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
      minHeight: '40vh',
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
    heroContent: {
      textAlign: isMobile ? 'center' : 'center',
      maxWidth: '1200px',
      padding: isMobile ? '0' : '0 1rem',
    },
    heroTitle: {
      fontSize: isMobile ? '2rem' : '2.8rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '1rem',
      lineHeight: '1.3',
    },
    heroSubtitle: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
      maxWidth: '800px',
      margin: '0 auto 1.5rem',
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
    viewMoreButton: {
      background: '#de800d',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '0.5rem 1.5rem',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '0.5rem',
      display: 'inline-block',
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
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleExpandService = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
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
    e.target.style.transform = 'scale(1.05)';
    e.target.style.background = '#0a1d51';
  };

  const handleViewMoreLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.background = '#de800d';
  };

  // Function to render description with HTML tags
  const renderDescription = (description) => {
    return { __html: description };
  };

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Services</h1>
          <p style={styles.heroSubtitle}>Language Solutions Tailored to Your Needs</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Comprehensive Language Solutions</h2>
        <p style={styles.sectionSubtitle}>
          From translation to localization, we offer professional language services that bridge cultures and connect communities
        </p>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              style={{
                ...styles.serviceCard,
                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                background: hoveredCard === index ? 'rgba(222, 128, 13, 0.1)' : '#f1eee5',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.serviceHeader}>
                <span style={styles.serviceIcon}>{service.icon}</span>
                <div style={styles.serviceHeaderText}>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceTagline}>{service.tagline}</p>
                </div>
              </div>
              
              {/* Use dangerouslySetInnerHTML for the first service to render bold text */}
              {service.id === 1 ? (
                <p 
                  style={styles.serviceDescription} 
                  dangerouslySetInnerHTML={renderDescription(service.description)}
                />
              ) : (
                <p style={styles.serviceDescription}>{service.description}</p>
              )}
              
              <button
                style={styles.viewMoreButton}
                onClick={() => handleExpandService(service.id)}
                onMouseEnter={handleViewMoreHover}
                onMouseLeave={handleViewMoreLeave}
              >
                {activeService === service.id ? 'View Less' : 'View More'}
              </button>
              
              {activeService === service.id && (
                <>
                  <div style={styles.featuresSection}>
                    <h4 style={styles.featuresTitle}>✅ Key Features:</h4>
                    <ul style={styles.featuresList}>
                      {service.keyFeatures.map((feature, idx) => (
                        <li key={idx} style={styles.featureItem}>
                          <span style={{ color: '#de800d' }}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={styles.featuresSection}>
                    <h4 style={styles.featuresTitle}>🎯 Use Cases:</h4>
                    <div style={styles.useCasesGrid}>
                      {service.useCases.map((useCase, idx) => (
                        <div key={idx} style={styles.useCaseItem}>
                          {useCase}
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
        <h2 style={styles.sectionTitle}>Our Quality Assurance Commitment</h2>
        <p style={styles.sectionSubtitle}>
          Every project goes through our rigorous quality control process
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
          We only work with experienced linguists who translate into their native language and have subject-matter expertise.
        </p>
      </section>

      <section style={styles.languagesSection}>
        <h2 style={styles.sectionTitle}>Languages We Support</h2>
        <p style={styles.sectionSubtitle}>
          Professional translation services in major African and international languages
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
          Need another language? Contact us to discuss your requirements.
        </p>
      </section>

      <section style={styles.confidentialitySection}>
        <div style={styles.confidentialityTitle}>
          🔒 Your Data, Your Privacy: Confidentiality Guaranteed
        </div>
        <p style={styles.confidentialityDescription}>
          At Language Computing International (LCI), your trust is our top priority. 
          We handle every file, conversation, and project with the highest level of confidentiality.
        </p>
        <div style={styles.confidentialityFeatures}>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Strict internal privacy protocols</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>NDA signing available upon request</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Secure file handling and data storage</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Access restricted to authorized linguists only</span>
          </div>
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '1rem', fontWeight: '600', color: '#0a1d51' }}>
          🛡️ Confidentiality isn't an option. It's our standard.
        </p>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
        <p style={styles.ctaDescription}>
          Contact us today for a free quote tailored to your specific needs. 
          Let's bring your multilingual vision to life.
        </p>
        <Link
          to="/quote"
          style={styles.primaryButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Get Your Quote Today <span style={{ color: '#de800d' }}>✨</span>
          </span>
        </Link>
      </section>
    </div>
  );
}

export default Services;

----------------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    
    // Enhanced anchor link handling
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const serviceId = parseInt(hash.replace('#service-', ''));
        if (!isNaN(serviceId)) {
          setActiveService(serviceId);
          
          // Scroll to the service with smooth behavior
          setTimeout(() => {
            const element = document.getElementById(hash.slice(1));
            if (element) {
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - 100;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 300);
        }
      }
    };
    
    // Handle initial hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Translation and Interpretation",
      tagline: "Fluent. Accurate. Native-quality.",
      icon: "🌐",
      description: "We translate documents in English, French, Kinyarwanda, Kiswahili, Kirundi, and more with precision and contextual understanding. Our multi-stage review process—handled by native-speaking translators, editors, and proofreaders—ensures accurate, culturally appropriate translations. We also provide professional interpretation services—both simultaneous and consecutive—for conferences, legal proceedings, training sessions, field interviews, and community outreach. Our interpreters are not only fluent in target languages, but also trained to navigate tone, cultural nuance, and subject-specific terminology in real time. Whether remote or in-person, we ensure that every conversation is clear, respectful, and impactful.<br>We handle all file types: Word, Excel, PowerPoint, HTML, XML, and PDF—delivered on time and within budget.</br>",
      keyFeatures: [
        "Native-speaking translators only",
        "Multi-stage review process",
        "Specialized field expertise",
        "Multiple document formats supported"
      ],
      useCases: [
        "Health & Life Sciences",
        "Law, Finance, and Economics",
        "Governance and Education",
        "Software and Website Localization",
        "Agriculture and Technology"
      ]
    },
    {
      id: 2,
      title: "Website & Software Localization",
      tagline: "Global Content, Local Impact.",
      icon: "🎯",
      description: "Localization isn't just translation—it's adaptation. Adapt your website, software, or app for specific regions and languages with LCI's cultural and linguistic expertise.",
      keyFeatures: [
        "UI/UX translation",
        "Mobile app localization",
        "CMS & plugin-ready formatting",
        "Culturally adapted content",
        "Digital, e-commerce platforms",
        "Quality assurance testing"
      ],
      useCases: [
        "eCommerce platforms",
        "Mobile applications",
        "Software interfaces",
        "Digital platforms"
      ]
    },
    {
      id: 3,
      title: "Certified Document Translation",
      tagline: "Certified. Accepted by Embassies, Universities, and Institutions.",
      icon: "🛡️",
      description: "Need certified translations for legal, academic use, or for immigration and visa application? We translate marriage certificates, birth records, court rulings, diplomas, and more. Certified and notarized services available on request.",
      keyFeatures: [
        "Legally recognized certifications",
        "Notarized services available",
        "Fast turnaround times",
        "Secure handling of documents"
      ],
      useCases: [
        "Birth certificates",
        "Marriage certificates",
        "Academic diplomas",
        "Legal documents",
        "Immigration paperwork, etc."
      ]
    },
    {
      id: 4,
      title: "Audio & Video Transcription",
      tagline: "From Sound or Video to Transcript.",
      icon: "🎵",
      description: "We offer fast, accurate transcription in formats like MP3, MP4, WAV, WMA, and WMV with optional time stamps and translation.",
      keyFeatures: [
        "Multiple audio/video formats",
        "Timestamp inclusion",
        "Clean and verbatim options",
        "Translation services available"
      ],
      useCases: [
        "Interviews and focus groups",
        "Podcasts and webinars",
        "Legal hearings",
        "Academic research"
      ]
    },
    {
      id: 5,
      title: "Proofreading & Editing",
      tagline: "Polish Your Message. Boost Your Impact.",
      icon: "✅",
      description: "We refine grammar, structure, tone, and clarity—perfect for publication and professional use.",
      keyFeatures: [
        "Grammar and style correction",
        "Structural improvements",
        "Tone and clarity enhancement",
        "Tracked changes for transparency"
      ],
      useCases: [
        "Business proposals",
        "Marketing content",
        "Academic theses",
        "Website content"
      ]
    },
    {
      id: 6,
      title: "CV & Application Support",
      tagline: "Stand Out with Confidence.",
      icon: "👥",
      description: "We help you present your best self to employers and universities—with polished CVs and compelling personal statements.",
      keyFeatures: [
        "Professional CV editing",
        "Cover letter optimization",
        "Personal statement refinement",
        "University application support",
        "Available in English, French, Kinyarwanda, Kirundi, Kiswahili, and more"
      ],
      useCases: [
        "Job applications",
        "University admissions",
        "Scholarship applications",
        "Professional networking"
      ]
    },
    {
      id: 7,
      title: "Machine Translation Post-Editing (MTPE)",
      tagline: "Speed Meets Accuracy—with a Human Touch.",
      icon: "⚡",
      description: "MTPE bridges the gap between fast, affordable machine translation and the precision of human language experts. At LCI, we enhance raw MT output with expert linguists who ensure clarity, cultural relevance, and error-free communication. We humanize your machine output to meet real-world standards.",
      keyFeatures: [
        "Full post-editing (accuracy, tone, clarity)",
        "Light post-editing for non-critical content",
        "Human review of AI-generated translations",
        "Terminology consistency checks",
        "Style and tone optimization",
        "Industry-specific language correction"
      ],
      useCases: [
        "Large-scale document batches",
        "Technical manuals & internal reports",
        "Multilingual knowledge bases",
        "Fast-turnaround marketing copy",
        "MT-integrated CMS workflows"
      ]
    },
    {
      id: 8,
      title: "Glossaries & Language Resources",
      tagline: "Clarity, Consistency, Confidence.",
      icon: "📚",
      description: "We build bilingual glossaries and custom language tools tailored to your organization's field.",
      keyFeatures: [
        "Custom terminology development",
        "Bilingual vocabulary creation",
        "Industry-specific glossaries",
        "Kinyarwanda language handbooks"
      ],
      useCases: [
        "Staff training materials",
        "Localization projects",
        "Terminology consistency",
        "Language standardization"
      ]
    },
    {
      id: 9,
      title: "Back-Translation & Quality Assurance",
      tagline: "Accuracy You Can Trust.",
      icon: "🔒",
      description: "Back-Translation is a quality assurance process where a translated document is independently retranslated back into the source language. In medical, legal, and donor-funded work, accuracy isn't a luxury—it's a necessity. At LCI, we offer back-translation and bilingual proofreading to eliminate ambiguity and ensure clarity.",
      keyFeatures: [
        "Independent back-translation",
        "Quality verification process",
        "Accuracy validation",
        "Risk mitigation"
      ],
      useCases: [
        "Medical translations",
        "Legal documents",
        "Technical manuals",
        "Regulatory submissions"
      ]
    },
    {
      id: 10,
      title: "AI Translation Services",
      tagline: "Smart Translations. Human Touch. Local Impact.",
      icon: "🤖",
      description: "LCI's AI Translation Services combine the efficiency of machine translation with the cultural and linguistic precision of native-speaking experts. Our neural machine translation (NMT) solutions are optimized for African language pairs.",
      keyFeatures: [
        "Neural machine translation optimized for African and global language pairs",
        "Human post-editing by native linguists for tone, clarity, and accuracy",
        "Translation Memory & glossary integration for consistency",
        "Support for Kinyarwanda, Kirundi, Kiswahili, French, English, and more",
        "Scalable processing for large volumes and short deadlines",
        "Custom MT engine integration available"
      ],
      useCases: [
        "Educational platforms and online learning content",
        "High-volume document translation (reports, manuals)",
        "Multilingual chatbot and AI assistant localization",
        "Customer support & helpdesk content",
        "Marketing content that requires rapid turnaround",
        "Internal communications and bulk email campaigns"
      ]
    },
    {
      id: 11,
      title: "Social Media Marketing",
      tagline: "Build Visibility. Drive Engagement. Amplify in Every Language.",
      icon: "📱",
      description: "LCI offers multilingual social media marketing tailored to your audience and goals. Whether you're launching a campaign, raising awareness, or building brand loyalty, we help you craft content that resonates—across borders, platforms, and languages. From Facebook to Instagram, LinkedIn to X, we manage strategy, design, captions, scheduling, and community engagement—all in your target language and cultural context.",
      keyFeatures: [
        "Multilingual content creation and localization",
        "Platform-specific campaign strategies (Meta, LinkedIn, X, Instagram, TikTok)",
        "Community management & analytics tracking",
        "Captioning, scheduling, and engagement optimization",
        "AI-assisted performance monitoring"
      ],
      useCases: [
        "Advocacy & awareness campaigns",
        "Product launches",
        "Event promotion",
        "Bilingual educational outreach",
        "Youth-targeted digital marketing"
      ]
    },
    {
      id: 12,
      title: "Content Creation",
      tagline: "Powerful Stories. Locally Told.",
      icon: "✍️",
      description: "From blog articles to branded video scripts, LCI creates original, compelling content that speaks your audience's language—literally and figuratively. We specialize in multilingual content strategy, development, and adaptation for print, digital, and multimedia formats.",
      keyFeatures: [
        "Multilingual blog writing and translation",
        "Scriptwriting for explainer videos, radio, and storytelling",
        "SEO-optimized web content and landing pages",
        "Newsletter and email marketing content",
        "Visual storytelling support (infographics, short reels, quote cards)"
      ],
      useCases: [
        "Monthly multilingual blog content",
        "Educational scripts for children and youth",
        "SEO-focused web copy for local startups",
        "Multilingual newsletters and email sequences",
        "Grant report narratives and summaries"
      ]
    }
  ];

  const qualitySteps = [
    {
      step: 1,
      title: "Translator",
      description: "Native-speaking professional with subject expertise"
    },
    {
      step: 2,
      title: "Editor",
      description: "Independent review for accuracy and consistency"
    },
    {
      step: 3,
      title: "Proofreader",
      description: "Final quality check for grammar and formatting"
    },
    {
      step: 4,
      title: "Delivery",
      description: "Cultural and context-appropriate final product"
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
      minHeight: '40vh',
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
    heroContent: {
      textAlign: isMobile ? 'center' : 'center',
      maxWidth: '1200px',
      padding: isMobile ? '0' : '0 1rem',
    },
    heroTitle: {
      fontSize: isMobile ? '2rem' : '2.8rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '1rem',
      lineHeight: '1.3',
    },
    heroSubtitle: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
      maxWidth: '800px',
      margin: '0 auto 1.5rem',
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
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleExpandService = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
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

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Services</h1>
          <p style={styles.heroSubtitle}>Language Solutions Tailored to Your Needs</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Comprehensive Language Solutions</h2>
        <p style={styles.sectionSubtitle}>
          From translation to localization, we offer professional language services that bridge cultures and connect communities
        </p>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
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
                  transform: activeService === service.id ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
                onClick={() => handleExpandService(service.id)}
              >
                +
              </button>
              <div style={styles.serviceHeader}>
                <span style={styles.serviceIcon}>{service.icon}</span>
                <div style={styles.serviceHeaderText}>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceTagline}>{service.tagline}</p>
                </div>
              </div>
              <p style={styles.serviceDescription}>{service.description}</p>
              {activeService === service.id && (
                <>
                  <div style={styles.featuresSection}>
                    <h4 style={styles.featuresTitle}>✅ Key Features:</h4>
                    <ul style={styles.featuresList}>
                      {service.keyFeatures.map((feature, idx) => (
                        <li key={idx} style={styles.featureItem}>
                          <span style={{ color: '#de800d' }}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={styles.featuresSection}>
                    <h4 style={styles.featuresTitle}>🎯 Use Cases:</h4>
                    <div style={styles.useCasesGrid}>
                      {service.useCases.map((useCase, idx) => (
                        <div key={idx} style={styles.useCaseItem}>
                          {useCase}
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
        <h2 style={styles.sectionTitle}>Our Quality Assurance Commitment</h2>
        <p style={styles.sectionSubtitle}>
          Every project goes through our rigorous quality control process
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
          We only work with experienced linguists who translate into their native language and have subject-matter expertise.
        </p>
      </section>

      <section style={styles.languagesSection}>
        <h2 style={styles.sectionTitle}>Languages We Support</h2>
        <p style={styles.sectionSubtitle}>
          Professional translation services in major African and international languages
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
          Need another language? Contact us to discuss your requirements.
        </p>
      </section>

      <section style={styles.confidentialitySection}>
        <div style={styles.confidentialityTitle}>
          🔒 Your Data, Your Privacy: Confidentiality Guaranteed
        </div>
        <p style={styles.confidentialityDescription}>
          At Language Computing International (LCI), your trust is our top priority. 
          We handle every file, conversation, and project with the highest level of confidentiality.
        </p>
        <div style={styles.confidentialityFeatures}>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Strict internal privacy protocols</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>NDA signing available upon request</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Secure file handling and data storage</span>
          </div>
          <div style={styles.confidentialityFeature}>
            <span style={{ color: '#de800d' }}>•</span>
            <span>Access restricted to authorized linguists only</span>
          </div>
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '1rem', fontWeight: '600', color: '#0a1d51' }}>
          🛡️ Confidentiality isn't an option. It's our standard.
        </p>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
        <p style={styles.ctaDescription}>
          Contact us today for a free quote tailored to your specific needs. 
          Let's bring your multilingual vision to life.
        </p>
        <Link
          to="/quote"
          style={styles.primaryButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Get Your Quote Today <span style={{ color: '#de800d' }}>✨</span>
          </span>
        </Link>
      </section>
    </div>
  );
}

export default Services;