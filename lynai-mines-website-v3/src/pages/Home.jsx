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
              用AI革新矿物勘探
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              我们公司处于利用AI和数据驱动决策系统革新采矿业的前沿。通过整合先进技术和科学方法，
              我们在勘探和投资决策中提供无与伦比的准确性和信心。
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <motion.button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/solutions" className="flex items-center gap-2">
                  探索我们的解决方案
                  <ArrowRight size={20} />
                </Link>
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="flex items-center gap-2">
                  联系我们
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
              { icon: <Globe className="w-8 h-8" />, number: "1001+", label: "全球覆盖" },
              { icon: <Users className="w-8 h-8" />, number: "15", label: "专家团队" },
              { icon: <Building2 className="w-8 h-8" />, number: "50+", label: "成功项目" },
              { icon: <MapPin className="w-8 h-8" />, number: "20+", label: "服务国家" }
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
              受到全球领先企业信赖
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
              我们的核心价值
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              通过先进的AI技术和数据分析，为矿物勘探提供革命性解决方案
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "效率优化",
                description: "通过AI驱动的分析，显著缩短勘探周期，降低成本，提高资源利用率"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "风险控制",
                description: "精确的数据分析和预测模型，最大化降低勘探风险，提高成功率"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "可持续发展",
                description: "环保的勘探方法，支持绿色转型，促进负责任的采矿实践"
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
            <h2 className="text-4xl font-bold gradient-text mb-6">客户评价</h2>
            <p className="text-xl text-muted-foreground">
              了解我们的客户如何通过我们的AI解决方案实现成功
            </p>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
            {[
              {
                name: "John Smith",
                company: "Global Mining Corp",
                content: "LynAI MINES显著改善了我们的矿物勘探流程。强烈推荐！",
                rating: 5
              },
              {
                name: "William Morrell",
                company: "Armour Energy Limited, CTO",
                content: "LynAI MINES的AI和遥感技术集成革命性地改变了我们的运营，提供了以前无法获得的洞察。真正改变了采矿业的游戏规则！",
                rating: 5
              },
              {
                name: "Dr. Sarah Chen",
                company: "Pacific Resources Ltd",
                content: "他们的数据驱动方法帮助我们降低了40%的勘探成本，同时提高了发现率。",
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
              准备开始您的AI勘探之旅？
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              联系我们的专家团队，了解如何通过我们的AI解决方案革新您的矿物勘探流程
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="flex items-center gap-2">
                立即联系我们
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