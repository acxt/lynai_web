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
      title: "创始人兼首席科学家",
      image: "prof-wang-lab.jpg",
      description: "Prof. Xuan-Ce Wang是LynAI MINES的创始人兼首席科学家。他拥有科廷大学、云南大学和昆士兰大学的教授职位。Wang教授领导了关键矿物实验室和高影响力项目，发表了超过150篇同行评议期刊文章，被引用超过12,000次，H指数为47。",
      achievements: [
        "发表150+篇同行评议期刊文章",
        "获得超过600万澳元的竞争性研究资金", 
        "开发了AI数据勘探平台",
        "地球科学大数据和Au-Li-Ni系统模型专家"
      ],
      expertise: ["地球科学大数据", "AI勘探模型", "关键矿物研究", "成本降低系统"],
      contact: "x.wang4@uq.edu.au",
      background: "mountain-range"
    },
    {
      id: 2,
      name: "Prof. Simon Wilde",
      title: "非执行主席",
      image: "prof-wilde-business.jpg", 
      description: "Simon Wilde教授是全球公认的地球科学专家，拥有科廷大学应用地质学John Curtin杰出教授称号，是ARC核心到地壳流体系统卓越中心的首席研究员。凭借40多年的经验，他在地质年代学、地球动力学和地球演化方面做出了重大贡献。",
      achievements: [
        "获得Goldschmidt、Urey和Houtermans奖",
        "40+年地球科学研究经验",
        "国际知名的地质年代学专家",
        "ARC卓越中心首席研究员"
      ],
      expertise: ["地质年代学", "地球动力学", "地球演化", "国际合作"],
      contact: "simon.wilde@curtin.edu.au",
      background: "contour-lines"
    },
    {
      id: 3,
      name: "Dr. Linhai Jing",
      title: "遥感地质专家",
      image: "dr-jing-field.jpg",
      description: "Dr. Linhai Jing是遥感地质勘探、高分辨率遥感图像处理和森林遥感方面的杰出研究员。中科院\"百人计划\"入选者。他发表了62篇英文SCI论文，拥有7项专利和7项软件著作权。",
      achievements: [
        "发表62篇英文SCI论文",
        "拥有7项专利和7项软件著作权",
        "发现超过40个矿床（Cu、Pb、Zn、Au、Li）",
        "中科院\"百人计划\"入选者"
      ],
      expertise: ["遥感地质勘探", "高分辨率图像处理", "覆盖区勘探方法", "高山地区勘探"],
      contact: "linhai.jing@example.com",
      background: "drilling-pattern"
    }
  ];

  const coreTeam = [
    {
      name: "Professor Yingjie Yang",
      title: "被动地震学主管",
      description: "环境噪声层析成像方法的主要创始人之一，被评为世界前2%科学家和中国高被引学者。",
      expertise: ["环境噪声层析成像", "地震学", "地下结构成像"],
      achievements: ["世界前2%科学家", "高被引学者"],
      background: "purple-pink-gradient"
    },
    {
      name: "Mr. Yunbo Ge",
      title: "采矿生产主管",
      description: "C2 Mining International执行副总裁，拥有13年国际采矿运营经验。战略矿山规划和价值优化专家。",
      expertise: ["战略矿山规划", "价值优化", "生产效率提升", "国际采矿运营"],
      achievements: ["13年国际经验", "显著提升生产效率"],
      background: "mountain-range"
    },
    {
      name: "Professor Qijun Yang", 
      title: "构造地质学主管",
      description: "以其在构造分析和前寒武纪地质学方面的专长而闻名。领导了30多个矿物勘探项目。",
      expertise: ["构造分析", "前寒武纪地质学", "构造控制金矿床", "矿物勘探"],
      achievements: ["30+勘探项目", "构造控制金矿床先驱研究"],
      background: "contour-lines"
    },
    {
      name: "Mr. Wenhong Jin",
      title: "勘探主管",
      description: "拥有32年全球勘探经验，包括多个金矿床发现和国际项目评估。Huakan International Mining Inc.和Wildsky Resources Inc.首席执行官。",
      expertise: ["全球勘探", "金矿床发现", "项目评估", "国际业务"],
      achievements: ["32年全球经验", "多个金矿床发现"],
      background: "drilling-pattern"
    },
    {
      name: "Mr. Jiaxu Tang",
      title: "AI专家",
      description: "为西澳大利亚Yilgarn克拉通开发了造山带金勘探垂直模型。正在进行使用大规模遥感模型的自动岩性识别和锂勘探研究。",
      expertise: ["AI勘探模型", "岩性识别", "锂勘探", "遥感模型"],
      achievements: ["造山带金勘探模型", "自动岩性识别研究"],
      background: "purple-pink-gradient"
    },
    {
      name: "Mr. Yang Luo",
      title: "GIS和AI专家",
      description: "拥有地理信息系统强大的理论和实践背景。擅长处理地质和矿物资源数据，使用神经网络和大数据分析创建预测模型。",
      expertise: ["地理信息系统", "神经网络", "大数据分析", "预测模型"],
      achievements: ["全面的矿物评估报告", "多个采矿项目"],
      background: "mountain-range"
    },
    {
      name: "Dr. Yue Song",
      title: "地质学博士",
      description: "资源勘探工程和地球化学矿物勘探专家。在矿石成因类型、地幔氧化状态演化特征以及地质构造演化与成矿关系方面进行了广泛研究。",
      expertise: ["资源勘探工程", "地球化学勘探", "矿石成因", "构造成矿关系"],
      achievements: ["广泛的成矿研究", "地幔演化专家"],
      contact: "geovisionai2024@gmail.com",
      background: "contour-lines"
    },
    {
      name: "Mr. Wen-Hong Jin",
      title: "高级地质学家和勘探专家",
      description: "在陕西省发现了多个重要金矿床，促成了盈利矿山的开发。领导了加拿大不列颠哥伦比亚省J&L多金属项目的勘探和评估。",
      expertise: ["金矿床发现", "矿山开发", "多金属项目", "勘探评估"],
      achievements: ["多个金矿床发现", "盈利矿山开发"],
      background: "drilling-pattern"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "15+", label: "核心专家" },
    { icon: <BookOpen className="w-8 h-8" />, number: "200+", label: "发表论文" },
    { icon: <Award className="w-8 h-8" />, number: "20+", label: "国际奖项" },
    { icon: <Globe className="w-8 h-8" />, number: "40+", label: "年经验" }
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
            title="专业团队合作场景"
            description="展示团队在实验室或野外工作的专业形象"
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
              <span className="gradient-text">勘探专业团队</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              我们的领导团队在AI驱动的矿物勘探和地质资源开发方面表现卓越
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              我们汇聚了世界一流的科学家、行业资深人士和技术创新者。我们的领导团队在地质勘探、
              人工智能和矿物资源开发方面拥有数百年的集体经验。
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
              核心领导团队
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              科学卓越与创新的结合，引领AI驱动的矿物勘探发展
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
                        <span>主要成就</span>
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
                        <span>专业领域</span>
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
                        <p className="text-sm text-muted-foreground mb-2">联系方式</p>
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
                      title={`${leader.name}照片`}
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
              核心技术团队
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              我们的核心技术团队由杰出的专家组成，他们为LynAI MINES带来了丰富的知识和经验。
              他们在AI、机器学习、地质学和先进建模方面的综合专业知识推动了我们的创新解决方案，
              确保我们在智能矿物勘探方面保持前沿地位。
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
                    title={`${member.name}照片`}
                    description="专业团队成员照片"
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
                      <div className="pt-2 border-t border-border">
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
            <h2 className="text-4xl font-bold gradient-text mb-6">创新与卓越</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我们团队的多元化专业知识和在地质学、技术和商业运营方面的成功记录，
              使LynAI MINES成为通过人工智能改变矿物勘探未来的先驱。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "学术卓越",
                description: "我们的团队成员拥有世界顶尖大学的学位和荣誉，在各自领域都有杰出贡献。"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "技术创新",
                description: "持续推动AI和机器学习在地质勘探领域的应用边界，开发突破性解决方案。"
              },
              {
                icon: <Mountain className="w-12 h-12" />,
                title: "实战经验",
                description: "数十年的实际项目经验，从勘探到生产的全流程专业知识。"
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
              与专家团队合作
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              想与我们世界级的专家团队合作？联系我们，了解如何通过我们的专业知识和创新技术
              为您的项目带来突破性进展。
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-effect hover-lift inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              联系我们的团队
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalTeam;