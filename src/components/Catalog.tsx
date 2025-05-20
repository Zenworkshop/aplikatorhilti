"use client";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import dapur1 from "../assets/kitchen1.jpg";
import dapur2 from "../assets/kitchen2.jpg";
import dapur3 from "../assets/kitchen3.jpg";
import dapur4 from "../assets/kitchen4.jpg";
import dapur5 from "../assets/kitchen5.jpg";

const kitchens = [
  { title: "Kitchen Set Minimalis", image: dapur1 },
  { title: "Kitchen Set Industrial", image: dapur2 },
  { title: "Kitchen Set Natural Wood", image: dapur3 },
  { title: "Kitchen Set Monokrom", image: dapur4 },
  { title: "Kitchen Set Scandinavian", image: dapur5 }];

export default function Catalog() {
  return (
    <section className="bg-white text-gray-900 px-6 md:px-20 py-16">
      {/* Judul & CTA */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <div>
          <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-widest">Galeri</h3>
          <h2 className="text-4xl font-bold">Kitchen Set dari Zen</h2>
          <p className="text-gray-500 mt-2">Lihat berbagai inspirasi kitchen set yang telah kami kerjakan untuk hunian elegan Anda.</p>
        </div>
        <motion.button
          className="bg-[#1e3a5f] hover:bg-[#2a4d73] text-white px-6 py-2 rounded-lg font-medium shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/gallery">Lihat Semua →</Link>
        </motion.button>
      </div>

      {/* Galeri Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {kitchens.map((item, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
