import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ángel | Developer', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Bienvenido a mi portafolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ángel Valladares',
  subtitle: 'Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'circle-cropped.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'proyecto.jpg',
    title: 'Sistema de administración de un Supermercado',
    info: '',
    info2: '',
    url: 'https://github.com/AngelDev996/AngelDev996.github.io',
    repo: 'https://github.com/AngelDev996/AngelDev996.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proyecto.jpg',
    title: 'Sistema de administración para una librería',
    info: '',
    info2: '',
    url: 'https://github.com/AngelDev996/AngelDev996.github.io',
    repo: 'https://github.com/AngelDev996/AngelDev996.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proyecto.jpg',
    title: 'Aplicacion de toma de notas y agenda personal',
    info: '',
    info2: '',
    url: 'https://github.com/AngelDev996/AngelDev996.github.io',
    repo: 'https://github.com/AngelDev996/AngelDev996.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'angeldev996@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_Angel996',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/ariel-valladares-the-styleful',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/angel-valladares-57910a1b9/s',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AngelDev996',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
