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
    { name: 'All Posts', count: 9 },
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
    title: '🧠 AI Might Be Fast, But We Make It Wise',
    description: 'Why African human translators remain essential in the age of AI and how we\'re shaping the future of translation technology.',
    readingTime: '6 min read',
    image: '🤖'
  };

  const articles = [
    {
      category: 'Localization Insights',
      readingTime: '5 min read',
      title: 'Inside Software Localization: From English to Kinyarwanda',
      description: 'Understanding the technical aspects of software localization and the importance of context in translation.',
      date: 'July 10, 2025',
      image: '💻'
    },
    {
      category: 'Localization Insights',
      readingTime: '4 min read',
      title: 'How Kinyarwanda UI Strings Can Make or Break Your App in Rwanda',
      description: 'How proper localization can make or break user experience in mobile applications.',
      date: 'July 8, 2025',
      image: '📱'
    },
    {
      category: 'Careers',
      readingTime: '3 min read',
      title: 'Bridging Global Communication—One Language at a Time',
      description: 'How we help businesses and professionals connect across cultures with precision and care.',
      date: 'July 6, 2025',
      image: '🌍'
    },
    {
      category: 'Careers',
      readingTime: '4 min read',
      title: 'Empowering the Next Generation of Language Experts',
      description: 'Building the next generation of African language professionals through training and mentorship.',
      date: 'July 3, 2025',
      image: '🎓'
    },
    {
      category: 'Digital Strategy',
      readingTime: '5 min read',
      title: 'Are You Building or Just Posting?',
      description: 'The importance of strategic thinking in digital content creation and business building.',
      date: 'June 28, 2025',
      image: '📈'
    },
    {
      category: 'Translation Tips',
      readingTime: '4 min read',
      title: 'Ready to Go Global? We\'re Here to Help You Speak the World\'s Languages!',
      description: 'How we help your message resonate across different languages and cultures.',
      date: 'June 25, 2025',
      image: '🌐'
    },
    {
      category: 'Translation Tips',
      readingTime: '6 min read',
      title: 'Our Story -- Language Computing International (LCI)',
      description: 'Your trusted partner in professional translation, localization & language solutions.',
      date: 'June 20, 2025',
      image: '📖'
    },
    {
      category: 'General',
      readingTime: '3 min read',
      title: 'Welcome to Language Computing International (LCI)!',
      description: 'Welcome to our growing network of language professionals and business leaders across Africa and beyond.',
      date: 'June 15, 2025',
      image: '👋'
    },
    {
      category: 'General',
      readingTime: '2 min read',
      title: 'Welcome to LCI -- Multilingual Translation & Localization Services!',
      description: 'Your trusted partner in professional translation, localization, and multilingual communication.',
      date: 'June 10, 2025',
      image: '🎯'
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
      fontFamily: 'Arial, sans-serif'
    },
    heroSection: {
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #ff8c00 0%, #1e3a8a 50%, #ff8c00 100%)',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1s ease-out'
    },
    heroContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      width: '100%',
      gap: '2rem',
      flexWrap: 'nowrap',
      flexDirection: isMobile ? 'column' : 'row'
    },
    heroImage: {
      width: isMobile ? '100%' : '45%',
      maxWidth: isMobile ? '100%' : '500px',
      height: 'auto',
      objectFit: 'contain',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      margin: isMobile ? '0 auto' : '0'
    },
    heroContent: {
      textAlign: isMobile ? 'center' : 'left',
      width: isMobile ? '100%' : '50%',
      maxWidth: isMobile ? '100%' : '600px',
      zIndex: 10,
      position: 'relative',
      padding: isMobile ? '1rem' : '2rem'
    },
    heroTitle: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1.5rem',
      lineHeight: '1.2'
    },
    heroDescription: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      color: '#f3f4f6',
      lineHeight: '1.6',
      marginBottom: '1rem',
      margin: isMobile ? '0 auto' : '0'
    },
    section: {
      padding: '4rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    searchSection: {
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      borderRadius: '20px',
      padding: '3rem 2rem',
      margin: '2rem auto',
      textAlign: 'center'
    },
    searchContainer: {
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    searchInput: {
      width: '100%',
      padding: '1rem 1.5rem',
      borderRadius: '50px',
      border: '2px solid #e5e7eb',
      fontSize: '1.1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    },
    categoriesContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    categoryButton: {
      padding: '0.8rem 1.5rem',
      borderRadius: '25px',
      border: '2px solid #e5e7eb',
      background: 'white',
      cursor: 'pointer',
      fontSize: '0.95rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    activeCategoryButton: {
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      color: 'white',
      borderColor: '#ff8c00'
    },
    categoryCount: {
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      padding: '0.2rem 0.5rem',
      fontSize: '0.8rem',
      fontWeight: '600'
    },
    featuredSection: {
      background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem auto',
      border: '2px solid #ff8c00'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      textAlign: 'center',
      marginBottom: '3rem'
    },
    featuredCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '3rem',
      border: '2px solid #ff8c00',
      boxShadow: '0 10px 40px rgba(255, 140, 0, 0.15)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    featuredMeta: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    },
    metaBadge: {
      background: '#f0f9ff',
      color: '#1e3a8a',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    featuredTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem',
      lineHeight: '1.3'
    },
    featuredDescription: {
      fontSize: '1.1rem',
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    readMoreButton: {
      background: 'linear-gradient(135deg, #ff8c00, #1e3a8a)',
      color: 'white',
      padding: '0.8rem 2rem',
      borderRadius: '25px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    articlesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    articleCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '2rem',
      border: '2px solid #f3f4f6',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
      height: 'fit-content'
    },
    articleImage: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    articleMeta: {
      display: 'flex',
      gap: '0.8rem',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    },
    articleTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem',
      lineHeight: '1.4'
    },
    articleDescription: {
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    articleDate: {
      color: '#9ca3af',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    newsletterSection: {
      background: 'linear-gradient(135deg, #1e3a8a, #ff8c00)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      color: 'white',
      textAlign: 'center',
      margin: '4rem auto'
    },
    newsletterTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    newsletterDescription: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    newsletterForm: {
      display: 'flex',
      gap: '1rem',
      maxWidth: '500px',
      margin: '0 auto',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    emailInput: {
      flex: 1,
      minWidth: '250px',
      padding: '1rem 1.5rem',
      borderRadius: '25px',
      border: 'none',
      fontSize: '1rem',
      outline: 'none'
    },
    subscribeButton: {
      background: 'white',
      color: '#1e3a8a',
      padding: '1rem 2rem',
      borderRadius: '25px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    },
    newsletterNote: {
      fontSize: '0.9rem',
      opacity: 0.8,
      marginTop: '1rem'
    },
    popularTopicsSection: {
      background: 'linear-gradient(135deg, #f0f9ff, #dbeafe)',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem auto'
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem'
    },
    topicCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '2rem 1.5rem',
      border: '2px solid #f3f4f6',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 3px 15px rgba(30, 58, 138, 0.08)'
    },
    topicName: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '0.5rem'
    },
    topicCount: {
      color: '#ff8c00',
      fontSize: '0.9rem',
      fontWeight: '600'
    },
    noResults: {
      textAlign: 'center',
      padding: '3rem',
      color: '#6b7280',
      fontSize: '1.1rem'
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      console.log('Subscribing email:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Learn. Lead. Localize.
            </h1>
            <p style={styles.heroDescription}>
              Stay ahead with expert articles and insights from the world of translation, localization, and multilingual communication. Discover industry trends, best practices, and success stories from Africa and beyond.
            </p>
          </div>
          <img
            src={heroImage}
            alt="Blog Insights"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* Search and Categories Section */}
      <section style={styles.section}>
        <div style={styles.searchSection}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                ...styles.searchInput,
                borderColor: searchQuery ? '#ff8c00' : '#e5e7eb'
              }}
            />
          </div>
          <div style={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                style={activeCategory === category.name ? 
                  {...styles.categoryButton, ...styles.activeCategoryButton} : 
                  styles.categoryButton
                }
                onMouseEnter={(e) => {
                  if (activeCategory !== category.name) {
                    e.target.style.borderColor = '#ff8c00';
                    e.target.style.background = '#fff7ed';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.name) {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.background = 'white';
                  }
                }}
              >
                {category.name}
                <span style={{
                  ...styles.categoryCount,
                  background: activeCategory === category.name ? 'rgba(255, 255, 255, 0.2)' : '#f3f4f6',
                  color: activeCategory === category.name ? 'white' : '#6b7280'
                }}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section style={styles.section}>
        <div style={styles.featuredSection}>
          <h2 style={styles.sectionTitle}>Featured Article</h2>
          <div
            style={{
              ...styles.featuredCard,
              transform: hoveredCard === 'featured' ? 'scale(1.02)' : 'scale(1)',
              boxShadow: hoveredCard === 'featured' ? '0 15px 50px rgba(255, 140, 0, 0.2)' : '0 10px 40px rgba(255, 140, 0, 0.15)'
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
        </div>
      </section>

      {/* Recent Articles Section */}
      <section style={styles.section}>
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
                  borderColor: hoveredCard === index ? '#ff8c00' : '#f3f4f6',
                  boxShadow: hoveredCard === index ? '0 8px 30px rgba(255, 140, 0, 0.15)' : '0 5px 20px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span style={styles.articleImage}>{article.image}</span>
                <div style={styles.articleMeta}>
                  <span style={{
                    ...styles.metaBadge,
                    background: '#f0f9ff',
                    color: '#1e3a8a'
                  }}>{article.category}</span>
                  <span style={{
                    ...styles.metaBadge,
                    background: '#fff7ed',
                    color: '#ff8c00'
                  }}>{article.readingTime}</span>
                </div>
                <h3 style={styles.articleTitle}>{article.title}</h3>
                <p style={styles.articleDescription}>{article.description}</p>
                <div style={styles.articleDate}>{article.date}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Subscription Section */}
      <section style={styles.section}>
        <div style={styles.newsletterSection}>
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
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 5px 20px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Subscribe
            </button>
          </div>
          <p style={styles.newsletterNote}>
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section style={styles.section}>
        <div style={styles.popularTopicsSection}>
          <h2 style={styles.sectionTitle}>Popular Topics</h2>
          <div style={styles.topicsGrid}>
            {categories.filter(cat => cat.name !== 'All Posts').map((topic, index) => (
              <div
                key={index}
                style={{
                  ...styles.topicCard,
                  transform: hoveredCard === `topic-${index}` ? 'scale(1.05)' : 'scale(1)',
                  borderColor: hoveredCard === `topic-${index}` ? '#ff8c00' : '#f3f4f6'
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
        </div>
      </section>
    </div>
  );
}

export default Blog;