// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p className="mb-4">
        © {new Date().getFullYear()} Prime Nuts‑Natural. All rights reserved.
      </p>
      {/* Contact Information Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p>Email: <a href="mailto:info@primenuts.co.in" className="underline">info@primenutsnatural.com</a></p>
        <p>Phone: <a href="tel:+9188901557605" className="underline">91-88901557605</a></p>
        <p>Address: Prime Nuts Enterprises, Ajmer, Rajasthan, India</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/people/Prime-Nuts-Natural/61581968783606/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://instagram.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://x.com/Suku2728"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://linkedin.com/company/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </footer>
  );
}
