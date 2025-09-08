import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Translation and Interpretation Services",
      tagline: "Fluent. Accurate. Native-quality.",
      icon: "🌐",
      description: "We translate documents in English, French, Kinyarwanda, Kiswahili, Kirundi, and more with precision and contextual understanding. Our multi-stage review process—handled by native-speaking translators, editors, and proofreaders—ensures accurate, culturally appropriate translations. We also provide professional interpretation services—both simultaneous and consecutive—for conferences, legal proceedings, training sessions, field interviews, and community outreach.",
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
      description: "MTPE bridges the gap between fast, affordable machine translation and the precision of human language experts. At LCI, we enhance raw MT output with expert linguists who ensure clarity, cultural relevance, and error-free communication.",
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
      description: "Back-Translation is a quality assurance process where a translated document is independently retranslated back into the source language. In medical, legal, and donor-funded work, accuracy isn't a luxury—it's a necessity.",
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
      description: "Engage multilingual audiences across platforms with culturally adapted social media content, campaign strategies, and community management—in English, French, Kinyarwanda, Kiswahili, and more.",
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
      description: "Professional, SEO-optimized content in multiple languages—tailored for web, print, and multimedia—to help you inform, inspire, and connect across cultures.",
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
      fontFamily: 'Arial, sans-serif'
    },
    heroSection: {
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #ff8c00 0%, #1e3a8a 50%, #ff8c00 100%)',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1s ease-out'
    },
    heroContent: {
      textAlign: 'center',
      maxWidth: '1000px',
      zIndex: 10,
      position: 'relative'
    },
    heroTitle: {
      fontSize: '3.5rem',
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
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2.5rem',
      marginBottom: '4rem'
    },
    serviceCard: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '2.5rem',
      border: '2px solid #f3f4f6',
      cursor: 'pointer',
      transform: hoveredCard === null ? 'scale(1)' : 'scale(1)',
      transition: 'all 0.5s ease',
      boxShadow: '0 8px 32px rgba(255, 140, 0, 0.1)',
      position: 'relative'
    },
    serviceHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    },
    serviceIcon: {
      fontSize: '3rem',
      flexShrink: 0
    },
    serviceHeaderText: {
      flex: 1
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '0.5rem',
      lineHeight: '1.3'
    },
    serviceTagline: {
      fontSize: '1rem',
      color: '#ff8c00',
      fontWeight: '600',
      fontStyle: 'italic'
    },
    serviceDescription: {
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '2rem'
    },
    featuresSection: {
      marginBottom: '1.5rem'
    },
    featuresTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem'
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    featureItem: {
      padding: '0.5rem 0',
      color: '#4b5563',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    useCasesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '0.5rem'
    },
    useCaseItem: {
      background: '#f0f9ff',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      color: '#1e3a8a',
      textAlign: 'center',
      border: '1px solid #bfdbfe'
    },
    expandButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: '#ff8c00',
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
      transition: 'all 0.3s ease'
    },
    qualitySection: {
      background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '4rem 0',
      border: '2px solid #ff8c00'
    },
    qualityGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    qualityStep: {
      textAlign: 'center',
      background: '#ffffff',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #ff8c00',
      position: 'relative'
    },
    stepNumber: {
      position: 'absolute',
      top: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#ff8c00',
      color: 'white',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    },
    stepTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem',
      marginTop: '1rem'
    },
    stepDescription: {
      color: '#4b5563',
      fontSize: '1rem'
    },
    languagesSection: {
      background: 'linear-gradient(135deg, #f0f9ff, #dbeafe)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '4rem 0'
    },
    languagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem'
    },
    languageCard: {
      background: '#ffffff',
      borderRadius: '15px',
      padding: '2rem',
      textAlign: 'center',
      border: '2px solid #1e3a8a',
      boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)'
    },
    languageFlag: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    languageCode: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '0.5rem'
    },
    languageName: {
      color: '#6b7280',
      fontSize: '1rem'
    },
    confidentialitySection: {
      background: 'linear-gradient(135deg, #1e3a8a, #ff8c00)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      textAlign: 'center',
      margin: '4rem 0',
      color: 'white'
    },
    confidentialityTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem'
    },
    confidentialityDescription: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    confidentialityFeatures: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    confidentialityFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '1.1rem'
    },
    ctaSection: {
      textAlign: 'center',
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      borderRadius: '20px',
      margin: '4rem auto'
    },
    ctaTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '2rem'
    },
    ctaDescription: {
      fontSize: '1.3rem',
      color: '#4b5563',
      marginBottom: '3rem',
      lineHeight: '1.6'
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
      display: 'inline-block'
    }
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
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Services</h1>
          <p style={styles.heroSubtitle}>Language Solutions Tailored to Your Needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Comprehensive Language Solutions</h2>
        <p style={styles.sectionSubtitle}>
          From translation to localization, we offer professional language services that bridge cultures and connect communities
        </p>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                ...styles.serviceCard,
                transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)',
                borderColor: hoveredCard === index ? '#ff8c00' : '#f3f4f6',
                boxShadow: hoveredCard === index ? '0 15px 40px rgba(255, 140, 0, 0.2)' : '0 8px 32px rgba(255, 140, 0, 0.1)'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  ...styles.expandButton,
                  transform: activeService === service.id ? 'rotate(45deg)' : 'rotate(0deg)'
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
                          <span style={{color: '#10b981'}}>•</span>
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

      {/* Quality Assurance Section */}
      <section style={styles.section}>
        <div style={styles.qualitySection}>
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
          <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem', color: '#4b5563'}}>
            We only work with experienced linguists who translate into their native language and have subject-matter expertise.
          </p>
        </div>
      </section>

      {/* Languages Section */}
      <section style={styles.section}>
        <div style={styles.languagesSection}>
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
          <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem', color: '#4b5563'}}>
            Need another language? Contact us to discuss your requirements.
          </p>
        </div>
      </section>

      {/* Confidentiality Section */}
      <section style={styles.section}>
        <div style={styles.confidentialitySection}>
          <div style={styles.confidentialityTitle}>
            🔒 Your Data, Your Privacy: Confidentiality Guaranteed
          </div>
          <p style={styles.confidentialityDescription}>
            At Language Computing International (LCI), your trust is our top priority. 
            We handle every file, conversation, and project with the highest level of confidentiality.
          </p>
          <div style={styles.confidentialityFeatures}>
            <div style={styles.confidentialityFeature}>
              <span>✅</span>
              <span>Strict internal privacy protocols</span>
            </div>
            <div style={styles.confidentialityFeature}>
              <span>✅</span>
              <span>NDA signing available upon request</span>
            </div>
            <div style={styles.confidentialityFeature}>
              <span>✅</span>
              <span>Secure file handling and data storage</span>
            </div>
            <div style={styles.confidentialityFeature}>
              <span>✅</span>
              <span>Access restricted to authorized linguists only</span>
            </div>
          </div>
          <p style={{marginTop: '2rem', fontSize: '1.2rem', fontWeight: '600'}}>
            🛡️ Confidentiality isn't an option. It's our standard.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={styles.section}>
        <div style={styles.ctaSection}>
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
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              Get Your Quote Today ⭐
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;