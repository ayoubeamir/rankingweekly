import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Ranking Weekly. All rights reserved.</p>
        <p className="text-sm mt-2">Helping local businesses succeed online.</p>
      </div>
    </footer>
  );
};

export default Footer;