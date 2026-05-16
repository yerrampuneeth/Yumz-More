/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2,
  Menu,
  X,
  Coffee,
  IceCream,
  Cake
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Offers", href: "#offers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-12 py-4",
      isScrolled ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-pink-100" : "bg-white/30 backdrop-blur-sm border-b border-white/20"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            {/* Outer Gradient Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-pink-400 to-yellow-400 rounded-full shadow-lg shadow-pink-200 group-hover:rotate-12 transition-transform duration-500" />
            {/* Lace/Dashed Border Effect */}
            <div className="absolute inset-1 border-2 border-white/40 border-dashed rounded-full" />
            {/* White Center */}
            <div className="absolute inset-[6px] bg-white rounded-full flex items-center justify-center shadow-inner">
              <span className="font-black text-lg bg-gradient-to-br from-pink-500 to-yellow-500 bg-clip-text text-transparent">YZ</span>
            </div>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="font-black text-xl tracking-tighter text-pink-600 leading-none">YUMZ & MORE</span>
            <span className="text-[10px] font-bold text-pink-400 tracking-[0.2em] leading-none">DESSERTS & DRINKS</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-gray-600 hover:text-pink-500 transition-colors",
                link.name === "Menu" && "text-pink-600 font-semibold"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/917036758542" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden border-t"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-pink-500 font-medium transition-colors border-b border-gray-50 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/917036758542" 
            target="_blank"
            rel="noreferrer"
            className="bg-pink-600 text-white px-5 py-3 rounded-xl font-semibold text-center hover:bg-pink-700 transition-all"
          >
            Order on WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#FFF9F8]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide uppercase text-pink-600 bg-pink-100 rounded-full">
            Sweet & Budget Friendly
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-heading leading-tight mb-6">
            Homemade <span className="text-pink-500">Happiness</span> <br />
            in every jar.
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-lg leading-relaxed">
            Experience the richest milkshakes and most decadent chocolate cake bowls in Warangal. Fresh, hygienic, and crafted with love.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/917036758542" 
              className="px-8 py-4 bg-pink-600 text-white rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all shadow-xl hover:shadow-pink-200 flex items-center gap-2 active:scale-95"
            >
              <MessageCircle size={22} />
              Book Now
            </a>
            <a 
              href="#menu" 
              className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-2 outline-none"
            >
              View Menu
              <ChevronRight size={20} />
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              <span className="text-gray-900 font-bold block">Highly Affordable</span>
              500+ happy customers in Warangal
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          <div className="relative z-10 w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl skew-y-1">
             <img 
               src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" 
               alt="Gourmet Cake" 
               className="w-full h-full object-cover"
             />
          </div>
          {/* Decorative Floaters */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-pink-50"
          >
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
              <Star fill="currentColor" size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Best Milkshakes</p>
              <p className="text-[10px] text-gray-500">Pista & Badam Milk</p>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-pink-50"
          >
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
              <Cake size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Custom Jar Cakes</p>
              <p className="text-[10px] text-gray-500">Homemade & Fresh</p>
            </div>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-100 rounded-full blur-[100px] -z-10 opacity-30" />
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={cn("mb-12", centered && "text-center")}>
    <span className="text-pink-500 font-bold tracking-widest uppercase text-sm">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900">{title}</h2>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=600" alt="Baking" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
              <div className="bg-pink-600 p-8 rounded-3xl text-white">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm opacity-90 font-medium">Hygienic & Fresh Ingredients</p>
              </div>
            </div>
            <div className="pt-12 space-y-4">
               <div className="bg-yellow-400 p-8 rounded-3xl text-gray-900">
                <p className="text-3xl font-bold mb-2">Home</p>
                <p className="text-sm font-semibold">Grown Recipe Secrets</p>
              </div>
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600" alt="Dessert" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <SectionHeading title="Quality, Freshness & Pure Delight" subtitle="Our Story" centered={false} />
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Yumz & More, we believe that every dessert should tell a story of freshness and quality. 
              Our kitchen in Warangal is dedicated to crafting homemade delicacies that aren't just sweet, 
              but hygienic and wholesome.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                "Homemade Quality",
                "Fresh Every Day",
                "Hygienic Preparation",
                "Budget Friendly",
                "Milkshake Specialists",
                "Bulk Orders Welcome"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <a 
              href="https://wa.me/917036758542" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all active:scale-95"
            >
              Order & Taste Quality
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const items = [
    { name: "Cup Cakes", category: "Desserts", price: "₹50", image: "https://images.unsplash.com/photo-1599785209796-786432b228bc?q=80&w=800", desc: "Chocolate Delight, Pineapple, Dark Forest, Butterscotch" },
    { name: "Jar Cakes", category: "Desserts", price: "₹80", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800", desc: "Freshly layered homemade goodness in a jar" },
    { name: "Mulberry Delight", category: "Desserts", price: "₹90", image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800", desc: "Our signature seasonal specialty" },
    { name: "Pista Sip", category: "Drinks", price: "₹40", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800", desc: "Rich and creamy pista flavored thick shake" },
    { name: "Almond Fresh", category: "Drinks", price: "₹40", image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800", desc: "Refreshing Badam milk with real nuts" },
    { name: "Choco Magic", category: "Drinks", price: "₹40", image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=800", desc: "The ultimate chocolate indulgence" },
    { name: "Combo Pack / Hamper", category: "Special", price: "₹399", image: "https://images.unsplash.com/photo-1549462980-6a034227ad64?q=80&w=800", desc: "Perfect for gifting and celebrations" },
  ];

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Our Signature Menu" subtitle="Delicious Hits" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const colors = [
              "bg-[#FDE7F3] border-pink-100", 
              "bg-[#ECFDF5] border-emerald-100", 
              "bg-[#EFF6FF] border-blue-100", 
              "bg-[#FFFBEB] border-amber-100"
            ];
            const bgColorClass = colors[index % colors.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={cn(
                  "rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border group flex flex-col",
                  bgColorClass,
                  item.name === "Combo Pack / Hamper" && "md:col-span-2 lg:col-span-1"
                )}
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm border border-white/20">
                    {item.category}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brand-heading pr-4">{item.name}</h3>
                    <span className="text-pink-600 font-bold text-lg shrink-0">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{item.desc}</p>
                  <a 
                    href={`https://wa.me/917036758542?text=Hi, I want to order ${item.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-white/80 backdrop-blur-sm text-gray-900 border border-white/50 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all shadow-sm"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
           <div className="inline-block p-1 bg-white rounded-2xl shadow-sm border border-gray-100">
             <div className="flex flex-wrap items-center gap-4 px-6 py-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-xl text-pink-700 font-bold text-sm">
                  <Coffee size={18} /> Thick Shakes
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-xl text-yellow-700 font-bold text-sm">
                  <Cake size={18} /> Jar Cakes
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl text-blue-700 font-bold text-sm">
                  <IceCream size={18} /> Fresh Milk
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Offers = () => {
  return (
    <section id="offers" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white p-10 md:p-16 rounded-[3rem] border border-pink-50 shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-sm font-bold tracking-wide uppercase">Loyalty Club</span>
              <h2 className="text-4xl font-extrabold text-brand-heading">Yumz Loyalty Program</h2>
              <p className="text-gray-500 text-lg">Get your card stamped on every visit. Enjoy our treats and get rewarded!</p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-pink-500 border border-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {i}
                  </div>
                ))}
                {[4, 5, 6, 7].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-300 font-bold text-sm">
                    {i}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-yellow-400 border border-yellow-500 flex items-center justify-center font-bold text-[10px] text-gray-900 shadow-lg animate-pulse">
                  FREE
                </div>
              </div>
            </div>

            <div className="bg-pink-50/50 p-10 rounded-[2.5rem] text-center border border-pink-100/50 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-2xl mb-4 shadow-sm flex items-center justify-center text-pink-500">
                <Star fill="currentColor" size={32} />
              </div>
              <span className="text-sm uppercase font-bold text-pink-400 block tracking-widest mb-1">Special Reward</span>
              <span className="text-3xl font-extrabold text-pink-600">Free Brownie</span>
              <span className="text-gray-500 font-medium mt-2">On your 8th visit to any of our stores</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-50 rounded-full blur-[120px] -z-10 opacity-30" />
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 flex flex-col lg:flex-row shadow-xl">
          <div className="p-12 lg:p-20 flex-1 bg-brand-bg">
            <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-8 text-brand-heading">Ready for a Treat?</h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Store Location</span>
                <p className="font-bold text-brand-text">Rajaji Nagar, Naim Nagar, Hanamkonda, Telangana</p>
                <div className="mt-2 text-pink-500 font-bold">@yumz_n.more</div>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call / Order</span>
                <div className="flex flex-col gap-1 font-bold text-lg text-brand-text">
                  <span>+91 70367 58542</span>
                  <span>+91 83093 02402</span>
                </div>
              </div>

              <div className="flex items-center gap-6 md:col-span-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pricing</span>
                  <span className="text-green-600 font-extrabold uppercase tracking-tight">Highly Affordable</span>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="flex gap-4">
                   <a href="https://instagram.com/yumz_n.more" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all text-pink-500 shadow-sm border border-pink-50">
                     <Instagram size={24} />
                   </a>
                   <a href="https://wa.me/917036758542" className="bg-[#25D366] px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all text-white">
                     <MessageCircle size={22} />
                     Contact Now
                   </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 bg-pink-50 flex items-center justify-center p-8 border-l border-gray-50">
             <div className="text-center group">
                <div className="w-48 h-48 bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-md rotate-3 group-hover:rotate-0 transition-transform">
                   <div className="relative w-40 h-40 flex items-center justify-center">
                      {/* Large Gradient Ring */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-pink-400 to-yellow-400 rounded-3xl shadow-lg shadow-pink-200" />
                      {/* Lace Effect */}
                      <div className="absolute inset-2 border-4 border-white/30 border-dashed rounded-3xl" />
                      {/* White Center */}
                      <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center shadow-inner">
                        <span className="font-black text-6xl bg-gradient-to-br from-pink-500 to-yellow-500 bg-clip-text text-transparent">YZ</span>
                      </div>
                   </div>
                </div>
                <h3 className="text-brand-heading text-3xl font-extrabold tracking-tighter uppercase italic">Yumz & More</h3>
                <p className="text-pink-500 font-bold mt-2 uppercase tracking-widest text-xs italic">Desserts | Drinks | More</p>
                <div className="mt-8 px-4 py-2 bg-white rounded-full text-gray-800 text-xs font-bold shadow-sm inline-block border border-pink-50 italic">
                  FSSAI LIC: 26626018000268
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-500 flex items-center justify-center gap-1 font-medium">
          Made with <span className="text-pink-500">❤️</span> for Warangal & Hanamkonda
        </p>
        <p className="text-gray-400 text-sm mt-2 font-medium">
          &copy; {new Date().getFullYear()} Yumz & More. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      href="https://wa.me/917036758542"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all border-4 border-white active:scale-95"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -left-2 bg-pink-600 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
        Book Now
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <main className="min-h-screen font-sans text-gray-900 selection:bg-pink-100 selection:text-pink-600">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Offers />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

