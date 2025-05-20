"use client";

import { motion } from "framer-motion";
import kitchenOrderImg from "../assets/zenkitchen1.jpg"; // Ganti dengan gambar kitchen set jika tersedia

const steps = [
  {
    id: "01",
    title: "Konsultasi Desain",
    desc: "Diskusikan ide, kebutuhan dapur Anda, dan preferensi gaya dengan tim desain Zen Kitchen Set.",
  },
  {
    id: "02",
    title: "Survey & Pengukuran",
    desc: "Tim kami akan datang langsung ke lokasi Anda untuk melakukan pengukuran secara akurat.",
  },
  {
    id: "03",
    title: "Penyusunan Desain 3D",
    desc: "Lihat visualisasi dapur impian Anda melalui desain 3D yang realistis dan detail.",
    highlight: true,
  },
  {
    id: "04",
    title: "Pembuatan & Produksi",
    desc: "Kami mulai memproduksi kitchen set sesuai desain dan spesifikasi yang telah disetujui.",
  },
  {
    id: "05",
    title: "Instalasi & Finishing",
    desc: "Dapur Anda dipasang dengan presisi, lengkap dengan finishing rapih dan layanan purna jual.",
  },
];

export default function OrderSection() {
  return (
    <section className="bg-[#f9fafb] py-20 px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">
          Proses Pemesanan
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">Langkah Membuat Kitchen Set</h2>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar & Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={kitchenOrderImg}
            alt="Zen Kitchen Set"
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <p className="mt-6 text-gray-600 leading-relaxed">
            Zen Kitchen Set hadir untuk mewujudkan dapur impian Anda. Dengan desain yang
            personal, fungsionalitas maksimal, dan kualitas premium — kami pastikan setiap prosesnya
            menyenangkan dan mudah.
          </p>
          <a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Kitchen%20Set,%20saya%20ingin%20konsultasi."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 bg-[#1e3a5f] text-white rounded-lg shadow hover:bg-[#27496d] transition"
          >
            Konsultasi Sekarang
          </a>
        </motion.div>

        {/* Langkah-langkah Pemesanan */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative p-6 rounded-xl border-l-4 ${
                step.highlight ? "bg-[#1e3a5f] text-white border-orange-400" : "bg-white border-gray-200"
              } shadow-sm hover:shadow-md transition`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`absolute -left-6 top-6 w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm ${
                step.highlight ? "bg-orange-400 text-white" : "bg-orange-100 text-orange-600"
              }`}>
                {step.id}
              </div>
              <h3 className={`text-xl font-semibold ${step.highlight ? "text-white" : "text-gray-800"} ml-6`}>
                {step.title}
              </h3>
              <p className={`mt-2 ml-6 ${step.highlight ? "text-gray-100" : "text-gray-600"}`}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
