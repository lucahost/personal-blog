import { Link } from 'react-router-dom'
import siteMetadata from '../siteMetadata'
import Bio from './Bio'
import styles from './BlogIndexPage.module.css'

function BlogIndexPage() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link to="/">{siteMetadata.title}</Link>
        </h1>
        <Bio />
      </header>
      
      <div className={styles.articlesList}>
        <article className={styles.article}>
          <h2>
            <Link to="/posts/welcome">Welcome to the Modern Blog</Link>
          </h2>
          <p>
            This blog has been completely modernized with React 18, Vite, TypeScript 5, 
            and MDX support for rich content authoring.
          </p>
          <div className={styles.meta}>
            <time>Jan 9, 2025</time>
            <span>3 min read</span>
            <div className={styles.tags}>
              <span>#react</span>
              <span>#vite</span>
              <span>#mdx</span>
            </div>
          </div>
        </article>
      </div>

      <footer className={styles.footer}>
        <div>
          <Link to="/about">About</Link> &bull;{' '}
          <a href="https://github.com/lucahost/personal-blog">
            Source
          </a>
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage