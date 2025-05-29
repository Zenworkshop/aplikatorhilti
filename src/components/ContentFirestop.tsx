import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPlug,
  FaWater,
  FaSnowflake,
  FaBuilding,
  FaFileAlt,
  FaUserTie,
  FaCheckCircle,
  FaTools
} from "react-icons/fa";

import firestopImage from "../assets/HILTI/ca3.png";
import proyek1 from "../assets/HILTI/ca1.png";
import proyek2 from "../assets/HILTI/ca2.png";
import proyek3 from "../assets/HILTI/ca3.png";
import proyek4 from "../assets/HILTI/ca4.png";
import proyek5 from "../assets/HILTI/ca5.png";
import proyek6 from "../assets/HILTI/ca6.png";
import proyek7 from "../assets/HILTI/ca7.png";
import proyek8 from "../assets/HILTI/ca8.png";
import proyek9 from "../assets/HILTI/ca9.png";
import proyek10 from "../assets/HILTI/ca10.png";
import proyek11 from "../assets/HILTI/ca11.png";
import proyek12 from "../assets/HILTI/ca12.png";
import proyek13 from "../assets/HILTI/ca13.png";
import proyek14 from "../assets/HILTI/ca14.png";
import proyek15 from "../assets/HILTI/ca15.png";

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15
];

