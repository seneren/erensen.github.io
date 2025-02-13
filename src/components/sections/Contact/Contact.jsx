import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { MapBox } from './MapBox';

export const Contact = ({ isActive }) => {
  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <MapBox />
      <ContactForm />
    </article>
  );
}; 