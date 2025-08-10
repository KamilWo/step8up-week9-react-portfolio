import React from 'react';
import Button from './Button';

const ProjectCard = ({project}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex space-x-2 justify-center">
          <Button variant="primary" onClick={() => window.open(project.url, '_blank')}>View Live</Button>
          <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>GitHub</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
