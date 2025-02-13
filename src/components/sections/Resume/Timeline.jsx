import { TimelineItem } from './TimelineItem';
import { useEffect, useRef } from 'react';

export const Timeline = ({ title, icon, items }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach(item => observer.observe(item));

    return () => {
      timelineItems?.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name={icon}></ion-icon>
        </div>
        <h6 className="h6">{title}</h6>
      </div>

      <ol className="timeline-list" ref={timelineRef}>
        {items.map((item, index) => (
          <TimelineItem 
            key={index}
            title={item.title}
            institution={item.institution}
            location={item.location}
            date={item.date}
            details={item.details}
            text={item.text}
            delay={index * 100}
          />
        ))}
      </ol>
    </section>
  );
}; 