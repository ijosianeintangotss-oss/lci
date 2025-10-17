import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import whatsappIcon from '../assets/whatsapp-icon.png';
import heroImage from '../assets/ai_translation_wise.png';

function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [subscribeStatus, setSubscribeStatus] = useState(''); // 'success', 'error', ''

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { name: 'All Posts', count: 10 },
    { name: 'AI in Translation', count: 1 },
    { name: 'Localization Insights', count: 2 },
    { name: 'Careers', count: 2 },
    { name: 'Digital Strategy', count: 1 },
    { name: 'Translation Tips', count: 2 },
    { name: 'General', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      category: 'AI in Translation',
      readingTime: '6 min read',
      title: 'AI Might Be Fast, But We Make It Wise',
      description: 'Why African human translators remain essential in the age of AI and how we\'re shaping the future of translation technology.',
      date: 'July 13, 2025',
      image: heroImage,
      fullContent: `
        <p>In the rapidly evolving landscape of translation, AI tools offer unprecedented speed and efficiency. However, they often fall short in capturing cultural nuances, idiomatic expressions, and contextual subtleties that are crucial for accurate communication, especially in African languages.</p>
        
        <p>At LCI, we leverage AI as a tool while relying on our team of expert human translators to infuse wisdom, cultural understanding, and precision into every project. This hybrid approach not only ensures high-quality results but also helps in training AI models for better future performance.</p>
        
        <h3>The Human Touch in Digital Translation</h3>
        <p>While AI can process thousands of words in minutes, it lacks the cultural intelligence that human translators bring to the table. African languages, with their rich oral traditions and contextual meanings, require more than literal translation—they demand cultural interpretation.</p>
        
        <h3>Our Approach at LCI</h3>
        <p>We've developed a unique workflow that combines the best of both worlds: AI handles the initial translation for speed, while our human experts refine, contextualize, and culturally adapt the content. This ensures that your message resonates authentically with your target audience.</p>
        
        <p>By investing in human expertise, we're not just translating words—we're bridging cultures and fostering global understanding. The future of translation isn't about choosing between AI and humans, but about leveraging both to achieve excellence.</p>
      `
    },
    {
      id: 2,
      category: 'Localization Insights',
      readingTime: '5 min read',
      title: 'Inside Software Localization: From English to Kinyarwanda',
      description: 'Understanding the technical aspects of software localization and the importance of context in translation.',
      date: 'July 10, 2025',
      image: heroImage,
      fullContent: `
        <p>Software localization goes beyond mere translation; it involves adapting user interfaces, date formats, currency symbols, and even color schemes to suit local preferences.</p>
        
        <p>When localizing from English to Kinyarwanda, challenges arise due to linguistic differences, such as verb conjugations and cultural references. Our process at LCI includes extracting strings from code, translating them with context in mind, and testing the localized version for usability.</p>
        
        <h3>The Technical Process</h3>
        <p>Our localization process begins with string extraction from source code. We then create a glossary of technical terms to ensure consistency across the entire application. Each string is translated with its context preserved, considering how it will appear in the user interface.</p>
        
        <h3>Testing and Quality Assurance</h3>
        <p>After translation, we conduct rigorous testing to ensure the localized software feels native to Rwandan users. This includes functional testing, linguistic validation, and user experience testing with native speakers.</p>
        
        <p>This ensures that the software feels native to Rwandan users, improving adoption rates and user satisfaction. We also collaborate with developers to handle technical constraints like string length limitations.</p>
      `
    },
    {
      id: 3,
      category: 'Localization Insights',
      readingTime: '4 min read',
      title: 'How Kinyarwanda UI Strings Can Make or Break Your App in Rwanda',
      description: 'How proper localization can make or break user experience in mobile applications.',
      date: 'July 8, 2025',
      image: heroImage,
      fullContent: 'How proper localization can make or break user experience in mobile applications. In Rwanda, where Kinyarwanda is the primary language, poorly translated UI strings can lead to confusion, frustration, and app abandonment. Effective localization considers not just direct translation but also cultural appropriateness and brevity to fit mobile interfaces. At LCI, we emphasize iterative testing with native speakers to refine UI elements. For instance, a simple button label like "Submit" might need adjustment to convey the right tone in Kinyarwanda. Successful localization can boost user engagement by 30-50%, making your app a market leader in the region.'
    },
    {
      id: 4,
      category: 'Careers',
      readingTime: '3 min read',
      title: 'Bridging Global Communication—One Language at a Time',
      description: 'How we help businesses and professionals connect across cultures with precision and care.',
      date: 'July 6, 2025',
      image: heroImage,
      fullContent: 'How we help businesses and professionals connect across cultures with precision and care. In an interconnected world, effective communication is key to success. LCI specializes in providing tailored translation and localization services that go beyond words to convey intent and emotion accurately. Our team of multilingual experts works closely with clients to understand their needs, ensuring that marketing materials, legal documents, and technical content resonate with target audiences. By focusing on cultural sensitivity, we help avoid misunderstandings that could harm business relationships. Join us in bridging the language gap and expanding your global reach.'
    },
    {
      id: 5,
      category: 'Careers',
      readingTime: '4 min read',
      title: 'Empowering the Next Generation of Language Experts',
      description: 'Building the next generation of African language professionals through training and mentorship.',
      date: 'July 3, 2025',
      image: heroImage,
      fullContent: 'Building the next generation of African language professionals through training and mentorship. At LCI, we believe in investing in talent to sustain the translation industry. Our programs include workshops on advanced translation tools, cultural linguistics, and project management. Mentorship pairs young linguists with experienced professionals, providing hands-on experience in real-world projects. This initiative not only addresses the shortage of skilled translators in African languages but also promotes diversity in the global language services sector. Graduates of our programs often go on to lead innovative projects, contributing to the preservation and promotion of African languages.'
    },
    {
      id: 6,
      category: 'Digital Strategy',
      readingTime: '5 min read',
      title: 'Are You Building or Just Posting?',
      description: 'The importance of strategic thinking in digital content creation and business building.',
      date: 'June 28, 2025',
      image: heroImage,
      fullContent: 'The importance of strategic thinking in digital content creation and business building. In the digital age, many businesses focus on frequent posting without a clear strategy, leading to diluted impact. At LCI, we advocate for a structured approach: defining goals, understanding audiences, and creating multilingual content that drives engagement. This includes SEO optimization for different languages and cultural adaptation of visuals. By building a cohesive digital presence, companies can achieve sustainable growth rather than short-term visibility. Our case studies show how strategic content has helped clients expand into new markets effectively.'
    },
    {
      id: 7,
      category: 'Translation Tips',
      readingTime: '4 min read',
      title: 'Ready to Go Global? We\'re Here to Help You Speak the World\'s Languages!',
      description: 'How we help your message resonate across different languages and cultures.',
      date: 'June 25, 2025',
      image: heroImage,
      fullContent: 'How we help your message resonate across different languages and cultures. Going global requires more than translation; it demands localization to ensure your brand voice remains consistent yet culturally relevant. LCI offers tips like preparing glossaries for key terms, involving native speakers early, and using CAT tools for efficiency. We handle everything from website content to marketing campaigns, ensuring idiomatic accuracy. Common pitfalls include ignoring regional dialects or humor that doesn\'t translate well. With our expertise, your business can communicate effectively worldwide, fostering trust and loyalty among diverse audiences.'
    },
    {
      id: 8,
      category: 'Translation Tips',
      readingTime: '6 min read',
      title: 'Our Story -- Language Computing International (LCI)',
      description: 'Your trusted partner in professional translation, localization & language solutions.',
      date: 'June 20, 2025',
      image: heroImage,
      fullContent: 'Your trusted partner in professional translation, localization & language solutions. Founded with a vision to empower African languages in the digital world, LCI has grown into a leading provider of multilingual services. Our story begins with recognizing the gap in quality translations for underrepresented languages. Today, we offer comprehensive solutions including AI-assisted translation, cultural consulting, and e-learning localization. Our commitment to excellence is reflected in our ISO-certified processes and client testimonials. As we expand, we continue to innovate, blending technology with human expertise to meet the evolving needs of global businesses.'
    },
    {
      id: 9,
      category: 'General',
      readingTime: '3 min read',
      title: 'Welcome to Language Computing International (LCI)!',
      description: 'Welcome to our growing network of language professionals and business leaders across Africa and beyond.',
      date: 'June 15, 2025',
      image: heroImage,
      fullContent: 'Welcome to our growing network of language professionals and business leaders across Africa and beyond. LCI is more than a service provider; it\'s a community dedicated to advancing linguistic diversity. We connect translators, interpreters, and clients through forums, webinars, and collaborative projects. Our platform fosters knowledge sharing on topics like language preservation and tech integration. Whether you\'re a seasoned professional or new to the field, join us to access resources, job opportunities, and networking events that drive career growth and industry innovation.'
    },
    {
      id: 10,
      category: 'General',
      readingTime: '2 min read',
      title: 'Welcome to LCI -- Multilingual Translation & Localization Services!',
      description: 'Your trusted partner in professional translation, localization, and multilingual communication.',
      date: 'June 10, 2025',
      image: heroImage,
      fullContent: 'Your trusted partner in professional translation, localization, and multilingual communication. At LCI, we specialize in delivering seamless language solutions tailored to your needs. From document translation to app localization, our services ensure your content is accessible and impactful globally. We support over 50 languages, with a focus on African dialects. Our team\'s expertise guarantees accuracy, confidentiality, and timely delivery. Discover how we can support your international expansion with customized strategies that align with your business objectives.'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All Posts' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeStatus('error');
      return;
    }
    
    // Simulate successful subscription
    setSubscribeStatus('success');
    setEmail('');
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubscribeStatus('');
    }, 5000);
  };

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
    searchSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '2rem 1rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    searchContainer: {
      maxWidth: '700px',
      margin: '0 auto 1.5rem',
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '0.7rem 1rem',
      borderRadius: '20px',
      border: '1px solid #de800d',
      fontSize: '0.9rem',
      background: '#f1eee5',
      color: '#0a1d51',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    searchIcon: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#de800d',
      fontSize: '0.9rem',
    },
    categoriesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.6rem',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    },
    categoryButton: {
      background: '#f1eee5',
      color: '#0a1d51',
      padding: '0.5rem 1rem',
      borderRadius: '12px',
      border: '1px solid #de800d',
      fontSize: '0.85rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      transition: 'all 0.3s ease',
    },
    categoryCount: {
      background: '#de800d',
      color: 'white',
      padding: '0.15rem 0.5rem',
      borderRadius: '10px',
      fontSize: '0.75rem',
    },
    articlesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1rem',
    },
    articleCard: {
      background: '#f1eee5',
      borderRadius: '12px',
      padding: '1rem',
      border: '1px solid #de800d',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    articleImage: {
      width: '100%',
      height: '140px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '0.8rem',
    },
    articleMeta: {
      display: 'flex',
      gap: '0.4rem',
      marginBottom: '0.6rem',
      flexWrap: 'wrap',
    },
    metaBadge: {
      background: '#de800d',
      color: 'white',
      padding: '0.3rem 0.6rem',
      borderRadius: '10px',
      fontSize: '0.75rem',
    },
    articleTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.6rem',
      flexGrow: 1,
      lineHeight: '1.3',
    },
    articleDescription: {
      color: '#0a1d51',
      lineHeight: '1.4',
      marginBottom: '0.8rem',
      fontSize: '0.85rem',
      flexGrow: 1,
    },
    articleFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto',
    },
    articleDate: {
      fontSize: '0.75rem',
      color: '#de800d',
    },
    readMoreButton: {
      background: '#de800d',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '12px',
      border: 'none',
      fontSize: '0.8rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
    noResults: {
      textAlign: 'center',
      padding: '2rem',
      background: '#f1eee5',
      borderRadius: '15px',
      border: '1px solid #de800d',
    },
    newsletterSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '2rem 1rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    newsletterTitle: {
      fontSize: isMobile ? '1.5rem' : '1.8rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '0.8rem',
      textAlign: 'center',
    },
    newsletterDescription: {
      fontSize: '0.9rem',
      color: '#0a1d51',
      marginBottom: '1.2rem',
      maxWidth: '700px',
      margin: '0 auto 1.2rem',
      textAlign: 'center',
    },
    newsletterForm: {
      display: 'flex',
      maxWidth: '500px',
      margin: '0 auto',
      gap: '0.6rem',
      flexDirection: isMobile ? 'column' : 'row',
    },
    emailInput: {
      flex: 1,
      padding: '0.6rem 1rem',
      borderRadius: '12px',
      border: '1px solid #de800d',
      fontSize: '0.85rem',
      background: '#f1eee5',
      color: '#0a1d51',
      outline: 'none',
    },
    subscribeButton: {
      background: '#de800d',
      color: 'white',
      padding: '0.6rem 1.2rem',
      borderRadius: '12px',
      border: 'none',
      fontSize: '0.85rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    successMessage: {
      color: '#10b981',
      fontSize: '0.9rem',
      textAlign: 'center',
      margin: '1rem 0',
      fontWeight: '500',
    },
    errorMessage: {
      color: '#ef4444',
      fontSize: '0.9rem',
      textAlign: 'center',
      margin: '1rem 0',
      fontWeight: '500',
    },
    newsletterNote: {
      fontSize: '0.75rem',
      color: '#0a1d51',
      marginTop: '0.8rem',
      textAlign: 'center',
    },
    popularTopicsSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '2rem 1rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '0.8rem',
    },
    topicCard: {
      background: '#f1eee5',
      borderRadius: '10px',
      padding: '1rem',
      border: '1px solid #de800d',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    topicName: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.4rem',
    },
    topicCount: {
      fontSize: '0.75rem',
      color: '#de800d',
    },
  };

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
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
    e.target.style.backgroundColor = '#de800d';
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
            <h1 style={styles.heroTitle}>Your Trusted Translation & Localization Experts</h1>
            <p style={styles.heroSubtitle}>Dedicated to You – Professional. Precise. Perfect.</p>
            <p style={styles.heroDescription}>
              Stay ahead with expert articles and insights from the world of translation, localization, and multilingual communication.
            </p>
            <div style={styles.buttonContainer}>
              <Link
                to="/quote"
                style={styles.primaryButton}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
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
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleWhatsAppButtonLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Let's Chat on<img src={whatsappIcon} alt="WhatsApp" style={{ width: '18px', height: '18px' }} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.searchSection}>
        <h2 style={{
          ...styles.newsletterTitle,
          fontSize: isMobile ? '1.8rem' : '2.2rem',
          color: '#de800d',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>Explore Our Blog</h2>
        <p style={styles.newsletterDescription}>
          Discover insights on translation, localization, and language technology
        </p>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
          <span style={styles.searchIcon}>🔍</span>
        </div>
        <div style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <button
              key={index}
              style={{
                ...styles.categoryButton,
                background: activeCategory === category.name ? '#de800d' : '#f1eee5',
                color: activeCategory === category.name ? 'white' : '#0a1d51',
              }}
              onClick={() => handleCategoryClick(category.name)}
              onMouseEnter={(e) => {
                if (activeCategory !== category.name) {
                  e.target.style.background = '#de800d';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.name) {
                  e.target.style.background = '#f1eee5';
                  e.target.style.color = '#0a1d51';
                }
              }}
            >
              {category.name}
              <span style={{
                ...styles.categoryCount,
                background: activeCategory === category.name ? 'rgba(255, 255, 255, 0.2)' : '#de800d',
                color: 'white',
              }}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <h2 style={styles.newsletterTitle}>
          {activeCategory === 'All Posts' ? 'Recent Articles' : `${activeCategory} Articles`}
        </h2>
        {filteredArticles.length === 0 ? (
          <div style={styles.noResults}>
            <h3>No articles found</h3>
            <p>Try adjusting your search or selecting a different category.</p>
          </div>
        ) : (
          <div style={styles.articlesGrid}>
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                style={{
                  ...styles.articleCard,
                  transform: hoveredCard === index ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {article.image && (
                  <img 
                    src={article.image} 
                    alt={article.title}
                    style={styles.articleImage}
                  />
                )}
                <div style={styles.articleMeta}>
                  <span style={styles.metaBadge}>{article.category}</span>
                  <span style={styles.metaBadge}>{article.readingTime}</span>
                </div>
                <h3 style={styles.articleTitle}>{article.title}</h3>
                <p style={styles.articleDescription}>{article.description}</p>
                <div style={styles.articleFooter}>
                  <div style={styles.articleDate}>{article.date}</div>
                  <Link
                    to={`/blog/post/${article.id}`}
                    style={styles.readMoreButton}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section style={styles.newsletterSection}>
        <h2 style={styles.newsletterTitle}>Stay Updated with LCI Insights</h2>
        <p style={styles.newsletterDescription}>
          Subscribe to our newsletter for the latest articles, industry insights, and language tips delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubscribe} style={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.emailInput}
            required
          />
          <button
            type="submit"
            style={styles.subscribeButton}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Subscribe
          </button>
        </form>

        {subscribeStatus === 'success' && (
          <div style={styles.successMessage}>
            ✅ Successfully subscribed! Thank you for joining our newsletter.
          </div>
        )}

        {subscribeStatus === 'error' && (
          <div style={styles.errorMessage}>
            ❌ Please enter a valid email address.
          </div>
        )}

        <p style={styles.newsletterNote}>
          No spam, unsubscribe at any time.
        </p>
      </section>

      <section style={styles.popularTopicsSection}>
        <h2 style={styles.newsletterTitle}>Popular Topics</h2>
        <div style={styles.topicsGrid}>
          {categories.filter(cat => cat.name !== 'All Posts').map((topic, index) => (
            <div
              key={index}
              style={{
                ...styles.topicCard,
                transform: hoveredCard === `topic-${index}` ? 'scale(1.05)' : 'scale(1)',
              }}
              onClick={() => handleCategoryClick(topic.name)}
              onMouseEnter={() => handleMouseEnter(`topic-${index}`)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.topicName}>{topic.name}</div>
              <div style={styles.topicCount}>
                {topic.count} article{topic.count !== 1 ? 's' : ''}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;