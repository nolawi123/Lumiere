import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { generateConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Lumière Sanctuary. I am your personal concierge. How may I assist you today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const replyText = await generateConciergeResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: replyText, timestamp: new Date() }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-lg shadow-2xl overflow-hidden border border-brand-cream animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-brand-dark p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-brand-gold w-4 h-4" />
              <h3 className="text-white font-serif italic tracking-wide">Concierge</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-stone-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-dark text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
                    : 'bg-white border border-stone-200 text-stone-700 rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 px-4 py-2 rounded-lg shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-stone-100 flex items-center space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about rooms, dining..." 
              className="flex-grow bg-stone-50 text-sm p-2 rounded-md outline-none focus:ring-1 focus:ring-brand-gold/50"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="p-2 bg-brand-gold text-white rounded-md hover:bg-brand-dark transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-brand-dark text-brand-gold shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};