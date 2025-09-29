// BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import heroImage from '../assets/ai_translation_wise.png';

function BlogPost() {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = {
    1: {
      id: 1,
      category: 'AI in Translation',
      date: 'July 13, 2025',
      author: 'LCI Team',
      title: 'AI Might Be Fast, But We Make It Wise',
      description: 'Why African human translators remain essential in the age of AI and how we\'re shaping the future of translation technology.',
      readingTime: '6 min read',
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
    2: {
      id: 2,
      category: 'Localization Insights',
      date: 'July 10, 2025',
      author: 'LCI Team',
      title: 'Inside Software Localization: From English to Kinyarwanda',
      description: 'Understanding the technical aspects of software localization and the importance of context in translation.',
      readingTime: '5 min read',
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
    3: {
      id: 3,
      category: 'Localization Insights',
      date: 'July 8, 2025',
      author: 'LCI Team',
      title: 'How Kinyarwanda UI Strings Can Make or Break Your App in Rwanda',
      description: 'How proper localization can make or break user experience in mobile applications.',
      readingTime: '4 min read',
      image: heroImage,
      fullContent: `
        <p>In Rwanda, where Kinyarwanda is the primary language, poorly translated UI strings can lead to confusion, frustration, and app abandonment. Effective localization considers not just direct translation but also cultural appropriateness and brevity to fit mobile interfaces.</p>
        
        <h3>The Impact of Poor Localization</h3>
        <p>When users encounter awkward translations or culturally inappropriate content, they quickly lose trust in your application. Studies show that 75% of users prefer to buy products in their native language, and 60% rarely or never buy from English-only websites.</p>
        
        <h3>Best Practices for Kinyarwanda UI Localization</h3>
        <p>At LCI, we emphasize iterative testing with native speakers to refine UI elements. For instance, a simple button label like "Submit" might need adjustment to convey the right tone in Kinyarwanda. We focus on:</p>
        <ul>
          <li>Cultural context adaptation</li>
          <li>String length optimization</li>
          <li>User experience consistency</li>
          <li>Technical constraints consideration</li>
        </ul>
        
        <p>Successful localization can boost user engagement by 30-50%, making your app a market leader in the region. Don't let poor translation be the reason your app fails in the Rwandan market.</p>
      `
    },
    4: {
      id: 4,
      category: 'Careers',
      date: 'July 6, 2025',
      author: 'LCI Team',
      title: 'Bridging Global Communication—One Language at a Time',
      description: 'How we help businesses and professionals connect across cultures with precision and care.',
      readingTime: '3 min read',
      image: heroImage,
      fullContent: `
        <p>In an interconnected world, effective communication is key to success. LCI specializes in providing tailored translation and localization services that go beyond words to convey intent and emotion accurately.</p>
        
        <h3>Our Comprehensive Approach</h3>
        <p>Our team of multilingual experts works closely with clients to understand their needs, ensuring that marketing materials, legal documents, and technical content resonate with target audiences. We believe that every translation should:</p>
        <ul>
          <li>Preserve the original message's intent</li>
          <li>Adapt to cultural contexts</li>
          <li>Maintain brand voice consistency</li>
          <li>Meet industry-specific requirements</li>
        </ul>
        
        <h3>Beyond Words: Cultural Sensitivity</h3>
        <p>By focusing on cultural sensitivity, we help avoid misunderstandings that could harm business relationships. Our translators are not just language experts—they're cultural ambassadors who understand the subtle nuances that make communication effective.</p>
        
        <p>Join us in bridging the language gap and expanding your global reach. Whether you're entering new markets or strengthening existing international relationships, we're here to ensure your message is heard loud and clear.</p>
      `
    },
    5: {
      id: 5,
      category: 'Careers',
      date: 'July 3, 2025',
      author: 'LCI Team',
      title: 'Empowering the Next Generation of Language Experts',
      description: 'Building the next generation of African language professionals through training and mentorship.',
      readingTime: '4 min read',
      image: heroImage,
      fullContent: `
        <p>At LCI, we believe in investing in talent to sustain the translation industry. The demand for African language professionals is growing rapidly, but the supply of qualified experts hasn't kept pace.</p>
        
        <h3>Our Training Programs</h3>
        <p>Our comprehensive programs include workshops on advanced translation tools, cultural linguistics, and project management. We focus on both technical skills and cultural competence, ensuring our graduates are well-equipped for the challenges of modern translation work.</p>
        
        <h3>Mentorship and Real-World Experience</h3>
        <p>Mentorship pairs young linguists with experienced professionals, providing hands-on experience in real-world projects. This approach allows new translators to:</p>
        <ul>
          <li>Learn industry best practices</li>
          <li>Gain confidence in their skills</li>
          <li>Build professional networks</li>
          <li>Understand client expectations</li>
        </ul>
        
        <h3>Impact and Opportunities</h3>
        <p>This initiative not only addresses the shortage of skilled translators in African languages but also promotes diversity in the global language services sector. Graduates of our programs often go on to lead innovative projects, contributing to the preservation and promotion of African languages.</p>
        
        <p>We're proud to be building a new generation of language professionals who can bridge cultural divides and drive international business success.</p>
      `
    },
    6: {
      id: 6,
      category: 'Digital Strategy',
      date: 'June 28, 2025',
      author: 'LCI Team',
      title: 'Are You Building or Just Posting?',
      description: 'The importance of strategic thinking in digital content creation and business building.',
      readingTime: '5 min read',
      image: heroImage,
      fullContent: `
        <p>In the digital age, many businesses focus on frequent posting without a clear strategy, leading to diluted impact and wasted resources. At LCI, we advocate for a structured approach that delivers real results.</p>
        
        <h3>The Problem with Random Acts of Content</h3>
        <p>Without a clear strategy, content creation becomes a checklist activity rather than a business-building tool. Companies post regularly but see little return because their content lacks:</p>
        <ul>
          <li>Clear objectives and KPIs</li>
          <li>Audience understanding</li>
          <li>Consistent messaging</li>
          <li>Multilingual adaptation</li>
        </ul>
        
        <h3>Our Strategic Framework</h3>
        <p>We help businesses develop a comprehensive digital strategy that includes defining goals, understanding audiences, and creating multilingual content that drives engagement. This includes:</p>
        <ul>
          <li>SEO optimization for different languages</li>
          <li>Cultural adaptation of visuals and messaging</li>
          <li>Content localization rather than just translation</li>
          <li>Performance measurement and optimization</li>
        </ul>
        
        <h3>Proven Results</h3>
        <p>Our case studies show how strategic content has helped clients expand into new markets effectively. One client saw a 200% increase in engagement from French-speaking African markets after implementing our multilingual content strategy.</p>
        
        <p>By building a cohesive digital presence, companies can achieve sustainable growth rather than short-term visibility. It's not about how much you post—it's about how strategically you communicate.</p>
      `
    },
    7: {
      id: 7,
      category: 'Translation Tips',
      date: 'June 25, 2025',
      author: 'LCI Team',
      title: 'Ready to Go Global? We\'re Here to Help You Speak the World\'s Languages!',
      description: 'How we help your message resonate across different languages and cultures.',
      readingTime: '4 min read',
      image: heroImage,
      fullContent: `
        <p>Going global requires more than translation; it demands localization to ensure your brand voice remains consistent yet culturally relevant. Many businesses underestimate the complexity of multilingual communication and end up with awkward translations that confuse rather than connect.</p>
        
        <h3>Our Proven Process</h3>
        <p>LCI offers comprehensive localization services that handle everything from website content to marketing campaigns, ensuring idiomatic accuracy and cultural appropriateness. Our process includes:</p>
        <ul>
          <li>Comprehensive content analysis</li>
          <li>Cultural adaptation planning</li>
          <li>Native speaker translation and review</li>
          <li>Quality assurance testing</li>
        </ul>
        
        <h3>Common Pitfalls to Avoid</h3>
        <p>We've helped countless businesses avoid common localization mistakes, including:</p>
        <ul>
          <li>Ignoring regional dialects and variations</li>
          <li>Using humor that doesn't translate well</li>
          <li>Overlooking cultural symbols and colors</li>
          <li>Failing to adapt measurement units and formats</li>
        </ul>
        
        <h3>Expert Tips for Success</h3>
        <p>Based on our experience, we recommend preparing glossaries for key terms, involving native speakers early in the process, and using CAT tools for efficiency and consistency.</p>
        
        <p>With our expertise, your business can communicate effectively worldwide, fostering trust and loyalty among diverse audiences. Don't let language barriers limit your global potential.</p>
      `
    },
    8: {
      id: 8,
      category: 'Translation Tips',
      date: 'June 20, 2025',
      author: 'LCI Team',
      title: 'Our Story -- Language Computing International (LCI)',
      description: 'Your trusted partner in professional translation, localization & language solutions.',
      readingTime: '6 min read',
      image: heroImage,
      fullContent: `
        <p>Founded with a vision to empower African languages in the digital world, LCI has grown from a small startup into a leading provider of multilingual services. Our journey began with a simple observation: African languages were severely underrepresented in the global translation industry.</p>
        
        <h3>Humble Beginnings, Big Vision</h3>
        <p>Our story begins with recognizing the gap in quality translations for underrepresented languages. While major world languages had sophisticated translation tools and abundant resources, African languages often relied on manual processes and limited expertise.</p>
        
        <h3>Growth and Innovation</h3>
        <p>Today, we offer comprehensive solutions including AI-assisted translation, cultural consulting, and e-learning localization. Our commitment to excellence is reflected in our ISO-certified processes and glowing client testimonials.</p>
        
        <h3>Our Core Services</h3>
        <p>We've expanded our offerings to meet the evolving needs of global businesses:</p>
        <ul>
          <li><strong>Document Translation:</strong> Legal, technical, medical, and business documents</li>
          <li><strong>Website Localization:</strong> Full adaptation for global audiences</li>
          <li><strong>Software Localization:</strong> UI/UX adaptation for international users</li>
          <li><strong>Multilingual Content Creation:</strong> Original content in multiple languages</li>
          <li><strong>Cultural Consulting:</strong> Guidance for market entry and expansion</li>
        </ul>
        
        <h3>Looking to the Future</h3>
        <p>As we expand, we continue to innovate, blending technology with human expertise to meet the evolving needs of global businesses. We're investing in machine learning and AI tools specifically trained on African language patterns.</p>
        
        <p>Our mission remains unchanged: to break down language barriers and foster meaningful connections across cultures. We believe that every language deserves to be heard, and every culture deserves to be understood.</p>
      `
    },
    9: {
      id: 9,
      category: 'General',
      date: 'June 15, 2025',
      author: 'LCI Team',
      title: 'Welcome to Language Computing International (LCI)!',
      description: 'Welcome to our growing network of language professionals and business leaders across Africa and beyond.',
      readingTime: '3 min read',
      image: heroImage,
      fullContent: `
        <p>LCI is more than a service provider; it's a community dedicated to advancing linguistic diversity and professional excellence. We're building bridges between languages, cultures, and businesses.</p>
        
        <h3>Our Growing Community</h3>
        <p>We connect translators, interpreters, and clients through various platforms and initiatives:</p>
        <ul>
          <li><strong>Professional Forums:</strong> Where language experts share knowledge and best practices</li>
          <li><strong>Webinars and Workshops:</strong> Regular learning opportunities on industry trends</li>
          <li><strong>Collaborative Projects:</strong> Joint initiatives that push the boundaries of translation technology</li>
          <li><strong>Networking Events:</strong> Opportunities to connect with peers and potential clients</li>
        </ul>
        
        <h3>Knowledge Sharing and Innovation</h3>
        <p>Our platform fosters knowledge sharing on critical topics like language preservation, tech integration, and industry standards. We believe that by sharing what we know, we elevate the entire profession.</p>
        
        <h3>Join Our Movement</h3>
        <p>Whether you're a seasoned professional or new to the field, join us to access resources, job opportunities, and networking events that drive career growth and industry innovation.</p>
        
        <p>Together, we're not just translating words—we're building understanding, fostering economic growth, and preserving cultural heritage. Welcome to the LCI family!</p>
      `
    },
    10: {
      id: 10,
      category: 'General',
      date: 'June 10, 2025',
      author: 'LCI Team',
      title: 'Welcome to LCI -- Multilingual Translation & Localization Services!',
      description: 'Your trusted partner in professional translation, localization, and multilingual communication.',
      readingTime: '2 min read',
      image: heroImage,
      fullContent: `
        <p>At LCI, we specialize in delivering seamless language solutions tailored to your specific needs. From document translation to app localization, our services ensure your content is accessible and impactful globally.</p>
        
        <h3>Our Comprehensive Service Portfolio</h3>
        <p>We support over 50 languages, with a special focus on African dialects that are often overlooked by larger translation providers. Our services include:</p>
        <ul>
          <li><strong>Document Translation:</strong> Accurate, context-aware translation of all document types</li>
          <li><strong>Website Localization:</strong> Full cultural and linguistic adaptation for global audiences</li>
          <li><strong>Software and App Localization:</strong> Technical adaptation for international markets</li>
          <li><strong>Multilingual Content Creation:</strong> Original content development in multiple languages</li>
          <li><strong>Interpretation Services:</strong> Real-time language support for meetings and events</li>
        </ul>
        
        <h3>Why Choose LCI?</h3>
        <p>Our team's expertise guarantees accuracy, confidentiality, and timely delivery. We understand that in translation, timing is everything—and quality is non-negotiable.</p>
        
        <h3>Your Global Partner</h3>
        <p>Discover how we can support your international expansion with customized strategies that align with your business objectives. Whether you're entering new markets or strengthening your presence in existing ones, we have the linguistic and cultural expertise to ensure your success.</p>
        
        <p>Contact us today to discuss how we can help your business speak the language of global success.</p>
      `
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div style={styles.container}>
        <div style={styles.blogContainer}>
          <h2>Blog post not found</h2>
          <Link to="/blog" style={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem 1rem',
    },
    blogContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      background: '#f1eee5',
      borderRadius: '15px',
      padding: '3rem 2rem',
      border: '1px solid #de800d',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease-out',
    },
    backButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#0a1d51',
      textDecoration: 'none',
      marginBottom: '2rem',
      fontWeight: '600',
      padding: '0.5rem 1rem',
      border: '1px solid #de800d',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    blogImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '2rem',
    },
    metaInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '1.5rem',
    },
    metaBadge: {
      background: '#de800d',
      color: 'white',
      padding: '0.4rem 0.8rem',
      borderRadius: '12px',
      fontSize: '0.85rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#0a1d51',
      marginBottom: '1.5rem',
      lineHeight: '1.3',
    },
    description: {
      fontSize: '1.2rem',
      color: '#0a1d51',
      marginBottom: '2rem',
      lineHeight: '1.6',
      fontStyle: 'italic',
    },
    content: {
      color: '#0a1d51',
      lineHeight: '1.8',
      fontSize: '1.1rem',
    },
    authorSection: {
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '2px solid #de800d',
    },
    authorName: {
      fontWeight: '600',
      color: '#0a1d51',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.blogContainer}>
        <Link to="/blog" style={styles.backButton}>
          ← Back to Blog
        </Link>
        
        {post.image && (
          <img 
            src={post.image} 
            alt={post.title}
            style={styles.blogImage}
          />
        )}
        
        <div style={styles.metaInfo}>
          <span style={styles.metaBadge}>{post.category}</span>
          <span style={styles.metaBadge}>{post.date}</span>
          <span style={styles.metaBadge}>{post.readingTime}</span>
          <span style={styles.metaBadge}>By {post.author}</span>
        </div>
        
        <h1 style={styles.title}>{post.title}</h1>
        <p style={styles.description}>{post.description}</p>
        
        <div 
          style={styles.content}
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />
        
        <div style={styles.authorSection}>
          <p style={styles.authorName}>Written by {post.author}</p>
          <p>Published on {post.date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;