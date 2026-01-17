import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomById } from '../services/mockData';

export const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const room = getRoomById(id || '');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  if (!room) return <div>Room not found</div>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
        setIsProcessing(false);
        navigate('/confirmation');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h1 className="font-serif text-4xl text-brand-dark mb-12">Confirm Your Reservation</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 space-y-8">
                    <h3 className="font-serif text-2xl text-brand-dark border-b border-stone-100 pb-4">Guest Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-brand-slate">First Name</label>
                            <input required name="firstName" onChange={handleChange} className="w-full bg-stone-50 border-b border-stone-200 p-3 outline-none focus:border-brand-gold transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-brand-slate">Last Name</label>
                            <input required name="lastName" onChange={handleChange} className="w-full bg-stone-50 border-b border-stone-200 p-3 outline-none focus:border-brand-gold transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-brand-slate">Email Address</label>
                        <input required type="email" name="email" onChange={handleChange} className="w-full bg-stone-50 border-b border-stone-200 p-3 outline-none focus:border-brand-gold transition-colors" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-brand-slate">Check-in</label>
                            <input required type="date" name="checkIn" onChange={handleChange} className="w-full bg-stone-50 border-b border-stone-200 p-3 outline-none focus:border-brand-gold transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-brand-slate">Check-out</label>
                            <input required type="date" name="checkOut" onChange={handleChange} className="w-full bg-stone-50 border-b border-stone-200 p-3 outline-none focus:border-brand-gold transition-colors" />
                        </div>
                    </div>

                    <div className="pt-8">
                        <button 
                            type="submit" 
                            disabled={isProcessing}
                            className={`w-full bg-brand-dark text-white py-4 uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors duration-300 ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {isProcessing ? 'Processing...' : 'Complete Reservation'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
                <div className="bg-white p-8 shadow-sm border border-stone-100">
                    <h3 className="font-serif text-xl text-brand-dark mb-6">Reservation Summary</h3>
                    <img src={room.images[0]} alt="Room thumbnail" className="w-full h-40 object-cover mb-6" />
                    
                    <div className="space-y-4 text-sm border-b border-stone-100 pb-6 mb-6">
                        <div className="flex justify-between">
                            <span className="text-brand-slate">Room Type</span>
                            <span className="font-medium text-brand-dark">{room.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-brand-slate">Rate</span>
                            <span className="font-medium text-brand-dark">${room.pricePerNight} / Night</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-serif text-lg text-brand-dark">Total Due</span>
                        <span className="font-serif text-2xl text-brand-gold">${room.pricePerNight}</span>
                    </div>
                    <p className="text-[10px] text-brand-slate mt-2 text-right">* Taxes and fees calculated at check-in</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};