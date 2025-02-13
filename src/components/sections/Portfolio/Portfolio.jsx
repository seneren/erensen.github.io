import { useState, useEffect } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { ProjectList } from './ProjectList';
import { FilterList } from './FilterList';
import { FilterSelect } from './FilterSelect';
import { ChevronLeft } from 'lucide-react';

export const Portfolio = ({ isActive }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewingSingle, setViewingSingle] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleNavClick = (e) => {
      if (!isActive) return;
      if (e.target.getAttribute('href') === '#portfolio') {
        e.preventDefault();
        setActiveFilter('all');
        setViewingSingle(false);
        setActiveProject(null);
        setSelectedCategory('All');
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, [isActive]);

  // Updated projects data with multiple projects
  const projects = [
    {
      id: 1,
      title: "Fintrix",
      categories: ["vortanis zylara", "noxilum zynthera"],
      image: "/assets/images/project-1.jpg",
      content: "This is the detailed content for the Fintrix project. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
    },
    {
      id: 2,
      title: "Horizonix",
      categories: ["velum quastra fintor", "lumivra quentor"],
      image: "/assets/images/project-2.png",
      content: "This is the detailed content for the Horizonix project."
    },
    {
      id: 3,
      title: "Fundara",
      categories: ["vortanis zylara"],
      image: "/assets/images/project-3.jpg",
      content: "This is the detailed content for the Fundara project."
    },
    {
      id: 4,
      title: "Brawala",
      categories: ["velum quastra fintor"],
      image: "/assets/images/project-4.png",
      content: "This is the detailed content for the Brawala project."
    },
    {
      id: 5,
      title: "DSL",
      categories: ["noxilum zynthera", "vortanis zylara"],
      image: "/assets/images/project-5.png",
      content: "This is the detailed content for the DSL project."
    },
    {
      id: 6,
      title: "NexiSpark",
      categories: ["lumivra quentor"],
      image: "/assets/images/project-6.png",
      content: "This is the detailed content for the NexiSpark project."
    },
    {
      id: 7,
      title: "Summora",
      categories: ["noxilum zynthera"],
      image: "/assets/images/project-7.png",
      content: "This is the detailed content for the Summora project."
    },
    {
      id: 8,
      title: "Taskix Manora",
      categories: ["lumivra quentor"],
      image: "/assets/images/project-8.jpg",
      content: "This is the detailed content for the Taskix Manora project."
    },
    {
      id: 9,
      title: "Arrivix",
      categories: ["vortanis zylara"],
      image: "/assets/images/project-9.png",
      content: "This is the detailed content for the Arrivix project."
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'vortanis zylara', label: 'Vortanis Zylara' },
    { id: 'velum quastra fintor', label: 'Velum Quastra Fintor' },
    { id: 'noxilum zynthera', label: 'Noxilum Zynthera' },
    { id: 'lumivra quentor', label: 'Lumivra Quentor' }
  ];

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setViewingSingle(false);
    setActiveProject(null);
  };

  const handleProjectClick = (project) => {
    if (!viewingSingle) {
      setActiveProject(project);
      setViewingSingle(true);
    }
  };

  const handleBackClick = () => {
    setViewingSingle(false);
    setActiveProject(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setViewingSingle(false);
  };

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {viewingSingle && (
          <div className="portfolio-back-container">
            <button 
              onClick={() => setViewingSingle(false)}
              className="group flex items-center gap-2 p-2 hover:bg-accent/20 rounded-full transition-all"
              aria-label="Go back to projects"
            >
              <ChevronLeft size={14} strokeWidth={2.2} aria-hidden="true" />
              <span className="text-base font-medium underline-offset-4 group-hover:underline decoration-2">
                Go back
              </span>
            </button>
          </div>
        )}

        {!viewingSingle && (
          <>
            <FilterList 
              filterButtons={filterButtons}
              activeFilter={activeFilter}
              onFilterClick={handleFilterClick}
            />

            <FilterSelect 
              filterButtons={filterButtons}
              activeFilter={activeFilter}
              onFilterClick={handleFilterClick}
            />
          </>
        )}

        <ProjectList 
          projects={viewingSingle ? [activeProject] : filteredProjects}
          viewingSingle={viewingSingle}
          activeProject={activeProject}
          onProjectClick={handleProjectClick}
          onCategoryClick={handleCategoryClick}
        />
      </section>
    </article>
  );
}; 