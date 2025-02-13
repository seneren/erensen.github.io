import { useState, useEffect } from 'react';

export const Navbar = ({ onMenuClick }) => {
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    // Update active link based on URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'about';
      setActiveLink(hash);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial active link
    handleHashChange();

    // Cleanup
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a 
            href="#about" 
            className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`}
            data-nav-link
          >
            About
          </a>
        </li>
        <li className="navbar-item">
          <a 
            href="#resume" 
            className={`navbar-link ${activeLink === 'resume' ? 'active' : ''}`}
            data-nav-link
          >
            Resume
          </a>
        </li>
        <li className="navbar-item">
          <a 
            href="#portfolio" 
            className={`navbar-link ${activeLink === 'portfolio' ? 'active' : ''}`}
            data-nav-link
          >
            Portfolio
          </a>
        </li>
        <li className="navbar-item">
          <a 
            href="#blog" 
            className={`navbar-link ${activeLink === 'blog' ? 'active' : ''}`}
            data-nav-link
          >
            Blog
          </a>
        </li>
        <li className="navbar-item">
          <a 
            href="#contact" 
            className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}
            data-nav-link
          >
            Contact
          </a>
        </li>
      </ul>

      <button className="navbar-toggle-btn" onClick={onMenuClick}>
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </button>
    </nav>
  );
}; 