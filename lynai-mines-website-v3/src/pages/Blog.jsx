import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { getAllPosts, formatDate } from '../lib/posts';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allPosts = getAllPosts();
    setPosts(allPosts);
    setFilteredPosts(allPosts);

    // 提取所有分类
    const uniqueCategories = [...new Set(allPosts.map(post => post.frontmatter.category).filter(Boolean))];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    let filtered = posts;

    // 搜索过滤
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.frontmatter.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.frontmatter.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.frontmatter.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // 分类过滤
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.frontmatter.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory]);

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  };

  const getFeaturedPost = () => {
    return posts.find(post => post.frontmatter.featured) || posts[0];
  };

  const featuredPost = getFeaturedPost();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 mining-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              行业洞察博客
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              探索AI驱动的矿物勘探最新趋势、技术创新和行业分析
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* 搜索框 */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="搜索文章..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* 分类筛选 */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">所有分类</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 geological-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold gradient-text mb-8">精选文章</h2>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover-lift">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.frontmatter.coverImage || '/blog/default-cover.jpg'}
                      alt={featuredPost.frontmatter.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        精选
                      </span>
                      {featuredPost.frontmatter.category && (
                        <span className="text-primary text-sm font-medium">
                          {featuredPost.frontmatter.category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredPost.frontmatter.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.frontmatter.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(featuredPost.frontmatter.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {getReadingTime(featuredPost.content)} 分钟阅读
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2"
                      >
                        阅读全文
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 rock-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-bold text-muted-foreground mb-4">
                未找到匹配的文章
              </h3>
              <p className="text-muted-foreground">
                请尝试调整搜索条件或分类筛选
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover-lift"
                >
                  <div className="relative h-48">
                    <img
                      src={post.frontmatter.coverImage || '/blog/default-cover.jpg'}
                      alt={post.frontmatter.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    {post.frontmatter.category && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {post.frontmatter.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.frontmatter.excerpt}
                    </p>
                    
                    {/* Tags */}
                    {post.frontmatter.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.frontmatter.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.frontmatter.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {getReadingTime(post.content)} 分钟
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block mt-4 text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2"
                    >
                      阅读全文
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;