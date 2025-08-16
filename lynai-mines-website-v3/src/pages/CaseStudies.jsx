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
    title: "AI驱动的矿物勘探革命性地改变了西澳大利亚的资源发现",
    description: "通过先进的AI技术和数据分析，我们在西澳大利亚成功实现了多个突破性发现，展示了人工智能在现代矿物勘探中的巨大潜力。",
    location: "西澳大利亚州",
    achievements: [
      { icon: <Trophy className="w-6 h-6" />, text: "成功发现多个高价值矿床" },
      { icon: <TrendingUp className="w-6 h-6" />, text: "勘探效率提升60%以上" },
      { icon: <DollarSign className="w-6 h-6" />, text: "总项目价值超过1亿澳元" },
      { icon: <Clock className="w-6 h-6" />, text: "勘探周期缩短50%" }
    ]
  };

  const caseStudies = [
    {
      id: 1,
      title: "Southern Cross私人金矿项目",
      category: "金矿勘探",
      timeframe: "2018年至今",
      value: "超过1000万澳元",
      roi: "100%+",
      achievements: [
        "发现超过40万盎司的金资源（NI-43-101标准）",
        "初始投资500万澳元，当前估值超过1000万澳元",
        "利用AI进行目标选择和现场验证，实现双重验证方法",
        "产出两篇AI采矿研究论文，目前正在修订中"
      ],
      highlights: [
        { label: "资源量", value: "40万盎司", icon: <Award className="w-5 h-5" /> },
        { label: "投资回报率", value: "100%+", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "项目周期", value: "6年", icon: <Clock className="w-5 h-5" /> }
      ],
      background: "mountain-range"
    },
    {
      id: 2,
      title: "西澳大利亚硬岩锂矿项目",
      category: "锂矿勘探",
      timeframe: "18个月",
      value: "6900万澳元",
      roi: "60%效率提升",
      achievements: [
        "通过AI协助将传统勘探周期从4-6年缩短至仅18个月",
        "时间效率提高超过60%，当前市场价值为6900万澳元",
        "AI识别了皮尔巴拉克拉通被低估的锂潜力",
        "成功将错误识别的金项目重新分类为锂矿床"
      ],
      highlights: [
        { label: "市场价值", value: "6900万澳元", icon: <DollarSign className="w-5 h-5" /> },
        { label: "效率提升", value: "60%+", icon: <BarChart3 className="w-5 h-5" /> },
        { label: "周期缩短", value: "18个月", icon: <Clock className="w-5 h-5" /> }
      ],
      background: "contour-lines"
    },
    {
      id: 3,
      title: "尼日利亚Nb-Ta-Li项目",
      category: "风险评估",
      timeframe: "评估阶段",
      value: "风险规避",
      roi: "投资损失避免",
      achievements: [
        "AI模型评估导致关键战略决策",
        "成功避免潜在投资损失",
        "为客户提供准确的风险评估报告",
        "验证了AI在投资决策中的价值"
      ],
      highlights: [
        { label: "风险评估", value: "成功", icon: <Target className="w-5 h-5" /> },
        { label: "损失避免", value: "重大", icon: <Trophy className="w-5 h-5" /> },
        { label: "决策支持", value: "关键", icon: <BarChart3 className="w-5 h-5" /> }
      ],
      background: "drilling-pattern"
    },
    {
      id: 4,
      title: "矿权评估绩效",
      category: "综合评估",
      timeframe: "持续进行",
      value: "超过1800万澳元",
      roi: "多元化成功",
      achievements: [
        "澳大利亚本地评估：完成15项矿权潜力评估（Au、Li、Cu-Ni）",
        "促成总计超过800万澳元的交易",
        "非洲项目评估：评估超过30项矿权",
        "总服务价值超过1000万澳元，成功将澳大利亚棕地培训模型转移到非洲项目"
      ],
      highlights: [
        { label: "总价值", value: "1800万澳元", icon: <DollarSign className="w-5 h-5" /> },
        { label: "项目数量", value: "45+", icon: <BarChart3 className="w-5 h-5" /> },
        { label: "成功率", value: "高", icon: <Trophy className="w-5 h-5" /> }
      ],
      background: "purple-pink-gradient"
    }
  ];

  const stats = [
    { icon: <Globe className="w-8 h-8" />, number: "45+", label: "完成项目" },
    { icon: <DollarSign className="w-8 h-8" />, number: "1.8亿", label: "总项目价值" },
    { icon: <Users className="w-8 h-8" />, number: "30+", label: "合作伙伴" },
    { icon: <Award className="w-8 h-8" />, number: "60%", label: "效率提升" }
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
            title="西澳大利亚地质勘探区域地图"
            description="显示不同矿物分布和勘探区域的详细地质图"
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
              <span className="gradient-text">AI创新案例</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              用AI驱动的勘探和生产解决方案变革采矿业
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
              四大核心案例
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              展示我们在不同矿物类型和地质环境中的成功应用
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
                      <h4 className="text-xl font-semibold">关键成就：</h4>
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
                      title={`${study.title}项目图`}
                      description={`${study.category}相关的现场作业或数据分析图片`}
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
            <h2 className="text-4xl font-bold gradient-text mb-6">行业认可</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我们的创新技术和卓越成果获得了行业广泛认可
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "技术突破奖",
                description: "因在AI矿物勘探领域的重大技术突破而获得行业认可"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "效率提升典范",
                description: "在降低勘探成本和提高发现率方面树立了行业标杆"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "国际合作典范",
                description: "成功的跨国项目执行和技术转移案例"
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
              成为下一个成功案例
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              想了解我们如何为您的项目创造价值？联系我们的专家团队，开始您的AI驱动勘探之旅。
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              开始您的项目
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;