// src/pages/Projects.jsx
import React, { useState } from 'react';
import ProjectsBackground from '../components/Projects/ProjectsBackground';
import ProjectsHeader from '../components/Projects/ProjectsHeader';
import ProjectsFilter from '../components/Projects/ProjectsFilter';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import ProjectsCTA from '../components/Projects/ProjectsCTA';
import projects from '../data/projectData';

const Projects = () => {
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'ML'];

  const filteredProjects = category === 'All'
    ? projects
    : projects.filter(project =>
        Array.isArray(project.category)
          ? project.category.includes(category)
          : project.category === category
      );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <ProjectsBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProjectsHeader />
        <ProjectsFilter categories={categories} category={category} setCategory={setCategory} />
        <ProjectsGrid filteredProjects={filteredProjects} />
        <ProjectsCTA />
      </div>
    </section>
  );
};

export default Projects;
