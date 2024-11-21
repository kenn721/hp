import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ServicesPage from './pages/services';
import BlogPage from './pages/blog';
//import HomePage from './pages/home'; // Assuming you have a HomePage component


export default function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">UNCHAIN</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            {/* <li><a href="#about">About Us</a></li> */}
            {/* <li><a href="#events">Events</a></li> */}
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* You'll need to create a HomePage component */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>

      {/*Rest of the code remains the same*/}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              {/* <li><a href="#events">Events</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@unchain.org</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 AI Street, Tech City, TC 12345</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 UNCHAIN. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

