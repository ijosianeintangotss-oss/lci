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
    heroSubtitle: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: '#0a1d51ff',
      marginBottom: '2rem',
      lineHeight: '1.6',
      maxWidth: '900px',
      margin: isMobile ? '0 auto 2rem' : '0 0 2rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    section: {
      padding: '9rem 2rem',
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
    searchSection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    searchContainer: {
      maxWidth: '800px',
      margin: '0 auto 3rem',
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '1rem 1.5rem',
      borderRadius: '25px',
      border: '2px solid #de800dff',
      fontSize: '1rem',
      background: '#f1eee5ff',
      color: '#0a1d51ff',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    searchIcon: {
      position: 'absolute',
      right: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#de800dff',
      fontSize: '1rem', // Reduced icon size
    },
    categoriesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
    },
    categoryButton: {
      background: '#f1eee5ff',
      color: '#0a1d51ff',
      padding: '0.75rem 1.5rem',
      borderRadius: '20px',
      border: '2px solid #de800dff',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    categoryCount: {
      background: '#de800dff',
      color: 'white',
      padding: '0.25rem 0.75rem',
      borderRadius: '15px',
      fontSize: '0.9rem',
    },
    featuredSection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    featuredCard: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '2rem',
      border: '2px solid #de800dff',
      transition: 'all 0.3s ease',
    },
    featuredMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    metaBadge: {
      background: '#de800dff',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '15px',
      fontSize: '0.9rem',
    },
    featuredTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
    },
    featuredDescription: {
      color: '#0a1d51ff',
      lineHeight: '1.6',
      marginBottom: '2rem',
    },
    readMoreButton: {
      background: '#de800dff',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '20px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    articlesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    articleCard: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '2rem',
      border: '2px solid #de800dff',
      transition: 'all 0.3s ease',
    },
    articleImage: {
      fontSize: '2rem', // Reduced icon size from 3rem to 2rem
      marginBottom: '1rem',
      textAlign: 'center',
    },
    articleMeta: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    articleTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
    },
    articleDescription: {
      color: '#0a1d51ff',
      lineHeight: '1.6',
      marginBottom: '1rem',
    },
    articleDate: {
      fontSize: '0.9rem',
      color: '#de800dff',
      textAlign: 'right',
    },
    noResults: {
      textAlign: 'center',
      padding: '4rem',
      background: '#f1eee5ff',
      borderRadius: '20px',
      border: '2px solid #de800dff',
    },
    newsletterSection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '4rem 2rem',
      textAlign: 'center',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    newsletterTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#0a1d51ff',
      marginBottom: '1rem',
    },
    newsletterDescription: {
      fontSize: '1.2rem',
      color: '#0a1d51ff',
      marginBottom: '2rem',
    },
    newsletterForm: {
      display: 'flex',
      maxWidth: '600px',
      margin: '0 auto',
      gap: '1rem',
    },
    emailInput: {
      flex: 1,
      padding: '1rem 1.5rem',
      borderRadius: '25px',
      border: '2px solid #de800dff',
      fontSize: '1rem',
      background: '#f1eee5ff',
      color: '#0a1d51ff',
      outline: 'none',
    },
    subscribeButton: {
      background: '#de800dff',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '25px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    newsletterNote: {
      fontSize: '0.9rem',
      color: '#0a1d51ff',
      marginTop: '1rem',
    },
    popularTopicsSection: {
      background: '#f1eee5ff',
      borderRadius: '20px',
      padding: '4rem 2rem',
      margin: '2rem auto',
      maxWidth: '1400px',
      border: '2px solid #de800dff',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
    },
    topicCard: {
      background: '#f1eee5ff',
      borderRadius: '15px',
      padding: '1.5rem',
      border: '2px solid #de800dff',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    topicName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#0a1d51ff',
      marginBottom: '0.5rem',
    },
    topicCount: {
      fontSize: '0.9rem',
      color: '#de800dff',
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
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>LCI Blog</h1>
            <p style={styles.heroSubtitle}>Insights on Language, Translation, and Localization</p>
          </div>
          <img src={heroImage} alt="AI Translation Wise" style={styles.heroImage} />
        </div>
      </section>

      {/* Search and Categories Section */}
      <section style={styles.section}>
        <div style={styles.searchSection}>
          <h2 style={styles.sectionTitle}>Explore Our Blog</h2>
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
                  background: activeCategory === category.name ? '#de800dff' : '#f1eee5ff',
                  color: activeCategory === category.name ? 'white' : '#0a1d51ff',
                }}
                onClick={() => handleCategoryClick(category.name)}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.name) {
                    e.target.style.background = '#de800dff';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.name) {
                    e.target.style.background = '#f1eee5ff';
                    e.target.style.color = '#0a1d51ff';
                  }
                }}
              >
                {category.name}
                <span style={{
                  ...styles.categoryCount,
                  background: activeCategory === category.name ? 'rgba(255, 255, 255, 0.2)' : '#de800dff',
                  color: activeCategory === category.name ? 'white' : 'white',
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
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span style={styles.articleImage}>{article.image}</span>
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
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
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