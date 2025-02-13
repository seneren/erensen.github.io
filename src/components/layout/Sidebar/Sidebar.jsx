import { ContactList } from './ContactList';

export const Sidebar = ({ isActive, onToggle }) => {
  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <div className="avatars">
          <img 
            src="/assets/images/eren.png" 
            alt="Eren Șen" 
            width="80"
            loading="lazy"
          />
        </div>

        <div className="info-content">
          <h1 className="name" title="Eren Șen">Eren Sen</h1>
          <p className="title">Data Science | AI | ML</p>
        </div>

        <button 
          className="info_more-btn" 
          data-sidebar-btn 
          onClick={onToggle}
          aria-label={isActive ? "Hide contact details" : "Show contact details"}
        >
          <span>Show contact details</span>
          <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <ContactList />
    </aside>
  );
}; 