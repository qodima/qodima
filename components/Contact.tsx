import React from 'react';
import { Section } from './Section';
import { CONTACT } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Get In Touch</h2>
        <p className="mb-8 max-w-lg mx-auto">
          Ready to collaborate on your next architectural project or need welding expertise? 
          Feel free to reach out.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12">
           <div className="text-center">
             <div className="text-sm font-semibold text-slate-500 uppercase mb-1">Phone</div>
             <a href={`tel:${CONTACT.phone}`} className="text-white hover:text-slate-200 text-lg">{CONTACT.phone}</a>
           </div>
           <div className="text-center">
             <div className="text-sm font-semibold text-slate-500 uppercase mb-1">Email</div>
             <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-slate-200 text-lg">{CONTACT.email}</a>
           </div>
           <div className="text-center">
             <div className="text-sm font-semibold text-slate-500 uppercase mb-1">Location</div>
             <span className="text-white text-lg">{CONTACT.location}</span>
           </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Qodimmul Abadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};