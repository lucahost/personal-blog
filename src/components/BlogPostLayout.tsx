import { MDXProvider } from '@mdx-js/react'
import { Link } from 'react-router-dom'
import ArticleMeta from './ArticleMeta'
import styles from './BlogPostLayout.module.css'

const components = {
  h1: (props: any) => <h1 className={styles.h1} {...props} />,
  h2: (props: any) => <h2 className={styles.h2} {...props} />,
  h3: (props: any) => <h3 className={styles.h3} {...props} />,
  p: (props: any) => <p className={styles.p} {...props} />,
  pre: (props: any) => <pre className={styles.pre} {...props} />,
  code: (props: any) => <code className={styles.code} {...props} />,
  a: (props: any) => <a className={styles.link} {...props} />,
  ul: (props: any) => <ul className={styles.ul} {...props} />,
  ol: (props: any) => <ol className={styles.ol} {...props} />,
  li: (props: any) => <li className={styles.li} {...props} />,
  blockquote: (props: any) => <blockquote className={styles.blockquote} {...props} />,
}

interface BlogPostLayoutProps {
  children?: React.ReactNode
  title?: string
  date?: string
  tags?: string[]
  readingTime?: string
}

function BlogPostLayout({ children, title, date, tags, readingTime }: BlogPostLayoutProps) {
  return (
    <div className={styles.container}>
      <article>
        {title && (
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            {(date || tags || readingTime) && (
              <ArticleMeta 
                date={date}
                tags={tags}
                readingTime={readingTime}
              />
            )}
          </header>
        )}
        
        <MDXProvider components={components}>
          <div className={styles.content}>
            {children}
          </div>
        </MDXProvider>
      </article>
      
      <footer className={styles.footer}>
        <Link to="/" className={styles.backLink}>
          ← Back to Blog
        </Link>
      </footer>
    </div>
  )
}

export default BlogPostLayout