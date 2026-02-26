import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-5 sm:px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

        {/* About */}
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-white "><a href="/">GoSikkim</a></h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Explore the beauty of Sikkim with our curated tours and expert guides. 
            Adventure, culture, and nature all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
  <li>
    <Link to="/about" className="text-gray-200 hover:text-secondary transition">About</Link>
  </li>
  <li>
    <Link to="/destination" className="text-gray-200 hover:text-secondary transition">Destinations</Link>
  </li>
  <li>
    <Link to="/package" className="text-gray-200 hover:text-secondary transition">Tour Packages</Link>
  </li>
  <li>
    <Link to="/gallery" className="text-gray-200 hover:text-secondary transition">Gallery</Link>
  </li>
  <li>
    <Link to="/contact" className="text-gray-200 hover:text-secondary transition">Contact</Link>
  </li>
</ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-gray-200 text-sm">+91 8392092399</p>
          <p className="text-gray-200 text-sm">Gosikkim@help.com</p>
          <div className="flex gap-4 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary transition transform hover:scale-110 cursor-pointer"
              >
                <Icon className="text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter / Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Subscribe</h3>
          <p className="text-gray-200 text-sm mb-4">
            Get the latest updates about our packages and special offers.
          </p>
          <div className="flex gap-2 bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-lg text-dark focus:outline-none"
            />
            <button className="bg-secondary px-4 rounded-r-lg text-white font-medium hover:bg-primary transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/30 pt-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} GoSikkim. All rights reserved.
      </div>
    </footer>
  );
}
