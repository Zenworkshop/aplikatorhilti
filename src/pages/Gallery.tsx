import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { projectImages } from './imageImports';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type KitchenCategory = 
  | 'All'
  | 'Minimalist'
  | 'Modern'
  | 'Classic'
  | 'L-Shape'
  | 'U-Shape'
  | 'Island'
  | 'Wood Finish'
  | 'Glossy Finish'
  | 'New';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  category: KitchenCategory[];
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<KitchenCategory>('All');

  const categories: KitchenCategory[] = [
    'All', 
    'Minimalist', 
    'Modern', 
    'Classic', 
    'L-Shape', 
    'U-Shape', 
    'Island', 
    'Wood Finish', 
    'Glossy Finish',
    'New'
  ];

  const filteredProjects = projectImages.filter(project => 
    activeFilter === 'All' || project.category.includes(activeFilter)
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: KitchenCategory) => {
    setActiveFilter(category);
    scrollToTop();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 pb-12 font-sans">
        {/* Header */}
        <div className="mb-12 mt-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4 text-green-700"
          >
            Zen Kitchen Set
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-700 max-w-xl mx-auto"
          >
            Jelajahi berbagai desain dapur modern & minimalis dari Zen Kitchen. Cocok untuk segala kebutuhan dan ruang.
          </motion.p>
        </div>

        {/* Filter Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  activeFilter === category 
                    ? 'bg-green-700 text-white font-semibold shadow' 
                    : 'bg-white text-gray-600 hover:bg-green-100 border-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.05) }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="overflow-hidden rounded-lg shadow-md bg-white"
              variants={itemVariants}
              layout
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 17 }}
            >
              <Zoom>
                <img 
                  src={project.src} 
                  alt={project.alt} 
                  className="w-full h-64 object-cover cursor-zoom-in"
                />
              </Zoom>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <motion.button 
            className="bg-white rounded-full shadow-lg p-4 text-green-700 flex items-center justify-center hover:bg-green-700 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageSquare size={24} />
          </motion.button>
        </motion.div>        
      </div>
      <Footer />
    </div>
  );
}
