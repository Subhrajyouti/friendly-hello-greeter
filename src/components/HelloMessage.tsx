
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HelloMessageProps {
  greeting: string;
}

const HelloMessage: React.FC<HelloMessageProps> = ({ greeting }) => {
  const [timeOfDay, setTimeOfDay] = useState<string>('');
  
  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      setTimeOfDay('morning');
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('evening');
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Hello{greeting ? `, ${greeting}` : '!'}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600">
        Good {timeOfDay}! Welcome to our simple greeting website.
      </p>
    </motion.div>
  );
};

export default HelloMessage;
