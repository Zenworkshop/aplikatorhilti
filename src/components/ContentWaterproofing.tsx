import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaWater, FaBuilding, FaHome, FaArrowAltCircleDown, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import waterproofingHero from "../assets/HILTI/ca3.png"; // Gambar hero
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

export default function ContentWaterproofing() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length);
  const prevImage = () =>
    setActiveIndex((activeIndex - 1 + images.length) % images.length);

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
      {/* SECTION 1: Hero */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Jasa Waterproofing Profesional untuk Gedung & Rumah Anda
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Tahan bocor, lebih awet, dan dilengkapi garansi kerja
          </p>
          <a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20konsultasi%20tentang%20layanan%20waterproofing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-green-600 text-white rounded-xl shadow-lg text-lg font-semibold transition"
          >
            <FaWhatsapp size={24} />
            Konsultasi via WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={waterproofingHero}
            alt="Ilustrasi Jasa Waterproofing"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </section>

      {/* SECTION 2: Kenapa Waterproofing Itu Penting */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={waterproofingHero}
            alt="Ilustrasi Kenapa Waterproofing Penting"
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
            Kenapa Waterproofing Itu Penting?
          </h2>
          <div className="space-y-5 text-lg text-gray-700">
            <p>
              Tanpa perlindungan yang tepat, area seperti dak, rooftop, dan kamar mandi rentan bocor.
              Kebocoran yang dibiarkan bisa menyebabkan struktur bangunan rusak, timbul jamur, dan boros biaya perbaikan.
            </p>
            <p>
              Waterproofing adalah solusi jangka panjang yang melindungi bangunan dari rembesan air,
              memastikan umur bangunan lebih awet dan aman digunakan.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: Area Layanan Waterproofing */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Area Layanan Waterproofing
          </h2>
          <p className="text-lg text-gray-600">
            Kami melayani berbagai kebutuhan waterproofing di area penting bangunan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 text-lg">
          <motion.div whileHover={{ scale: 1.03 }} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">
            <FaBuilding className="text-blue-700 text-2xl mt-1" />
            <p>Atap Beton</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">
            <FaHome className="text-blue-700 text-2xl mt-1" />
            <p>Dinding Luar</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">
            <FaWater className="text-blue-700 text-2xl mt-1" />
            <p>Balkon / Teras</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">
            <FaArrowAltCircleDown className="text-blue-700 text-2xl mt-1" />
            <p>Basement / Lantai Bawah Tanah</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">
            <FaBath className="text-blue-700 text-2xl mt-1" />
            <p>Kamar Mandi & Area Lembap</p>
          </motion.div>
        </div>
      </section>

            {/* SECTION 4: Metode & Material yang Digunakan */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Metode & Material yang Digunakan
          </h2>
          <p className="text-lg text-gray-600">
            Kami menggunakan metode waterproofing terbaik yang disesuaikan dengan kondisi dan kebutuhan area kerja.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-lg">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex items-start gap-4">
            <div className="text-blue-700 text-2xl mt-1">🛡️</div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Coating Polyurethane</h3>
              <p className="text-sm text-gray-600">Lapisan elastis tahan air yang cocok untuk atap dan permukaan terbuka.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex items-start gap-4">
            <div className="text-blue-700 text-2xl mt-1">🔥</div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Membrane Bakar</h3>
              <p className="text-sm text-gray-600">Material berbahan bitumen yang dipanaskan dan ditempelkan, ideal untuk dak & rooftop.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex items-start gap-4">
            <div className="text-blue-700 text-2xl mt-1">🧱</div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Cementitious Coating</h3>
              <p className="text-sm text-gray-600">Solusi berbasis semen untuk area basah seperti kamar mandi dan basement.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex items-start gap-4">
            <div className="text-blue-700 text-2xl mt-1">💧</div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Injeksi Anti Bocor</h3>
              <p className="text-sm text-gray-600">Suntikan material khusus ke retakan dinding untuk menghentikan rembesan air secara presisi.</p>
            </div>
          </motion.div>
        </div>
      </section>

            {/* SECTION 5: Keunggulan Zen Workshop di Waterproofing */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan Zen Workshop di Waterproofing
          </h2>
          <p className="text-lg text-gray-600">
            Inilah alasan mengapa banyak proyek mempercayakan solusi anti bocor kepada kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-lg">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow"
          >
            <span className="text-blue-700 text-2xl mt-1">👷</span>
            <p>Teknisi berpengalaman & bersertifikat</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow"
          >
            <span className="text-blue-700 text-2xl mt-1">🧪</span>
            <p>Material berkualitas & sesuai standar proyek</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow"
          >
            <span className="text-blue-700 text-2xl mt-1">⚡</span>
            <p>Pengerjaan cepat & rapi</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow"
          >
            <span className="text-blue-700 text-2xl mt-1">🏢</span>
            <p>Bisa untuk proyek gedung & rumah pribadi</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Proyek Terbaru */}
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

      {/* SECTION 6: Testimoni Klien */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Klien Kami
          </h2>
          <p className="text-lg text-gray-600">
            Beberapa klien yang puas dengan hasil kerja waterproofing dari Zen Workshop:
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 text-gray-700">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-100 p-6 rounded-xl shadow"
          >
            <p className="text-lg italic">“Pengerjaannya cepat dan rapi. Sudah 6 bulan tidak ada bocor lagi.”</p>
            <p className="mt-4 font-semibold text-sm text-gray-500">– Ibu Lina, Proyek Rumah Pribadi di Depok</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-100 p-6 rounded-xl shadow"
          >
            <p className="text-lg italic">“Teknisi profesional, hasilnya bersih dan detail. Recommended!”</p>
            <p className="mt-4 font-semibold text-sm text-gray-500">– Pak Hendra, Proyek Kantor Jakarta Timur</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-100 p-6 rounded-xl shadow md:col-span-2"
          >
            <p className="text-lg italic">“Sesuai janji, garansi diberikan dan hasil tahan hujan besar. Terima kasih tim Zen!”</p>
            <p className="mt-4 font-semibold text-sm text-gray-500">– Bapak Rudi, Proyek Gudang di Bekasi</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: FAQ Waterproofing */}
        <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum tentang Waterproofing
            </h2>
            <p className="text-lg text-gray-600">
            Beberapa hal penting yang sering ditanyakan klien kami.
            </p>
        </motion.div>

        <div className="space-y-6 text-lg text-gray-800 max-w-3xl mx-auto">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-50 p-5 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Berapa lama proses pengerjaan?</h3>
            <p>Lama pengerjaan tergantung luas area, umumnya 1–3 hari kerja.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-50 p-5 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Apakah ada garansi?</h3>
            <p>Ya, kami memberikan garansi hingga 1 tahun tergantung jenis pekerjaan dan material.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-50 p-5 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Bisa dikerjakan saat musim hujan?</h3>
            <p>Bisa, dengan pengaturan jadwal dan perlindungan area kerja dari air hujan.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-50 p-5 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Apakah harus mengupas dinding lama?</h3>
            <p>Tergantung kondisi permukaan. Kami akan survei dulu untuk menentukan metode terbaik.</p>
            </motion.div>
        </div>
        </section>

        {/* SECTION 8: CTA Akhir */}
        <section className="bg-blue-800 text-white py-20 px-4 md:px-8 max-w-6xl mx-auto text-center rounded-t-3xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Solusi Waterproofing Sekarang?
            </h2>
            <p className="text-lg md:text-xl mb-8">
            Kami siap bantu dari survei hingga garansi. Konsultasi gratis & bisa langsung booking jadwal pengerjaan!
            </p>
            <a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20booking%20jadwal%20untuk%20layanan%20waterproofing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-green-600 text-white rounded-2xl shadow-xl text-xl font-semibold transition"
            >
            <FaWhatsapp size={28} />
            Konsultasi & Booking via WhatsApp
            </a>
        </motion.div>
        </section>

        {/* SECTION 9: SEO & Lokasi Layanan */}
        <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Jasa Waterproofing Jabodetabek & Sekitarnya
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            Zen Workshop melayani berbagai proyek <strong>waterproofing atap beton, dinding luar, dan area rawan bocor</strong> lainnya dengan material terbaik dan teknisi bersertifikat.
            </p>
            <p className="text-md text-gray-600">
            Area layanan kami mencakup: <strong>Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, dan kota industri besar lainnya di Indonesia.</strong>
            </p>
            <p className="text-sm text-gray-500 mt-6">
            Keyword: jasa waterproofing, waterproofing atap beton, waterproofing dinding, anti bocor, waterproofing Jabodetabek
            </p>
        </motion.div>
        </section>





    </>
  );
}
