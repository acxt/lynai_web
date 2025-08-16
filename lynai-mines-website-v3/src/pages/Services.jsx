import React from 'react';
import { motion } from 'framer-motion';
import { 
  Satellite, 
  Eye, 
  Target, 
  Factory, 
  Mail, 
  ArrowRight,
  MapPin,
  Layers,
  Zap,
  BarChart3,
  Settings,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PlaceholderMedia from '../components/ui/PlaceholderMedia';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Satellite className="w-16 h-16" />,
      title: "AI-Powered Remote Sensing for Greenfield Projects",
      subtitle: "Discover New Horizons with Intelligent Analysis",
      description: "Harness the power of AI and data-driven remote sensing to identify mineral-rich zones with unmatched accuracy. Our solutions integrate satellite, drone, and ground-based technologies with advanced analytics.",
      features: [
        "Intelligent Data Selection: AI-driven analysis identifies the most effective data sources, such as Landsat, ASTER, and hyperspectral imaging",
        "Enhanced Image Processing: Spectral analysis and machine learning improve interpretation accuracy", 
        "Automated Target Area Selection: AI pinpoints high-potential exploration zones",
        "Actionable Insights: Comprehensive maps and reports reveal opportunities and risks"
      ],
      cta: "Cut costs and enhance discovery rates with our AI-driven remote sensing expertise.",
      background: "mountain-range"
    },
    {
      id: 2,
      icon: <Eye className="w-16 h-16" />,
      title: "AI-Enhanced Ore-Body CT Scanning with Ambient Noise Tomography",
      subtitle: "Deep Exploration Made Smarter",
      description: "Our AI-integrated Ambient Noise Tomography technology provides precise imaging of subsurface structures, helping you locate ore bodies, faults, water resources, and geothermal reservoirs more efficiently.",
      features: [
        "AI-Optimized Imaging: High-resolution subsurface visuals up to 3 km deep",
        "Resource Detection: Machine learning algorithms improve the accuracy of mineral and water resource identification",
        "Strategic Insights: Data-driven recommendations minimize drilling and optimize exploration"
      ],
      cta: "Experience affordable, sustainable, and AI-enhanced exploration solutions.",
      background: "contour-lines"
    },
    {
      id: 3,
      icon: <Target className="w-16 h-16" />,
      title: "AI-Driven Geological Target Selection",
      subtitle: "Redefine Exploration with Big Data and Machine Learning",
      description: "Revolutionize your exploration efforts with AI-powered analytics. By integrating geoscience expertise with machine learning, we provide a transformative approach to mineral discovery.",
      features: [
        "Advanced Data Analytics: Machine learning algorithms identify high-potential exploration zones",
        "Precision Mineral Detection: AI models analyze geochemical and geophysical data to detect and characterize deposits",
        "Resource Estimation: Confidently estimate reserves with data-driven precision",
        "Exploration Strategy Optimization: AI refines exploration plans, saving time and resources"
      ],
      cta: "Transform your exploration process with intelligent, AI-driven solutions.",
      background: "drilling-pattern"
    },
    {
      id: 4,
      icon: <Factory className="w-16 h-16" />,
      title: "AI-Optimized Mining Production Design & Facilities Solutions",
      subtitle: "Turn Data Into Profitable Operations",
      description: "Leverage data and AI to transform mineral resources into efficient, profitable mining operations. Our holistic approach integrates AI-powered resource estimation, custom production design, and facility development to ensure optimal results.",
      features: [
        "Data-Driven Resource Estimation: Build accurate geological models and resource estimates with AI analytics",
        "AI-Optimized Production Plans: Tailored mining production designs ensure efficiency, safety, and profitability",
        "Smart Facility Design: AI-powered tools optimize facility integration for seamless operations"
      ],
      cta: "Let our data-driven expertise turn your resources into operational success.",
      background: "purple-pink-gradient"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI and Data Expertise",
      description: "Cutting-edge machine learning and analytics drive every solution"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customized, Scalable Services",
      description: "Tailored to meet your project's unique needs"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "End-to-End Support",
      description: "Comprehensive assistance from exploration to production"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center full-screen-hero desert-landscape">
        {/* Hero Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <PlaceholderMedia 
            type="image"
            width="w-full"
            height="h-full"
            title="AI Drone Fleet Exploration Operations"
            description="hero_backend.png - Mining site overlay image (50% transparency)"
            className="rounded-none"
          />
          <div className="absolute inset-0 hero-backend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Transforming Mineral Exploration and Production</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              with AI and Data-Driven Innovation
            </h2>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
              Unleash the Power of AI to Drive Success in Mining
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our advanced, AI-powered solutions revolutionize mineral exploration and production, enabling you to discover, analyze, and optimize with precision and confidence. Whether it's greenfield exploration, deep-earth resource identification, or production optimization, our cutting-edge technologies ensure maximum efficiency, reduced risks, and superior results.
            </p>
          </motion.div>
        </div>

        {/* Light beam effect */}
        <div className="absolute top-1/4 left-0 w-full h-2 light-beam opacity-30"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 mineral-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Four Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional AI solutions covering the complete mining value chain from exploration to production
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${service.background} rounded-2xl overflow-hidden`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="text-primary glow-effect p-3 rounded-xl bg-card/30 backdrop-blur-sm">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                        <p className="text-lg text-primary font-semibold">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <p className="text-primary font-semibold flex items-center space-x-2">
                        <BarChart3 className="w-5 h-5" />
                        <span>{service.cta}</span>
                      </p>
                    </div>
                  </div>

                  {/* Media Placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <PlaceholderMedia 
                      type="image"
                      height="h-80"
                      title={`Service ${service.id} Showcase`}
                      description={`Technical demonstration image related to ${service.title}`}
                      className="hover-lift"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Us?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift text-center tech-glow"
              >
                <div className="text-primary mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 geological-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm p-12 rounded-2xl border border-border text-center space-y-8"
          >
            <div className="flex justify-center">
              <Mail className="w-16 h-16 text-primary glow-effect" />
            </div>
            <h2 className="text-4xl font-bold gradient-text">Contact Us Today</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your AI-driven exploration project? Contact our expert team for personalized consultation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-muted/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Prof. Xuan-Ce Wang</h3>
                <p className="text-muted-foreground flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>x.wang4@uq.edu.au</span>
                </p>
              </div>
              <div className="bg-muted/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Dr. Yue Song</h3>
                <p className="text-muted-foreground flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>geovisionai2024@gmail.com</span>
                </p>
              </div>
            </div>

            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;