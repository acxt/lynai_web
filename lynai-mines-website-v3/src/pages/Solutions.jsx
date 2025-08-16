import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

// Import images
import aiTechnology from '../assets/search_images/vfIkFbIKfuav.png';
import undergroundMining from '../assets/search_images/52HuYBcfQtBU.jpg';
import heroImage1 from '../assets/search_images/LYMSWEDpHvrH.jpg';
import mineralSamples from '../assets/search_images/EjuaeDfV2zCO.jpg';
import geologicalSurvey from '../assets/search_images/4EwV62EsQrN1.jpg';

const Solutions = () => {
  const technologies = [
    {
      title: "Big Data and AI Analytics",
      image: aiTechnology,
      description: "Advanced AI-driven analytics for precise mineral exploration and data-driven decision making."
    },
    {
      title: "Ambient Noise Tomography",
      image: undergroundMining,
      description: "Cutting-edge seismic imaging technology for detailed subsurface exploration and ore body detection."
    },
    {
      title: "Remote Sensing",
      image: heroImage1,
      description: "Satellite and drone-based remote sensing technology for comprehensive geological surveys and analysis."
    },
    {
      title: "Geochemical Analysis",
      image: mineralSamples,
      description: "Advanced geochemical analysis techniques for accurate mineral identification and assessment."
    },
    {
      title: "Traditional Geological Methods",
      image: geologicalSurvey,
      description: "Time-tested geological survey methods enhanced with modern AI and data analytics."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 mining-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Explore Our Technologies and Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our AI-driven solutions integrate advanced technologies like deep learning, drone-based exploration, and passive seismic technology to optimize mineral exploration and production, significantly enhancing efficiency and reducing costs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover-lift"
              >
                <div className="relative h-48">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground mb-4">{tech.description}</p>
                  <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 rock-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Client Feedback</h2>
            <p className="text-xl text-muted-foreground">
              Transforming mining with AI-driven solutions for precision and efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "LynAI MINES has significantly improved our mineral exploration processes. Highly recommended!"
              </p>
              <p className="font-semibold">John Smith</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The integration of AI and remote sensing by LynAI MINES has revolutionized our operations, providing insights that were previously unattainable. Truly a game changer in mining!"
              </p>
              <p className="font-semibold">William Morrell</p>
              <p className="text-sm text-muted-foreground">Armour Energy Limited, CTO</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;