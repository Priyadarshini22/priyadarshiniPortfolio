import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' }, 
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://img.freepik.com/free-photo/fresh-cocktails-with-ice-lemon-lime-fruits-generative-ai_188544-12370.jpg',
    url: 'https://mixmaster2024.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'MixMaster',
    text: 'Cocktail Menu wiht multiple options along with details regarding ingredients.',
  },
  {
    id: nanoid(),
    img: 'https://img.freepik.com/free-vector/flat-design-kanban-illustration_23-2149337644.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1719619200&semt=ais_user',
    url: 'https://taskmanagement2024.netlify.app',
    github: 'https://github.com/john-smilga',
    title: 'Task Management',
    text: 'A Task Management app.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
