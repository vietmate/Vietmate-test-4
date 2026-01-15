import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  transparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${transparent ? 'bg-transparent text-white border-none' : 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 text-[#1b0e0e] dark:text-gray-100'}`}>
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl font-bold">travel_explore</span>
          </div>
          <h1 className={`text-2xl font-extrabold tracking-tighter ${transparent ? 'text-white' : 'text-primary'}`}>Vietmate</h1>
        </Link>

        {/* Search Bar (Integrated) - Only show if not transparent mode for cleaner look or conditionally */}
        {!transparent && (
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-xl py-3 pl-12 pr-32 focus:ring-2 focus:ring-primary/20 text-sm transition-all outline-none" 
                placeholder="Search destinations, tours, or activities..." 
                type="text" 
              />
              <button className="absolute right-2 top-1.5 bottom-1.5 px-6 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors">
                SEARCH
              </button>
            </div>
          </div>
        )}

        {/* Nav Links */}
        <nav className="hidden xl:flex items-center gap-8">
          <Link to="/discovery" className={`text-sm font-semibold hover:text-primary transition-colors ${transparent ? 'text-white' : ''}`}>Destinations</Link>
          <Link to="/journeys" className={`text-sm font-semibold hover:text-primary transition-colors ${transparent ? 'text-white' : ''}`}>Journeys</Link>
          <Link to="/about" className={`text-sm font-semibold hover:text-primary transition-colors ${transparent ? 'text-white' : ''}`}>About</Link>
          <Link to="/planner" className={`text-sm font-semibold hover:text-primary transition-colors ${transparent ? 'text-white' : ''}`}>Planner</Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <Link to="/ai" className={`p-2 rounded-full transition-colors ${transparent ? 'hover:bg-white/10' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
            <span className="material-symbols-outlined">smart_toy</span>
          </Link>
          <Link to="/help" className={`p-2 rounded-full transition-colors ${transparent ? 'hover:bg-white/10' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
            <span className="material-symbols-outlined">help</span>
          </Link>
          <div className={`h-8 w-[1px] mx-2 ${transparent ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
          <button className={`text-sm font-bold px-4 py-2 rounded-lg ${transparent ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>Log In</button>
          <button className="text-sm font-bold bg-primary text-white px-5 py-2.5 rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">Sign Up</button>
        </div>
      </div>
    </header>
  );
};