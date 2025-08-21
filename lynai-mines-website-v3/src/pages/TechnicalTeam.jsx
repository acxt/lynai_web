import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Award, 
  BookOpen, 
  Users, 
  Globe,
  Target,
  ArrowRight,
  Mail,
  Linkedin,
  GraduationCap,
  TrendingUp,
  Zap,
  Brain,
  Mountain
} from 'lucide-react';
import PlaceholderMedia from '../components/ui/PlaceholderMedia';

const TechnicalTeam = () => {
  const leadership = [
    {
      id: 1,
      name: "Prof. Xuan-Ce Wang",
      title: "Founder & Chief Scientist",
      image: "prof-wang-lab.jpg",
      description:
        "Prof. Xuan-Ce Wang is the Founder and Chief Scientist of LynAI MINES. He holds professorships at Curtin University, Yunnan University, and the University of Queensland. Prof. Wang has led key critical mineral laboratories and high-impact projects, publishing over 150 peer-reviewed journal articles with more than 12,000 citations and an H-index of 47.",
      achievements: [
        "Published 150+ peer-reviewed journal articles",
        "Secured over AUD 6 million in competitive research funding",
        "Developed the AI Data Prospecting Platform",
        "Expert in geoscience big data and Au-Li-Ni system models"
      ],
      expertise: ["Geoscience Big Data", "AI Exploration Models", "Critical Mineral Research", "Cost Reduction Systems"],
      contact: "x.wang4@uq.edu.au",
      background: "mountain-range"
    },
    {
      id: 2,
      name: "Prof. Simon Wilde",
      title: "Non-Executive Chairman",
      image: "prof-wilde-business.jpg",
      description:
        "Professor Simon Wilde, a globally recognized expert in Earth science, is the John Curtin Distinguished Professor of Applied Geology at Curtin University and a principal investigator at the ARC Centre of Excellence for Core to Crust Fluid Systems. With over four decades of experience, he has made significant contributions to geochronology, geodynamics, and Earth evolution.",
      achievements: [
        "Recipient of the Goldschmidt, Urey, and Houtermans Awards",
        "40+ years of Earth science research experience",
        "Internationally renowned geochronology expert",
        "Principal investigator at ARC Centre of Excellence"
      ],
      expertise: ["Geochronology", "Geodynamics", "Earth Evolution", "International Collaboration"],
      contact: "simon.wilde@curtin.edu.au",
      background: "contour-lines"
    },
    {
      id: 3,
      name: "Dr. Linhai Jing",
      title: "Remote Sensing Geology Expert",
      image: "dr-jing-field.jpg",
      description:
        "Dr. Linhai Jing specializes in remote sensing–based geological exploration, high-resolution remote sensing image processing, and forest remote sensing. A Chinese Academy of Sciences “Hundred Talents” appointee, he has published 62 SCI papers, holds 7 patents, and 7 software copyrights.",
      achievements: [
        "Published 62 SCI papers",
        "Holds 7 patents and 7 software copyrights",
        "Discovered 40+ mineral deposits (Cu, Pb, Zn, Au, Li)",
        "Chinese Academy of Sciences “Hundred Talents” Program"
      ],
      expertise: ["Remote Sensing Geology", "High-Resolution Imaging", "Covered-Area Exploration", "Alpine Region Exploration"],
      contact: "linhai.jing@example.com",
      background: "drilling-pattern"
    }
  ];

  const coreTeam = [
    {
      name: "Professor Yingjie Yang",
      title: "Chief of Passive Seismology",
      description:
        "One of the principal founders of the ambient noise tomography method; ranked among the World's Top 2% Scientists and a Highly Cited Scholar in China.",
      expertise: ["Ambient Noise Tomography", "Seismology", "Subsurface Structure Imaging"],
      achievements: ["World's Top 2% Scientist", "Highly Cited Scholar"],
      background: "purple-pink-gradient"
    },
    {
      name: "Mr. Yunbo Ge",
      title: "Chief of Mining Production",
      description:
        "Executive Vice President at C2 Mining International with 13 years in international mining operations. Expert in strategic mine planning and value optimization, significantly enhancing production efficiency.",
      expertise: ["Strategic Mine Planning", "Value Optimization", "Production Efficiency", "International Mining Operations"],
      achievements: ["13 years of international experience", "Significant production efficiency gains"],
      background: "mountain-range"
    },
    {
      name: "Professor Qijun Yang",
      title: "Chief of Structural Geology",
      description:
        "Renowned for expertise in structural analysis and Precambrian geology. Led 30+ mineral exploration projects and pioneered research into structure-controlled gold deposits.",
      expertise: ["Structural Analysis", "Precambrian Geology", "Structure-Controlled Gold Deposits", "Mineral Exploration"],
      achievements: ["30+ exploration projects", "Pioneering structure-controlled gold deposit research"],
      background: "contour-lines"
    },
    {
      name: "Mr. Wenhong Jin",
      title: "Chief of Exploration",
      description:
        "Brings 32 years of global exploration experience, including multiple gold deposit discoveries and international project evaluations. CEO at Huakan International Mining Inc. and Wildsky Resources Inc.",
      expertise: ["Global Exploration", "Gold Deposit Discovery", "Project Evaluation", "International Business"],
      achievements: ["32 years of global experience", "Multiple gold deposit discoveries"],
      background: "drilling-pattern"
    },
    {
      name: "Mr. Jiaxu Tang",
      title: "AI Expert",
      description:
        "Developed an orogenic gold exploration vertical model for the Yilgarn Craton (Western Australia). Ongoing research on automatic lithology identification and lithium exploration using large-scale remote sensing models.",
      expertise: ["AI Exploration Models", "Lithology Identification", "Lithium Exploration", "Remote Sensing Models"],
      achievements: ["Orogenic gold exploration model", "Research on automated lithology identification"],
      background: "purple-pink-gradient"
    },
    {
      name: "Mr. Yang Luo",
      title: "GIS & AI Expert",
      description:
        "Strong theoretical and practical background in geographic information systems. Experienced in processing geological and mineral resource data and building predictive models using neural networks and big-data analytics.",
      expertise: ["Geographic Information Systems", "Neural Networks", "Big-Data Analytics", "Predictive Modeling"],
      achievements: ["Comprehensive mineral assessment reports", "Contributions to multiple mining projects"],
      background: "mountain-range"
    },
    {
      name: "Dr. Yue Song",
      title: "Geologist (PhD)",
      description:
        "Expert in resource exploration engineering and geochemical exploration. Extensive research on ore genesis, mantle redox evolution, and the relationship between tectonic evolution and mineralization.",
      expertise: ["Resource Exploration Engineering", "Geochemical Exploration", "Ore Genesis", "Tectonics–Mineralization"],
      achievements: ["Extensive mineralization studies", "Mantle evolution expertise"],
      contact: "geovisionai2024@gmail.com",
      background: "contour-lines"
    },
    {
      name: "Mr. Wen-Hong Jin",
      title: "Senior Geologist & Exploration Expert",
      description:
        "Discovered several major gold deposits in Shaanxi Province, enabling the development of profitable mines. Led exploration and evaluation of the J&L polymetallic project in British Columbia, Canada.",
      expertise: ["Gold Deposit Discovery", "Mine Development", "Polymetallic Projects", "Exploration Evaluation"],
      achievements: ["Multiple gold deposit discoveries", "Profitable mine development"],
      background: "drilling-pattern"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "15+", label: "Core Experts" },
    { icon: <BookOpen className="w-8 h-8" />, number: "200+", label: "Published Papers" },
    { icon: <Award className="w-8 h-8" />, number: "20+", label: "International Awards" },
    { icon: <Globe className="w-8 h-8" />, number: "40+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center full-screen-hero desert-landscape">
        <div className="absolute inset-0 z-0">
          <PlaceholderMedia
            type="image"
            width="w-full"
            height="h-full"
            title="Professional Team Collaboration"
            description="Showcasing the team working in the lab or in the field"
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
              <span className="gradient-text">Expertise in Exploration</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Our leadership team excels in AI-driven mineral exploration and geological resource development
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We bring together world-class scientists, industry veterans, and technology innovators. Our leadership team combines centuries of collective experience in geological exploration, artificial intelligence, and mineral resource development.
            </p>
          </motion.div>
        </div>

        {/* Light beam effect */}
        <div className="absolute top-1/3 left-0 w-full h-2 light-beam opacity-20"></div>
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

      {/* Leadership Team Section */}
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
              Core Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The combination of scientific excellence and innovation is driving the development of AI-driven mineral exploration.
            </p>
          </motion.div>

          <div className="space-y-20">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${leader.background} rounded-2xl overflow-hidden`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold">{leader.name}</h3>
                      <p className="text-xl text-primary font-semibold">{leader.title}</p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {leader.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold flex items-center space-x-2">
                        <Award className="w-6 h-6 text-primary" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {leader.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expertise */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold flex items-center space-x-2">
                        <Brain className="w-6 h-6 text-primary" />
                        <span>Areas of Expertise</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    {leader.contact && (
                      <div className="bg-card/30 backdrop-blur-sm p-4 rounded-lg border border-border">
                        <p className="text-sm text-muted-foreground mb-2">Contact</p>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="text-primary font-medium">{leader.contact}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Photo Placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <PlaceholderMedia
                      type="image"
                      height="h-96"
                      title={`${leader.name} Photo`}
                      description={leader.image}
                      className="hover-lift rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technical Team Section */}
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
              Core Technical Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our core technical team is composed of outstanding experts who bring deep knowledge and experience to LynAI MINES. Their combined expertise in AI, machine learning, geology, and advanced modeling drives our innovative solutions and ensures we remain at the forefront of intelligent mineral exploration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${member.background} rounded-xl overflow-hidden hover-lift`}
              >
                <div className="p-6 space-y-4">
                  {/* Photo Placeholder */}
                  <PlaceholderMedia
                    type="image"
                    height="h-48"
                    title={`${member.name} Photo`}
                    description="Professional team member portrait"
                    className="rounded-lg"
                  />

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold">{member.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Contact if available */}
                    {member.contact && (
                      <div className="pt-2 border-top border-border">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="text-xs text-primary">{member.contact}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Excellence Section */}
      <section className="py-20 mining-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Innovation & Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse expertise and proven track record across geology, technology, and operations make LynAI MINES a pioneer in redefining the future of mineral exploration with AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Academic Excellence",
                description:
                  "Degrees and honors from top universities worldwide, with distinguished contributions across disciplines."
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Technical Innovation",
                description:
                  "Pushing the boundaries of AI and machine learning in geological exploration with breakthrough solutions."
              },
              {
                icon: <Mountain className="w-12 h-12" />,
                title: "Field Experience",
                description:
                  "Decades of hands-on project experience spanning the full exploration-to-production lifecycle."
              }
            ].map((item, index) => (
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
              Partner with Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in collaborating with our world-class experts? Get in touch to learn how our expertise and innovative technologies can unlock breakthrough results for your projects.
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalTeam;
