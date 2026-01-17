import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Wind, Wifi, Coffee } from 'lucide-react';
import { getFeaturedRooms } from '../services/mockData';

export const Home: React.FC = () => {
  const featuredRooms = getFeaturedRooms();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1036/1920/1080" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4 animate-fade-in-up">
            Welcome to the Exceptional
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight animate-fade-in-up delay-100">
            Where Light <br/> Meets Luxury
          </h1>
          <Link 
            to="/rooms" 
            className="inline-block border border-white/50 bg-white/10 backdrop-blur-sm text-white px-10 py-4 uppercase tracking-widest text-xs hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 animate-fade-in-up delay-200"
          >
            Explore Suites
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-24 md:py-32 px-6 bg-brand-cream">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-8 italic">
            "An oasis of calm in a chaotic world."
          </h2>
          <p className="font-sans text-brand-slate leading-loose text-lg font-light">
            Lumière Sanctuary is more than a hotel; it is a curated experience of tranquility. 
            Designed by world-renowned architects, every angle, texture, and ray of light has been 
            considered to elevate your state of being. Whether you are here for business or leisure, 
            expect perfection.
          </p>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Accommodations</span>
              <h2 className="font-serif text-4xl text-brand-dark mt-4">Curated Stays</h2>
            </div>
            <Link to="/rooms" className="hidden md:flex items-center space-x-2 text-brand-dark hover:text-brand-gold transition-colors text-sm uppercase tracking-widest">
              <span>View All</span> <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featuredRooms.map(room => (
              <div key={room.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img 
                    src={room.images[0]} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-brand-dark group-hover:text-brand-gold transition-colors duration-300">{room.name}</h3>
                    <p className="text-brand-slate font-light mt-2 max-w-sm">{room.description}</p>
                  </div>
                  <span className="text-brand-dark font-serif text-xl">${room.pricePerNight} <span className="text-xs font-sans text-brand-slate uppercase">/ Night</span></span>
                </div>
                <Link to={`/rooms/${room.id}`} className="inline-block mt-4 text-xs uppercase tracking-widest border-b border-brand-dark/30 pb-1 group-hover:border-brand-gold transition-colors">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-500">
              <Star className="w-8 h-8 mx-auto text-brand-gold mb-6" />
              <h3 className="font-serif text-xl mb-4">Michelin Dining</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Experience culinary masterpieces crafted by Chef Antoine Laurent using locally sourced organic ingredients.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-500">
              <Wind className="w-8 h-8 mx-auto text-brand-gold mb-6" />
              <h3 className="font-serif text-xl mb-4">Wellness Spa</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Rejuvenate your spirit with our hydrotherapy pools, sauna, and bespoke massage treatments.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-500">
              <Wifi className="w-8 h-8 mx-auto text-brand-gold mb-6" />
              <h3 className="font-serif text-xl mb-4">Hyper-Connectivity</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Seamless high-speed fiber internet and smart room integration for the modern traveler.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};