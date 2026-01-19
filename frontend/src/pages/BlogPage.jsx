import { useParams, Link } from 'react-router-dom'
import SEOHead from '../components/common/SEOHead'
import { blogPosts, categories, getPostsByCategory } from '../data/blogPosts'
import './BlogPage.css'

function BlogPage() {
  const { category } = useParams()
  const posts = category ? getPostsByCategory(category) : blogPosts

  return (
    <>
      <SEOHead
        title={category ? `${category} Articles` : 'Blog'}
        description="Educational articles about oral surgery, wisdom teeth removal, dental implants, and recovery tips. Expert advice from Dr Bala, Specialist Oral Surgeon."
        canonicalUrl={category ? `/blog/category/${category}` : '/blog'}
      />

      <div className="blog-page">
        <section className="page-header">
          <div className="container">
            <h1>{category || 'Blog'}</h1>
            <p>Educational articles and oral health insights</p>
          </div>
        </section>

        <section className="blog-content section">
          <div className="container">
            <div className="blog-layout">
              <main className="blog-main">
                {posts.length > 0 ? (
                  <div className="blog-grid">
                    {posts.map((post) => (
                      <article key={post.id} className="blog-card">
                        <div className="blog-card-image">
                          <div className="image-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                              <circle cx="8.5" cy="8.5" r="1.5"/>
                              <polyline points="21 15 16 10 5 21"/>
                            </svg>
                          </div>
                        </div>
                        <div className="blog-card-content">
                          <div className="blog-meta">
                            <span className="category">{post.category}</span>
                            <span className="date">{new Date(post.publishedDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                          <h2>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h2>
                          <p>{post.excerpt}</p>
                          <div className="blog-footer">
                            <span className="read-time">{post.readTime}</span>
                            <Link to={`/blog/${post.slug}`} className="read-more">
                              Read more
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="no-posts">No articles found in this category.</p>
                )}
              </main>

              <aside className="blog-sidebar">
                <div className="sidebar-section">
                  <h3>Categories</h3>
                  <ul className="category-list">
                    <li className={!category ? 'active' : ''}>
                      <Link to="/blog">All Articles</Link>
                    </li>
                    {categories.map((cat) => (
                      <li key={cat} className={category === cat ? 'active' : ''}>
                        <Link to={`/blog/category/${encodeURIComponent(cat)}`}>
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h3>Have Questions?</h3>
                  <p>Book a consultation to discuss your oral health needs.</p>
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPage
