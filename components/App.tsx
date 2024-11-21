"use client";

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./home";
import ServicesPage from "./services";
import BlogPage from "./blog";

export default function App() {
  return (
    <>
      <header className="bg-background shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo text-2xl font-bold text-primary">UNCHAIN</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-primary transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="hover:text-primary transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: info@unchain.org</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 AI Street, Tech City, TC 12345</p>
            </div>
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="social-icons space-x-4">
                <a
                  href="#"
                  className="text-2xl hover:text-primary transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-primary transition-colors"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-primary transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-8 pt-4 border-t border-gray-300 text-center">
            <p>&copy; 2024 UNCHAIN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
