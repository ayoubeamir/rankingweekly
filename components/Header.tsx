import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">
            <span className="text-emerald-500">Ranking</span> Weekly
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;