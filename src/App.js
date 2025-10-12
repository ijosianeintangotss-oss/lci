// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Training from './pages/Training';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Login from './pages/Login';
import Messages from './pages/messages';
import CookieConsent from './components/CookieConsent';
import AdminQuotes from './pages/AdminQuotes';
import AdminMessages from './pages/AdminMessages';
import ClientLogin from './pages/ClientLogin';
import ClientPortal from './pages/ClientPortal';
import ClientRegister from './pages/ClientRegister';
import AdminUsers from './pages/AdminUsers';
import ProtectedRoute from './components/ProtectedRoute';

// ✅ Define AdminLayout wrapper
const AdminLayout = ({ children }) => (
  <div style={{ padding: "20px" }}>
    <h2>Admin Panel</h2>
    {children}
  </div>
);

// PublicLayout component to wrap Header and Footer around public routes
const PublicLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public routes with Header and Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
          </Route>

          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/client-register" element={<ClientRegister />} />

          {/* Admin Protected Routes */}
          <Route 
            path="/admin-quotes" 
            element={
              <ProtectedRoute role="admin">
                <AdminLayout>
                  <AdminQuotes />
                </AdminLayout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin-messages" 
            element={
              <ProtectedRoute role="admin">
                <AdminLayout>
                  <AdminMessages />
                </AdminLayout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin-users" 
            element={
              <ProtectedRoute role="admin">
                <AdminLayout>
                  <AdminUsers />
                </AdminLayout>
              </ProtectedRoute>
            } 
          />
          
          {/* Client Protected Route */}
          <Route 
            path="/client-portal" 
            element={
              <ProtectedRoute role="client">
                <ClientPortal />
              </ProtectedRoute>
            } 
          />

          {/* Messages route */}
          <Route path="/messages" element={<Messages />} />

          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to="/" replace />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <CookieConsent />
    </>
  );
}

export default App;