export const TestimonialCard = ({ onTestimonialClick }) => {
  const testimonials = [
    {
      name: "Blair McCann",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Jade Smith",
      text: "Metus sodales volutpat curae nec; hendrerit hendrerit sapien. Venenatis malesuada aliquet mollis vivamus neque."
    },
    {
      name: "Emily James",
      text: "Tempus semper et accumsan non placerat libero. Cras hac netus nisl per non fringilla. Interdum diam magna metus, himenaeos massa amet. Sem cubilia platea suspendisse consectetur porta et senectus torquent. Donec velit leo orci auctor lectus ultrices curae."
    },
    {
      name: "William Hershey",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <ul className="testimonials-list has-scrollbar">
      {testimonials.map((testimonial, index) => (
        <li key={index} className="testimonials-item">
          <div 
            className="content-card" 
            data-testimonials-item
            onClick={() => onTestimonialClick(testimonial)}
          >
            <h4 className="h4 testimonials-item-title" data-testimonials-title>
              {testimonial.name}
            </h4>
            <div className="testimonials-text" data-testimonials-text>
              <p>{testimonial.text}</p>
              <span className="read-more card-only">
                <ion-icon name="expand"></ion-icon>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}; 