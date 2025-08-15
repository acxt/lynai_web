import React from 'react';
// import { motion } from 'framer-motion';

const Events = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4">活动</h1>
        <p className="text-muted-foreground">活动页面即将推出...</p>
      </motion.div>
    </div>
  );
};

export default Events;