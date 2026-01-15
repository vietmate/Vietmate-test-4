import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ExperienceDetail from './pages/ExperienceDetail';
import About from './pages/About';
import HelpCenter from './pages/HelpCenter';
import Planner from './pages/Planner';
import AIGuide from './pages/AIGuide';
import Discovery from './pages/Discovery';
import Journeys from './pages/Journeys';

// A simple navigation wrapper for demo purposes to switch between the different page designs
const NavigationOverlay = () => {
  const location = useLocation();
  // Don't show overlay on the immersive journey page or AI page to maintain the design integrity
  if (location.pathname === '/journeys' || location.pathname === '/ai' || location.pathname === '/planner') return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] group">
      <button className="bg-slate-900 text-white p-3 rounded-full shadow-xl hover:bg-primary transition-colors">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="absolute bottom-14 right-0 w-48 bg-white dark:bg-slate-900 shadow-xl rounded-xl p-2 hidden group-hover:block border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col gap-1 text-xs font-bold">
          <Link to="/" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Home (Listings)</Link>
          <Link to="/discovery" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Discovery (Table)</Link>
          <Link to="/experience" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Experience Detail</Link>
          <Link to="/journeys" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Journeys (Immersive)</Link>
          <Link to="/about" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">About Us</Link>
          <Link to="/help" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Help Center</Link>
          <Link to="/planner" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Trip Planner</Link>
          <Link to="/ai" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">AI Guide</Link>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperienceDetail />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/ai" element={<AIGuide />} />
      </Routes>
      <NavigationOverlay />
    </HashRouter>
  );
}