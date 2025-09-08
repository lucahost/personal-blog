import { Link, Outlet, useLocation } from 'react-router-dom'
import siteMetadata from '../siteMetadata'
import styles from './BlogLayout.module.css'

function BlogLayout() {
  const location = useLocation()
  const isViewingIndex = location.pathname === '/'

  return (
    <div className={styles.container}>
      {!isViewingIndex && (
        <header>
          <h3 className={styles.title}>
            <Link to="/">{siteMetadata.title}</Link>
          </h3>
        </header>
      )}

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default BlogLayout