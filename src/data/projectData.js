// src/data/projectsData.js
import movieImage from '../assets/movie.png';
import chrunImage from '../assets/chrun.png';
import cancerImage from '../assets/cancer.png';
import travelImage from '../assets/travel.png';
import causeListImage from '../assets/causeList.png';
import chatImage from '../assets/chat.jpg';
import todoImage from '../assets/todo.jpg';
import mealsImage from '../assets/meals.jpg';
import tttImage from '../assets/ttt.jpg';
import chatPDF from '../assets/chatPDF.png'

const projects = [
  {
    title: 'Chat-PDF',
    category: ['Web', 'ML'],
    image: chatPDF,
    description: 'Chat with any PDF using a smart AI assistant that retrieves and answers contextually using Retrieval-Augmented Generation (RAG).',
    techStack: ['React', 'Fast Api', 'NLP','RAG','FAISS'],
    github: 'https://https://github.com/AabhasGaur19/Chat-pdf',
    // demo: 'https://movie-recommendation-website-eight.vercel.app/',
  },
  {
    title: 'Movie-Recommendation System',
    category: ['Web', 'ML'],
    image: movieImage,
    description: 'A web application that recommends movies similar to a selected title using content-based filtering.',
    techStack: ['React', 'Fast Api', 'NLP'],
    github: 'https://github.com/AabhasGaur19/movie-recommendation-website',
    demo: 'https://movie-recommendation-website-eight.vercel.app/',
  },
  {
    title: 'Chat App',
    category: ['Mobile'],
    image: chatImage,
    description: 'A mobile application that enables seamless real-time messaging between users.',
    techStack: ['Flutter', 'Firebase', 'Dart', 'Node.js', 'MongoDB Atlas', 'Socket.io'],
    github: 'https://github.com/AabhasGaur19/chat-app',
  },
  {
    title: 'Brest cancer predection',
    category: ['ML'],
    image: cancerImage,
    description: 'A smart system that helps identify the likelihood of breast cancer early for better health outcomes.',
    techStack: ['Python', 'NumPy', 'Pandas', 'Logistic Rgression', 'Random Forest'],
    github: 'https://github.com/AabhasGaur19/Breast-cancer-',
  },
  {
    title: 'Customer Chrun Predection',
    category: ['ML'],
    image: chrunImage,
    description: 'A smart system that helps understand which customers are likely to stop using a service, enabling timely action to retain them.',
    techStack: ['Python', 'NumPy', 'Pandas', 'Logistic Rgression', 'Random Forest', 'XG boost'],
    github: 'https://github.com/AabhasGaur19/Customer-churn-rate-prediction',
  },
  {
    title: 'Holiday booking site',
    category: ['Web'],
    image: travelImage,
    description: 'A user-friendly platform that makes planning and booking holidays easy and hassle-free.',
    techStack: ['HTML', 'Css', 'Java-script', 'AOS'],
    github: 'https://github.com/AabhasGaur19/Holiday-Booking',
  },
  {
    title: 'CauseList simplifier',
    category: ['Web'],
    image: causeListImage,
    description: 'A helpful tool that simplifies and organizes complex court case lists, making them easier to understand.',
    techStack: ['React', 'Node.js'],
    github: 'https://github.com/AabhasGaur19/Mahesh-sharma-and-associate',
    demo: 'https://mahesh-sharma-and-associate.vercel.app/',
  },
  {
    title: 'TO-DO app',
    category: ['Mobile'],
    image: todoImage,
    description: 'An easy-to-use app that helps you organize tasks and stay on top of your daily goals.',
    techStack: ['Dart', 'Flutter'],
    github: 'https://github.com/AabhasGaur19/Task-app',
  },
  {
    title: 'Meals app',
    category: ['Mobile'],
    image: mealsImage,
    description: 'A mobile app that serves as a digital menu, making it easy to browse and choose meals on the go.',
    techStack: ['Dart', 'Flutter'],
    github: 'https://github.com/AabhasGaur19/Meals-app',
  },
  {
    title: 'Tic-Tac-Toe',
    category: ['Mobile'],
    image: tttImage,
    description: 'A fun and interactive game that lets users enjoy classic Tic-Tac-Toe anytime.',
    techStack: ['Dart', 'Flutter'],
    github: 'https://github.com/AabhasGaur19/TIC-TAC-TOE-Mobile',
  },
];

export default projects;
