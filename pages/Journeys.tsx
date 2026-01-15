import React from 'react';
import { Navbar } from '../components/Navbar';

export default function Journeys() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
        <Navbar transparent />
        
        {/* Section 1 */}
        <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRLjqAb1vPHwp_-KI-JUeXkkFGFNP8hNNU8UfLN8jDC0C8dUImOge6vZt-rIS9P2aLQv01zeyl8_ViZYEzHMe3rGua0-3VtPwID9TugfcJBvU3i9KuIIr8m5Em1cj7beP4-hP538JSKTOf3DHL1_X3vN_8ZVG54E7oFrCLLR3iCSAVgcGqtkMvwEb42MH3FCNc13vTxuqK81I2mUPYlU7Dn49fZDSRPykcucnvj6ujTV20WVWHxSOAGawBZKc8BGw4MfxH1lzw3eU')"}}></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-20 px-8 md:px-20 max-w-4xl">
                <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-black tracking-[0.2em] uppercase rounded-full mb-6">Natural Wonder</span>
                <h2 className="text-white text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">The Breath <br/> of the Dragon</h2>
                <p className="text-white/80 text-xl md:text-2xl font-light mb-10 max-w-xl leading-relaxed">Float through the emerald waters of Ha Long Bay, where thousands of limestone karsts rise like ancient giants from the mist.</p>
                <div className="flex flex-wrap gap-4">
                    <button className="px-10 py-4 bg-primary text-white font-black rounded-full hover:bg-red-700 transition-all shadow-2xl shadow-primary/30">Begin the Story</button>
                    <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-all">View Details</button>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60 animate-bounce">
                <span className="material-symbols-outlined !text-4xl">keyboard_double_arrow_down</span>
            </div>
        </section>

        {/* Section 2 */}
         <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAvTgwiy3G5VxMdHr0PkSeZEwdQysZ2goyhMV7frqftJjAhWZJMEMRm6rinMHDYf_Yer5Iv80JH8OvnOLlZS5bj7vMt1flINF9wUq1eRZ7-7xskffcaIh9WbnB0Jg5OXaCiof3pIufbfCdGbpayMfgUDnZReKDexyrjXMPwkbVfFPktHBkQNjWNoLi5f2tOVmFmx2CfXa1gGqvRHnhoTUIDwzLiTOCV1ctacfh132DtTg5L_aEsoAfoOQBlH-lS06lqfIPj9rGyPQ')"}}></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-20 px-8 md:px-20 max-w-4xl">
                 <span className="inline-block px-3 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-500 text-xs font-black tracking-[0.2em] uppercase rounded-full mb-6">Timeless Heritage</span>
                <h2 className="text-white text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">Lanterns & <br/> Legacies</h2>
                <p className="text-white/80 text-xl md:text-2xl font-light mb-10 max-w-xl leading-relaxed">As dusk falls on Hoi An, the ancient streets glow with the warmth of a thousand silk lanterns, whispering stories of merchant ships and colonial dreams.</p>
                <div className="flex flex-wrap gap-4">
                     <button className="px-10 py-4 bg-amber-600 text-white font-black rounded-full hover:bg-amber-700 transition-all shadow-2xl shadow-amber-600/30">Step Into History</button>
                     <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-all">Experience Local Life</button>
                </div>
            </div>
         </section>

          {/* Section 3 */}
         <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS8vBmvoyxqt48iqdE0xOOPMLZN8nVCGJaJDAwXcvDPgK22Rd1p1TyfFJm5hbTY7NL8Cvrcm1ABdwEqkcWCzB3OISRAvG7iU3QnffBOWjD5lMFa8Yuq9ewBPF8lPZLAVoqPQaEJueElRl4f2g5R21y4P5TNJLInUshudd-2WY0OIiNQuKwpoLn7s8BVFZFp01zLSfa1wj6BvuhmSFip8-5T_qWa55j_MvAr0_oFgCEOe1ayEBS4oxtQ1y48mWIymY8TBEn5NAFnnw')"}}></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-20 px-8 md:px-20 max-w-4xl">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-[0.2em] uppercase rounded-full mb-6">Mountain Majesty</span>
                <h2 className="text-white text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">Steps to <br/> the Clouds</h2>
                <p className="text-white/80 text-xl md:text-2xl font-light mb-10 max-w-xl leading-relaxed">Trek through the emerald staircase of Sapa's rice terraces, where the ethnic tribes live in harmony with the mist-covered peaks.</p>
                 <div className="flex flex-wrap gap-4">
                    <button className="px-10 py-4 bg-emerald-600 text-white font-black rounded-full hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/30">Wander the Hills</button>
                 </div>
            </div>
         </section>

         {/* Navigation Dots */}
         <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
            <div className="group flex items-center justify-end gap-3 cursor-pointer">
                <span className="text-[10px] text-white/40 uppercase font-black opacity-0 group-hover:opacity-100 transition-opacity">North</span>
                <div className="size-2 rounded-full bg-white transition-all scale-150"></div>
            </div>
            <div className="group flex items-center justify-end gap-3 cursor-pointer">
                <span className="text-[10px] text-white/40 uppercase font-black opacity-0 group-hover:opacity-100 transition-opacity">Central</span>
                <div className="size-2 rounded-full bg-white/40 group-hover:bg-white transition-all"></div>
            </div>
             <div className="group flex items-center justify-end gap-3 cursor-pointer">
                <span className="text-[10px] text-white/40 uppercase font-black opacity-0 group-hover:opacity-100 transition-opacity">Highlands</span>
                <div className="size-2 rounded-full bg-white/40 group-hover:bg-white transition-all"></div>
            </div>
         </div>
    </div>
  );
}