import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">LynAI MINES</h3>
            <p className="text-muted-foreground text-sm">
              革新矿物勘探的AI驱动解决方案提供商，致力于通过先进技术推动可持续采矿发展。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">快速链接</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                关于我们
              </Link>
              <Link to="/solutions" className="block text-muted-foreground hover:text-primary transition-colors">
                解决方案
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                服务
              </Link>
              <Link to="/case-studies" className="block text-muted-foreground hover:text-primary transition-colors">
                案例研究
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">资源</h4>
            <nav className="space-y-2">
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                博客
              </Link>
              <Link to="/technical-team" className="block text-muted-foreground hover:text-primary transition-colors">
                技术团队
              </Link>
              <Link to="/events" className="block text-muted-foreground hover:text-primary transition-colors">
                活动
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">联系我们</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  西澳大利亚州珀斯市<br />
                  科廷大学科技园区
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+61 8 9266 9266</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">info@lynaimines.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 LynAI MINES. 保留所有权利。
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              使用条款
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;