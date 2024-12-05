import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-red-500 mb-3">
              Movie-Paradise
            </h1>
            <p className="text-sm">
              We are committed to providing high-quality movies and series for
              your needs. Follow us for updates and for upcoming movies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-purple-400">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-purple-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-purple-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-purple-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-purple-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-purple-400">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/ranaf8811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com/ranak8811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ranak8811/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/ranaf8811/?theme=dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://github.com/ranak8811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-green-400">
                Contact Us
              </h2>
              <p>Email: contact@movie-paradise.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
