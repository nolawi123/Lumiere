import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  
  // Navbar Logic: Transparent on Home top, Solid otherwise
  const navClass = `fixed w-full z-50 transition-all duration-500 ${
    scrolled || !isHome ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
  }`;

  const linkClass = `text-sm uppercase tracking-widest font-sans font-medium hover:text-brand-gold transition-colors duration-300 ${
    scrolled || !isHome ? 'text-white' : 'text-white'
  }`;

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <nav className={navClass}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="z-50 group">
            <h1 className={`font-serif text-2xl md:text-3xl tracking-wide transition-colors ${scrolled || !isHome ? 'text-white' : 'text-white'}`}>
              LUMIÈRE
              <span className="text-brand-gold text-4xl leading-3">.</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/rooms" className={linkClass}>Rooms & Suites</Link>
            <Link to="#" className={linkClass}>Dining</Link>
            <Link to="#" className={linkClass}>Spa</Link>
            <Link to="#" className={linkClass}>Experiences</Link>
            <Link to="/rooms" className="px-6 py-2 bg-brand-gold text-white text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-white font-serif italic">Home</Link>
            <Link to="/rooms" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-white font-serif italic">Rooms</Link>
            <Link to="#" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-white font-serif italic">Dining</Link>
            <Link to="#" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-white font-serif italic">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-cream pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
             <h2 className="font-serif text-3xl tracking-wider">LUMIÈRE</h2>
             <p className="text-white/60 text-sm leading-relaxed max-w-xs">
               A sanctuary of light and luxury. Redefining the art of hospitality in every detail.
             </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-6 text-brand-gold">Explore</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/rooms" className="hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Culinary</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Wellness</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-brand-gold">Contact</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center space-x-3"><MapPin size={16}/> <span>1200 Coastal Hwy, Malibu, CA</span></li>
              <li className="flex items-center space-x-3"><Phone size={16}/> <span>+1 (800) 555-0199</span></li>
              <li className="flex items-center space-x-3"><Mail size={16}/> <span>concierge@lumiere.com</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-brand-gold">Newsletter</h3>
            <div className="flex border-b border-white/30 pb-2">
              <input type="email" placeholder="Your Email Address" className="bg-transparent w-full outline-none text-white placeholder-white/40 text-sm" />
              <button className="text-brand-gold uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">Join</button>
            </div>
            <div className="flex space-x-6 mt-8 text-white/60">
              <Instagram className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Facebook className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Twitter className="hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 pt-8 text-center md:text-left text-xs text-white/30 uppercase tracking-widest">
          © {new Date().getFullYear()} Lumière Sanctuary. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};