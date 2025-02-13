import { motion } from 'framer-motion';
import { IoEyeOutline } from 'react-icons/io5';

// Add a helper function to capitalize each word
const capitalizeWords = (str) => {
  return str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

export const ProjectList = ({ 
  projects, 
  viewingSingle, 
  activeProject, 
  onProjectClick, 
  onCategoryClick 
}) => {
  return (
    <ul className={`project-list ${viewingSingle ? 'viewing-single' : ''}`}>
      {projects.map(project => (
        <motion.li
          key={project.id}
          className={`project-item active`}
          onClick={() => onProjectClick(project)}
          layout
        >
          {viewingSingle ? (
            <>
              <h3 className="project-title single-view">{project.title}</h3>
              <figure className="project-img">
                <img src={project.image} alt={project.title} loading="lazy" />
              </figure>
              <div className="project-content" style={{ display: 'block' }}>
                <p>{project.content}</p>
                <div className="project-category single-view">
                  <span className="category-label">Category: </span>
                  {project.categories.map((category, index) => (
                    <span key={category}>
                      <span 
                        className="category-value" 
                        onClick={(e) => onCategoryClick(category, e)}
                      >
                        {capitalizeWords(category)}
                      </span>
                      {index < project.categories.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img src={project.image} alt={project.title} loading="lazy" />
              </figure>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">
                {project.categories.map(category => capitalizeWords(category)).join(', ')}
              </p>
            </>
          )}
        </motion.li>
      ))}
    </ul>
  );
}; 