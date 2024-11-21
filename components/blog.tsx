"use client";

import Head from "next/head";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect, useState } from "react";

type Post = {
  title: string;
  pubDate: string;
  link: string;
  description: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/getMediumPosts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch {
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Blog - UNCHAIN</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI safety and ethical innovation from UNCHAIN"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">UNCHAIN Blog</h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Stay updated with the latest insights, research, and developments in
          AI safety and ethical innovation.
        </p>
        {isLoading ? (
          <p className="text-center">Loading blog posts...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: Post, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>
                    {new Date(post.pubDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
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
