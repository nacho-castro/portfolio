import { ProfileData } from '@/lib/types';

export const profile: ProfileData = {
  name: 'Ignacio Castro',
  title: 'Software Engineer & Full Stack Developer',
  image: '/images/profile1.webp',
  description:
    'Systems Engineering student at UTN passionate about technology, backend development, automation, and AI-powered solutions. Browse my portfolio to see my projects and connect with me.',
  email: 'ignaciocastroplanas@gmail.com',
  location: 'Argentina',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/nacho-castro',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ignacio-castro-p/',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=ignaciocastroplanas@gmail.com',
      icon: 'mail',
    },
  ],
  skills: [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Next.js', 'TypeScript'],
    },
    {
      category: 'Backend',
      skills: ['Java', 'Spring', 'Node.js', 'MySQL', 'MongoDB', 'Supabase', 'Express'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Postman', 'Cloudflare', 'AWS', 'Firebase', 'Docker', 'n8n'],
    },
  ],
  projects: [
    {
      id: 'project-1',
      title: 'Transferime - UTN.LABS Startup',
      image: '/images/transferime.webp',
      description:
        'AI-powered chatbot developed to simplify payment collection for independent professionals. It sends payment reminders via WhatsApp and notifies professionals when clients complete their bank transfers.',
      technologies: ['WhatsApp API', 'AI', 'n8n', 'Chatbot'],
      github:
        'https://tn.com.ar/tecno/aplicaciones/2025/07/26/estudiantes-crearon-transferime-una-ia-en-whatsapp-que-simplifica-los-pagos-a-psicologos/',
      live: 'https://walink.co/7c4b23',
    },
    {
      id: 'project-2',
      title: 'MetaMapa - UTN',
      image: '/images/metamapa.webp',
      description:
        'MetaMapa is a web platform for visualizing and managing geolocated events in real time, built with a scalable microservices architecture.',
      technologies: ['Microservices', 'Java', 'Design Patterns', 'Spring', 'MySQL'],
      github: 'https://github.com/nacho-castro/dds-metamapa-2025',
    },
    {
      id: 'project-3',
      title: 'Tienda Sol - UTN',
      image: '/images/tiendasol.webp',
      description:
        'Full-stack e-commerce platform built with MongoDB, Express.js, and Node.js for the backend, React with Next.js for the frontend, and Clerk for authentication.',
      technologies: ['MongoDB', 'Express', 'Node.js', 'React', 'Next.js', 'Clerk'],
      github: 'https://github.com/nacho-castro/TP-DDSW-2025',
    },
    {
      id: 'project-4',
      title: 'Database Systems Project - UTN',
      image: '/images/DER.webp',
      description:
        'Designed a normalized relational database model and implemented large-scale data migration. Also developed a Business Intelligence solution using a star schema and ETL processes for strategic metrics analysis.',
      technologies: ['SQL', 'ETL', 'Business Intelligence'],
      github: 'https://github.com/nacho-castro/BDD-2025-2C',
      live: 'https://drive.google.com/file/d/1O52p-DftZI7y-GHTA9fuOWc1CJCK2hpL/view?usp=sharing',
    },
    {
      id: 'project-5',
      title: 'Operating Systems Project - UTN',
      image: '/images/so.webp',
      description:
        'Distributed operating system simulator developed in Go.',
      technologies: ['Go'],
      github: 'https://github.com/nacho-castro/tp-sistemas-operativos-1c-2025.git',
      live: 'https://docs.google.com/document/d/1zoFRoBn9QAfYSr0tITsL3PD6DtPzO2sq9AtvE8NGrkc/edit?tab=t.0',
    },
    {
      id: 'project-6',
      title: 'JPMP Portfolio',
      image: '/images/jpmp.webp',
      description:
        'Static portfolio website developed for an artist using Angular 17.',
      technologies: ['Angular'],
      github: 'https://github.com/nacho-castro/portfolio-jpmp',
      live: 'https://jpmp-arte.web.app/',
    }
  ],
  education: [
    {
      institution: 'Universidad Tecnológica Nacional',
      degree: 'Systems Engineering',
      field: '',
      year: 'Present',
    },
    {
      institution: '',
      degree: 'Oracle Next Education',
      field: 'Backend Development',
      year: '2024',
    },
    {
      institution: 'Argentina Programa 4.0',
      degree: '#YoProgramo',
      field: 'Fullstack Development',
      year: '2022',
    },
  ],
};