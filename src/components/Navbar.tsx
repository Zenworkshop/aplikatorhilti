import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail, MdAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import logo from "../assets/logo_zen_kitchenset.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/6281244997748?text=Halo%20Zen%20Kitchen%20Set,%20saya%20ingin%20konsultasi%20mengenai%20kitchen%20set.";

  // Scroll ke atas saat route berubah
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      {/* Top Bar (Desktop only) */}
      <div className="hidden md:flex justify-between items-center bg-[#0D2C40] text-white px-8 py-2 text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MdAccessTime />
            <span>Buka Setiap Hari: 08:00 - 17:00</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone />
            <span>0812-4499-7748</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdOutlineMail />
            <span>zenworkshopid@gmail.com</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com/zenworkshopid" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/zenworkshopid" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-6 py-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center"
        >
          <Link to="/">
            <img src={logo} alt="Zen Kitchen Set Logo" className="h-10 md:h-12" />
          </Link>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="hover:text-[#0D2C40] text-gray-800 transition">Tentang Kami</Link>
            <Link to="/services" className="hover:text-[#0D2C40] text-gray-800 transition">Layanan</Link>
            <Link to="/gallery" className="hover:text-[#0D2C40] text-gray-800 transition">Galeri</Link>
            <Link to="/contact" className="hover:text-[#0D2C40] text-gray-800 transition">Kontak</Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D2C40] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center space-x-2"
            >
              <FaWhatsapp />
              <span>Konsultasi</span>
            </a>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white mt-4 rounded-lg p-4 shadow"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/about" className="text-gray-800 hover:text-[#0D2C40]" onClick={() => setIsOpen(false)}>Tentang Kami</Link>
              <Link to="/services" className="text-gray-800 hover:text-[#0D2C40]" onClick={() => setIsOpen(false)}>Layanan</Link>
              <Link to="/gallery" className="text-gray-800 hover:text-[#0D2C40]" onClick={() => setIsOpen(false)}>Galeri</Link>
              <Link to="/contact" className="text-gray-800 hover:text-[#0D2C40]" onClick={() => setIsOpen(false)}>Kontak</Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white bg-[#0D2C40] py-2 text-center rounded-lg">Konsultasi via WhatsApp</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
