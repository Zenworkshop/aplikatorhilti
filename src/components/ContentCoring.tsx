import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaTools,
  FaBuilding,
  FaRulerCombined,
  FaUserTie,
  FaPlug,
  FaHome,
  FaRoad,
  FaIndustry,
  FaLayerGroup
} from "react-icons/fa";
import heroImage from "../assets/HILTI/ca3.png";
import coringDetail from "../assets/HILTI/ca3.png";
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

export default function ContentCoring() {
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
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jasa Coring Beton Profesional – Lantai & Dinding
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Presisi tinggi, minim getaran, cocok untuk semua proyek konstruksi
          </p>
          <a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20konsultasi%20tentang%20jasa%20coring%20beton."
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
            src={heroImage}
            alt="Jasa Coring Beton"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </section>

      {/* Section 2: Kenapa Coring Itu Penting */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={coringDetail}
            alt="Kenapa Coring Itu Penting"
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
            Kenapa Coring Itu Penting?
          </h2>
          <div className="space-y-5 text-lg text-gray-700">
            <p>
              Coring adalah metode pengeboran beton yang digunakan untuk membuka jalur pipa, kabel, ventilasi, atau keperluan teknis lainnya tanpa merusak struktur utama bangunan.
            </p>
            <p>
              Berbeda dengan pengeboran manual, coring menggunakan alat khusus seperti mesin Hilti yang menghasilkan lubang lebih rapi, cepat, dan minim getaran.
            </p>
            <p>
              Jika dilakukan sembarangan, proses pengeboran bisa menyebabkan retak struktural, suara bising, atau kerusakan pada permukaan beton yang memakan biaya perbaikan lebih mahal.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Keunggulan Jasa Coring dari Zen Workshop */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Keunggulan Jasa Coring dari Zen Workshop
          </h2>
          <ul className="space-y-6 text-lg text-gray-700 text-left">
            <li className="flex items-start gap-4">
              <FaTools className="text-blue-600 mt-1" />
              Mesin coring Hilti presisi tinggi
            </li>
            <li className="flex items-start gap-4">
              <FaRulerCombined className="text-blue-600 mt-1" />
              Bisa coring vertikal (dinding) & horizontal (lantai)
            </li>
            <li className="flex items-start gap-4">
              <FaBuilding className="text-blue-600 mt-1" />
              Minim getaran, aman untuk area aktif (kantor/rumah)
            </li>
            <li className="flex items-start gap-4">
              <FaUserTie className="text-blue-600 mt-1" />
              Tim teknisi berpengalaman dan bersertifikat
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-600 mt-1" />
              Lubang coring rapi & tidak merusak struktur
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Section 4: Jenis Proyek yang Bisa Dilayani */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Jenis Proyek yang Bisa Dilayani
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
          >
            <FaPlug className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instalasi Pipa & Kabel</h3>
            <p className="text-gray-600 text-sm">Coring presisi untuk jalur utilitas teknis.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
          >
            <FaLayerGroup className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gedung Bertingkat</h3>
            <p className="text-gray-600 text-sm">Untuk coring antar lantai & dinding lift.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
          >
            <FaHome className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rumah & Renovasi</h3>
            <p className="text-gray-600 text-sm">Aman untuk rumah tinggal, minim getaran.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
          >
            <FaRoad className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Infrastruktur</h3>
            <p className="text-gray-600 text-sm">Jalan raya, jembatan, dan proyek sipil lainnya.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
          >
            <FaIndustry className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proyek Industri</h3>
            <p className="text-gray-600 text-sm">Pabrik, warehouse, dan instalasi teknis industri.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Dokumentasi Proyek Coring */}
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

      {/* Section 6: Testimoni Klien */}
      <section className="bg-gray-100 py-20 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Apa Kata Klien Kami
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-left flex flex-col justify-between"
          >
            <p className="text-gray-700 text-lg italic mb-4">“Cepat & rapi, teknisinya sopan dan hasil bersih. Recommended!”</p>
            <p className="text-sm font-semibold text-gray-600">– Pak R, Proyek Bekasi</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-left flex flex-col justify-between"
          >
            <p className="text-gray-700 text-lg italic mb-4">“Prosesnya cepat, alatnya canggih. Nggak berisik dan hasilnya presisi.”</p>
            <p className="text-sm font-semibold text-gray-600">– Ibu D, Rumah Pribadi Depok</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-left flex flex-col justify-between"
          >
            <p className="text-gray-700 text-lg italic mb-4">“Saya puas, teknisinya sigap dan ngerti kebutuhan lapangan.”</p>
            <p className="text-sm font-semibold text-gray-600">– Pak H, Proyek Kantor Jakarta</p>
          </motion.div>
        </div>
      </section>

      {/* Section 7: FAQ – Pertanyaan Umum */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Pertanyaan yang Sering Ditanyakan
        </motion.h2>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {[
            {
              q: "Apakah lantai perlu dibobok dulu?",
              a: "Tidak perlu. Dengan coring, kami langsung membuat lubang pada permukaan beton tanpa harus membobok terlebih dahulu."
            },
            {
              q: "Berapa diameter lubang coring?",
              a: "Diameter standar berkisar antara 2 inci hingga 8 inci, tergantung kebutuhan proyek Anda."
            },
            {
              q: "Apakah bisa malam hari / weekend?",
              a: "Ya, kami menyediakan layanan fleksibel termasuk pengerjaan malam hari atau akhir pekan sesuai kebutuhan proyek."
            },
            {
              q: "Apakah meninggalkan bekas?",
              a: "Lubang hasil coring bersih dan rapi. Jika perlu finishing tambahan, kami bisa bantu tutup kembali dengan material sesuai permintaan."
            }
          ].map((item, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group py-6 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-lg font-medium text-gray-800">
                {item.q}
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-gray-600 text-base leading-relaxed">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* Section 8: CTA Section – Konsultasi & Booking */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Pastikan Kualitas Coring Beton Anda?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Konsultasi gratis & survei lokasi langsung oleh tim profesional kami 👷‍♂️
          </p>
          <a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20jadwalkan%20coring%20beton."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-800 hover:bg-gray-100 rounded-xl text-lg font-semibold shadow-lg transition"
          >
            <FaWhatsapp size={24} />
            Konsultasi via WhatsApp
          </a>
        </motion.div>
      </section>

       {/* Section 9: SEO & Lokasi Layanan */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Area Layanan & Kata Kunci Terkait
        </motion.h2>

        <p className="text-lg text-gray-700 mb-4">
          Kami melayani <strong>proyek pengeboran beton (coring)</strong> untuk lantai dan dinding di berbagai wilayah:
        </p>
        <p className="text-base text-gray-600 mb-8">
          Jabodetabek • Bandung • Karawang • Bekasi • Tangerang • Bogor • dan sekitarnya.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md inline-block text-left max-w-xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Keyword Unggulan:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>jasa coring lantai beton</li>
            <li>coring dinding beton profesional</li>
            <li>pengeboran beton hilti</li>
            <li>tukang coring Jabodetabek</li>
            <li>coring beton rumah & gedung bertingkat</li>
          </ul>
        </div>
      </section>

      
    </>
  );
}
