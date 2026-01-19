import { useParams, Link, Navigate } from 'react-router-dom'
import SEOHead from '../components/common/SEOHead'
import { getPostBySlug, blogPosts } from '../data/blogPosts'
import './BlogPostPage.css'

function BlogPostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2)

  return (
    <>
      <SEOHead
        title={post.seo.title}
        description={post.seo.description}
        canonicalUrl={`/blog/${slug}`}
        ogType="article"
      />

      <article className="blog-post-page">
        <header className="post-header">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <Link to={`/blog/category/${encodeURIComponent(post.category)}`}>
                {post.category}
              </Link>
              <span>/</span>
              <span>{post.title}</span>
            </nav>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span className="author">By {post.author}</span>
              <span className="separator">|</span>
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
              <span className="separator">|</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="post-content section">
          <div className="container">
            <div className="content-layout">
              <div className="main-content prose">
                <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
              </div>

              <aside className="post-sidebar">
                <div className="sidebar-section">
                  <h3>Share This Article</h3>
                  <div className="share-buttons">
                    <button className="share-btn" aria-label="Share on Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </button>
                    <button className="share-btn" aria-label="Share on Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                      </svg>
                    </button>
                    <button className="share-btn" aria-label="Share on LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="sidebar-section cta-section">
                  <h3>Need Expert Advice?</h3>
                  <p>Book a consultation with Dr Bala to discuss your oral health needs.</p>
                  <Link to="/contact" className="btn btn-primary">
                    Book Consultation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <section className="related-posts section">
            <div className="container">
              <h2>Related Articles</h2>
              <div className="related-grid">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="related-card"
                  >
                    <span className="category">{relatedPost.category}</span>
                    <h3>{relatedPost.title}</h3>
                    <p>{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  )
}

function formatContent(content) {
  return content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^\*\*(.+)\*\*$/gm, '<p><strong>$1</strong></p>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.+<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])/gm, '<p>')
    .replace(/(?<![>])$/gm, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hul])/g, '$1')
    .replace(/(<\/[hul][^>]*>)<\/p>/g, '$1')
}

export default BlogPostPage
