import React from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="hero text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Together Fostering Safe and Ethical AI</h1>
        <p className="text-xl mb-8">Join us in shaping the future of responsible AI innovation</p>
        <Button asChild>
          <Link href="/about">Learn More</Link>
        </Button>
      </section>

      <section className="mission mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">UNCHAIN is dedicated to promoting AI safety and ethical innovation through collaborative research, education, and practical solutions.</p>
      </section>

      <section className="services mb-16">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card">
            <i className="fas fa-shield-alt text-4xl text-primary mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Vulnerability Detection</h3>
            <p>Identifying and addressing potential risks in AI systems</p>
          </div>
          <div className="service-card">
            <i className="fas fa-laptop-code text-4xl text-primary mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Hackathons</h3>
            <p>Collaborative events to solve AI safety challenges</p>
          </div>
          <div className="service-card">
            <i className="fas fa-handshake text-4xl text-primary mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Collaborations</h3>
            <p>Partnering with researchers and companies for ethical AI development</p>
          </div>
        </div>
      </section>

      <section className="featured-content mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card">
            <img src="https://via.placeholder.com/400x200" alt="AI Safety Hackathon" className="mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">AI Safety Hackathon 2024</h3>
            <p className="mb-4">Join us for our annual hackathon focused on solving critical AI safety challenges.</p>
            <Button asChild>
              <Link href="/events">Register Now</Link>
            </Button>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/400x200" alt="Latest Research Publication" className="mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Latest Research Publication</h3>
            <p className="mb-4">Explore our recent findings on robust AI systems and their implications.</p>
            <Button asChild>
              <Link href="/blog">Read More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

