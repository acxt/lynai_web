import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Target } from 'lucide-react';

// Import images
import aiTechnology from '../assets/search_images/vfIkFbIKfuav.png';

const About = () => {
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
              Leading Innovation in Mineral Exploration
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Unleashing the Power of AI for Sustainable and Accurate Mineral Discovery
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Expert Leadership in AI-Driven Mineral Exploration</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                LynAI MINES brings together an exceptional team of world-renowned scientists, industry veterans, and technology innovators. Our leadership team combines centuries of collective experience in geological exploration, artificial intelligence, and mineral resource development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Led by Professor Xuance Wang, our Chief Scientist and founder, and Professor Simon Wilde, our Non-Executive Chairman, our scientific team represents the pinnacle of geological expertise. Professor Wang, with over 110 peer-reviewed publications and breakthrough discoveries in lithium and gold exploration, works alongside Professor Wilde, a John Curtin Distinguished Professor and recipient of prestigious international awards including the Goldschmidt Medal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={aiTechnology}
                alt="AI Technology in Mining"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 geological-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Innovative System</h2>
            <p className="text-xl text-muted-foreground">
              A digital brain powered by AI and big data analytics, combining various techniques to gather and analyze mineral system information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "AI & Big Data Analytics",
              "Remote Sensing",
              "Ambient Noise Tomography Technology",
              "Cutting-edge Geochemistry Analysis",
              "Traditional Geoscience Methods",
              "Mining Geology Methods"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover-lift text-center"
              >
                <h3 className="text-lg font-semibold text-primary">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 rock-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Transforming Mining Through Advanced AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing mineral exploration and production with cutting-edge AI solutions for a sustainable future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift"
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                LynAI MINES' mission is to redefine the efficiency and sustainability of mineral exploration through breakthrough AI technology, providing intelligent and precise resource assurance for global energy transition and industrial development. We aim to drive the mining industry towards globalization, digitalization, and intelligence, while reducing exploration risks and costs, improving exploration efficiency, and lowering environmental impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                LynAI MINES' vision is to become the global leading AI-driven mineral exploration and production company, leading industry innovation and establishing the global standard for intelligent mining. By 2030, we aim to develop our GlobalAI platform into an industry standard solution, establish a global service network, help clients increase exploration success by 50%, and achieve intelligent transformation across the entire exploration process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 mining-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Team Excellence</h2>
            <p className="text-xl text-muted-foreground">
              Bringing together world-class experts to advance AI mining technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-12 h-12" />, number: "15+", label: "Professional Team Members" },
              { icon: <Award className="w-12 h-12" />, number: "110+", label: "Research Publications" },
              { icon: <Globe className="w-12 h-12" />, number: "20+", label: "International Projects" },
              { icon: <Target className="w-12 h-12" />, number: "50+", label: "Success Cases" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;