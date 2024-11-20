import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen flex flex-col ${roboto.className}`}>
      <header className="bg-purple-900 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={40}
              height={40}
              className="ml-2"
            />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-purple-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-purple-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-purple-300">
                Events
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-purple-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-purple-900 text-purple-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">UNCHAIN</h3>
              <p>Together Fostering Safe and Ethical AI</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full rounded-l-md text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} UNCHAIN. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
