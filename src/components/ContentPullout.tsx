import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaCheckCircle, FaTools, FaCertificate, FaRulerCombined, FaQuestionCircle } from 'react-icons/fa';
import heroImage from '../assets/HILTI/ca3.png';
import alatImage from '../assets/HILTI/ca3.png';
import metodeImage from '../assets/HILTI/ca3.png';
import proyek1 from '../assets/HILTI/ca1.png';
import proyek2 from '../assets/HILTI/ca2.png';
import proyek3 from '../assets/HILTI/ca3.png';
import proyek4 from '../assets/HILTI/ca4.png';
import proyek5 from '../assets/HILTI/ca5.png';
import proyek6 from '../assets/HILTI/ca6.png';
import proyek7 from '../assets/HILTI/ca7.png';
import proyek8 from '../assets/HILTI/ca8.png';
import proyek9 from '../assets/HILTI/ca9.png';
import proyek10 from '../assets/HILTI/ca10.png';
import proyek11 from '../assets/HILTI/ca11.png';
import proyek12 from '../assets/HILTI/ca12.png';
import proyek13 from '../assets/HILTI/ca13.png';
import proyek14 from '../assets/HILTI/ca14.png';
import proyek15 from '../assets/HILTI/ca15.png';

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15
];

const faqs = [
  {
    question: "Berapa lama pengerjaannya?",
    answer: "Waktu pengerjaan tergantung jumlah titik uji, namun umumnya sekitar 1–2 jam per lokasi." 
  },
  {
    question: "Apakah perlu dibor dulu?",
    answer: "Ya, titik pengujian perlu dibor sesuai spesifikasi anchor sebelum dilakukan penarikan."
  },
  {
    question: "Bisa untuk proyek kecil?",
    answer: "Tentu! Kami melayani proyek skala kecil maupun besar di berbagai sektor."
  },
  {
    question: "Apakah dapat sertifikat hasil uji?",
    answer: "Ya, setiap pengujian akan disertai laporan hasil uji & sertifikat jika diperlukan."
  }
];

