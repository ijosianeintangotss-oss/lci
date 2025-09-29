// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Training from './pages/Training';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
// import AdminQuotes from './pages/AdminQuotes';
import Quote from './pages/Quote';
import Login from './pages/Login';
import Messages from './pages/messages'; // Use a different name for messages
import CookieConsent from './components/CookieConsent';
import './App.css';
import AdminQuotes from './pages/AdminQuotes';
import AdminMessages from './pages/AdminMessages';

// PublicLayout component to wrap Header and Footer around public routes
const PublicLayout = () => (
  <>
    <Header />
    <Outlet /> {/* This renders the child route components */}
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
            <Route path="/admin-quotes" element={<AdminQuotes />} />
            <Route path="/admin-messages" element={<AdminMessages />} />
            
          </Route>

          {/* Admin/Login routes without Header and Footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin-quotes" element={<AdminQuotes />} />
          <Route path="/messages" element={<Messages />} /> {/* Fixed */}
        </Routes>
      </Router>
      <CookieConsent /> {/* Add this at the root so it appears on all pages */}
    </>
  );
}

export default App;