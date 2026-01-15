import React from 'react';
import { Navbar } from '../components/Navbar';

export default function Planner() {
  return (
    <div className="bg-white dark:bg-[#120808] text-slate-900 dark:text-slate-100 h-screen flex flex-col overflow-hidden">
      <header className="h-16 shrink-0 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#120808]/95 backdrop-blur-md px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 cursor-pointer">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined !text-xl">dashboard</span>
                </div>
                <h1 className="text-xl font-black tracking-tighter text-primary uppercase">Vietmate <span className="text-slate-400 font-medium lowercase text-sm">/ Planner</span></h1>
            </div>
        </div>
        <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuACanzuWHgG9Pr0bYnfxlNu40eIwzWAhn6zoOtTCxY9AUaZqcy9AQNb--3eesi3JUsMrri8F2RpQTS1H-L3jWGN7OEDoPsANnB1fEMGsD2E7f2hl0eAQ4B_yBHwVNqRmGw8o194RgbJcZcCu-jgG_b8_hrXZiEnnmTkAkPLW5-rDfo0mYSrXiHKTsAIsc1zra36w8LEPp3-kr8mta0y8Pdb3nvhjZ6qRkrL1TvG5x3oBIB2HPAROnqW8tvEX7jvoM90Ef3B7x5PFkk" className="size-8 rounded-full border-2 border-white" alt="Team"/>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUqtHdWRYLX-RQqfviV36oJEwAmZbeZuXRLfyQVJ2_W7e5Ft07VrMWCukMl2gMfaGKSB-9aIjGJHe6lfHncX9u_rk7bwEaGNsvp6H9FIAO5sZTZLEh0UGhR73yPLtP_FxP4ZNtDdJ-Z7-05echV5zXCLjSNmrFjqwlGpNsjAphqJ09ZcPxXO3ThLh_8iljGQ7WdBSo9vCIXvTC4cUMm-tOH3bNrI3Un_xu6iM_uAxw9tQCn4wilQSxGnPGiBEw2wQD_3-eJddZBw0" className="size-8 rounded-full border-2 border-white" alt="Team"/>
                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold border-2 border-white text-slate-600">+3</div>
            </div>
            <button className="flex items-center gap-2 text-sm font-bold bg-slate-900 text-white px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined !text-sm">share</span> Share Trip
            </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[320px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 overflow-y-auto hidden md:block">
            <div className="space-y-8">
                <div>
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Core Search</h3>
                    <div className="space-y-4">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 !text-lg">location_on</span>
                            <input type="text" className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold focus:ring-primary focus:border-primary" defaultValue="Da Nang & Hoi An" />
                        </div>
                         <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 !text-lg">calendar_month</span>
                            <input type="text" className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold focus:ring-primary focus:border-primary" defaultValue="Oct 12 - Oct 20, 2024" />
                        </div>
                    </div>
                </div>
                <div>
                     <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Deep Customization</h3>
                     <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold">Pace of Travel</label>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 text-xs font-bold border rounded-lg bg-primary/10 border-primary text-primary">Relaxed</button>
                                <button className="flex-1 py-2 text-xs font-bold border rounded-lg hover:bg-slate-50 border-slate-200 text-slate-600">Balanced</button>
                                <button className="flex-1 py-2 text-xs font-bold border rounded-lg hover:bg-slate-50 border-slate-200 text-slate-600">Intense</button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold">Experience Vibes</label>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium cursor-pointer border border-primary text-primary">History</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium cursor-pointer">Adventure</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium cursor-pointer border border-primary text-primary">Photography</span>
                            </div>
                        </div>
                     </div>
                </div>
                 <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined !text-lg">auto_fix_high</span> Re-Optimize Plan
                    </button>
                 </div>
            </div>
        </aside>

        {/* Main Dashboard */}
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#120808] p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight">Vietnam Expedition <span className="text-primary">2024</span></h2>
                        <p className="text-slate-500 font-medium">Last synced: 2 minutes ago • Collaborative mode active</p>
                    </div>
                </header>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Itinerary Widget */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-[500px]">
                        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <h3 className="font-black flex items-center gap-2"><span className="material-symbols-outlined text-primary">event_note</span> Timeline Itinerary</h3>
                            <span className="text-xs font-bold text-slate-400">Day 1 - 8</span>
                        </div>
                        <div className="p-6 overflow-y-auto flex-1 space-y-6">
                            <div className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                                <div className="absolute -left-[9px] top-0 size-4 bg-primary rounded-full border-4 border-white dark:border-slate-900"></div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase text-primary">09:00 AM - Morning</span>
                                    <h4 className="font-bold">Ba Na Hills Exploration</h4>
                                    <p className="text-sm text-slate-500">Pick up from Hyatt Regency Lobby. Private car arranged.</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-600 font-bold rounded">Tour</span>
                                        <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-600 font-bold rounded">Confirmed</span>
                                    </div>
                                </div>
                            </div>
                             <div className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                                <div className="absolute -left-[9px] top-0 size-4 bg-slate-200 rounded-full border-4 border-white dark:border-slate-900"></div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase text-slate-400">01:30 PM - Afternoon</span>
                                    <h4 className="font-bold text-slate-400">Lunch at Le Jardin D'Amour</h4>
                                    <p className="text-sm text-slate-400">Buffet included in ticket price. Reserve table near window.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Matrix Widget */}
                     <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-[500px]">
                         <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <h3 className="font-black flex items-center gap-2"><span className="material-symbols-outlined text-primary">compare_arrows</span> Experience Matrix</h3>
                            <button className="text-xs font-bold text-primary hover:underline">Add More</button>
                        </div>
                         <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                                        <th className="p-4 text-[10px] font-black uppercase text-slate-400">Activity</th>
                                        <th className="p-4 text-[10px] font-black uppercase text-slate-400">Price</th>
                                        <th className="p-4 text-[10px] font-black uppercase text-slate-400">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr>
                                        <td className="p-4"><div className="font-bold text-sm">Luxury Cruise</div></td>
                                        <td className="p-4 font-bold text-sm">$55.00</td>
                                        <td className="p-4"><span className="size-2 bg-green-500 rounded-full inline-block"></span></td>
                                    </tr>
                                     <tr>
                                        <td className="p-4"><div className="font-bold text-sm">Street Food Tour</div></td>
                                        <td className="p-4 font-bold text-sm">$29.00</td>
                                        <td className="p-4"><span className="size-2 bg-amber-500 rounded-full inline-block"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                         </div>
                     </div>

                     {/* Checklist Widget */}
                     <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 h-[500px]">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-black flex items-center gap-2"><span className="material-symbols-outlined text-primary">task_alt</span> Travel Readiness</h3>
                            <div className="size-10 rounded-full border-4 border-primary flex items-center justify-center">
                                <span className="text-[10px] font-black">82%</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                             <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary size-5" />
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold">Vietnam eVisa Approved</h4>
                                    <p className="text-[10px] text-slate-400 uppercase font-black">Document ID: #VT-8921</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4 p-3 border-2 border-primary/20 bg-primary/5 rounded-xl">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary size-5" />
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold">Travel Insurance</h4>
                                    <p className="text-[10px] text-primary uppercase font-black">Action Required</p>
                                </div>
                            </div>
                        </div>
                     </div>

                </div>
            </div>
        </main>
      </div>
    </div>
  );
}