import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Zap, Target, Users, Award, Mail, Phone, MapPin } from 'lucide-react';
import './App.css';

// Import images
import logo from './assets/logo.png';
import heroImage1 from './assets/search_images/LYMSWEDpHvrH.jpg';
import heroImage2 from './assets/search_images/VZQrhDNElGL3.webp';
import miningAerial from './assets/search_images/xtK4L15CerYZ.jpg';
import aiTechnology from './assets/search_images/vfIkFbIKfuav.png';
import droneImage from './assets/search_images/xJBevszjP2aw.jpg';
import mineralSamples from './assets/search_images/EjuaeDfV2zCO.jpg';
import mountainLandscape from './assets/search_images/Plslnu9tcsEO.jpeg';
import undergroundMining from './assets/search_images/52HuYBcfQtBU.jpg';
import geologicalSurvey from './assets/search_images/4EwV62EsQrN1.jpg';
import sandstoneTexture from './assets/search_images/ZzbSecGXtFqA.jpg';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Technical Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="LynAI MINES" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-button px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:text-primary hover:bg-secondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
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
            Our company is at the forefront of utilizing AI and data-driven decision-making systems 
            to revolutionize the mining industry. By integrating advanced technology and scientific methods, 
            we provide unparalleled accuracy and confidence in exploration and investment decisions.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">1001+</div>
              <div className="text-sm text-muted-foreground">Global Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">15</div>
              <div className="text-sm text-muted-foreground">Expert Team</div>
            </div>
          </div>

          <motion.button
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Solutions
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Laser beam effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 laser-beam"></div>
    </section>
  );
};

// Mission & Vision Section
const MissionVisionSection = () => {
  return (
    <section className="py-20 geological-pattern">
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
            Revolutionizing mineral exploration and production with cutting-edge AI solutions for a sustainable future.
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
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              LynAI MINES' mission is to redefine the efficiency and sustainability of mineral exploration 
              through breakthrough AI technology, providing intelligent and precise resource assurance for 
              global energy transition and industrial development. We aim to drive the mining industry 
              towards globalization, digitalization, and intelligence while reducing exploration risks 
              and costs, improving exploration efficiency, and lowering environmental impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              LynAI MINES' vision is to become the global leading AI-driven mineral exploration and 
              production company, leading industry innovation and establishing the global standard for 
              intelligent mining. By 2030, we aim to develop our GlobalAI platform into an industry 
              standard solution, establish a global service network, help clients increase exploration 
              success by 50%, and achieve intelligent transformation across the entire exploration process.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Core Values Section
const CoreValuesSection = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Breakthrough limitations through technological innovation, providing data-driven decision support and AI optimization."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Efficiency",
      description: "Shorter cycles, lower costs, and higher resource utilization through advanced AI-powered solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sustainability",
      description: "Lower environmental impact, promote responsible mining, and support green transformation initiatives."
    }
  ];

  return (
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
            Core Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift text-center"
            >
              <div className="text-primary mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionVisionSection />
      <CoreValuesSection />
    </div>
  );
};

// About Page Component
const AboutPage = () => {
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
                LynAI MINES brings together an exceptional team of world-renowned scientists, industry veterans, 
                and technology innovators. Our leadership team combines centuries of collective experience in 
                geological exploration, artificial intelligence, and mineral resource development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Led by Professor Xuance Wang, our Chief Scientist and founder, and Professor Simon Wilde, 
                our Non-Executive Chairman, our scientific team represents the pinnacle of geological expertise. 
                Professor Wang, with over 110 peer-reviewed publications and breakthrough discoveries in lithium 
                and gold exploration, works alongside Professor Wilde, a John Curtin Distinguished Professor 
                and recipient of prestigious international awards including the Goldschmidt Medal.
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
              A digital brain powered by AI and big data analytics, combining various techniques 
              to gather and analyze mineral system information.
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
    </div>
  );
};

// Solutions Page Component
const SolutionsPage = () => {
  const technologies = [
    {
      title: "Big Data and AI Analytics",
      image: aiTechnology,
      description: "Advanced AI-driven analysis for precision mineral exploration and data-driven decision making."
    },
    {
      title: "Ambient Noise Tomography",
      image: undergroundMining,
      description: "Cutting-edge seismic imaging technology for detailed subsurface exploration and ore body detection."
    },
    {
      title: "Remote Sensing",
      image: heroImage1,
      description: "Satellite and drone-based remote sensing for comprehensive geological survey and analysis."
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
              Our AI-driven solutions integrate advanced technologies like deep learning, drone-based exploration, 
              and passive seismic technology to optimize mineral exploration and production, significantly 
              enhancing efficiency and reducing costs.
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
                    Learn more
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
                  <span key={i} className="text-primary text-xl">★</span>
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
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The integration of AI and remote sensing by LynAI MINES has revolutionized our operations, 
                providing insights that were previously unattainable. Truly a game changer in mining!"
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

// Contact Page Component
const ContactPage = () => {
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
              Contact Us Today
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team of experts
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Prof. Xuan-Ce Wang</h4>
                      <p className="text-muted-foreground">x.wang4@uq.edu.au</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Dr. Yue Song</h4>
                      <p className="text-muted-foreground">geovisionai2024@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={droneImage}
                alt="AI-driven mineral exploration"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Placeholder components for other pages
const ServicesPage = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold gradient-text mb-4">Services</h1>
      <p className="text-muted-foreground">Services page coming soon...</p>
    </div>
  </div>
);

const CaseStudiesPage = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold gradient-text mb-4">Case Studies</h1>
      <p className="text-muted-foreground">Case studies page coming soon...</p>
    </div>
  </div>
);

const TeamPage = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold gradient-text mb-4">Technical Team</h1>
      <p className="text-muted-foreground">Team page coming soon...</p>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold gradient-text mb-4">Blog</h1>
      <p className="text-muted-foreground">Blog page coming soon...</p>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold gradient-text mb-4">Events</h1>
      <p className="text-muted-foreground">Events page coming soon...</p>
    </div>
  </div>
);

// Main App Component
function App() {
  return (
    <Router>
      <div className="App dark">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
