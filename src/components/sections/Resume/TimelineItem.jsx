import { useState, useEffect } from 'react';

export const TimelineItem = ({ 
  title, 
  institution, 
  location, 
  date, 
  details, 
  text,
  delay 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isExpanded) {
      const content = details ? details.length * 24 + 40 : 80; // Approximate height
      setHeight(content);
    } else {
      setHeight(0);
    }
  }, [isExpanded, details]);

  return (
    <li className="timeline-item" style={{ '--delay': `${delay}ms` }}>
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span className="timeline-details">
        <span className="institution-name">{institution} |</span>&nbsp;{location}
        <span className="timeline-date">{date}</span>
      </span>

      {(details || text) && (
        <>
          <div className="timeline-toggle" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '- Hide details' : '+ View details'}
          </div>
          <div 
            className={`timeline-text ${isExpanded ? 'expanded' : ''}`}
            style={{ '--expanded-height': `${height}px` }}
          >
            {details ? (
              <ul>
                {details.map((detail, index) => (
                  <li key={index} style={{ 
                    opacity: isExpanded ? 1 : 0,
                    transform: `translateY(${isExpanded ? 0 : -10}px)`,
                    transition: `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`
                  }}>
                    {detail}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{text}</p>
            )}
          </div>
        </>
      )}
    </li>
  );
}; 