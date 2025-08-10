import React, {useState, useMemo} from "react";
import projects from "../data/projects.json";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const formatCategoryName = (category) => {
  if (category === 'all') return 'All';
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const categories = useMemo(() => ['all', ...new Set(projects.map(p => p.category))], []);

  const filteredProjects = useMemo(() =>
    projects.filter(project =>
      filter === 'all' ? true : project.category === filter
    ), [filter]);

  return (
    <div className="py-20 px-4 min-h-[80vh]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">All Projects</h2>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((category) => (
            <Button key={category} variant={filter === category ? 'primary' : 'secondary'} onClick={() => setFilter(category)}>
              {formatCategoryName(category)}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
