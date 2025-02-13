export const ProjectItem = ({ project, viewingSingle, setViewingSingle, onCategoryClick }) => {
  const handleClick = (e) => {
    if (!viewingSingle) {
      e.preventDefault();
      setViewingSingle(true);
    }
  };

  const handleCategoryClick = (e, category) => {
    if (viewingSingle) {
      e.stopPropagation();
      onCategoryClick(category); // Pass the category up to parent
    }
  };

  return (
    <li 
      className={`project-item active`}
      data-filter-item 
      data-category={project.categories.join(', ')}
      onClick={handleClick}
    >
      <figure className="project-img">
        <div className="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
        <img src={project.image} alt={project.title} loading="lazy" />
      </figure>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-category">
        {project.categories.join(', ')}
      </p>

      {viewingSingle && (
        <div className="project-content active">
          <p>{project.description}</p>
          <p className="project-category single-view">
            <span className="category-label">Categories: </span>
            {project.categories.map((category, index) => (
              <span key={category}>
                <span 
                  className="category-value"
                  onClick={(e) => handleCategoryClick(e, category)}
                >
                  {category}
                </span>
                {index < project.categories.length - 1 && ', '}
              </span>
            ))}
          </p>
        </div>
      )}
    </li>
  );
}; 