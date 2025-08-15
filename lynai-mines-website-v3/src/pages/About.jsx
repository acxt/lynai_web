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
              引领矿物勘探创新
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              释放AI在可持续和精确矿物发现中的力量
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">AI驱动矿物勘探的专家领导力</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                LynAI MINES汇集了世界知名科学家、行业资深专家和技术创新者的卓越团队。我们的领导团队在地质勘探、人工智能和矿物资源开发方面拥有数百年的集体经验。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                在首席科学家兼创始人王宣策教授和非执行主席Simon Wilde教授的领导下，我们的科学团队代表了地质专业知识的顶峰。王教授拥有110多篇同行评议论文和锂、金勘探的突破性发现，与Wilde教授合作，后者是约翰·柯廷杰出教授，也是包括戈德施密特奖章在内的国际知名奖项的获得者。
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
            <h2 className="text-4xl font-bold gradient-text mb-6">我们的创新系统</h2>
            <p className="text-xl text-muted-foreground">
              由AI和大数据分析驱动的数字大脑，结合各种技术来收集和分析矿物系统信息
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "AI与大数据分析",
              "遥感技术",
              "环境噪声层析成像技术",
              "前沿地球化学分析",
              "传统地球科学方法",
              "矿山地质方法"
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
              通过先进AI变革采矿业
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              用前沿AI解决方案革新矿物勘探和生产，为可持续未来而努力
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
                <h3 className="text-2xl font-bold text-primary">我们的使命</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                LynAI MINES的使命是通过突破性AI技术重新定义矿物勘探的效率和可持续性，为全球能源转型和工业发展提供智能和精确的资源保障。我们旨在推动采矿业走向全球化、数字化和智能化，同时降低勘探风险和成本，提高勘探效率，降低环境影响。
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
                <h3 className="text-2xl font-bold text-primary">我们的愿景</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                LynAI MINES的愿景是成为全球领先的AI驱动矿物勘探和生产公司，引领行业创新并建立智能采矿的全球标准。到2030年，我们致力于将GlobalAI平台发展为行业标准解决方案，建立全球服务网络，帮助客户将勘探成功率提高50%，实现整个勘探过程的智能化转型。
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
            <h2 className="text-4xl font-bold gradient-text mb-6">团队实力</h2>
            <p className="text-xl text-muted-foreground">
              汇聚全球顶尖专家，共同推动AI采矿技术发展
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-12 h-12" />, number: "15+", label: "专业团队成员" },
              { icon: <Award className="w-12 h-12" />, number: "110+", label: "研究论文发表" },
              { icon: <Globe className="w-12 h-12" />, number: "20+", label: "国际合作项目" },
              { icon: <Target className="w-12 h-12" />, number: "50+", label: "成功案例" }
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