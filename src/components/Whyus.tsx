import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Desain Elegan",
    desc: "Zen Kitchen Set hadir dengan desain minimalis dan estetika modern yang cocok untuk berbagai gaya interior.",
  },
  {
    title: "Custom Sesuai Kebutuhan",
    desc: "Dapat disesuaikan dengan ukuran ruang dapur dan preferensi Anda secara fleksibel.",
  },
  {
    title: "Material Premium",
    desc: "Menggunakan bahan berkualitas tinggi seperti plywood anti air dan finishing HPL yang tahan lama.",
  },
  {
    title: "Harga Terjangkau",
    desc: "Solusi dapur impian dengan harga yang kompetitif tanpa mengorbankan kualitas.",
  },
  {
    title: "Tim Profesional",
    desc: "Didukung oleh tim berpengalaman dalam desain dan pemasangan kitchen set.",
  },
  {
    title: "Proses Cepat & Rapi",
    desc: "Mulai dari desain hingga instalasi, semua dilakukan secara presisi dan tepat waktu.",
  },
  {
    title: "Garansi Pengerjaan",
    desc: "Setiap proyek dilindungi oleh garansi untuk memberikan Anda ketenangan.",
  },
  {
    title: "Free Konsultasi",
    desc: "Diskusikan kebutuhan dapur Anda secara gratis bersama tim desainer kami.",
  },
];

export default function WhyUsZenKitchen() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Kenapa Memilih Kami?</h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">Zen Kitchen Set, Lebih dari Sekadar Dapur</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Kami hadir untuk memberikan solusi dapur modern yang indah, fungsional, dan tahan lama.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-green-500 mt-1">
              <CheckCircle size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
