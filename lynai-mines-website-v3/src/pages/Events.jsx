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
    title: "LynAI MINES创始人王宣策教授荣获全球地球科学界前2%科学家认可并加入亚洲科学编辑委员会",
    date: "2025年2月12日",
    location: "澳大利亚西澳州珀斯",
    category: "重大认可",
    summary: "王宣策教授获得全球科学界重要认可，进一步确立了LynAI MINES在地球科学AI领域的领导地位。"
  };

  const eventHighlights = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "全球前2%科学家",
      description: "斯坦福大学和Elsevier编制的权威榜单认可"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "亚洲科学编辑委员会",
      description: "当选为ACSE成员，推动亚太地区学术出版发展"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "科学影响力",
      description: "基于标准化引用影响、H指数等严格评估"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "国际贡献",
      description: "促进全球科学发现的传播与合作"
    }
  ];

  const newsContent = [
    {
      section: "全球科学影响力认可",
      content: `王宣策教授在地球科学和地球化学领域的杰出研究获得国际认可，被评为全球前2%科学家。世界前2%科学家榜单是一个基于数据的排名，利用Scopus数据库，根据标准化引用影响、H指数、共同作者调整指数和单一作者指数等严格评估各学科科学家。这一认可突显了王教授在地质学和地球化学领域的重大影响力。`
    },
    {
      section: "为亚太地区学术出版做贡献",
      content: `王教授当选亚洲科学编辑委员会(ACSE)成员，进一步证明了他对推进科学进步的承诺。ACSE是亚太地区的领先组织，在促进高质量学术出版、开放科学和跨学科研究合作方面发挥着重要作用。作为成员，王教授将在期刊编辑、研究诚信、数据共享和出版技术等领域贡献他的专业知识，促进亚洲科学发现的全球传播。`
    },
    {
      section: "LynAI MINES：引领地球科学AI发展",
      content: `由王教授创立的LynAI MINES正处于地球科学人工智能研究和开发的前沿。公司专门开发矿物勘探、资源评估和地质灾害预测的智能解决方案。通过利用大数据、深度学习和遥感技术的力量，LynAI MINES正在彻底改变矿物资源勘探的准确性和效率，推动全球地球科学行业的数字化转型。`
    },
    {
      section: "未来承诺",
      content: `LynAI MINES致力于推动AI驱动地球科学的边界。公司将继续投资于人工智能与地球科学数据集成的研究，促进智能地质勘探，支持矿物资源的可持续发展，并为创建数字化地球做出贡献。LynAI MINES致力于在全球地球科学研究和行业创新发展中发挥领导作用。`
    }
  ];

  const companyInfo = {
    description: "LynAI MINES是AI驱动矿物勘探解决方案的全球领导者。使用尖端技术，包括AI、无人机系统、遥感和先进数据分析，LynAI MINES为矿物发现和资源优化提供精确、经济高效和可持续的解决方案。我们专有的GlobalAI平台提高了勘探成功率，降低了成本，加速了项目时间线，支持对关键矿物的全球需求和向可持续未来的转型。",
    contact: {
      name: "Prof. Wang",
      email: "x.wang4@uq.edu.au"
    }
  };

  const relatedEvents = [
    {
      id: 1,
      title: "AI矿物勘探技术研讨会",
      date: "2025年3月15日",
      location: "科廷大学",
      type: "技术研讨会",
      description: "深入探讨AI在现代矿物勘探中的应用和未来发展趋势",
      status: "即将举行"
    },
    {
      id: 2,
      title: "国际地球科学AI会议",
      date: "2025年4月20-22日", 
      location: "珀斯会议中心",
      type: "国际会议",
      description: "汇聚全球专家，分享AI在地球科学领域的最新突破",
      status: "即将举行"
    },
    {
      id: 3,
      title: "可持续采矿创新论坛",
      date: "2025年5月10日",
      location: "在线会议",
      type: "行业论坛",
      description: "讨论环保技术在现代采矿业中的应用",
      status: "报名开放"
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
            title="学术成就庆祝场景"
            description="展示学术荣誉和科学成就的专业场景"
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
              <span className="gradient-text">重要活动</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              记录我们的重要里程碑和行业认可
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
              主要成就亮点
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
              新闻详情
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              详细了解这一重要里程碑的意义和影响
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
              <h2 className="text-4xl font-bold gradient-text mb-6">关于LynAI MINES</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {companyInfo.description}
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>媒体联系</span>
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
              即将举行的活动
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              参与我们的技术研讨会、会议和行业论坛
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
                    <span>了解更多</span>
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
              了解更多信息
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              想了解更多关于我们的研究成果和行业影响？联系我们获取详细信息。
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              联系我们
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;