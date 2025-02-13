export const Modal = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`modal-container ${isOpen ? 'active' : ''}`} 
      onClick={handleOverlayClick}
      data-modal-container
    >
      <div className="overlay" data-overlay></div>
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose} data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        {children}
      </div>
    </div>
  );
}; 