import React from 'react';
import { PROFILE, CONTACT } from '../constants';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white py-20 md:py-32 px-4 md:px-8 overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-slate-800 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 rounded-full bg-slate-700 opacity-30 blur-2xl"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-slate-700 overflow-hidden shadow-2xl relative bg-slate-800">
             {/* Using a placeholder because I cannot extract the actual image file from the prompt text, but mimicking the suit look */}
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlCYBRiM_Gld20ZKPzEALLUhDXKG21kwY_1AtqhKzTU7GQWmXHqU-iqzx-fnqRqELOt-CpOg5APlADUpdSmP-CkDjQonYv0HuyzlQaJk8RmT_IHV6IGRvXvcaq6xJO1kRTfw7f_iYB7Zm4SAkbKH8oF8mHxIQarM8DoHtfMu0JQvM62vhJPZpFMJH9UMY/s400/qodima-400x400.png" 
              alt={PROFILE.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 uppercase">
            {PROFILE.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light tracking-widest mb-8 uppercase">
            {PROFILE.title}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm text-slate-300">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} />
              <span>{CONTACT.phone}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} />
              <span>{CONTACT.email}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{CONTACT.location}</span>
            </div>
            <a href={`https://${CONTACT.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Globe size={16} />
              <span>{CONTACT.website}</span>
            </a>
          </div>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
             <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})} className="px-6 py-3 bg-white text-slate-900 font-semibold rounded hover:bg-slate-200 transition-colors">
                Contact Me
             </button>
             <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth'})} className="px-6 py-3 border border-slate-600 text-white font-semibold rounded hover:bg-slate-800 transition-colors">
                View Work
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};