export default function ContentFirestop() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length);
  const prevImage = () => setActiveIndex((activeIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jasa Pemasangan Firestop Profesional & Bersertifikat
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Cegah penyebaran api & asap. Lindungi proyek Anda dari awal.
          </p>
          <a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20konsultasi%20tentang%20layanan%20firestop."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-green-600 text-white rounded-xl shadow-lg text-lg font-semibold transition"
          >
            <FaWhatsapp size={24} />
            Konsultasi Sekarang
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={firestopImage}
            alt="Ilustrasi Firestop"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </section>

      {/* Section 2: Apa Itu Firestop dan Kenapa Penting */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={firestopImage}
            alt="Penjelasan Firestop"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Apa Itu Firestop dan Kenapa Penting?
          </h2>
          <div className="space-y-5 text-lg text-gray-700">
            <p>
              Firestop adalah sistem proteksi pasif kebakaran yang dirancang untuk menahan penyebaran api dan asap melalui jalur kabel, pipa, dan celah struktural lainnya.
            </p>
            <p>
              Tanpa firestop, api dan asap bisa menyebar sangat cepat antar ruangan atau lantai, memperbesar risiko kerusakan dan kerugian.
            </p>
            <p>
              Pemasangan firestop merupakan standar keamanan wajib untuk proyek gedung bertingkat, pabrik, rumah sakit, hotel, dan fasilitas publik lainnya.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: Jenis Firestop yang Kami Kerjakan */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jenis Firestop yang Kami Kerjakan
          </h2>
          <p className="text-lg text-gray-600">
            Tim kami siap menangani berbagai tipe instalasi firestop dengan metode yang sesuai standar keamanan proyek gedung & industri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaPlug className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1">Firestop Kabel Tray</h3>
              <p className="text-gray-600 text-sm">Mencegah penyebaran api melalui jalur kabel antar ruangan.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaWater className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1">Firestop Pipa PVC/GI</h3>
              <p className="text-gray-600 text-sm">Instalasi sistem proteksi pada pipa instalasi air dan gas.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaSnowflake className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1">Firestop Ducting AC</h3>
              <p className="text-gray-600 text-sm">Menahan jalur penyebaran api melalui sistem pendingin ruangan.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaBuilding className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1">Firestop Shaft Lift & Panel Listrik</h3>
              <p className="text-gray-600 text-sm">Perlindungan menyeluruh untuk jalur vertikal & panel sensitif.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaFileAlt className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1">Sertifikasi & Dokumentasi</h3>
              <p className="text-gray-600 text-sm">Kami siapkan dokumentasi proyek & sertifikat sesuai kebutuhan audit.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Keunggulan Zen Workshop di Layanan Firestop */}
        <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan Zen Workshop di Layanan Firestop
            </h2>
            <p className="text-lg text-gray-600">
            Mengapa banyak proyek mempercayakan sistem firestop mereka kepada kami? Inilah alasannya.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
            <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow"
            >
            <FaUserTie className="text-red-600 text-2xl mt-1" />
            <p>Tenaga ahli bersertifikat & berpengalaman</p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow"
            >
            <FaCheckCircle className="text-red-600 text-2xl mt-1" />
            <p>Material firestop berkualitas (Hilti, 3M, dll)</p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow"
            >
            <FaFileAlt className="text-red-600 text-2xl mt-1" />
            <p>Dokumentasi & foto laporan lengkap untuk audit</p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow"
            >
            <FaBuilding className="text-red-600 text-2xl mt-1" />
            <p>Bisa untuk tender proyek swasta maupun BUMN</p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow"
            >
            <FaTools className="text-red-600 text-2xl mt-1" />
            <p>Garansi pengerjaan rapi, tepat waktu, dan sesuai standar</p>
            </motion.div>
        </div>
        </section>

{/* Section 5: Proyek Terbaru */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Proyek Terbaru</h2>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer break-inside-avoid"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Proyek ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-6 text-white text-3xl" onClick={closeModal}>&times;</button>
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={prevImage}>&#10094;</button>
              <img src={images[activeIndex]} alt={`Preview ${activeIndex + 1}`} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg" />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={nextImage}>&#10095;</button>
            </div>
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-block bg-[#0D2C40] hover:bg-[#133C56] text-white px-6 py-3 rounded-lg text-base font-semibold transition">
            Lihat Semua Proyek Kami →
          </Link>
        </div>
      </section>

      {/* SECTION 6: Testimoni Klien */}
        <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Klien Kami
            </h2>
            <p className="text-lg text-gray-600">
            Apa kata mereka yang sudah menggunakan layanan firestop dari Zen Workshop?
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md"
            >
            <p className="text-gray-700 italic mb-4">
                “Pengerjaannya cepat, rapi, dan timnya sangat komunikatif. Proyek jadi lebih aman.”
            </p>
            <p className="font-semibold text-gray-900">Pak H – Proyek Gedung Jakarta</p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md"
            >
            <p className="text-gray-700 italic mb-4">
                “Sangat membantu untuk kelengkapan dokumen tender BUMN. Lengkap & sesuai standar.”
            </p>
            <p className="font-semibold text-gray-900">Bu S – Proyek Pabrik Tangerang</p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md"
            >
            <p className="text-gray-700 italic mb-4">
                “Kualitas material dan hasil pemasangan firestop-nya sangat memuaskan. Recommended!”
            </p>
            <p className="font-semibold text-gray-900">PT Maju Jaya – Rumah Sakit Bekasi</p>
            </motion.div>
        </div>
        </section>

        {/* SECTION 7: FAQ Firestop */}
        <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum seputar Firestop
            </h2>
            <p className="text-lg text-gray-600">
            Kami jawab pertanyaan yang paling sering ditanyakan klien sebelum memesan layanan firestop.
            </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
            {[
            {
                question: "Apakah wajib ada firestop di proyek saya?",
                answer: "Ya, firestop merupakan syarat wajib untuk gedung bertingkat, rumah sakit, pabrik, dan proyek yang ingin lolos audit keselamatan kebakaran."
            },
            {
                question: "Bahan yang digunakan apa?",
                answer: "Kami menggunakan material firestop berkualitas tinggi dari merek ternama seperti Hilti, 3M, dan merek bersertifikasi lainnya."
            },
            {
                question: "Apakah bisa dikerjakan malam/hari libur?",
                answer: "Bisa. Tim kami siap bekerja di malam hari atau weekend dengan penjadwalan khusus, tanpa ganggu aktivitas proyek utama."
            },
            {
                question: "Apakah bisa diberi dokumentasi audit?",
                answer: "Tentu. Kami menyediakan laporan lengkap, foto progres, dan sertifikasi sesuai kebutuhan audit internal maupun eksternal."
            }
            ].map((faq, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-5 shadow-sm"
            >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
            ))}
        </div>
        </section>

        {/* SECTION 9: SEO & Lokasi Layanan */}
        <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Layanan Firestop Bersertifikat – Jabodetabek & Bandung
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            Zen Workshop melayani jasa pemasangan firestop profesional untuk berbagai kebutuhan proyek:
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 text-base md:text-lg mb-6">
            <li><strong>Firestop kabel dan pipa</strong> di gedung baru maupun renovasi</li>
            <li><strong>Firestop untuk gedung bertingkat</strong>, rumah sakit, hotel, dan pabrik</li>
            <li>Pemasangan <strong>firestop Hilti</strong> untuk proteksi maksimal</li>
            <li>Konsultasi dan eksekusi <strong>firestop Jabodetabek</strong> dan sekitarnya</li>
            </ul>
            <p className="text-base md:text-lg text-gray-700">
            Kami melayani proyek firestop di seluruh <strong>Jabodetabek, Bandung</strong>, dan berbagai kota industri besar lainnya di Indonesia.
            </p>
        </motion.div>
        </section>




    </>
  );
}
