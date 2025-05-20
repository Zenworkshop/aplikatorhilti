import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const testimonials = [
  {
    name: "Laras Putri",
    review: "Kitchen set custom dari Zen benar-benar membuat dapur kami jadi lebih estetik dan fungsional. Suka banget hasil akhirnya!",
    stars: 5,
  },
  {
    name: "Budi Santosa",
    review: "Proses konsultasi sangat membantu, desainnya sesuai keinginan dan hasil pengerjaannya rapi. Sangat puas!",
    stars: 5,
  },
  {
    name: "Rina Ayu",
    review: "Zen Kitchen Set memberikan sentuhan elegan pada dapur saya. Pelayanannya cepat dan profesional.",
    stars: 5,
  },
  {
    name: "Kevin Rahman",
    review: "Pelayanan ramah dan komunikatif. Hasil akhir kitchen set sesuai dengan harapan kami, bahkan lebih.",
    stars: 5,
  },
  {
    name: "Anita Dewi",
    review: "Tim Zen benar-benar memperhatikan detail. Terima kasih sudah membuat dapur impian saya jadi kenyataan.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f9fafb] py-20 px-6 md:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-[#d97706] text-sm font-semibold uppercase tracking-wider">
          Testimoni
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-1">
          Apa Kata Klien Zen Kitchen Set?
        </h2>
      </motion.div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                <MessageSquare className="text-orange-500" size={20} />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">{item.name}</h3>
            </div>
            <p className="text-gray-600">{item.review}</p>
            <div className="flex items-center mt-3">
              {Array.from({ length: item.stars }).map((_, i) => (
                <Star key={i} className="text-yellow-500" size={18} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Review CTA */}
      <div className="flex justify-center mt-12">
        <motion.a
          href="https://maps.app.goo.gl/kKFFpca4TbKUL34t9"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#0D2C40] hover:bg-orange-500 text-white rounded-lg shadow-md flex items-center gap-2"
        >
          <Star size={20} />
          Lihat Ulasan Google Kami
        </motion.a>
      </div>

      {/* Call to Action */}
      <div className="mt-20 bg-[#1f2937] text-white py-12 px-6 md:px-20 rounded-xl text-center shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Siap Wujudkan Kitchen Set Impian Anda?
        </motion.h2>
        <p className="mt-3 text-gray-300">
          Klik tombol di bawah untuk konsultasi gratis bersama tim Zen Kitchen Set.
        </p>

        <div className="mt-6 flex justify-center">
          <motion.a
            href="https://wa.me/6281244997748?text=Halo%20Zen%20Kitchen%20Set,%20saya%20ingin%20konsultasi%20mengenai%20kitchen%20set."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-[#1f2937] rounded-lg shadow-md font-semibold flex items-center gap-2"
          >
            <FaWhatsapp className="text-green-500" />
            Konsultasi via WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}
