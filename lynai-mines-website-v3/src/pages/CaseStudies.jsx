import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target, 
  Globe,
  Award,
  BarChart3,
  ArrowRight,
  MapPin,
  Calendar,
  Users
} from 'lucide-react';
import PlaceholderMedia from '../components/ui/PlaceholderMedia';

const CaseStudies = () => {
  const mainCase = {
    title: "AI-Powered Mineral Exploration Revolutionizes Resource Discovery in Western Australia",
    description:
      "Through advanced AI technology and data analysis, we have successfully achieved multiple breakthrough discoveries in Western Australia, demonstrating the enormous potential of artificial intelligence in modern mineral exploration.",
    location: "Western Australia",
    achievements: [
      { icon: <Trophy className="w-6 h-6" />, text: "Successfully discovered multiple high-value deposits" },
      { icon: <TrendingUp className="w-6 h-6" />, text: "Exploration efficiency improved by over 60%" },
      { icon: <DollarSign className="w-6 h-6" />, text: "Total project value exceeds A$100 million" },
      { icon: <Clock className="w-6 h-6" />, text: "Exploration cycle reduced by 50%" }
    ]
  };

  const caseStudies = [
    {
      id: 1,
      title: "Southern Cross Private Gold Project",
      category: "Gold Exploration",
      timeframe: "2018 to Present",
      value: "Over A$10 Million",
      roi: "100%+",
      achievements: [
        "Identified 400k+ oz gold resources (NI 43-101 compliant)",
        "Initial A$5M investment; current valuation exceeds A$10M",
        "AI-driven target selection plus field validation (dual-verification workflow)",
        "Produced two AI-in-mining research papers (in revision)"
      ],
      highlights: [
        { label: "Resources", value: "400k oz", icon: <Award className="w-5 h-5" /> },
        { label: "ROI", value: "100%+", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Project Duration", value: "6 years", icon: <Clock className="w-5 h-5" /> }
      ],
      background: "mountain-range"
    },
    {
      id: 2,
      title: "Western Australia Hard-Rock Lithium Project",
      category: "Lithium Exploration",
      timeframe: "18 months",
      value: "A$69 Million",
      roi: "60% efficiency gain",
      achievements: [
        "AI-assisted workflow reduced traditional 4–6 year cycle to just 18 months",
        "Time efficiency improved by 60%+; current market value A$69M",
        "AI identified underestimated lithium potential in the Pilbara Craton",
        "Reclassified a misidentified gold prospect as a lithium deposit"
      ],
      highlights: [
        { label: "Market Value", value: "A$69M", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Efficiency Gain", value: "60%+", icon: <BarChart3 className="w-5 h-5" /> },
        { label: "Cycle Time", value: "18 months", icon: <Clock className="w-5 h-5" /> }
      ],
      background: "contour-lines"
    },
    {
      id: 3,
      title: "Nigeria Nb–Ta–Li Project",
      category: "Risk Assessment",
      timeframe: "Evaluation Phase",
      value: "Risk Avoidance",
      roi: "Loss Avoidance",
      achievements: [
        "AI model assessment informed a key strategic decision",
        "Successfully avoided potential investment loss",
        "Delivered accurate risk assessment for the client",
        "Validated the value of AI in investment decision-making"
      ],
      highlights: [
        { label: "Risk Assessment", value: "Successful", icon: <Target className="w-5 h-5" /> },
        { label: "Loss Avoided", value: "Significant", icon: <Trophy className="w-5 h-5" /> },
        { label: "Decision Support", value: "Critical", icon: <BarChart3 className="w-5 h-5" /> }
      ],
      background: "drilling-pattern"
    },
    {
      id: 4,
      title: "Tenement Evaluation Performance",
      category: "Comprehensive Assessment",
      timeframe: "Ongoing",
      value: "A$18M+",
      roi: "Diversified Success",
      achievements: [
        "Australia: completed 15 tenement prospectivity assessments (Au, Li, Cu–Ni)",
        "Facilitated transactions totaling A$8M+",
        "Africa: evaluated 30+ tenements",
        "Total service value A$10M+; transferred Australian brownfield training models to African projects"
      ],
      highlights: [
        { label: "Total Value", value: "A$18M+", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Projects", value: "45+", icon: <BarChart3 className="w-5 h-5" /> },
        { label: "Success Rate", value: "High", icon: <Trophy className="w-5 h-5" /> }
      ],
      background: "purple-pink-gradient"
    }
  ];

  const stats = [
    { icon: <Globe className="w-8 h-8" />, number: "45+", label: "Projects Completed" },
    { icon: <DollarSign className="w-8 h-8" />, number: "A$180M", label: "Total Project Value" },
    { icon: <Users className="w-8 h-8" />, number: "30+", label: "Partners" },
    { icon: <Award className="w-8 h-8" />, number: "60%", label: "Efficiency Gain" }
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
            title="Geological Exploration Map of Western Australia"
            description="Detailed geological map showing mineral distribution and exploration areas"
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
              <span className="gradient-text">AI Innovation Case Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Transforming mining with AI-driven exploration and production solutions
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {mainCase.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {mainCase.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm p-4 rounded-lg border border-border"
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">{achievement.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Laser beam effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 laser-beam"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 mineral-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary mb-4 flex justify-center glow-effect">
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

      {/* Case Studies Section */}
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
              Four Core Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our success across different mineral systems and geological settings
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${study.background} rounded-2xl overflow-hidden`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm text-primary font-semibold">
                        <Calendar className="w-4 h-4" />
                        <span>{study.timeframe}</span>
                        <span>•</span>
                        <span>{study.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">{study.title}</h3>
                      
                      {/* Highlights */}
                      <div className="grid grid-cols-3 gap-4">
                        {study.highlights.map((highlight, idx) => (
                          <div key={idx} className="bg-card/30 backdrop-blur-sm p-3 rounded-lg border border-border">
                            <div className="flex items-center space-x-2 text-primary mb-1">
                              {highlight.icon}
                              <span className="text-xs font-semibold">{highlight.label}</span>
                            </div>
                            <p className="text-sm font-bold">{highlight.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {study.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Media Placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <PlaceholderMedia 
                      type="image"
                      height="h-80"
                      title={`${study.title} – Project Image`}
                      description={`${study.category} fieldwork or data analysis imagery`}
                      className="hover-lift"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition Section */}
      <section className="py-20 rock-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Industry Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our innovative technologies and outstanding results are widely recognized across the industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Technology Breakthrough Award",
                description: "Recognized for major breakthroughs in AI for mineral exploration"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Excellence in Efficiency",
                description: "Set industry benchmarks for lowering exploration costs and improving discovery rates"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Excellence in International Collaboration",
                description: "Successful cross-border execution and technology transfer"
              }
            ].map((recognition, index) => (
              <motion.div
                key={recognition.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover-lift text-center purple-glow"
              >
                <div className="text-primary mb-6 flex justify-center">
                  {recognition.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{recognition.title}</h3>
                <p className="text-muted-foreground">{recognition.description}</p>
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
              Become the Next Success Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Want to see how we can create value for your project? Contact our expert team to start your AI-driven exploration journey.
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
