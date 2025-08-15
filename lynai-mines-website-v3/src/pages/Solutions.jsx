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
      title: "大数据和AI分析",
      image: aiTechnology,
      description: "用于精确矿物勘探和数据驱动决策的先进AI驱动分析。"
    },
    {
      title: "环境噪声层析成像",
      image: undergroundMining,
      description: "用于详细地下勘探和矿体检测的前沿地震成像技术。"
    },
    {
      title: "遥感技术",
      image: heroImage1,
      description: "基于卫星和无人机的遥感技术，用于全面地质调查和分析。"
    },
    {
      title: "地球化学分析",
      image: mineralSamples,
      description: "先进的地球化学分析技术，用于准确的矿物识别和评估。"
    },
    {
      title: "传统地质方法",
      image: geologicalSurvey,
      description: "经过时间验证的地质调查方法，结合现代AI和数据分析技术增强。"
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
              探索我们的技术和解决方案
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              我们的AI驱动解决方案集成了深度学习、无人机勘探和被动地震技术等先进技术，优化矿物勘探和生产，显著提高效率并降低成本。
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
                    了解更多
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
            <h2 className="text-4xl font-bold gradient-text mb-6">客户反馈</h2>
            <p className="text-xl text-muted-foreground">
              用AI驱动的解决方案改变采矿业，实现精确和高效。
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
                "LynAI MINES显著改善了我们的矿物勘探流程。强烈推荐！"
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
                "LynAI MINES的AI和遥感技术集成革命性地改变了我们的运营，提供了以前无法获得的洞察。真正改变了采矿业的游戏规则！"
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