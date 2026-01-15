import React from 'react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Discovery() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Navbar />
      <main>
        <section className="relative w-full h-[320px] flex items-center px-4 overflow-hidden">
             <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"></div>
                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRLjqAb1vPHwp_-KI-JUeXkkFGFNP8hNNU8UfLN8jDC0C8dUImOge6vZt-rIS9P2aLQv01zeyl8_ViZYEzHMe3rGua0-3VtPwID9TugfcJBvU3i9KuIIr8m5Em1cj7beP4-hP538JSKTOf3DHL1_X3vN_8ZVG54E7oFrCLLR3iCSAVgcGqtkMvwEb42MH3FCNc13vTxuqK81I2mUPYlU7Dn49fZDSRPykcucnvj6ujTV20WVWHxSOAGawBZKc8BGw4MfxH1lzw3eU')"}}></div>
            </div>
            <div className="relative z-20 max-w-7xl mx-auto w-full">
                <h2 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                    Streamlined <br/> Vietnam Discovery
                </h2>
                <p className="text-white/80 text-base md:text-lg font-medium max-w-xl">
                    Optimized for planners. Compare prices, check availability, and book verified local experiences instantly.
                </p>
            </div>
        </section>

        {/* Category Cards */}
        <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Tours','Transport','Food','Attractions'].map((cat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-all">
                        <div className={`size-10 ${['bg-red-50 text-primary','bg-blue-50 text-blue-600','bg-orange-50 text-orange-600','bg-purple-50 text-purple-600'][i]} rounded-lg flex items-center justify-center shrink-0`}>
                            <span className="material-symbols-outlined !text-2xl">{['map','directions_car','restaurant','local_activity'][i]}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">{cat}</h3>
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">100+ items</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* List Table */}
        <section className="max-w-7xl mx-auto px-4 py-12">
             <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-black tracking-tight">Featured Experiences</h2>
                    <p className="text-slate-500 text-sm font-medium">Quick comparison of top-rated activities</p>
                </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                 <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <div className="col-span-5">Experience Details</div>
                    <div className="col-span-2">Duration / Type</div>
                    <div className="col-span-2">Rating & Popularity</div>
                    <div className="col-span-1 text-right">Price</div>
                    <div className="col-span-2 text-right">Action</div>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-6 py-4 border-b border-slate-100 dark:border-slate-800 items-center hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-colors">
                    <div className="col-span-5 flex items-center gap-4">
                        <div className="size-16 rounded-lg bg-cover bg-center shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDR8r7Nt96-8doqS6bBZsX5U9dBHeJn_nmpaZVsc2HjL6gpDDW2osR2obpcJPMASl-U4NxPp1xs89MBNOXmqcKQQYaaPJK5qkAvQwh_U7zKHYrM9E5iLhLY7v15G3BsqcPHCI7m9SUANvaN6UfI0LuDi-1kloeV7YX1wtuWyM-vD3ba6z7XaAuWN0RPrcNs9vw29WnbgYOnPhjZL0n2msek-AI8ZZYZ3IhhrVV6X6PvsuVG6Ug7c9r8hL1izfdJePvAwIBih7Krcdw')"}}></div>
                        <div>
                             <div className="flex items-center gap-2 mb-0.5"><span className="bg-red-100 text-red-600 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">Best Seller</span></div>
                             <Link to="/experience">
                                <h3 className="font-bold text-sm leading-tight hover:text-primary cursor-pointer transition-colors">Sun World Ba Na Hills Ticket in Da Nang</h3>
                             </Link>
                             <p className="text-xs text-slate-500 line-clamp-1 mt-1">Instant confirmation • Golden Bridge visit</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="text-xs font-semibold">Full Day</div>
                        <div className="text-[10px] text-slate-400">Entry Ticket</div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex items-center gap-1 text-amber-500">
                            <span className="material-symbols-outlined !text-xs fill-current">star</span>
                            <span className="text-xs font-black">4.9</span>
                        </div>
                    </div>
                    <div className="col-span-1 text-right">
                         <div className="text-sm font-black">$38.50</div>
                    </div>
                    <div className="col-span-2 text-right">
                        <Link to="/experience" className="bg-primary text-white text-[11px] font-black px-4 py-2 rounded-lg hover:bg-red-700 transition-colors uppercase tracking-tight">Quick Book</Link>
                    </div>
                </div>

                 {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-6 py-4 border-b border-slate-100 dark:border-slate-800 items-center hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-colors">
                    <div className="col-span-5 flex items-center gap-4">
                        <div className="size-16 rounded-lg bg-cover bg-center shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6sZQ3-JbyhC4Dt7SLy7cDwxgj-ulky_XZzMGjj3aX11U8YLI81rs706SOEOuDpERUJo5BMXcWYwbUoDO9_YTdj-Qto7oYTYM2qQ7kpqVe6WzdDhYcSjmktyPGDwAOLTvo_T9AGOzEELgSHuftVed8rGcLucBy546WMdujX-on2rsYc8Twz-5rqa7VXsJ5NqlhMjBx_wK_q_zZQ-pzhhmjafaY9twJQfThRBfBViJETXnQ-o0aQtlrKJbed5hPbgvZog-Jqo6PP7A')"}}></div>
                        <div>
                             <Link to="/experience">
                                <h3 className="font-bold text-sm leading-tight hover:text-primary cursor-pointer transition-colors">Ha Long Bay Luxury Day Cruise</h3>
                             </Link>
                             <p className="text-xs text-slate-500 line-clamp-1 mt-1">Lunch included • Kayaking • Cave visits</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="text-xs font-semibold">12 Hours</div>
                        <div className="text-[10px] text-slate-400">Day Tour</div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex items-center gap-1 text-amber-500">
                            <span className="material-symbols-outlined !text-xs fill-current">star</span>
                            <span className="text-xs font-black">4.8</span>
                        </div>
                    </div>
                    <div className="col-span-1 text-right">
                         <div className="text-sm font-black">$55.00</div>
                    </div>
                    <div className="col-span-2 text-right">
                        <Link to="/experience" className="bg-primary text-white text-[11px] font-black px-4 py-2 rounded-lg hover:bg-red-700 transition-colors uppercase tracking-tight">Quick Book</Link>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}