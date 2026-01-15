import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function ExperienceDetail() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#1b0e0e] dark:text-white">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-6">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <a href="#" className="text-[#974e4e] dark:text-gray-400 text-xs font-medium hover:underline">Vietnam</a>
          <span className="text-[#974e4e] text-xs">/</span>
          <a href="#" className="text-[#974e4e] dark:text-gray-400 text-xs font-medium hover:underline">Hanoi</a>
          <span className="text-[#974e4e] text-xs">/</span>
          <span className="text-primary text-xs font-bold uppercase tracking-wider">Tours</span>
        </div>

        {/* Header */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div className="flex flex-col gap-2 flex-1 min-w-[300px]">
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">Hanoi Street Food Tour: <span className="text-primary">Authentic Flavors</span> of the Old Quarter</h1>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded font-bold">
                <span className="material-symbols-outlined text-[16px] mr-1 fill-1">star</span> 4.9
              </div>
              <span className="text-[#974e4e] dark:text-gray-400">2,150 reviews • Hanoi, Vietnam</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-xl h-10 px-4 bg-[#f3e7e7] dark:bg-[#2d2d2d] text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">share</span> Share
            </button>
            <button className="flex items-center gap-2 rounded-xl h-10 px-4 bg-[#f3e7e7] dark:bg-[#2d2d2d] text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">favorite</span> Save
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] mb-10">
          <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden group relative">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgcBshQ5JWYMdZL2mLLHwzLk4Xw1wCB8ox4xjFrcjYxytc_ghlhllKo_GYdL8cyftkVRvAavL27QICbUMfafLBYjOExozvd9mAE2oNprv1EMCINZiZgjyKXRawl35hFCf48sYcVNETYjYMWXZqmLLj1PVFERlDB5WHcVODideJCWOzQPJYYh6BLV4f720crWsOaoVI4-svk7G39pMH7QvDQTfBW8q9k_TET4JB-NkckAiOCdWFvCjtvsJRRyxKS-LRnDOksPsuvnc')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="md:col-span-2 rounded-xl overflow-hidden group relative">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlAwFyTu_0Uuy_z-ohzJLhPh2w5vuui50ds9vvVLvLGiQgvUEEI4jXpf4xHZwIR0k9sQm17iaFd9a0obOMj3b0a3D3SBTJg4JesInc6rHqvUB7pUPiCQoVPA8Vpzdkwq3RY8Li1JIyW2b9CCNFzrb3JWMNsnVwbZAeDl-6aXnWmZliAKyJSYKov6viNoh539UovIsw1Js1GK2MIqFhamRumQqmwH8qOoxtEpambz8KBUeTO8V_qyj2xeuqGhOOChmplW62X-ZRcvQ')" }}></div>
          </div>
          <div className="rounded-xl overflow-hidden group relative">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDu5dhroVTHVrW93EaBWzTDguCr9OEzHP1mgsnNbpqKCbbi9_VANNdnrNvgz_yW9l0YFuMYjbEe-igofccndhrQTzGVuxTvvIKd13iJzIW7p0UruGEg4A-zJInP7AStiPtj4HeMkBHdgQ0QLdJ7QZlGuLUILQWF4JgxGiVT_MbG2dchYVqZoRyyXkJdZcdX6nbcbbbfBMmVER3wV88wx7thpVFu7_xDYoY3g0EEuk2SjcIUFAdxCDHEOq5tbIum2VehclR5h7GFhv0')" }}></div>
          </div>
          <div className="rounded-xl overflow-hidden group relative">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-_KfgUf2dKqndreKo0nae2UIMmebmdSLccSZR5D30DgQ27vbC3pMsQzk2VJ8zSHUGTcBuPwiGwpa5Sipx84HpIxlf9ijEKWDGi4Tx2gvcaR-FZoGrhliINqMS6nZS0UsNSdF-yttZqUhQcclCQQDU9ZA2jQiDqdJl-1nu1Zkqpo_snP5WkrbMPSc2XWGWmbrHOLyJ3073ywXmXx10gQrF0wB_CX4ozXnd2S--BQLzJiMxXiw9Ay9aksf7JnHCN473RZw8zB3-bVY')" }}>
              <span className="text-white font-bold text-lg">+12 Photos</span>
            </div>
          </div>
        </div>

        {/* Content & Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start relative">
          
          <div className="lg:col-span-2 space-y-12">
             {/* Sticky Tabs */}
            <div className="sticky top-20 z-40 bg-background-light/95 dark:bg-background-dark/95 border-b border-[#f3e7e7] dark:border-[#2d2d2d] -mx-4 px-4 md:px-0 mb-8 backdrop-blur-sm">
                <div className="flex gap-8">
                <a href="#overview" className="border-b-2 border-primary text-primary py-4 text-sm font-bold">Overview</a>
                <a href="#itinerary" className="border-b-2 border-transparent text-[#974e4e] dark:text-gray-400 py-4 text-sm font-bold hover:text-primary transition-colors">Itinerary</a>
                <a href="#included" className="border-b-2 border-transparent text-[#974e4e] dark:text-gray-400 py-4 text-sm font-bold hover:text-primary transition-colors">Included</a>
                <a href="#reviews" className="border-b-2 border-transparent text-[#974e4e] dark:text-gray-400 py-4 text-sm font-bold hover:text-primary transition-colors">Reviews</a>
                </div>
            </div>

            {/* Overview */}
            <section id="overview" className="space-y-4">
              <h2 className="text-2xl font-bold">About this experience</h2>
              <p className="text-[#1b0e0e] dark:text-gray-300 leading-relaxed text-lg font-light">
                Discover the hidden gems of Hanoi's legendary food scene on this guided walking tour. We'll navigate the labyrinthine alleys of the Old Quarter to find the best bun cha, banh mi, and egg coffee—places where locals eat, far from the tourist traps. Our expert guides tell the stories behind each dish, connecting you to the heart of Vietnamese culture.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="flex flex-col items-center p-4 rounded-xl bg-[#f3e7e7] dark:bg-[#2d2d2d] text-center">
                  <span className="material-symbols-outlined text-primary mb-2">schedule</span>
                  <span className="text-xs font-bold uppercase">Duration</span>
                  <span className="text-sm">4 Hours</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl bg-[#f3e7e7] dark:bg-[#2d2d2d] text-center">
                  <span className="material-symbols-outlined text-primary mb-2">group</span>
                  <span className="text-xs font-bold uppercase">Size</span>
                  <span className="text-sm">Max 8 people</span>
                </div>
                 <div className="flex flex-col items-center p-4 rounded-xl bg-[#f3e7e7] dark:bg-[#2d2d2d] text-center">
                  <span className="material-symbols-outlined text-primary mb-2">translate</span>
                  <span className="text-xs font-bold uppercase">Language</span>
                  <span className="text-sm">English</span>
                </div>
                 <div className="flex flex-col items-center p-4 rounded-xl bg-[#f3e7e7] dark:bg-[#2d2d2d] text-center">
                  <span className="material-symbols-outlined text-primary mb-2">flash_on</span>
                  <span className="text-xs font-bold uppercase">Booking</span>
                  <span className="text-sm">Instant</span>
                </div>
              </div>
            </section>

             {/* Itinerary */}
            <section id="itinerary" className="space-y-6">
              <h2 className="text-2xl font-bold">The Journey</h2>
              <div className="space-y-8 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20">
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 size-[24px] rounded-full bg-primary border-4 border-background-light dark:border-background-dark z-10"></div>
                  <h4 className="font-bold text-lg">Meeting Point: Cathedral Area</h4>
                  <p className="text-[#974e4e] dark:text-gray-400 text-sm mt-1">Start your journey with a brief orientation and your first snack: Bánh Mì at a local favorite spot.</p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 size-[24px] rounded-full bg-primary border-4 border-background-light dark:border-background-dark z-10"></div>
                  <h4 className="font-bold text-lg">Hàng Bạc Alley Exploration</h4>
                  <p className="text-[#974e4e] dark:text-gray-400 text-sm mt-1">Taste authentic Bún Chả (Grilled Pork with Vermicelli) in a spot that hasn't changed its recipe in 30 years.</p>
                </div>
                 <div className="relative pl-10">
                  <div className="absolute left-0 top-1 size-[24px] rounded-full bg-primary border-4 border-background-light dark:border-background-dark z-10"></div>
                  <h4 className="font-bold text-lg">The Grand Finale</h4>
                  <p className="text-[#974e4e] dark:text-gray-400 text-sm mt-1">Visit a hidden rooftop café for the iconic Vietnamese Egg Coffee while overlooking the city lights.</p>
                </div>
              </div>
            </section>

             {/* Reviews */}
            <section id="reviews" className="space-y-8">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl font-bold">Traveler Reviews</h2>
                    <button className="text-primary font-bold text-sm hover:underline">See all 2,150</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-[#f3e7e7] dark:border-[#2d2d2d] space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8Ors_4SKkJOQWdUAWB5wp2YH2XPZRBKr7CWlcXueUdgJlHiJGCSukfP-XtUgd6pRVIvyIsdI-k8UzHCu9hzfLy0PUQckm8J8kKuluSOpe5lJpWgrsnzFhoGxW-AYxQWOjxm75h5HFiB446Ia4oBQ0ZCcfkjd1Fql6m3O_cDoeQSwEg3GvqRCcMd2g5Ayskx3sNz9w4KXNJjWeDXn0Hl20PlPtm-pz2zJKzr8N6rC2OgN9yJBB7GXn8ttSxbgQXFSAjv7syerdCqI')"}}></div>
                            <div>
                                <p className="font-bold text-sm">Sarah Jenkins</p>
                                <div className="flex text-yellow-500 text-xs">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-sm italic leading-relaxed text-[#974e4e] dark:text-gray-400">"The highlight of my Hanoi trip! Long, our guide, was so knowledgeable. That egg coffee in the hidden alley was magical. Highly recommend!"</p>
                    </div>
                     <div className="p-6 rounded-2xl border border-[#f3e7e7] dark:border-[#2d2d2d] space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-hX_Oo7q8Bxr4BeidUpH61Qn4-v8BDh8QxX6aKVORYIip5dR2AYYVic8dCDyvJjlonZOPfO93HwnAr1rqDFSzXRo7POxFl9cgjnE77rzflJYbHQ3k99cbV9g52dQbd2Ei3TAbUxQrKscVNDUOImBvFhzaG1jKMh3FuvMyyAZlICMY_BOXU2_SPF21tm6TOssuY4NvyuJIqn1EhJSipe0ITOXjx9X4meQFy_Iaa_zetkOurwCxtPMoqX75AfNyXTbegd-XkkESOvw')"}}></div>
                            <div>
                                <p className="font-bold text-sm">Marc Antoine</p>
                                <div className="flex text-yellow-500 text-xs">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-sm italic leading-relaxed text-[#974e4e] dark:text-gray-400">"So much food! Make sure you don't eat lunch before you go. Every stop was better than the last. Great small group vibe."</p>
                    </div>
                </div>
            </section>
          </div>

          {/* Right Column: Booking Widget */}
          <div className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-[#f3e7e7] dark:border-[#2d2d2d] bg-background-light dark:bg-background-dark p-6 shadow-xl shadow-primary/5">
                <div className="flex items-baseline justify-between mb-6">
                    <span className="text-sm font-bold text-[#974e4e] dark:text-gray-400 uppercase tracking-widest">Starting from</span>
                    <div className="text-right">
                        <span className="text-3xl font-black text-primary">$35</span>
                        <span className="block text-xs text-[#974e4e] dark:text-gray-400">per person</span>
                    </div>
                </div>
                <div className="space-y-4">
                     <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-[#974e4e] dark:text-gray-400">Date</label>
                        <div className="flex items-center gap-2 w-full p-3 rounded-xl bg-[#f3e7e7] dark:bg-[#2d2d2d] border border-transparent focus-within:border-primary transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
                            <span className="text-sm font-medium">Select a date</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                         <label className="text-xs font-bold uppercase text-[#974e4e] dark:text-gray-400">Travelers</label>
                         <div className="flex items-center justify-between w-full p-3 rounded-xl bg-[#f3e7e7] dark:bg-[#2d2d2d]">
                             <span className="text-sm font-medium">2 Persons</span>
                             <div className="flex items-center gap-3">
                                 <button className="size-6 rounded-full bg-white dark:bg-black flex items-center justify-center border border-[#f3e7e7] dark:border-[#2d2d2d]">-</button>
                                 <span className="text-sm font-bold">2</span>
                                 <button className="size-6 rounded-full bg-white dark:bg-black flex items-center justify-center border border-[#f3e7e7] dark:border-[#2d2d2d]">+</button>
                             </div>
                         </div>
                    </div>
                    <div className="pt-4 space-y-3">
                         <div className="flex justify-between text-sm">
                            <span>$35.00 x 2 travelers</span>
                            <span>$70.00</span>
                         </div>
                         <div className="flex justify-between text-sm">
                            <span>Service fee</span>
                            <span>$0.00</span>
                         </div>
                         <div className="h-px bg-[#f3e7e7] dark:bg-[#2d2d2d]"></div>
                         <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>$70.00</span>
                         </div>
                    </div>
                    <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                        Book Now
                    </button>
                </div>
                 <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                    <div className="flex gap-4">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary">local_offer</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm">Vietmate Exclusive</p>
                            <p className="text-xs text-[#974e4e] dark:text-gray-400 mt-1">Get a free digital Hanoi food guide with every booking today!</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}