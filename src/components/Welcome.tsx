import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutGrid, ThumbsUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import kitchenIcon from '../assets/logo_zen_kitchenset.png';
import cupboardIcon from '../assets/logo_zen_kitchenset.png';
import countertopIcon from '../assets/logo_zen_kitchenset.png';
import pengalamanImg from "../assets/logo_zen_kitchenset.png";

export default function Welcome() {
  const stats = [
    {
      icon: <Users size={48} className="text-blue-500" />,
      value: "25+",
      label: "Professional Team",
    },
    {
      icon: <LayoutGrid size={48} className="text-blue-500" />,
      value: "906+",
      label: "Projects Completed",
    },
    {
      icon: <ThumbsUp size={48} className="text-blue-500" />,
      value: "504+",
      label: "Satisfied Customer",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const serviceItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left - Image & Badge */}
        <motion.div
          className="w-full md:w-1/2 relative mb-12 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={pengalamanImg}
              alt="Foto pengalaman Zen Kitchen Set"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-4 md:right-12 bg-[#0D2C40] text-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <div className="text-4xl font-bold">6<sup>+</sup></div>
            <div className="text-sm md:text-base">Tahun Pengalaman</div>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 md:pl-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-orange-400 mb-1">SELAMAT DATANG DI</motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Zen Workshop
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-gray-600 mb-8"
            >
              Zen Workshop adalah penyedia jasa pembuatan kitchen set aluminium dan furniture custom bergaya minimalis modern, dengan desain elegan, harga kompetitif, dan kualitas terbaik. <strong>Kami melayani pembuatan kitchen set anti rayap, lemari aluminium, serta berbagai interior rumah yang fungsional dan estetik,</strong> untuk menciptakan hunian yang nyaman dan tahan lama.
            </motion.p>

            {/* Services */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              <motion.div className="flex items-start" variants={serviceItem}>
                <div className="mr-4 border p-2 rounded">
                  <img src={kitchenIcon} alt="Kitchen Icon" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Kitchen Set Custom</h3>
                  <p className="text-sm text-gray-600">
                    Kami menyediakan kitchen set custom sesuai dengan desain dan kebutuhan Anda.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={serviceItem}>
                <div className="mr-4 border p-2 rounded">
                  <img src={cupboardIcon} alt="Cupboard Icon" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Lemari Dapur</h3>
                  <p className="text-sm text-gray-600">
                    Kami membuat lemari dapur dengan desain yang fungsional dan modern.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={serviceItem}>
                <div className="mr-4 border p-2 rounded">
                  <img src={countertopIcon} alt="Countertop Icon" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Countertop</h3>
                  <p className="text-sm text-gray-600">
                    Kami menyediakan berbagai jenis countertop berkualitas untuk dapur Anda.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={serviceItem}>
                <div className="mr-4 border p-2 rounded">
                  <img src={kitchenIcon} alt="Kitchen Icon" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Desain Dapur</h3>
                  <p className="text-sm text-gray-600">
                    Kami membantu Anda merancang dapur impian dengan desain yang sesuai kebutuhan.
                  </p>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
