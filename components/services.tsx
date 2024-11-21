import Head from "next/head";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      title: "Vulnerability Detection",
      description:
        "Our advanced AI systems scan for potential vulnerabilities in AI models and implementations, helping to identify and mitigate risks before they become threats.",
      icon: "shield-alt",
    },
    {
      title: "Ethical AI Consulting",
      description:
        "We provide expert consultation on implementing ethical AI practices in your organization, ensuring your AI initiatives align with moral and societal values.",
      icon: "users",
    },
    {
      title: "AI Safety Workshops",
      description:
        "Join our interactive workshops designed to educate developers, researchers, and decision-makers on the latest in AI safety practices and ethical considerations.",
      icon: "chalkboard-teacher",
    },
    {
      title: "Collaborative Research",
      description:
        "Partner with us on cutting-edge research projects aimed at advancing the field of AI safety and ethical AI development.",
      icon: "microscope",
    },
    {
      title: "AI Auditing",
      description:
        "Our comprehensive AI auditing service evaluates your existing AI systems for potential biases, security vulnerabilities, and ethical concerns.",
      icon: "clipboard-check",
    },
    {
      title: "Policy Development",
      description:
        "We assist organizations and governments in developing robust AI policies that promote safety, transparency, and ethical use of artificial intelligence.",
      icon: "file-signature",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services - UNCHAIN</title>
        <meta
          name="description"
          content="Explore UNCHAIN's comprehensive suite of AI safety and ethical innovation services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          At UNCHAIN, we offer a comprehensive suite of services designed to
          promote AI safety and ethical innovation. Explore how we can help you
          navigate the complex landscape of AI development and implementation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <i className={`fas fa-${service.icon} text-2xl`}></i>
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
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
