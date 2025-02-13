import { useState } from 'react';

export const ServiceCard = ({ onServiceClick }) => {
  const services = [
    {
      icon: "stats-chart-sharp",
      title: "Data Analysis",
      text: "I specialize in developing AI-driven solutions, focusing on data preprocessing and visualization. My expertise includes working with Generative AI and prompt engineering to create efficient, scalable solutions."
    },
    {
      icon: "logo-python",
      title: "Python-based Projects",
      text: "I have experience in developing Python-based projects, including data analysis, machine learning, and AI solutions. I specialize in creating efficient, scalable solutions that drive results."
    },
    {
      icon: "book-sharp",
      title: "School Support",
      text: "Support training for students who have difficulty in school mathematics lessons."
    },
    {
      icon: "school-sharp",
      title: "University Course Support",
      text: "Support training focused on understanding and interpretation for Calculus, Analytic Geometry, Group Theory, Basic and Advanced Algebra, Number Theory, Topology (Algebraic, Geometric) courses."
    }
  ];

  return (
    <ul className="service-list">
      {services.map((service, index) => (
        <li key={index} className="testimonials-item">
          <div 
            className="content-card" 
            data-testimonials-item
            onClick={() => onServiceClick(service)}
          >
            <figure className="service-icon-box">
              <ion-icon name={service.icon}></ion-icon>
            </figure>
            <h4 className="h4 service-item-title" data-testimonials-title>
              {service.title}
            </h4>
            <div className="service-item-text" data-testimonials-text>
              <p>{service.text}</p>
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