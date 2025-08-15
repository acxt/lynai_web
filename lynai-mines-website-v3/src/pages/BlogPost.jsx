import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ArrowLeft, Share2, Tag, ChevronRight } from 'lucide-react';
import { getPostBySlug, getAllPosts, formatDate } from '../lib/posts';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = getPostBySlug(slug);
    if (foundPost) {
      setPost(foundPost);
      
      // 获取相关文章（同分类或相似标签）
      const allPosts = getAllPosts();
      const related = allPosts
        .filter(p => p.slug !== slug && (
          p.frontmatter.category === foundPost.frontmatter.category ||
          p.frontmatter.tags?.some(tag => foundPost.frontmatter.tags?.includes(tag))
        ))
        .slice(0, 3);
      setRelatedPosts(related);
    }
    setLoading(false);
  }, [slug]);

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.frontmatter.title,
          text: post.frontmatter.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('分享失败', error);
      }
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href);
      alert('链接已复制到剪贴板');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">加载中...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 mining-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 面包屑导航 */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary">首页</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/blog" className="hover:text-primary">博客</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{post.frontmatter.title}</span>
            </nav>

            {/* 返回按钮 */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              返回博客列表
            </Link>

            {/* 文章头部信息 */}
            <div className="text-center mb-12">
              {post.frontmatter.category && (
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  {post.frontmatter.category}
                </span>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                {post.frontmatter.title}
              </h1>
              
              {post.frontmatter.excerpt && (
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {post.frontmatter.excerpt}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.frontmatter.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {getReadingTime(post.content)} 分钟阅读
                </div>
                {post.frontmatter.author && (
                  <div>
                    作者：{post.frontmatter.author}
                  </div>
                )}
              </div>

              {/* 标签 */}
              {post.frontmatter.tags && (
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {post.frontmatter.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* 分享按钮 */}
              <button
                onClick={handleShare}
                className="bg-card/50 backdrop-blur-sm border border-border px-4 py-2 rounded-lg hover:bg-card/70 transition-colors inline-flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                分享文章
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 封面图片 */}
      {post.frontmatter.coverImage && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 文章内容 */}
      <section className="py-16 geological-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-lg max-w-none dark:prose-invert 
                       prose-headings:gradient-text prose-headings:font-bold
                       prose-p:text-muted-foreground prose-p:leading-relaxed
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded
                       prose-pre:bg-card prose-pre:border prose-pre:border-border
                       prose-blockquote:border-l-primary prose-blockquote:bg-card/50 prose-blockquote:backdrop-blur-sm
                       prose-img:rounded-lg prose-img:shadow-lg"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt, ...props }) => (
                  <img
                    src={src?.startsWith('http') ? src : `/blog/${src}`}
                    alt={alt}
                    {...props}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                ),
                code: ({ inline, className, children, ...props }) => {
                  return !inline ? (
                    <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-secondary px-2 py-1 rounded text-sm" {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.article>
        </div>
      </section>

      {/* 相关文章 */}
      {relatedPosts.length > 0 && (
        <section className="py-20 rock-texture">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-12 text-center">
                相关文章
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover-lift"
                  >
                    <div className="relative h-48">
                      <img
                        src={relatedPost.frontmatter.coverImage || '/blog/default-cover.jpg'}
                        alt={relatedPost.frontmatter.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 line-clamp-2">
                        {relatedPost.frontmatter.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {relatedPost.frontmatter.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>{formatDate(relatedPost.frontmatter.date)}</span>
                        <span>{getReadingTime(relatedPost.content)} 分钟</span>
                      </div>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1"
                      >
                        阅读全文
                        <ArrowLeft className="w-3 h-3 transform rotate-180" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 返回顶部和导航 */}
      <section className="py-12 mining-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/blog"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            返回博客列表
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;