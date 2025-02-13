import { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar/Sidebar';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { About } from './components/sections/About/About';
import { Resume } from './components/sections/Resume/Resume';
import { Portfolio } from './components/sections/Portfolio/Portfolio';
import { Blog } from './components/sections/Blog/Blog';
import { Contact } from './components/sections/Contact/Contact';
import './styles/css/style.css';

const App = () => {
  const [activePage, setActivePage] = useState('about');
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Remove preload class after initial page load
  useEffect(() => {
    document.documentElement.classList.add('preload');
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'about';
      setActivePage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <main>
      <Sidebar isActive={isSidebarActive} onToggle={toggleSidebar} />
      
      <div className="main-content">
        <Navbar onMenuClick={toggleSidebar} />

        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
        <Portfolio isActive={activePage === 'portfolio'} />
        <Blog isActive={activePage === 'blog'} />
        <Contact isActive={activePage === 'contact'} />
      </div>

      <Footer />
    </main>
  );
};

export default App; 