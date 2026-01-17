import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const Confirmation: React.FC = () => {
  return (
    <div className="h-screen w-full bg-brand-cream flex items-center justify-center">
      <div className="bg-white p-12 md:p-16 text-center shadow-lg border-t-4 border-brand-gold max-w-lg w-full">
        <div className="flex justify-center mb-6">
            <CheckCircle className="text-brand-gold w-16 h-16" />
        </div>
        <h1 className="font-serif text-4xl text-brand-dark mb-4">Reservation Confirmed</h1>
        <p className="text-brand-slate font-light mb-8">
            Thank you for choosing Lumière Sanctuary. A confirmation email has been sent to your inbox. We eagerly await your arrival.
        </p>
        <Link to="/" className="inline-block px-8 py-3 border border-brand-dark text-brand-dark uppercase tracking-widest text-xs hover:bg-brand-dark hover:text-white transition-colors">
            Return Home
        </Link>
      </div>
    </div>
  );
};