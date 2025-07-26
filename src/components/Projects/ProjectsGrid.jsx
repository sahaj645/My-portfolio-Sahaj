import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsGrid = ({ filteredProjects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {filteredProjects.map((project, index) => (
        <div
          key={project.title}
          className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 transform"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
              {Array.isArray(project.category) ? (
                <div className="flex flex-col gap-1">
                  {project.category.map(cat => (
                    <span key={cat} className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                  {project.category}
                </span>
              )}
            </div>
          </div>
          <div className="p-4 sm:p-6 flex flex-col h-56 sm:h-64">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 flex-grow">
              {project.techStack.slice(0, 4).map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200/50 h-fit"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full h-fit">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
            <div className="flex space-x-3 sm:space-x-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group/link"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                <span className="font-medium text-xs sm:text-sm">GitHub</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-300 group/link"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-xs sm:text-sm">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;