import { BlogPost } from './BlogPost';

export const BlogList = ({ posts, viewingSingle, activeBlogPost, onPostClick }) => {
  const displayPosts = viewingSingle ? [activeBlogPost] : posts;

  return (
    <ul className={`blog-posts-list ${viewingSingle ? 'viewing-single' : ''}`}>
      {displayPosts.map((post, index) => (
        <BlogPost
          key={index}
          post={post}
          viewingSingle={viewingSingle}
          onClick={() => onPostClick(post)}
        />
      ))}
    </ul>
  );
}; 