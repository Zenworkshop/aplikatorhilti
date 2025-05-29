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

declare const fbq: any;
declare const gtag_report_conversion: any;

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15
];

export default function ContentAnchor() {
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
      {/* HERO SECTION */}
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
            Jasa Pemasangan Chemical Anchor Profesional
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Butuh solusi kuat dan tahan lama untuk struktur beton Anda? Kami menyediakan layanan
            pemasangan <strong>chemical anchor</strong> berkualitas untuk proyek bangunan, mesin industri,
            dan struktur berat lainnya. Cocok untuk pembangunan gedung, pabrik, hingga infrastruktur.
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
            <FaWhatsapp size={24} /> Konsultasi via WhatsApp
          </a>
        </div>
      </motion.section>

      {/* SECTION 2: Kenapa Harus Pakai Chemical Anchor? */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kenapa Harus Pakai Chemical Anchor?
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Dibandingkan anchor mekanik biasa, <strong>chemical anchor</strong> memberikan daya ikat lebih tinggi karena memanfaatkan perekat kimia yang meresap ke pori-pori beton. Ini membuatnya ideal untuk struktur beban berat, vibrasi tinggi, atau lokasi dengan kondisi ekstrem.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "🧱",
                title: "Ikatan Lebih Kuat",
                desc: "Mengisi celah di beton secara menyeluruh sehingga lebih kokoh untuk menopang beban berat.",
              },
              {
                icon: "🛠️",
                title: "Fleksibel untuk Banyak Material",
                desc: "Bisa digunakan pada beton, batu, hingga struktur berpori lainnya.",
              },
              {
                icon: "⚙️",
                title: "Tahan Terhadap Getaran",
                desc: "Tidak mudah longgar meskipun terpapar beban dinamis atau mesin bergetar.",
              },
              {
                icon: "🌧️",
                title: "Tahan Cuaca dan Korosi",
                desc: "Formula kimia modern tahan terhadap kelembaban, karat, dan perubahan suhu ekstrem.",
              },
              {
                icon: "📏",
                title: "Presisi & Estetika",
                desc: "Tanpa ekspansi mekanis sehingga tidak merusak permukaan atau struktur asli.",
              },
              {
                icon: "🏗️",
                title: "Cocok untuk Proyek Kritis",
                desc: "Direkomendasikan untuk bangunan tinggi, jembatan, pabrik, hingga instalasi mesin berat.",
              },
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

      {/* SECTION 3: Jenis Aplikasi Chemical Anchor */}
      <section className="bg-gray-100 py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Jenis Aplikasi Chemical Anchor
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Struktur Baja",
              "Pabrik & Gudang Industri",
              "Mesin Berat",
              "Railing Tangga & Balkon",
              "Instalasi AC dan HVAC",
              "Tiang Listrik & Antena",
            ].map((item, index) => (
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
                { title: "Evaluasi Struktur", emoji: "📐" },
                { title: "Pengeboran Presisi", emoji: "🛠️" },
                { title: "Injeksi Chemical", emoji: "🧪" },
                { title: "Tes Tarik / Uji Kuat", emoji: "📊" },
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

      {/* SECTION 6: Testimoni Klien / Rating */}
        <section className="bg-gray-100 py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
            <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            Apa Kata Klien Kami?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                name: "PT Bangun Mandiri",
                text: "Pelayanan sangat profesional. Chemical anchor dipasang dengan rapi dan hasilnya kuat sekali. Rekomendasi banget untuk proyek skala besar.",
                rating: 5,
                },
                {
                name: "CV Teknik Utama",
                text: "Timnya responsif dan pengerjaan cepat. Hasil uji tarik sesuai dengan standar proyek. Kualitas alat dan materialnya juga premium.",
                rating: 4,
                },
                {
                name: "Industri Baja Abadi",
                text: "Kami sangat puas dengan hasil kerjanya. Proyek pabrik kami berjalan lancar berkat pemasangan anchor yang kuat dan tepat.",
                rating: 5,
                },
            ].map((review, index) => (
                <motion.div
                key={index}
                className="bg-white rounded-xl shadow p-6 text-left hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                >
                <div className="mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-xl">★</span>
                    ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <h3 className="text-md font-semibold text-[#0D2C40]">{review.name}</h3>
                </motion.div>
            ))}
            </div>
        </div>
        </section>

        {/* SECTION 7: FAQ Chemical Anchor */}
        <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-4xl mx-auto">
            <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            Pertanyaan Umum Seputar Chemical Anchor
            </motion.h2>

            <div className="space-y-6">
            {[
                {
                q: "Berapa beban maksimum yang bisa ditahan oleh chemical anchor?",
                a: "Tergantung jenis dan ukuran chemical serta kondisi beton, chemical anchor dapat menahan beban hingga 10 ton atau lebih per titik.",
                },
                {
                q: "Apakah chemical anchor tahan lama?",
                a: "Ya, jika pemasangan dilakukan dengan benar dan menggunakan produk berkualitas, daya tahannya bisa mencapai 30–50 tahun.",
                },
                {
                q: "Bisa dipasang di beton lama atau basah?",
                a: "Bisa. Ada jenis chemical khusus yang dirancang untuk beton tua maupun kondisi lembab.",
                },
                {
                q: "Apakah perlu uji tarik setelah pemasangan?",
                a: "Disarankan, terutama untuk proyek penting atau struktur berat. Kami menyediakan layanan uji tarik resmi (pull out test).",
                },
            ].map((item, index) => (
                <motion.div
                key={index}
                className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                >
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>

        {/* SECTION 8: CTA Akhir */}
        <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] text-white py-24 px-4 md:px-8 text-center">
        <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Pasang Chemical Anchor Berkualitas?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
            Konsultasi gratis, survei lokasi tanpa biaya (jika dalam area layanan), dan dapatkan hasil pengerjaan yang rapi, kuat, dan bersertifikat!
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
        </motion.div>
        </section>







    </>
  );
}
