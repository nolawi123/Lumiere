import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRoomById } from '../services/mockData';
import { ArrowLeft, Check, Wifi, Martini, Waves, User, Sun, Coffee, Bath, Monitor, Tv, Bed, Wind } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi size={20} />,
  Martini: <Martini size={20} />,
  Waves: <Waves size={20} />,
  User: <User size={20} />,
  Sun: <Sun size={20} />,
  Coffee: <Coffee size={20} />,
  Bath: <Bath size={20} />,
  Monitor: <Monitor size={20} />,
  Tv: <Tv size={20} />,
  Bed: <Bed size={20} />,
  Wind: <Wind size={20} />
};

export const RoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const room = getRoomById(id || '');

  if (!room) {
    return <div className="pt-32 text-center">Room not found</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Image */}
      <div className="relative h-[60vh] w-full">
        <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-12 left-0 w-full container mx-auto px-6 md:px-12 text-white">
            <Link to="/rooms" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest hover:text-brand-gold mb-4 transition-colors">
                <ArrowLeft size={14} /> <span>Back to Rooms</span>
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl">{room.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-12">
            <div>
                <h2 className="font-serif text-3xl mb-6 text-brand-dark">Overview</h2>
                <p className="text-brand-slate text-lg font-light leading-relaxed">
                    {room.longDescription}
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
                {room.images.slice(1).map((img, idx) => (
                    <img key={idx} src={img} alt={`Detail ${idx}`} className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                ))}
            </div>

            {/* Amenities */}
            <div>
                <h2 className="font-serif text-3xl mb-8 text-brand-dark">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-brand-slate">
                            <span className="text-brand-gold">{IconMap[amenity.icon] || <Check size={20} />}</span>
                            <span className="font-light">{amenity.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
            <div className="sticky top-32 bg-brand-cream p-8 shadow-sm border border-stone-200">
                <div className="flex justify-between items-end mb-6 border-b border-stone-300 pb-6">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-brand-slate">Starting From</span>
                        <div className="font-serif text-3xl text-brand-dark">${room.pricePerNight}</div>
                    </div>
                    <div className="text-right text-xs uppercase text-brand-slate mb-1">Per Night</div>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm text-brand-dark">
                        <span>Max Occupancy</span>
                        <span>{room.capacity} Guests</span>
                    </div>
                    <div className="flex justify-between text-sm text-brand-dark">
                        <span>Size</span>
                        <span>{room.sizeSqFt} SQ FT</span>
                    </div>
                </div>

                <Link 
                    to={`/booking/${room.id}`}
                    className="block w-full text-center bg-brand-dark text-white py-4 uppercase tracking-widest text-xs hover:bg-brand-gold transition-colors duration-300"
                >
                    Book This Room
                </Link>
                
                <p className="text-center text-[10px] text-brand-slate mt-4 uppercase tracking-wider">
                    Best Rate Guaranteed
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};