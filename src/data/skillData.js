import { Code, Database, Smartphone, Cloud, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'text-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-500',
    skills: [
      { name: 'C', desc: 'Low-level programming' },
      { name: 'C++', desc: 'System programming' },
      { name: 'Java', desc: 'Enterprise applications' },
      { name: 'Python', desc: 'Data science & backend' },
      { name: 'JavaScript', desc: 'Modern ES6+ features' },
      
      { name: 'R', desc: 'Statistical computing' }
    ]
  },
  {
    title: 'Web Technologies',
    icon: Code,
    color: 'text-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-500',
    skills: [
      { name: 'HTML/CSS', desc: 'Modern web standards' },
      { name: 'React.js', desc: 'Component-based UI' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS' },
      { name: 'Node.js', desc: 'Server-side JavaScript' },
      { name: 'Express.js', desc: 'Web application framework' },
      
      { name: 'Socket.io', desc: 'Real-time communication' }
    ]
  },
  
  {
    title: 'Databases & Cloud',
    icon: Database,
    color: 'text-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    borderColor: 'border-orange-500',
    skills: [
      { name: 'MongoDB', desc: 'NoSQL database' },
      { name: 'SQL', desc: 'Relational databases' },
      { name: 'Firebase', desc: 'Backend as a Service' },
      
      { name: 'AWS', desc: 'Cloud computing platform' },
    ]
  },
  {
    title: 'Data Science & ML',
    icon: Brain,
    color: 'text-pink-600',
    bgColor: 'from-pink-50 to-pink-100',
    borderColor: 'border-pink-500',
    skills: [
      { name: 'NumPy', desc: 'Numerical computing' },
      { name: 'Pandas', desc: 'Data manipulation' },
      { name: 'Matplotlib', desc: 'Data visualization' },
      { name: 'scikit-learn', desc: 'Machine learning' },
      { name: 'Keras', desc: 'Deep learning' },
      { name: 'TensorFlow', desc: 'ML framework' }
    ]
  },
  {
    title: 'Tools & Version Control',
    icon: Cloud,
    color: 'text-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    borderColor: 'border-indigo-500',
    skills: [
      { name: 'Git', desc: 'Version control system' },
      { name: 'GitHub', desc: 'Code collaboration platform' },
      { name: 'VS Code', desc: 'Code editor' },
      { name: 'Jupyter Notebook', desc: 'Interactive development' },
      { name: 'Docker', desc: 'Containerization' }
    ]
  }
];

export default skillCategories;