export default function ContentPullout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqIndex, setFaqIndex] = useState(null);

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
      {/* Hero Section */}
      <section className="relative bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Jasa Uji Tarik (Pull Out Test) Berstandar Proyek
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Pastikan kekuatan anchor & baut proyek Anda ✅
          </p>
          <a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20konsultasi%20tentang%20uji%20tarik%20(proyek%20pull%20out%20test)."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-green-600 text-white rounded-2xl shadow-lg text-lg font-semibold transition"
          >
            <FaWhatsapp size={24} />
            Konsultasi Gratis 🔧
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={heroImage}
            alt="Alat Uji Tarik"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </section>

      {/* Section 2: Kenapa Uji Tarik Itu Penting */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={alatImage}
            alt="Ilustrasi Uji Tarik"
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
            Kenapa Uji Tarik Itu Penting?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Uji tarik (Pull Out Test) merupakan bagian krusial dalam proses quality control konstruksi. Prosedur ini memastikan kekuatan ikatan anchor pada beton, sangat vital untuk struktur seperti gedung bertingkat, jembatan, dan infrastruktur berat lainnya.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-800 text-lg">
              <FaCheckCircle className="text-green-500 mt-1" />
              Mengetahui daya tahan sekrup/baut pada beton
            </li>
            <li className="flex items-start gap-3 text-gray-800 text-lg">
              <FaCheckCircle className="text-green-500 mt-1" />
              Memenuhi standar teknis pengujian struktur
            </li>
            <li className="flex items-start gap-3 text-gray-800 text-lg">
              <FaCheckCircle className="text-green-500 mt-1" />
              Wajib untuk banyak tender BUMN dan swasta
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Section 3: Metode & Alat yang Digunakan */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Metode & Alat yang Digunakan
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={metodeImage}
              alt="Alat Hilti"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-800 text-lg"
          >
            <li className="flex items-start gap-4">
              <FaTools className="text-red-600 mt-1" />
              Alat uji tarik digital merek Hilti
            </li>
            <li className="flex items-start gap-4">
              <FaRulerCombined className="text-red-600 mt-1" />
              Kapasitas uji hingga XX kN, sesuai kebutuhan proyek
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-red-600 mt-1" />
              Kalibrasi alat terbaru secara berkala
            </li>
            <li className="flex items-start gap-4">
              <FaCertificate className="text-red-600 mt-1" />
              Sertifikat hasil uji bisa disiapkan sesuai permintaan
            </li>
          </motion.ul>
        </div>
      </section>

      {/* Section 4: Dokumentasi Proyek Pull Out Test */}
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
              <button
                className="absolute top-4 right-6 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={prevImage}
              >
                &#10094;
              </button>

              <img
                src={images[activeIndex]}
                alt={`Preview ${activeIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
              />

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={nextImage}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-block bg-[#0D2C40] hover:bg-[#133C56] text-white px-6 py-3 rounded-lg text-base font-semibold transition">
            Lihat Semua Proyek Kami →
          </Link>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          FAQ: Pertanyaan Seputar Uji Tarik
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => setFaqIndex(faqIndex === index ? null : index)}
                className="flex items-start w-full text-left text-lg font-semibold text-gray-800 gap-3"
              >
                <FaQuestionCircle className="text-blue-500 mt-1" />
                {faq.question}
              </button>
              <AnimatePresence>
                {faqIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-gray-700 text-base"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: CTA Konsultasi & Booking */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sudah Siap Pastikan Kekuatan Struktur Anda?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Konsultasi Gratis dan Jadwalkan Uji Tarik Sekarang 👷‍♂️<br />
            <span className="text-sm md:text-base block mt-2 opacity-80">*Termasuk survei lokasi & pengecekan awal</span>
          </p>
          <a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20jadwalkan%20uji%20tarik%20(pull%20out%20test)."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-800 hover:bg-gray-100 rounded-xl text-lg font-semibold shadow-lg transition"
          >
            <FaWhatsapp size={24} />
            Konsultasi via WhatsApp
          </a>
        </motion.div>
      </section>

       {/* Section 7: SEO Tips Tambahan (Non-visual, untuk implementasi teknis) */}
      {/* SEO Meta Keywords (gunakan di <Helmet> atau <Head> component) */}
      {/*
        <Helmet>
          <title>Jasa Uji Tarik | Pull Out Test Beton Profesional</title>
          <meta name="description" content="Layanan uji kekuatan anchor & baut pada struktur beton dengan alat Hilti. Sertifikasi lengkap. Melayani Jabodetabek & seluruh Indonesia." />
          <meta name="keywords" content="jasa uji tarik, pull out test, uji kekuatan anchor, uji tarik hilti, sertifikasi uji tarik beton" />
        </Helmet>
      */}

      {/* Schema.org FAQ Structured Data */}
      {/*
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Berapa lama pengerjaannya?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Waktu pengerjaan tergantung jumlah titik uji, namun umumnya sekitar 1–2 jam per lokasi."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah perlu dibor dulu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, titik pengujian perlu dibor sesuai spesifikasi anchor sebelum dilakukan penarikan."
              }
            },
            {
              "@type": "Question",
              "name": "Bisa untuk proyek kecil?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu! Kami melayani proyek skala kecil maupun besar di berbagai sektor."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah dapat sertifikat hasil uji?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, setiap pengujian akan disertai laporan hasil uji & sertifikat jika diperlukan."
              }
            }
          ]
        }
        `}
        </script>
      */}

      {/* Testimoni & Lokasi Layanan (bisa dimasukkan ke section proyek atau testimonial terpisah) */}
      {/*
        <section className="bg-white py-12 text-center text-gray-700">
          <p className="text-lg">Dipercaya oleh berbagai proyek di Jabodetabek, Bandung, Surabaya, dan kota lainnya.</p>
          <p className="text-lg italic mt-2">"Layanan profesional dan hasil akurat! Sangat direkomendasikan." – Pak H, Proyek Jakarta</p>
        </section>
      */}
    </>
  );
}
