
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 text-center text-gray-500 text-sm">
      <p>© {year} Simple Hello Website. Made with ❤️</p>
    </footer>
  );
};

export default Footer;
