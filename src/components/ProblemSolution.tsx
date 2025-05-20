"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import kitchenImg from "../assets/kitchen_main.jpg";

const problems = [
  "Tampilan Dapur Terlihat Biasa Saja",
  "Kurangnya Penyimpanan yang Efisien",
  "Material Mudah Rusak & Lembap",
  "Sulit Dibersihkan & Tidak Higienis",
];

export default function ProblemSolution() {
  return (
    <section className="bg-[#0D2C40] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center">
      {/* Kiri - Gambar */}
      <motion.div
        className="flex flex-col items-center md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative rounded-xl overflow-hidden w-80 h-96 shadow-xl">
          <img 
            src={kitchenImg} 
            alt="Zen Kitchen Set" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-[#000000aa] text-white px-4 py-2 text-lg font-semibold rounded-md">
            Zen Kitchen Set
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-32 h-20 rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={kitchenImg}
              alt="Dapur Berantakan"
              className="w-full h-full object-cover"
            />
            <div className="bg-black text-white text-sm text-center py-1">Dapur Tidak Rapi</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-32 h-20 rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={kitchenImg}
              alt="Kabinet Kusam"
              className="w-full h-full object-cover"
            />
            <div className="bg-black text-white text-sm text-center py-1">Kabinet Kusam</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Kanan - Teks & List */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 md:pl-16"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Masalah Umum</h3>
        <h2 className="text-3xl font-bold mt-2 text-white">Dapur Lama Membuat Tidak Nyaman?</h2>
        <p className="text-gray-300 mt-4 leading-relaxed">
          Banyak orang merasa dapur mereka tidak mencerminkan gaya hidup modern. Berikut beberapa masalah umum yang sering dialami:
        </p>

        <ul className="mt-6 space-y-4">
          {problems.map((problem, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 text-lg font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <XCircle size={24} className="text-yellow-500" />
              {problem}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
