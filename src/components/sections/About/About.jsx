import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialModal } from './TestimonialModal';
import { useState } from 'react';

export const About = ({ isActive }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [activeService, setActiveService] = useState(null);

  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About</h2>
      </header>

      <section className="about-text">
        <p>
          Hello, I'm <b>Eren</b>. I'm a mathematician and data professional specializing in 
          AI/ML solutions and data analysis. With experience spanning both the US and Türkiye, 
          I bring a unique cross-cultural perspective to my work. I specialize in developing 
          AI-driven solutions, focusing on data preprocessing and visualization. My expertise 
          includes working with Generative AI and prompt engineering to create efficient, scalable solutions.
        </p>
        <p>
          My approach combines rigorous mathematical analysis with practical technical skills, 
          allowing me to turn complex data into actionable insights. With a strong foundation in 
          mathematics and statistical methodologies, I help organizations make data-driven decisions that drive results.
        </p>

        <div className="cta-section">
          <p>
            <strong>Looking to collaborate?</strong> <br/>
            Explore my <a style={{ display: 'inline' }} className="colorlink" href="#portfolio">portfolio</a> to see my projects in action, or{' '}
            <a style={{ display: 'inline' }} className="colorlink" href="#contact">reach out directly</a> to discuss potential opportunities.
          </p>
          <p>
            <strong>Interested in data science insights?</strong> <br/>
            Visit my <a style={{ display: 'inline' }} className="colorlink" href="#blog">blog</a> where I share analysis, methodologies, and industry perspectives.
          </p>
          <p>
            <strong>Need my professional background?</strong> <br/>
            Review my <a style={{ display: 'inline' }} className="colorlink" href="#resume">full resume</a> for detailed experience and qualifications.
          </p>
        </div>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ServiceCard onServiceClick={setActiveService} />
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <TestimonialCard onTestimonialClick={setActiveTestimonial} />
      </section>

      <ServiceModal 
        service={activeService} 
        onClose={() => setActiveService(null)} 
      />

      <TestimonialModal 
        testimonial={activeTestimonial} 
        onClose={() => setActiveTestimonial(null)} 
      />
    </article>
  );
}; 