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
      title: "AI-驱动遥感绿地项目",
      subtitle: "用智能分析发现新的视野",
      description: "利用AI和数据驱动的遥感技术，以无与伦比的准确性识别富含矿物的区域。我们的解决方案整合了卫星、无人机和地面技术与先进分析。",
      features: [
        "智能数据选择：AI驱动分析识别最有效的数据源，如Landsat、ASTER和高光谱成像",
        "增强图像处理：光谱分析和机器学习提高解释准确性", 
        "自动目标区域选择：AI精确定位高潜力勘探区域",
        "可操作洞察：全面的地图和报告揭示机会和风险"
      ],
      cta: "通过我们的AI驱动遥感专业知识降低成本并提高发现率。",
      background: "mountain-range"
    },
    {
      id: 2,
      icon: <Eye className="w-16 h-16" />,
      title: "AI增强矿体CT扫描与环境噪声层析成像",
      subtitle: "让深度勘探更智能",
      description: "我们的AI集成环境噪声层析成像技术提供精确的地下结构成像，帮助您更有效地定位矿体、断层、水资源和地热储层。",
      features: [
        "AI优化成像：高分辨率地下可视化，深度可达3公里",
        "资源检测：机器学习算法提高矿物和水资源识别的准确性",
        "战略洞察：数据驱动建议最小化钻探并优化勘探"
      ],
      cta: "体验经济实惠、可持续的AI增强勘探解决方案。",
      background: "contour-lines"
    },
    {
      id: 3,
      icon: <Target className="w-16 h-16" />,
      title: "AI驱动地质目标选择",
      subtitle: "用大数据和机器学习重新定义勘探",
      description: "通过AI驱动的分析革命性地改变您的勘探工作。通过整合地球科学专业知识与机器学习，我们提供了矿物发现的变革性方法。",
      features: [
        "高级数据分析：机器学习算法识别高潜力勘探区域",
        "精密矿物检测：AI模型分析地球化学和地球物理数据以检测和表征矿床",
        "资源估算：用数据驱动的精度自信地估算储量",
        "勘探策略优化：AI优化勘探计划，节省时间和资源"
      ],
      cta: "用智能的AI驱动解决方案改变您的勘探过程。",
      background: "drilling-pattern"
    },
    {
      id: 4,
      icon: <Factory className="w-16 h-16" />,
      title: "AI优化采矿生产设计和设施解决方案",
      subtitle: "将数据转化为盈利运营",
      description: "利用数据和AI将矿物资源转化为高效、盈利的采矿作业。我们的整体方法整合了AI驱动的资源估算、定制生产设计和设施开发。",
      features: [
        "数据驱动资源估算：用AI分析构建准确的地质模型和资源估算",
        "AI优化生产计划：量身定制的采矿生产设计确保效率、安全和盈利",
        "智能设施设计：AI驱动工具优化设施集成，实现无缝运营"
      ],
      cta: "让我们的数据驱动专业知识将您的资源转化为运营成功。",
      background: "purple-pink-gradient"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI和数据专业知识",
      description: "尖端的机器学习和分析驱动每个解决方案"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "定制化可扩展服务",
      description: "量身定制以满足您项目的独特需求"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "端到端支持",
      description: "从勘探到生产的全面协助"
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
            title="无人机群AI勘探作业"
            description="hero_backend.png - 矿场图片叠加层 (透明度50%)"
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
              <span className="gradient-text">用AI和数据驱动创新</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              变革矿物勘探和生产
            </h2>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
              释放AI的力量，推动采矿业成功
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              我们先进的AI驱动解决方案彻底革新了矿物勘探和生产，使您能够精确和自信地发现、分析和优化。
              无论是绿地勘探、深地资源识别还是生产优化，我们的尖端技术都能确保最大效率、降低风险和卓越结果。
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
              四大核心服务
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              专业的AI解决方案，覆盖从勘探到生产的完整矿业价值链
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
                      <h4 className="text-xl font-semibold">核心特性：</h4>
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
                      title={`服务${service.id}展示图`}
                      description={`${service.title}相关的技术展示图片`}
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
              为什么选择我们？
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
            <h2 className="text-4xl font-bold gradient-text">立即联系我们</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              准备开始您的AI驱动勘探项目？联系我们的专家团队获得个性化咨询。
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
                开始您的项目
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