import React from 'react';
import { Section } from './Section';
import { PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about" title="Tentang Saya" className="bg-white">
      <div className="prose prose-lg text-slate-600 max-w-none">
        <p className="leading-relaxed text-justify md:text-left">
          {PROFILE.about}
        </p>
      </div>
    </Section>
  );
};