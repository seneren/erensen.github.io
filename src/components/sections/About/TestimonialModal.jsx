export const TestimonialModal = ({ testimonial, onClose }) => {
  if (!testimonial) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`modal-container ${testimonial ? 'active' : ''}`} 
      data-modal-container
    >
      <div className="overlay" data-overlay onClick={handleOverlayClick}></div>
      
      <div className="testimonials-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="h3 modal-title" data-modal-title>
              {testimonial.name}
            </h4>
            <button 
              className="modal-close-btn" 
              data-modal-close-btn 
              onClick={onClose}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <div className="modal-text" data-modal-text>
            <p>{testimonial.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 