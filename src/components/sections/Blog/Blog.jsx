import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogList } from './BlogList';
import { blogPosts } from '../../../data/blogPosts';

export const Blog = ({ isActive }) => {
  const [viewingSingle, setViewingSingle] = useState(false);
  const [activeBlogPost, setActiveBlogPost] = useState(null);

  useEffect(() => {
    const handleNavClick = (e) => {
      if (!isActive) return;
      if (e.target.getAttribute('href') === '#blog') {
        e.preventDefault();
        setViewingSingle(false);
        setActiveBlogPost(null);
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, [isActive]);

  const handlePostClick = (post) => {
    setActiveBlogPost(post);
    setViewingSingle(true);
  };

  const handleBackClick = () => {
    setViewingSingle(false);
    setActiveBlogPost(null);
  };

  return (
    <article className={`blog ${isActive ? 'active' : ''}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        {viewingSingle && (
          <div className="blog-back-container">
            <button 
              onClick={handleBackClick}
              className="group flex items-center gap-2 p-2 hover:bg-accent/20 rounded-full transition-all"
              aria-label="Go back to blog posts"
            >
              <ChevronLeft size={14} strokeWidth={2.2} aria-hidden="true" />
              <span className="text-base font-medium underline-offset-4 group-hover:underline decoration-2">
                Go back
              </span>
            </button>
          </div>
        )}

        <BlogList 
          posts={blogPosts}
          viewingSingle={viewingSingle}
          activeBlogPost={activeBlogPost}
          onPostClick={handlePostClick}
        />
      </section>
    </article>
  );
}; 