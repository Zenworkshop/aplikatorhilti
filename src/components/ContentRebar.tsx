"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

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

export default function ContentRebar() {
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
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* SECTION 1: HERO */}
      <motion.section
        className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] text-white py-28 px-6 md:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Jasa Pemasangan Chemical Rebar Profesional & Bersertifikat
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Solusi sambungan beton lama dan baru yang kuat dan presisi. Cocok untuk proyek gedung bertingkat, jembatan, struktur kolom tambahan, dan renovasi bangunan.
          </p>
          <a
            href="https://wa.me/6281244997748"
            onClick={() => {
              fbq("track", "Contact");
              return gtag_report_conversion("https://wa.me/6281244997748");
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            <FaWhatsapp size={24} /> Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </motion.section>

      {/* SECTION 2: Kenapa Harus Pakai Chemical Rebar */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kenapa Harus Pakai Chemical Rebar?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: "🧱", title: "Daya Ikat Tinggi", desc: "Menghubungkan rebar ke beton lama dengan kekuatan optimal dan presisi." },
              { icon: "🏗️", title: "Sambungan Struktur Efektif", desc: "Ideal untuk proyek yang melibatkan beton lama dan baru." },
              { icon: "🛠️", title: "Tidak Merusak Beton Eksisting", desc: "Metode injeksi tanpa perlu merusak struktur lama." },
              { icon: "🌍", title: "Stabil di Tanah Bergerak", desc: "Aman untuk bangunan tinggi dan wilayah rawan getaran." },
              { icon: "🧪", title: "Tahan Lama & Getaran", desc: "Material adhesive berkualitas tinggi tahan tekanan dan getaran jangka panjang." },
              { icon: "📏", title: "Presisi dan Rapi", desc: "Proses teknis yang terukur dan hasil akhir yang profesional." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Jenis Aplikasi Chemical Rebar */}
      <section className="bg-gray-100 py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Jenis Aplikasi Chemical Rebar
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Sambungan balok beton baru ke beton lama", "Perkuatan kolom/lantai gedung", "Renovasi jembatan atau flyover", "Proyek pabrik dan infrastruktur", "Proyek perluasan gedung"].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-[#0D2C40]">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Langkah Kerja Kami */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Langkah Kerja Kami
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "Survey Lokasi", emoji: "📍" },
              { title: "Evaluasi Struktur & Perhitungan Teknik", emoji: "📐" },
              { title: "Pengeboran Presisi", emoji: "🛠️" },
              { title: "Injeksi Chemical Adhesive", emoji: "🧪" },
              { title: "Pemasangan Rebar & Uji Kuat (opsional)", emoji: "📊" },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{step.emoji}</div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Proyek Terbaru */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Proyek Terbaru</h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="w-full overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer break-inside-avoid" onClick={() => openModal(index)}>
              <img src={src} alt={`Proyek ${index + 1}`} className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
            </div>
          ))}
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center" onClick={closeModal}>
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
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Testimoni Klien Kami
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Pak H – Proyek Gedung Jakarta",
                feedback: "Timnya profesional, hasil pemasangan rebar sangat rapi dan kuat. Saya puas dengan pelayanannya.",
              },
              {
                name: "Bu R – Renovasi Flyover Bekasi",
                feedback: "Pekerjaan cepat dan tepat, cocok untuk proyek besar. Chemical rebarnya benar-benar berkualitas.",
              },
              {
                name: "Pak A – Pabrik Surabaya",
                feedback: "Sangat direkomendasikan! Mulai dari konsultasi sampai uji kuat semuanya ditangani dengan baik.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
                <p className="font-semibold text-[#0D2C40]">– {item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ Chemical Rebar */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pertanyaan Umum seputar Chemical Rebar
          </motion.h2>

          <div className="space-y-6">
            {[ 
              {
                question: "Apa bedanya chemical rebar dengan metode biasa?",
                answer: "Chemical rebar menggunakan bahan perekat kimia (adhesive) untuk mengikat besi beton ke struktur lama, sedangkan metode biasa biasanya menggunakan sambungan mekanik atau cor ulang. Ini membuat daya ikat chemical rebar lebih kuat dan presisi."
              },
              {
                question: "Seberapa kuat daya tahan rebar yang dipasang?",
                answer: "Jika diaplikasikan dengan benar dan menggunakan bahan berkualitas, daya tahan chemical rebar bisa menyamai bahkan melebihi daya ikat beton cor konvensional."
              },
              {
                question: "Berapa lama proses pengerjaan?",
                answer: "Tergantung dari jumlah titik rebar dan kondisi lapangan. Namun rata-rata bisa selesai dalam waktu 1–2 hari kerja untuk skala kecil-menengah."
              },
              {
                question: "Apakah perlu uji tarik?",
                answer: "Untuk proyek berskala besar atau sesuai permintaan konsultan, uji tarik disarankan untuk memastikan kekuatan ikatan rebar terhadap struktur eksisting."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA Akhir */}
      <section className="bg-gradient-to-r from-[#0D2C40] to-[#1A4365] text-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Mulai Proyek Anda?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Konsultasikan kebutuhan pemasangan <strong>chemical rebar</strong> secara gratis. Kami siap datang untuk survey lokasi dan memberikan solusi terbaik untuk proyek Anda.
          </p>
          <a
            href="https://wa.me/6281244997748"
            onClick={() => {
              fbq("track", "Contact");
              return gtag_report_conversion("https://wa.me/6281244997748");
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            <FaWhatsapp size={24} /> Konsultasi Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
