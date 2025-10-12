import React, { useState, useEffect } from 'react';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://lci-api.onrender.com/api/users');
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // REMOVED updateUserStatus function since status doesn't affect login anymore

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'pending':
        return { backgroundColor: '#fefce8', color: '#ca8a04', borderColor: '#fde047' };
      case 'approved':
        return { backgroundColor: '#f0fdf4', color: '#16a34a', borderColor: '#86efac' };
      case 'rejected':
        return { backgroundColor: '#fef2f2', color: '#ef4444', borderColor: '#fca5a5' };
      default:
        return {};
    }
  };

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1a202c',
      marginBottom: '0.5rem'
    },
    subtitle: {
      color: '#718096',
      fontSize: '1rem'
    },
    refreshButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      marginBottom: '1rem'
    },
    errorCard: {
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '4px',
      padding: '1rem',
      marginBottom: '1rem'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    tableHeader: {
      backgroundColor: '#f7fafc',
      borderBottom: '1px solid #e2e8f0'
    },
    th: {
      padding: '1rem',
      textAlign: 'left',
      fontWeight: '600',
      color: '#4a5568',
      fontSize: '0.9rem'
    },
    td: {
      padding: '1rem',
      borderBottom: '1px solid #e2e8f0',
      fontSize: '0.9rem'
    },
    statusSelect: {
      padding: '0.25rem 0.5rem',
      borderRadius: '12px',
      border: '1px solid',
      fontSize: '0.8rem',
      fontWeight: '500',
      cursor: 'pointer'
    },
    loadingContainer: {
      textAlign: 'center',
      padding: '3rem'
    },
    spinner: {
      width: '32px',
      height: '32px',
      border: '3px solid #f3f4f6',
      borderTop: '3px solid #1e3a8a',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 1rem'
    },
    emptyState: {
      textAlign: 'center',
      padding: '3rem',
      color: '#718096'
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <div style={styles.spinner}></div>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.header}>
        <h1 style={styles.title}>Manage Users</h1>
        <p style={styles.subtitle}>View all registered client users</p>
        <button style={styles.refreshButton} onClick={fetchUsers}>
          🔄 Refresh
        </button>
      </div>

      {error && (
        <div style={styles.errorCard}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {users.length === 0 ? (
        <div style={styles.emptyState}>
          <h3>No users found</h3>
          <p>User registrations will appear here</p>
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.th}>Full Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Company</th>
                <th style={styles.th}>Registered</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const statusStyles = getStatusStyles(user.status);
                return (
                  <tr key={user.id}>
                    <td style={styles.td}>
                      <strong>{user.fullName}</strong>
                    </td>
                    <td style={styles.td}>{user.email}</td>
                    <td style={styles.td}>{user.phone || 'N/A'}</td>
                    <td style={styles.td}>{user.company || 'N/A'}</td>
                    <td style={styles.td}>{formatDate(user.createdAt)}</td>
                    <td style={styles.td}>
                      <span style={{ ...styles.statusSelect, ...statusStyles }}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminUsers;