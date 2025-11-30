export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: number;
  year: string;
  degree: string;
  institution: string;
}

export interface Skill {
  name: string;
  category: 'Expertise' | 'Language';
  level?: number; // 1-100 for progress bars
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  website: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}