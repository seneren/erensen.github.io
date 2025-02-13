import React, { useRef, useEffect, useState } from 'react';
import { User, Folder, Calendar } from 'lucide-react';

export const BlogPost = ({ post, viewingSingle, onClick }) => {
  const titleRef = useRef(null);
  const [needsFade, setNeedsFade] = useState(false);

  useEffect(() => {
    if (titleRef.current && !viewingSingle) {
      const el = titleRef.current;
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 24;
      const isMultiline = el.scrollHeight > lineHeight * 1.8;
      setNeedsFade(isMultiline);
    }
  }, [post.title, viewingSingle]);

  const handleClick = (e) => {
    // Don't trigger click when clicking on blog text in grid view
    if (!viewingSingle && !e.target.closest('.blog-text')) {
      onClick();
    }
  };

  const renderContent = (content) => {
    if (!content) return null;
    
    // If content is a string, render it as a paragraph
    if (typeof content === 'string') {
      return <p className="blog-paragraph">{content}</p>;
    }
    
    // If content is an array, render each item based on its type
    if (Array.isArray(content)) {
      let isInSourceSection = false;
      
      return content.map((item, index) => {
        if (item.type === 'heading' && item.data === 'Sources') {
          isInSourceSection = true;
          return (
            <div key={index}>
              <div className="separator"></div>
              <div className="blog-sources">
                <h4 className="blog-subheading">{item.data}</h4>
              </div>
            </div>
          );
        }
        
        if (isInSourceSection && item.type === 'list') {
          return (
            <div key={index} className="blog-sources">
              <ul className="blog-list">
                {item.data.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          );
        }

        switch(item.type) {
          case 'heading':
            return <h4 key={index} className="blog-subheading">{item.data}</h4>;
          case 'callout':
            return <div key={index} className="blog-callout">{item.data}</div>;
          case 'spacer':
            return <div key={index} className="blog-spacer" />;
          case 'list':
            return (
              <ul key={index} className="blog-list">
                {item.data.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            );
          default:
            return <p key={index} className="blog-paragraph">{item.data}</p>;
        }
      });
    }
    
    return null;
  };

  const getPreviewContent = (content) => {
    if (typeof content === 'string') {
      return content.split('\n\n')[0];
    }
    if (Array.isArray(content)) {
      const firstParagraph = content.find(c => c.type === 'paragraph');
      return firstParagraph ? firstParagraph.data : '';
    }
    return '';
  };

  return (
    <li 
      className={`blog-post-item ${viewingSingle ? 'active' : ''}`}
      onClick={handleClick}
    >
      <figure className="blog-banner-box">
        <img src={post.image} alt={post.title} loading="lazy" />
        {!viewingSingle && (
          <div className="banner-overlay">
            <h3 
              ref={titleRef}
              className="h3 blog-item-title" 
              data-fade={needsFade}
            >
              {post.title}
            </h3>
          </div>
        )}
      </figure>

      {viewingSingle && (
        <div className="blog-single-header">
          <h3 className="h3 blog-item-title">{post.title}</h3>
          <div className="blog-meta">
            <p className="blog-category">{post.category}</p>
            <span className="dot"></span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          {post.author && (
            <div className="blog-author">
              <div className="blog-author-avatar">
                <User size={18} />
              </div>
              <div className="blog-author-info">
                <span className="blog-author-name">{post.author}</span>
                <span className="blog-author-title">This blog post, a thought about "AI acceleration in 2024", is written by LLM DeepSeek R1.</span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="blog-content">
        {!viewingSingle && (
          <div className="blog-meta">
              {post.author && (
                <div className="blog-meta-author">
                  <User size={12} className="blog-meta-author-icon" />
                  <span>{post.author}</span>
                </div>
              )}
              <span className="dot"></span>
              <time dateTime={post.date}>
                <Calendar size={12} className="blog-meta-date-icon" />
                {post.date}
              </time>
              <span className="dot"></span>
              <p className="blog-category">
                <Folder size={12} className="blog-meta-category-icon" />
                {post.category}
              </p>
          </div>
        )}

        <div className="blog-text">
          {viewingSingle ? 
            renderContent(post.content) :
            getPreviewContent(post.content)
          }
        </div>
      </div>
    </li>
  );
}; 