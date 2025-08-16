import React from 'react';
import { Image, Video, Play } from 'lucide-react';

const PlaceholderMedia = ({ 
  type = 'image', 
  width = 'w-full', 
  height = 'h-64', 
  title = '占位图片',
  description = '请替换为实际媒体文件',
  className = ''
}) => {
  const baseClasses = `${width} ${height} bg-muted/20 border border-muted/30 rounded-lg flex flex-col items-center justify-center space-y-3 ${className}`;
  
  return (
    <div className={baseClasses}>
      <div className="text-muted-foreground/60">
        {type === 'video' ? (
          <div className="relative">
            <Video className="w-12 h-12" />
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
              <Play className="w-3 h-3 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
        ) : (
          <Image className="w-12 h-12" />
        )}
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-xs text-muted-foreground/80">{description}</p>
      </div>
    </div>
  );
};

export default PlaceholderMedia;