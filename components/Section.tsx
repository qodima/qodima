import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", title }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 border-l-4 border-slate-900 pl-4 uppercase">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};