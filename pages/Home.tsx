import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const experiences = [
  {
    id: 1,
    title: "Luxury Overnight Cruise: Limestone Caves & Kayaking",
    location: "Ha Long Bay",
    price: 125.00,
    rating: 4.9,
    reviews: "2.4k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkKS-FcDKpH8VD1ROuBsFp8v-6giuUBznnQeA3Z0TVWrJZUFvu2C7csOFKCYpFKX6fXgfhDJYHKf1gTnsljJ4zCrLpyqskwLJGmMNsyJK-49RxS_Y1ocUrwX9Li8RxixIbV_7M5dm5dqiGVaHegSlqR4ORx3osgpOs6mL-E3Wmu-HNT6j7U2O2jNtpXHKf_WwlL-kKj7wZ2VxAXUit9EtDxMRYjjineNC3ffxbpj6rU4DFUA1K4vOjs_OQ_94dltFZuMg0Rb8nP-Y",
    tag: "Instant Confirmation",
    tagIcon: "bolt"
  },
  {
    id: 2,
    title: "Hanoi Midnight Street Food Tour by Vintage Vespa",
    location: "Hanoi Old Quarter",
    price: 45.00,
    rating: 4.8,
    reviews: "1.2k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFGTJm-HzX_PWojIcyrojWvC2Q9tWGRhC6-wJSK9cH8ixlw6v1tyftLQQjYCOriBEexxdDd8zSDzFUvDW-XqrpKFKhBcoCcMNMCo7G8_x5nqi3HNvVQ8XjqBPIONssw17XzUJzmW_XPMKb4Ury6pPFp8i3HuxHZRwcKlre0jGuBGrwk5hExHNelOTZ5xea-_EmCSdc_ZhEPkxVMPCNF1yzjLQsWwCd1InXkpFBY6Kg7ZrvfBxZoJM9RWKyekRhC1fvX7o-x9-KDM4",
    tag: "Best Seller",
    tagIcon: "local_fire_department"
  },
  {
    id: 3,
    title: "Bana Hills & Golden Bridge Day Trip with Lunch",
    location: "Da Nang",
    price: 68.00,
    rating: 4.7,
    reviews: "856",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK0PPqsYH88o1E79-NftYRdOzpp8qecfcnX0nU2QbnrTYfuYZqnZ1RSNs5AIghbnKDnAbmlkeYRbxIku96b7SQxgAYUMziFFq52k4l5ybzMhZoy7lOT7rjiQ_-pbNVBX4QK2UGEv2Ontg0-qIMSLE5xmH26lClOflBPxC82ghzkA2wF0lVORD5al_qOB1xd5sUpA8Qlvd_Wk0pVzSGoPGGUPKt6s8VNPYTpDlQM89RBymjOije4f_M6xmJJLVXW0O7yeT83W4lbFk",
    tag: "Instant Confirmation",
    tagIcon: "bolt"
  },
  {
    id: 4,
    title: "Hoi An Ancient Town: Traditional Lantern Making",
    location: "Hoi An",
    price: 18.00,
    rating: 5.0,
    reviews: "512",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC1sp7s68QwoLZwwUbjVTX9K_qczFsjZVwWabR3cV-tNocOgvi0O8A0Zq0wEstHbEbzlF-yDpOakSd1CvfIhjDLHElsTvDrS9cAm8rvq5bbB8vWIA4hHJkmmcMtBiwgh16KQwjhKAj8z2mocWxtoxxBzx_bXrx7OoZxDCC3eZcNsNfBFRiZKcmMvaMzXDBby40HW89i5he9S8E61WbBT4UMsA9E_r1fK69dlFMmD0PX9AfBfRAVgy2U_-7Oximr1sFJEKVdixKFU4",
    tag: null,
    tagIcon: null
  },
  {
    id: 5,
    title: "Trang An Grottoes & Hoa Lu Ancient Capital Day Tour",
    location: "Ninh Binh",
    price: 55.00,
    rating: 4.9,
    reviews: "1.1k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVPvy4UWxan_W3gnzwnzBcXSRzDEw-_OKqSXHgj6rNdVAaZh9X7X_JzpbB307y9ANdrFIWDIwSM9pHUFnrQgXmfcgrFdwqIZ73ZEmp9CJ_g2VpliUG1n58BCGLO0IpTm_3oSASswLacoO8hJDK546BpefttdBt2oX79b1YBTYhJRlEAXmlj-oh2YGkOCQyrP1xf4oJ8oVW4ODYSxWdRUPCL-DSdA4cgpNNd5htsO_3nNHtc9DJrhNuPcMgXI_PfVIPUWHcib5hkpg",
    tag: "Instant Confirmation",
    tagIcon: "bolt"
  },
  {
    id: 6,
    title: "Cu Chi Tunnels Half-Day Guided Historical Tour",
    location: "Ho Chi Minh City",
    price: 29.00,
    rating: 4.6,
    reviews: "3.4k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX35fHuZGIPBSQbKmotlEKOqdN7ZLkF85WDDw88fLmr5hlBLN2jM8AufGujvwBEod4cfDc15s7mJwTjVXkE4J484AZ51UKi9QqjVADDe9_Wb4WZGCj-NSMz8fvcEULydZzsAidSWgJM29-VdCfjisdgAIUtrNCYdgJQOUeal3XqVGii0WxvY49AvzNJvQ9Sk-DAfLyuyXfKRUS3l3sB3-3rUVxuvF_9qGO9fcSpfLWr23xKntJa_OXdoGNx-bhEfcKh1RLMrHeL_k",
    tag: null,
    tagIcon: null
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-6 py-6 flex-1 w-full">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-gray-900 dark:text-gray-200">Experiences</span>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className="w-72 shrink-0 hidden lg:block">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold">Filters</h3>
                <button className="text-xs font-bold text-primary hover:underline">Clear All</button>
              </div>

              {/* Location */}
              <div className="mb-8">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">Location</h4>
                <div className="space-y-3">
                  {['Hanoi', 'Ha Long Bay', 'Da Nang', 'Ho Chi Minh City'].map((city) => (
                    <label key={city} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/20" defaultChecked={city === 'Hanoi'} />
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">{city}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="mb-8">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">Duration</h4>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-bold">Half-day</button>
                  <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-transparent rounded-lg text-xs font-bold hover:border-primary/20">Full-day</button>
                  <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-transparent rounded-lg text-xs font-bold hover:border-primary/20">Multi-day</button>
                </div>
              </div>

               {/* Rating */}
              <div className="mb-8">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">Min. Rating</h4>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex text-amber-400 gap-1">
                      {[1, 2, 3, 4].map(i => <span key={i} className="material-symbols-outlined fill-1 text-lg">star</span>)}
                      <span className="text-gray-400 text-sm font-bold ml-1">4+</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Price */}
               <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">Price Range</h4>
                <input className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range" min="0" max="500" />
                <div className="flex justify-between mt-3 text-xs font-bold">
                  <span>$0</span>
                  <span className="text-primary">$250+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="flex-1">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight mb-2">150+ Experiences in Vietnam</h2>
                <p className="text-gray-500 text-sm">Discover the soul of the dragon with our curated tours.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-400">Sort by:</span>
                <select className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-lg text-sm font-bold focus:ring-primary/20 focus:border-primary cursor-pointer pr-10">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:scale-[1.02]">
                  <div className="relative h-56 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${exp.image}')` }}
                    />
                    {exp.tag && (
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-sm font-bold">{exp.tagIcon}</span>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">{exp.tag}</span>
                      </div>
                    )}
                    <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-xs font-bold text-gray-500 mb-2">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {exp.location}
                    </div>
                    <Link to="/experience" className="block">
                       <h3 className="font-extrabold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                    </Link>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-amber-400">
                        <span className="material-symbols-outlined fill-1 text-lg">star</span>
                      </div>
                      <span className="text-sm font-bold">{exp.rating}</span>
                      <span className="text-xs font-medium text-gray-400">({exp.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">From</p>
                        <p className="text-2xl font-black text-primary">${exp.price.toFixed(2)}</p>
                      </div>
                      <Link to="/experience" className="px-5 py-2.5 bg-primary text-white text-xs font-extrabold rounded-lg shadow-lg shadow-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        BOOK NOW
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 border-2 border-primary text-primary font-black rounded-xl hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/5">
                LOAD MORE ADVENTURES
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}