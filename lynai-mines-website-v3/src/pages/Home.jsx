import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Shield, Star, Globe, Users, Building2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import heroImage1 from '../assets/search_images/LYMSWEDpHvrH.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage1}
            alt="Mining exploration background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 mining-texture"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">LynAI MINES</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Revolutionizing Mineral Exploration with AI
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our company is at the forefront of utilizing AI and data-driven decision-making systems to revolutionize the mining industry. By integrating advanced technology and scientific methods, we provide unparalleled accuracy and confidence in exploration and investment decisions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <motion.button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/solutions" className="flex items-center gap-2">
                  Explore Our Solutions
                  <ArrowRight size={20} />
                </Link>
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Laser beam effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 laser-beam"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, number: "1001+", label: "Global Reach" },
              { icon: <Users className="w-8 h-8" />, number: "15", label: "Expert Team" },
              { icon: <Building2 className="w-8 h-8" />, number: "50+", label: "Successful Projects" },
              { icon: <MapPin className="w-8 h-8" />, number: "20+", label: "Countries Served" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos Section */}
      <section className="py-16 geological-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-muted-foreground mb-8">
              Trusted by Leading Global Enterprises
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* 占位品牌logo - 这些将被实际的合作伙伴logo替换 */}
              {[1, 2, 3, 4, 5, 6].map((brand) => (
                <div
                  key={brand}
                  className="w-32 h-16 bg-muted/30 rounded-lg flex items-center justify-center border border-border"
                >
                  <span className="text-muted-foreground text-sm">Brand {brand}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Providing revolutionary solutions for mineral exploration through advanced AI technology and data analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Efficiency Optimization",
                description: "Significantly reduce exploration cycles, lower costs, and improve resource utilization through AI-driven analysis"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Risk Control",
                description: "Maximize risk reduction and improve success rates through precise data analysis and predictive models"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Sustainable Development",
                description: "Environmentally friendly exploration methods supporting green transformation and responsible mining practices"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift text-center"
              >
                <div className="text-primary mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <section className="py-20 mining-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Customer Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              Learn how our clients achieve success through our AI solutions
            </p>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            {[
              {
                name: "John Smith",
                company: "Global Mining Corp",
                content: "LynAI MINES has significantly improved our mineral exploration processes. Highly recommended!",
                rating: 5
              },
              {
                name: "William Morrell",
                company: "Armour Energy Limited, CTO",
                content: "The integration of AI and remote sensing by LynAI MINES has revolutionized our operations, providing insights that were previously unattainable. Truly a game changer in mining!",
                rating: 5
              },
              {
                name: "Dr. Sarah Chen",
                company: "Pacific Resources Ltd",
                content: "Their data-driven approach helped us reduce exploration costs by 40% while improving discovery rates.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border min-w-[350px] snap-start"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 geological-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Ready to Start Your AI Exploration Journey?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact our expert team to learn how our AI solutions can revolutionize your mineral exploration processes
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us Now
                <ArrowRight size={20} />
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;