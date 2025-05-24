"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const layanan = [
  {
    title: "Jasa Pemasangan Chemical Rebar",
    price: "30.000",
    prefix: "Mulai Dari",
    currency: "Rp",
    points: [
      "Konsultasi Gratis",
      "Tersedia Berbagai Diameter Anchor",
      "Tersedia Berbagai Merek Chemical",
      "Material Berkualitas",
      "Pekerja Profesional Dan Bersertifikat",
      "Peralatan Canggih Dan Baru",
      "Proses Cepat",
      "Harga Fleksible",
    ],
  },
  {
    title: "Jasa Pemasangan Chemical Anchor",
    price: "30.000",
    prefix: "Mulai Dari",
    currency: "Rp",
    points: [
      "Konsultasi Gratis",
      "Tersedia Berbagai Diameter Anchor",
      "Tersedia Berbagai Merek Chemical",
      "Material Berkualitas",
      "Pekerja Profesional Dan Bersertifikat",
      "Peralatan Canggih Dan Baru",
      "Proses Cepat",
      "Harga Fleksible",
    ],
  },
  {
    title: "Jasa Tes Tarik / Pull Out Test",
    price: "100.000",
    prefix: "Mulai Dari",
    currency: "Rp",
    points: [
      "Konsultasi Gratis",
      "Tersedia Berbagai Diameter Anchor",
      "Tersedia Berbagai Merek Chemical",
      "Material Berkualitas",
      "Pekerja Profesional Dan Bersertifikat",
      "Peralatan Canggih Dan Baru",
      "Proses Cepat",
      "Harga Fleksible",
    ],
  },
];

export default function LayananGrid() {
  return (
    <section className="bg-[#1e3a5f] py-20 px-4 md:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {layanan.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
            className="
              flex flex-col bg-[#2a4468] rounded-lg shadow-lg overflow-hidden
              hover:shadow-xl transition-shadow duration-300
              border border-[#3b587f]
              cursor-pointer
            "
          >
            <div
              className="
                px-6 py-4 text-center text-lg font-semibold border-b border-[#3b587f]
                text-[#cbd5e1] bg-[#274463] rounded-t-lg
              "
            >
              {item.title}
            </div>

            <div className="py-6 text-center border-b border-[#3b587f]">
              <p className="text-gray-300 text-sm font-semibold mb-2">{item.prefix}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-gray-100 text-xl font-semibold mr-1">{item.currency}</span>
                <span className="text-white text-5xl font-bold">{item.price}</span>
              </div>
            </div>

            <div className="p-6 pt-4 flex-grow">
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
            <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20tanya%20tentang%20layanan%20aplikator%20Hilti"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-3
                bg-[#2a4468] text-[#cbd5e1] px-8 py-4 rounded-full
                text-lg font-semibold border border-[#3b587f]
                hover:bg-[#274463] hover:text-white
                transition shadow-lg cursor-pointer
                "
            >
                <FaWhatsapp size={24} />
                Konsultasi Gratis
            </a>
      </div>

    </section>
  );
}
