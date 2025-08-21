import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  Users, 
  Globe,
  Star,
  TrendingUp,
  ArrowRight,
  Mail,
  Phone,
  ExternalLink,
  Newspaper,
  Trophy,
  Briefcase
} from 'lucide-react';
import PlaceholderMedia from '../components/ui/PlaceholderMedia';

const Events = () => {
  const mainEvent = {
    title: "LynAI MINES Founder Prof. Xuance Wang Recognized Among Top 2% Scientists Globally and Joins the Asian Council of Science Editors",
    date: "February 12, 2025",
    location: "Perth, Western Australia",
    category: "Major Recognition",
    summary: "Prof. Xuance Wang receives significant international recognition, further establishing LynAI MINES as a leader in AI for geosciences."
  };

  const eventHighlights = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Global Top 2% Scientist",
      description: "Recognized by the Stanford University & Elsevier data-driven list"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "ACSE Membership",
      description: "Elected to the Asian Council of Science Editors (ACSE)"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Scientific Impact",
      description: "Assessed via normalized citation impact, h-index, and related metrics"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Contribution",
      description: "Advancing global knowledge exchange and collaboration"
    }
  ];

  const newsContent = [
    {
      section: "Recognition of Global Scientific Impact",
      content: `Prof. Xuance Wang’s outstanding research in geosciences and geochemistry has been internationally recognized with inclusion among the world’s top 2% scientists. The list is a data-driven ranking based on the Scopus database and evaluates scholars across disciplines using metrics such as standardized citation impact, h-index, co-authorship-adjusted indices, and single-author indices. This recognition highlights Prof. Wang’s significant influence in geology and geochemistry.`
    },
    {
      section: "Contributions to Scholarly Publishing in Asia-Pacific",
      content: `Prof. Wang has been elected to the Asian Council of Science Editors (ACSE), underscoring his commitment to advancing scientific progress. ACSE is a leading organization in the Asia-Pacific region that promotes high-quality scholarly publishing, open science, and cross-disciplinary collaboration. As a member, Prof. Wang will contribute expertise across journal editing, research integrity, data sharing, and publishing technologies to help disseminate scientific discoveries globally.`
    },
    {
      section: "LynAI MINES: Leading AI for Geosciences",
      content: `Founded by Prof. Wang, LynAI MINES is at the forefront of AI-driven research and development in geosciences. The company builds intelligent solutions for mineral exploration, resource assessment, and geohazard prediction. By leveraging big data, deep learning, and remote sensing, LynAI MINES is transforming the accuracy and efficiency of mineral exploration and accelerating the digital transformation of the global geoscience industry.`
    },
    {
      section: "Looking Ahead",
      content: `LynAI MINES is committed to pushing the boundaries of AI-driven geosciences. We will continue investing in the integration of AI and geoscience datasets to enable smarter exploration, support the sustainable development of mineral resources, and contribute to a more connected, digital Earth. Our goal is to lead both scientific research and industry innovation worldwide.`
    }
  ];

  const companyInfo = {
    description:
      "LynAI MINES is a global leader in AI-powered mineral exploration solutions. Using cutting-edge technologies—including AI, UAV systems, remote sensing, and advanced analytics—LynAI MINES delivers precise, cost-effective, and sustainable approaches for discovery and resource optimization. Our proprietary GlobalAI platform increases exploration success rates, reduces costs, and accelerates project timelines, supporting global demand for critical minerals and the transition to a sustainable future.",
    contact: {
      name: "Prof. Wang",
      email: "x.wang4@uq.edu.au"
    }
  };

  const relatedEvents = [
    {
      id: 1,
      title: "AI in Mineral Exploration Workshop",
      date: "March 15, 2025",
      location: "Curtin University",
      type: "Technical Workshop",
      description: "Deep dive into current and future applications of AI in modern mineral exploration",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "International Geoscience AI Conference",
      date: "Apr 20–22, 2025", 
      location: "Perth Convention and Exhibition Centre",
      type: "International Conference",
      description: "Global experts share the latest breakthroughs in AI for geosciences",
      status: "Upcoming"
    },
    {
      id: 3,
      title: "Sustainable Mining Innovation Forum",
      date: "May 10, 2025",
      location: "Online",
      type: "Industry Forum",
      description: "Exploring environmental technologies for modern mining",
      status: "Registration Open"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center full-screen-hero mountain-range">
        <div className="absolute inset-0 z-0">
          <PlaceholderMedia 
            type="image"
            width="w-full"
            height="h-full"
            title="Academic Achievement Celebration"
            description="A professional scene showcasing scientific honors and achievements"
            className="rounded-none"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Key Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Tracking our major milestones and industry recognition
            </p>
            
            {/* Main Event Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-primary">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{mainEvent.date}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center space-x-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">{mainEvent.location}</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{mainEvent.title}</h2>
              <p className="text-lg text-muted-foreground">{mainEvent.summary}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Light beam effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 laser-beam"></div>
      </section>

      {/* Event Highlights */}
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
              Key Highlights
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover-lift text-center tech-glow"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Content Section */}
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
              News Details
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn more about the significance and impact of this milestone
            </p>
          </motion.div>

          <div className="space-y-12">
            {newsContent.map((section, index) => (
              <motion.div
                key={section.section}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-border"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <Newspaper className="w-6 h-6 text-primary" />
                  <span>{section.section}</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 rock-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm p-12 rounded-2xl border border-border"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold gradient-text mb-6">About LynAI MINES</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {companyInfo.description}
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>Media Contact</span>
              </h3>
              <div className="space-y-2">
                <p className="font-semibold">{companyInfo.contact.name}</p>
                <p className="text-primary">{companyInfo.contact.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-20 drilling-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our workshops, conferences, and industry forums
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover-lift"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </span>
                    <span className="text-xs text-green-400 font-semibold">
                      {event.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  
                  <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 desert-landscape">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm p-12 rounded-2xl border border-border space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Learn More
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Want to know more about our research outcomes and industry impact? Contact us for details.
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;