import { ContactInfo, Education, Experience, Skill } from './types';

export const PROFILE = {
  name: "Qodimmul Abadi",
  title: "Arsitekture",
  about: `Profesional berpengalaman dengan latar belakang desain, pengawasan lapangan, dan keahlian teknis (Welding) yang kuat. Mampu mengelola proyek dari tahap desain hingga pelaksanaan lapangan (Pelaksana Lapangan dan Mandor) serta memastikan kualitas dan kepatuhan terhadap standar teknis. Mencari tantangan baru untuk memanfaatkan kemampuan manajerial, teknis, dan pemecahan masalah dalam lingkungan yang berorientasi pada hasil.`
};

export const CONTACT: ContactInfo = {
  phone: "+62822-6401-2592",
  email: "kodima39@gmail.com",
  location: "Pondok Gede, Kota Bekasi",
  website: "www.qodimmulabadi.com"
};

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Freelance Welding",
    company: "Wonosobo, Inc.",
    period: "2022 – 2025",
    description: [
      "Melaksanakan pekerjaan pengelasan (Welding) untuk proyek konstruksi/manufaktur sesuai dengan spesifikasi dan standar kualitas yang ditetapkan.",
      "Memastikan semua hasil las memenuhi standar keselamatan dan kekuatan struktural yang diperlukan, mengurangi potensi kegagalan material di lapangan.",
      "Bekerja secara independen untuk menyelesaikan tugas pengelasan yang ditugaskan dalam batas waktu yang ketat."
    ]
  },
  {
    id: 2,
    role: "Pelaksana Lapangan, Mandor, Pengawas",
    company: "Purwokerto",
    period: "2020 – 2022",
    description: [
      "Bertanggung jawab penuh atas pengawasan harian operasi konstruksi di lapangan, memastikan proyek berjalan sesuai jadwal dan anggaran.",
      "Mengelola dan mengarahkan tim kerja (mandor) dan subkontraktor untuk mencapai efisiensi kerja maksimal dan menjaga standar mutu pekerjaan."
    ]
  },
  {
    id: 3,
    role: "Design Arsitektur",
    company: "Jogjakarta",
    period: "2017 – 2020",
    description: [
      "Merancang dan mengembangkan gambar teknis arsitektur untuk berbagai proyek residensial dan komersial, dari tahap konsep hingga gambar kerja akhir.",
      "Berkoordinasi dengan tim teknik dan klien untuk memastikan desain yang dihasilkan realistis, fungsional, dan sesuai dengan kebutuhan serta regulasi bangunan."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    year: "2022",
    degree: "S1 Arsitektur",
    institution: "Sains Al-Qur'an University"
  },
  {
    id: 2,
    year: "2013",
    degree: "SMA",
    institution: "SMA Takhassus Al-Qur'an"
  }
];

export const EXPERTISE: Skill[] = [
  { name: "Designer", category: "Expertise" },
  { name: "Pelaksana Lapangan", category: "Expertise" },
  { name: "Mandor", category: "Expertise" },
  { name: "Pengawas", category: "Expertise" },
  { name: "Welding", category: "Expertise" }
];

export const LANGUAGES: Skill[] = [
  { name: "Indonesia", category: "Language", level: 100 },
  { name: "English", category: "Language", level: 65 },
  { name: "Jawa", category: "Language", level: 100 }
];

// System prompt for the AI to act as Qodimmul
export const SYSTEM_INSTRUCTION = `
You are Qodimmul Abadi. You are an Architecture professional with expertise in design, field supervision (Mandor), and technical welding.
Answer questions based strictly on the following resume data. Be professional, polite, and concise.

Name: ${PROFILE.name}
Role: ${PROFILE.title}
About: ${PROFILE.about}
Contact: ${CONTACT.phone}, ${CONTACT.email}, ${CONTACT.location}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.year})`).join('\n')}

Skills: ${EXPERTISE.map(s => s.name).join(', ')}
Languages: ${LANGUAGES.map(s => s.name).join(', ')}

If asked about something not in this list, strictly say you don't have that specific information handy but are open to discussing it.
Speak in the language the user asks in (Indonesian or English).
`;
