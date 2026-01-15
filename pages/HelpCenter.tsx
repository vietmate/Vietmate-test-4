import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function HelpCenter() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0e0e] dark:text-white transition-colors duration-200">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="relative overflow-hidden rounded-xl bg-primary px-8 py-16 text-center text-white">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://placeholder.pics/svg/800')] bg-repeat"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Your Vietmate Support Center</h1>
              <p className="text-white/80 text-lg mb-10">Search our FAQ or connect with a local travel expert in Ho Chi Minh City</p>
              <div className="relative max-w-xl mx-auto group">
                <div className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="w-full pl-12 pr-32 py-5 bg-white rounded-xl text-gray-900 border-none focus:ring-4 focus:ring-white/20 shadow-2xl placeholder:text-gray-400" placeholder="Search for bookings, refunds, or visas..." type="text" />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary rounded-lg font-bold text-sm hover:bg-red-600 transition-colors">Search</button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <h2 className="text-2xl font-black mb-8">Browse Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 group cursor-pointer p-8 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all flex justify-between items-end">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-primary">confirmation_number</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">Bookings & Reservations</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-xs">Manage your tours, hotel vouchers, and upcoming trip details.</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </div>
            {['Payments & Refunds', 'Tour Guides', 'Travel Safety', 'Account Settings'].map((cat, i) => (
               <div key={i} className="group cursor-pointer p-8 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all">
                <div className="space-y-4">
                    <span className="material-symbols-outlined text-4xl text-primary">{['payments','map','verified_user','account_circle'][i]}</span>
                    <h3 className="text-xl font-bold">{cat}</h3>
                    <p className="text-gray-500 dark:text-gray-400">Manage relevant settings and find help.</p>
                </div>
               </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 className="text-2xl font-black mb-6">Trending Questions</h2>
                <div className="space-y-2">
                    {['How do I cancel my booking for a full refund?', 'Where can I find my e-voucher?', 'Are airport transfers included?', 'Payment methods in Vietnam', 'Contact guide on arrival'].map((q, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0">
                            <span className="font-medium text-gray-700 dark:text-gray-300">{q}</span>
                            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8 border-2 border-dashed border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">lightbulb</span>
                    </div>
                    <h3 className="text-xl font-bold">Pro Tip for Travelers</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Always keep a digital copy of your e-voucher on your phone. Most tour guides in Vietnam accept digital check-ins, but having the QR code ready will save you time at busy attractions like Ha Long Bay or Cu Chi Tunnels.
                </p>
                <a href="#" className="text-primary font-bold flex items-center gap-2 hover:underline">
                    Read more tips <span className="material-symbols-outlined">north_east</span>
                </a>
            </div>
        </section>

        {/* Contact */}
        <section id="contact-us">
            <h2 className="text-2xl font-black mb-8">Still Need Help?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <h3 className="text-lg font-bold mb-6">Send us a Message</h3>
                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                                <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4 transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                                <input type="email" className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4 transition-all" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                            <textarea rows={4} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4 transition-all" placeholder="How can our experts help you today?"></textarea>
                        </div>
                        <button className="w-full py-4 bg-primary text-white font-black rounded-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                            Send Message <span className="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}