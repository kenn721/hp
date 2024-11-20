// import Image from 'next/image'
import Layout from '@/components/layout'
import { Metadata } from 'next'
import { Shield, Code, Users, Brain, Lock, FileCode } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | UNCHAIN',
  description: 'Explore our comprehensive AI safety and ethical innovation services.',
}

const services = [
  {
    icon: Shield,
    title: 'AI Safety Audits',
    description: 'Comprehensive evaluation of AI systems to identify potential vulnerabilities and ethical concerns.',
    features: ['Risk Assessment', 'Safety Metrics', 'Mitigation Strategies']
  },
  {
    icon: Code,
    title: 'Secure Development',
    description: 'Implementation of robust safety measures during AI system development.',
    features: ['Safety-First Architecture', 'Ethical Guidelines', 'Best Practices']
  },
  {
    icon: Users,
    title: 'Training & Workshops',
    description: 'Educational programs for organizations to build AI systems with safety in mind.',
    features: ['Hands-on Training', 'Case Studies', 'Certification']
  },
  {
    icon: Brain,
    title: 'Ethics Consulting',
    description: 'Expert guidance on ethical considerations in AI development and deployment.',
    features: ['Policy Development', 'Impact Assessment', 'Compliance Review']
  },
  {
    icon: Lock,
    title: 'Security Testing',
    description: 'Rigorous testing of AI systems for potential security vulnerabilities.',
    features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Protocols']
  },
  {
    icon: FileCode,
    title: 'Code Reviews',
    description: 'Detailed analysis of AI system code to ensure safety and ethical compliance.',
    features: ['Safety Analysis', 'Code Quality', 'Documentation Review']
  }
]

export default function Services() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center flex items-center justify-center">
            <span>Our Services</span>
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive solutions for ensuring the safe and ethical development of AI systems
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Initial evaluation of your AI system and requirements' },
              { step: '02', title: 'Planning', description: 'Developing a comprehensive safety and ethics strategy' },
              { step: '03', title: 'Implementation', description: 'Executing the planned safety measures and improvements' },
              { step: '04', title: 'Monitoring', description: 'Continuous oversight and adjustments as needed' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help ensure the safety and ethical compliance of your AI systems.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </Layout>
  )
}
