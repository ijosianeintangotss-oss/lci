import React, { useState, useEffect } from 'react';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem('cookieConsent', value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 20, left: 20, right: 20, zIndex: 9999,
      background: '#fff', border: '2px solid #0a1a3c', borderRadius: 12, padding: 24, boxShadow: '0 2px 16px #0002'
    }}>
      <strong>We value your privacy</strong>
      <p>
        We use cookies to enhance your browsing experience, and analyze our traffic. By clicking accept you consent to our use of cookies.<br />
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy policy</a>
      </p>
      <button style={{marginRight: 8, background: '#0a1a3c', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 24px'}} onClick={() => handleConsent('accepted')}>Accept</button>
      <button style={{background: '#fff', color: '#0a1a3c', border: '1px solid #0a1a3c', borderRadius: 6, padding: '8px 24px'}} onClick={() => handleConsent('rejected')}>Reject all</button>
    </div>
  );
}

export default CookieConsent;