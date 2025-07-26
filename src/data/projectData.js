
import movieImage from '../assets/movie.png';

import causeListImage from '../assets/causeList.png';
// import vol from '../assets/volatility.jpg';  

const projects = [
   {
    title: 'GAN-Powered Option Valuation Engine',
    category: ['ML', 'Finance'],
    //  image: vol,
    description: 'A GAN-CNN based model for accurate and real-time equity option valuation.',
    techStack: ['Python', 'GAN', 'CNN'],
    github: 'https://github.com/sahaj645/tbc-gan', 
    
  },
  {
    title: 'Movie-Recommendation System',
    category: ['Web', 'ML'],
    image: movieImage,
    description: 'A web application that recommends movies similar to a selected title using content-based filtering.',
    techStack: ['React', 'Fast Api', 'NLP'],
    github: 'https://github.com/sahaj645/movie-recommendation-website',
    demo: 'https://movie-recommendation-website-eight.vercel.app/',
  },
  
  {
    title: 'CauseList simplifier',
    category: ['Web'],
    image: causeListImage,
    description: 'A helpful tool that simplifies and organizes complex court case lists, making them easier to understand.',
    techStack: ['React', 'Node.js'],
    github: 'https://github.com/sahaj645/Mahesh-sharma-and-associate',
    demo: 'https://mahesh-sharma-and-associate.vercel.app/',
  },
 


];

export default projects;
