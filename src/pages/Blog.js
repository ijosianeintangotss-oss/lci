import React, { useState, useEffect } from 'react';
import heroImage from '../assets/ai_translation_wise.png';

function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  const featuredArticle = {
    category: 'AI in Translation',
    date: 'July 13, 2025',
    author: 'LCI Team',
    title: ' AI Might Be Fast, But We Make It Wise',
    description: 'Why African human translators remain essential in the age of AI and how we\'re shaping the future of translation technology.',
    readingTime: '6 min read',
    image: ''
  };

  const articles = [
    {
      category: 'AI in Translation',
      readingTime: '6 min read',
      title: ' AI Might Be Fast, But We Make It Wise',
      description: 'Why African human translators remain essential in the age of AI and how we\'re shaping the future of translation technology.',
      date: 'July 13, 2025',
      image: ''
    },
    {
      category: 'Localization Insights',
      readingTime: '5 min read',
      title: 'Inside Software Localization: From English to Kinyarwanda',
      description: 'Understanding the technical aspects of software localization and the importance of context in translation.',
      date: 'July 10, 2025',
      image: ''
    },
    {
      category: 'Localization Insights',
      readingTime: '4 min read',
      title: 'How Kinyarwanda UI Strings Can Make or Break Your App in Rwanda',
      description: 'How proper localization can make or break user experience in mobile applications.',
      date: 'July 8, 2025',
      image: ''
    },
    {
      category: 'Careers',
      readingTime: '3 min read',
      title: 'Bridging Global Communication—One Language at a Time',
      description: 'How we help businesses and professionals connect across cultures with precision and care.',
      date: 'July 6, 2025',
      image: ''
    },
    {
      category: 'Careers',
      readingTime: '4 min read',
      title: 'Empowering the Next Generation of Language Experts',
      description: 'Building the next generation of African language professionals through training and mentorship.',
      date: 'July 3, 2025',
      image: ''
    },
    {
      category: 'Digital Strategy',
      readingTime: '5 min read',
      title: 'Are You Building or Just Posting?',
      description: 'The importance of strategic thinking in digital content creation and business building.',
      date: 'June 28, 2025',
      image: ''
    },
    {
      category: 'Translation Tips',
      readingTime: '4 min read',
      title: 'Ready to Go Global? We\'re Here to Help You Speak the World\'s Languages!',
      description: 'How we help your message resonate across different languages and cultures.',
      date: 'June 25, 2025',
      image: ''
    },
    {
      category: 'Translation Tips',
      readingTime: '6 min read',
      title: 'Our Story -- Language Computing International (LCI)',
      description: 'Your trusted partner in professional translation, localization & language solutions.',
      date: 'June 20, 2025',
      image: ''
    },
    {
      category: 'General',
      readingTime: '3 min read',
      title: 'Welcome to Language Computing International (LCI)!',
      description: 'Welcome to our growing network of language professionals and business leaders across Africa and beyond.',
      date: 'June 15, 2025',
      image: ''
    },
    {
      category: 'General',
      readingTime: '2 min read',
      title: 'Welcome to LCI -- Multilingual Translation & Localization Services!',
      description: 'Your trusted partner in professional translation, localization, and multilingual communication.',
      date: 'June 10, 2025',
      image: ''
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All Posts' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    heroSubtitle: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
      maxWidth: '800px',
      margin: isMobile ? '0 auto 1.5rem' : '0 0 1.5rem',
      textAlign: isMobile ? 'center' : 'left',
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
    searchSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    searchContainer: {
      maxWidth: '700px',
      margin: '0 auto 2rem',
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '0.8rem 1.2rem',
      borderRadius: '20px',
      border: '1px solid #de800d',
      fontSize: '0.95rem',
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
      gap: '0.8rem',
      justifyContent: 'center',
    },
    categoryButton: {
      background: '#f1eee5',
      color: '#0a1d51',
      padding: '0.6rem 1.2rem',
      borderRadius: '15px',
      border: '1px solid #de800d',
      fontSize: '0.95rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    categoryCount: {
      background: '#de800d',
      color: 'white',
      padding: '0.2rem 0.6rem',
      borderRadius: '12px',
      fontSize: '0.85rem',
    },
    featuredSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    featuredCard: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      transition: 'all 0.3s ease',
    },
    featuredMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    metaBadge: {
      background: '#de800d',
      color: 'white',
      padding: '0.4rem 0.8rem',
      borderRadius: '12px',
      fontSize: '0.85rem',
    },
    featuredTitle: {
      fontSize: '1.6rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    featuredDescription: {
      color: '#0a1d51',
      lineHeight: '1.5',
      marginBottom: '1rem',
      fontSize: '0.95rem',
    },
    readMoreButton: {
      background: '#de800d',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '15px',
      border: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    articlesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
    },
    articleCard: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      transition: 'all 0.3s ease',
    },
    articleImage: {
      fontSize: '1.8rem',
      marginBottom: '0.8rem',
      textAlign: 'center',
    },
    articleMeta: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '0.8rem',
    },
    articleTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.8rem',
    },
    articleDescription: {
      color: '#0a1d51',
      lineHeight: '1.5',
      marginBottom: '0.8rem',
      fontSize: '0.95rem',
    },
    articleDate: {
      fontSize: '0.85rem',
      color: '#de800d',
      textAlign: 'right',
    },
    noResults: {
      textAlign: 'center',
      padding: '3rem',
      background: '#f1eee5',
      borderRadius: '15px',
      border: '1px solid #de800d',
    },
    newsletterSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    newsletterTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '1rem',
    },
    newsletterDescription: {
      fontSize: '1rem',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      maxWidth: '700px',
      margin: '0 auto 1.5rem',
    },
    newsletterForm: {
      display: 'flex',
      maxWidth: '600px',
      margin: '0 auto',
      gap: '0.8rem',
      flexDirection: isMobile ? 'column' : 'row',
    },
    emailInput: {
      flex: 1,
      padding: '0.8rem 1.2rem',
      borderRadius: '15px',
      border: '1px solid #de800d',
      fontSize: '0.95rem',
      background: '#f1eee5',
      color: '#0a1d51',
      outline: 'none',
    },
    subscribeButton: {
      background: '#de800d',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '15px',
      border: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    newsletterNote: {
      fontSize: '0.85rem',
      color: '#0a1d51',
      marginTop: '1rem',
    },
    popularTopicsSection: {
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 1.5rem',
      margin: '1rem auto',
      maxWidth: '1200px',
      border: '1px solid #de800d',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '1rem',
    },
    topicCard: {
      background: '#f1eee5',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #de800d',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    topicName: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0a1d51',
      marginBottom: '0.5rem',
    },
    topicCount: {
      fontSize: '0.85rem',
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

  const handleSubscribe = () => {
    alert('Subscribed successfully!');
    setEmail('');
  };

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>LCI Blog</h1>
            <p style={styles.heroSubtitle}>Insights on Language, Translation, and Localization</p>
          </div>
          <img src={heroImage} alt="AI Translation Wise" style={styles.heroImage} />
        </div>
      </section>

      <section style={styles.searchSection}>
        <h2 style={{
          ...styles.sectionTitle,
          fontSize: isMobile ? '2.5rem' : '3rem',
          color: '#de800d',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
        }}>Explore Our Blog</h2>
        <p style={styles.sectionSubtitle}>
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

         <h2 style={styles.sectionTitle}>
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
                <span style={styles.articleImage}>{article.image || ''}</span>
                <div style={styles.articleMeta}>
                  <span style={styles.metaBadge}>{article.category}</span>
                  <span style={styles.metaBadge}>{article.readingTime}</span>
                </div>
                <h3 style={styles.articleTitle}>{article.title}</h3>
                <p style={styles.articleDescription}>{article.description}</p>
                <div style={styles.articleDate}>{article.date}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Featured Article</h2>
        <div
          style={{
            ...styles.featuredCard,
            transform: hoveredCard === 'featured' ? 'scale(1.02)' : 'scale(1)',
          }}
          onMouseEnter={() => handleMouseEnter('featured')}
          onMouseLeave={handleMouseLeave}
        >
          <div style={styles.featuredMeta}>
            <span style={styles.metaBadge}>{featuredArticle.category}</span>
            <span style={styles.metaBadge}>{featuredArticle.date}</span>
            <span style={styles.metaBadge}>By {featuredArticle.author}</span>
            <span style={styles.metaBadge}>{featuredArticle.readingTime}</span>
          </div>
          <h3 style={styles.featuredTitle}>{featuredArticle.title}</h3>
          <p style={styles.featuredDescription}>{featuredArticle.description}</p>
          <button
            style={styles.readMoreButton}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Read More →
          </button>
        </div>
      </section>

      <section style={styles.newsletterSection}>
        <h2 style={styles.newsletterTitle}>Stay Updated with LCI Insights</h2>
        <p style={styles.newsletterDescription}>
          Subscribe to our newsletter for the latest articles, industry insights, and language tips delivered to your inbox.
        </p>
        <div style={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.emailInput}
          />
          <button
            onClick={handleSubscribe}
            style={styles.subscribeButton}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Subscribe
          </button>
        </div>
        <p style={styles.newsletterNote}>
          No spam, unsubscribe at any time.
        </p>
      </section>

      <section style={styles.popularTopicsSection}>
        <h2 style={styles.sectionTitle}>Popular Topics</h2>
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