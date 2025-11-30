import React from 'react';
import { Section } from './Section';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Pengalaman Kerja" className="bg-slate-50">
      <div className="space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-0">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-[150px] top-0 bottom-0 w-px bg-slate-300"></div>
            
            <div className="md:flex gap-10 group">
              {/* Date & Company */}
              <div className="md:w-[150px] shrink-0 md:text-right mb-2 md:mb-0">
                <span className="inline-block py-1 px-2 rounded bg-slate-200 text-slate-700 text-xs font-bold mb-1">
                  {exp.period}
                </span>
                <h4 className="font-bold text-slate-900">{exp.company}</h4>
              </div>

              {/* Dot indicator */}
              <div className="hidden md:block absolute left-[144px] mt-1.5 w-3 h-3 rounded-full bg-slate-400 border-2 border-slate-50 group-hover:bg-slate-900 transition-colors"></div>

              {/* Content */}
              <div className="flex-1 pb-8 border-l-2 border-slate-200 md:border-l-0 pl-4 md:pl-0">
                 <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-slate-500 md:hidden" />
                    <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                 </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};