
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiCalendar, FiUser, FiTag, FiClock, FiBookmark } from 'react-icons/fi';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      _id: '1',
      title: 'Building Scalable Microservices with Node.js and Kubernetes',
      author: 'Alem Molla',
      date: '2023-10-15T00:00:00Z',
      content: 'In this comprehensive guide, we explore best practices for designing and deploying Node.js microservices at scale using Kubernetes. Learn about service discovery, load balancing, and zero-downtime deployments...',
      excerpt: 'Learn how to architect Node.js microservices for enterprise-scale applications',
      tags: ['Node.js', 'Kubernetes', 'Microservices', 'DevOps'],
      readTime: '12 min',
      featured: true
    },
    {
      _id: '2',
      title: 'React 18 Concurrent Features: A Practical Implementation Guide',
      author: 'Sara Getaw',
      date: '2023-09-22T00:00:00Z',
      content: 'React 18 introduces groundbreaking concurrent features that revolutionize how we build responsive UIs. This tutorial walks through practical implementations of transitions, suspense, and the new root API...',
      excerpt: 'Hands-on tutorial for implementing React 18 concurrent rendering in production apps',
      tags: ['React', 'Frontend', 'Performance'],
      readTime: '8 min',
      featured: false
    },
    {
      _id: '3',
      title: 'Machine Learning in JavaScript: Building a Recommendation Engine with TensorFlow.js',
      author: 'Ali mohammed',
      date: '2023-08-05T00:00:00Z',
      content: 'Discover how to implement machine learning directly in the browser using TensorFlow.js. We build a movie recommendation engine that learns from user behavior without sending data to external servers...',
      excerpt: 'Implement client-side ML models that respect user privacy while delivering smart features',
      tags: ['JavaScript', 'Machine Learning', 'TensorFlow', 'Privacy'],
      readTime: '15 min',
      featured: true
    },
    {
      _id: '4',
      title: 'The Complete Guide to JWT Authentication in MERN Stack Applications',
      author: 'Jamal Willo',
      date: '2023-07-18T00:00:00Z',
      content: 'Secure authentication is crucial for modern web apps. This in-depth guide covers JWT implementation from frontend to backend, including refresh tokens, role-based access control, and security best practices...',
      excerpt: 'End-to-end secure authentication implementation for MERN stack developers',
      tags: ['MERN', 'Security', 'Authentication', 'Node.js', 'React'],
      readTime: '10 min',
      featured: false
    }
  ]);
  const [loading, setLoading] = useState(false);

  // In a real app, you would fetch from your API:
  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/blog')
  //     .then(res => {
  //       setPosts(res.data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error('Error fetching blog posts:', err);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="blog-container">
      <div className="section-header">
        <h2 className="section-title">Tech Insights</h2>
        <p className="section-subtitle">Sharing knowledge and experiences from the trenches</p>
        <div className="blog-categories">
          <span className="active">All Articles</span>
          <span>Frontend</span>
          <span>Backend</span>
          <span>DevOps</span>
          <span>Case Studies</span>
        </div>
      </div>

      {loading ? (
        <div className="loading-spinner"></div>
      ) : posts.length === 0 ? (
        <div className="empty-state">
          <p>No blog posts found. Check back soon!</p>
        </div>
      ) : (
        <>
          <div className="featured-post">
            {posts.filter(post => post.featured).map(post => (
              <article key={post._id} className="post-card featured">
                <div className="featured-badge">
                  <FiBookmark /> Featured
                </div>
                <div className="post-header">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta">
                    <span><FiUser /> {post.author}</span>
                    <span><FiCalendar /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span><FiClock /> {post.readTime} read</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>{post.excerpt}</p>
                </div>
                <div className="post-footer">
                  <div className="post-tags">
                    <FiTag />
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <button className="read-more">Read Full Article</button>
                </div>
              </article>
            ))}
          </div>

          <div className="posts-grid">
            {posts.filter(post => !post.featured).map(post => (
              <article key={post._id} className="post-card">
                <div className="post-header">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta">
                    <span><FiUser /> {post.author}</span>
                    <span><FiCalendar /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>{post.excerpt}</p>
                </div>
                <div className="post-footer">
                  <div className="post-tags">
                    <FiTag />
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                    {post.tags.length > 2 && <span className="tag">+{post.tags.length - 2}</span>}
                  </div>
                  <span className="read-time"><FiClock /> {post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      <div className="newsletter-cta">
        <h3>Want more content like this?</h3>
        <p>Subscribe to my monthly newsletter for exclusive articles, tutorials, and tech insights.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
