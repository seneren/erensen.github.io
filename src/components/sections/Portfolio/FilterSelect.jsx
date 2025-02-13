import { useState } from 'react';

export const FilterSelect = ({ filterButtons, activeFilter, onFilterClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (buttonId) => {
    onFilterClick(buttonId);
    setIsOpen(false);
  };

  const activeButton = filterButtons.find(btn => btn.id === activeFilter);

  return (
    <div className="filter-select-box">
      <button 
        className={`filter-select ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="select-value">
          {activeButton?.label || 'Select Category'}
        </div>
        <div className="select-icon">
          <ion-icon name="chevron-down"></ion-icon>
        </div>
      </button>

      <ul className={`select-list ${isOpen ? 'active' : ''}`}>
        {filterButtons.map(button => (
          <li key={button.id} className="select-item">
            <button onClick={() => handleSelect(button.id)}>
              {button.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}; 