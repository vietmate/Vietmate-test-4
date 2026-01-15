import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl font-bold">travel_explore</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tighter">Vietmate</h2>
          </div>
          <p className="text-gray-400 max-w-sm mb-6">
            Your ultimate gateway to authentic Vietnam. Discover local secrets, book handpicked experiences, and travel like a native.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/discovery" className="hover:text-primary">Destinations</Link></li>
            <li><Link to="/" className="hover:text-primary">Best Tours</Link></li>
            <li><Link to="/journeys" className="hover:text-primary">Immersive Journeys</Link></li>
            <li><Link to="/planner" className="hover:text-primary">Trip Planner</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
            <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            <li><Link to="/help" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 pt-12 mt-12 border-t border-white/10 text-center text-gray-500 text-xs">
        © 2024 Vietmate Travel Marketplace. Made with passion in Vietnam.
      </div>
    </footer>
  );
};