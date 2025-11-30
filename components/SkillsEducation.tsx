import React from 'react';
import { Section } from './Section';
import { EDUCATION, EXPERTISE, LANGUAGES } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

export const SkillsEducation: React.FC = () => {
  return (
    <Section className="bg-white grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Education Column */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 border-l-4 border-slate-900 pl-4 uppercase">
          Education
        </h2>
        <div className="space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="flex gap-4 items-start p-4 rounded-lg bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-slate-200 rounded-full text-slate-700">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-500 block mb-1">{edu.year}</span>
                <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                <p className="text-slate-600">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise & Language Column */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 border-l-4 border-slate-900 pl-4 uppercase">
          Expertise & Language
        </h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Award size={20} /> Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {EXPERTISE.map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div>
           <h3 className="text-lg font-bold text-slate-800 mb-4">Languages</h3>
           <div className="space-y-4">
             {LANGUAGES.map((lang, idx) => (
               <div key={idx}>
                 <div className="flex justify-between text-sm font-medium text-slate-700 mb-1">
                   <span>{lang.name}</span>
                   <span>{lang.level ? `${lang.level}%` : ''}</span>
                 </div>
                 <div className="w-full bg-slate-200 rounded-full h-2.5">
                   <div 
                      className="bg-slate-600 h-2.5 rounded-full" 
                      style={{ width: `${lang.level || 100}%` }}
                    ></div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

    </Section>
  );
};