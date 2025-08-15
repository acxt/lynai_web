import matter from 'gray-matter';

// 使用 import.meta.glob 自动扫描所有 markdown 文件
const postModules = import.meta.glob('/src/content/posts/**/*.md', { as: 'raw', eager: true });

export const getAllPosts = () => {
  const posts = [];
  
  for (const [path, content] of Object.entries(postModules)) {
    try {
      const { data: frontmatter, content: markdownContent } = matter(content);
      
      // 从文件路径提取 slug
      const slug = path
        .replace('/src/content/posts/', '')
        .replace(/\.md$/, '')
        .replace(/\//g, '-');
      
      posts.push({
        slug,
        frontmatter,
        content: markdownContent,
        path
      });
    } catch (error) {
      console.error(`Error processing post ${path}:`, error);
    }
  }
  
  // 按日期排序，最新的在前
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0);
    const dateB = new Date(b.frontmatter.date || 0);
    return dateB - dateA;
  });
};

export const getPostBySlug = (slug) => {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (count = 3) => {
  const posts = getAllPosts();
  return posts.filter(post => post.frontmatter.featured).slice(0, count);
};

export const getPostsByCategory = (category) => {
  const posts = getAllPosts();
  return posts.filter(post => 
    post.frontmatter.category?.toLowerCase() === category.toLowerCase()
  );
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};