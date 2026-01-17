import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../services/mockData';
import { RoomType } from '../types';

export const Rooms: React.FC = () => {
  const [filter, setFilter] = useState<RoomType | 'All'>('All');

  const filteredRooms = filter === 'All' ? ROOMS : ROOMS.filter(r => r.type === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-brand-dark mb-6">Accommodations</h1>
          <p className="text-brand-slate max-w-xl mx-auto font-light">
            Discover a collection of suites and villas designed for the ultimate in comfort and style.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {['All', ...Object.values(RoomType)].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as RoomType | 'All')}
              className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                filter === type 
                  ? 'bg-brand-dark text-white border-brand-dark' 
                  : 'bg-transparent text-brand-slate border-brand-slate/30 hover:border-brand-dark hover:text-brand-dark'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {filteredRooms.map(room => (
            <div key={room.id} className="group bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={room.images[0]} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-white px-6 py-3 font-serif text-lg">
                  ${room.pricePerNight} <span className="text-xs font-sans text-brand-slate uppercase">/ Night</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-2xl text-brand-dark">{room.name}</h3>
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">{room.type}</span>
                </div>
                <p className="text-brand-slate font-light mb-8 leading-relaxed">
                  {room.description}
                </p>
                <div className="flex items-center justify-between border-t border-stone-100 pt-6">
                  <div className="flex space-x-4 text-brand-slate text-sm">
                    <span>{room.sizeSqFt} sq ft</span>
                    <span>•</span>
                    <span>Up to {room.capacity} Guests</span>
                  </div>
                  <Link 
                    to={`/rooms/${room.id}`}
                    className="px-6 py-3 bg-brand-cream text-brand-dark text-xs uppercase tracking-widest font-medium hover:bg-brand-dark hover:text-white transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};