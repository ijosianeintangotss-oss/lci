// src/pages/Admin.js
// Add this new page to the React app for admin portal
// Protect with simple auth if needed (e.g., login), but for simplicity, assume direct access at /admin
// In App.js, add <Route path="/admin" element={<Admin />} />
// Fetch quotes from backend and display in a table

import React, { useState, useEffect } from 'react';

function Admin() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://lci-backend.onrender.com/api/quotes');
      const data = await response.json();
      setQuotes(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1>Admin Portal - Quote Submissions</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
        <thead>
          <tr style={{ background: '#f3f4f6', textAlign: 'left' }}>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Submitted At</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Name</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Email</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Phone</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Service</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Document Type</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Source Lang</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Target Lang</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Turnaround</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Word Count</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Requirements</th>
            <th style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>Files</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(quote => (
            <tr key={quote._id}>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{new Date(quote.submittedAt).toLocaleString()}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.fullName}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.email}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.phone}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.service}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.documentType}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.sourceLanguage}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.targetLanguage}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.turnaround}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.wordCount}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>{quote.additionalRequirements}</td>
              <td style={{ padding: '1rem', border: '1px solid #e5e7eb' }}>
                {quote.files.map((file, index) => (
                  <a key={index} href={`https://lci-backend.onrender.com${file}`} download target="_blank" rel="noopener noreferrer">
                    File {index + 1}<br />
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;