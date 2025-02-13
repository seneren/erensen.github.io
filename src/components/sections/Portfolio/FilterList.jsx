export const FilterList = ({ filterButtons, activeFilter, onFilterClick }) => {
  return (
    <ul className="filter-list">
      {filterButtons.map(button => (
        <li key={button.id} className="filter-item">
          <button
            className={activeFilter === button.id ? 'active' : ''}
            onClick={() => onFilterClick(button.id)}
          >
            {button.label}
          </button>
        </li>
      ))}
    </ul>
  );
}; 