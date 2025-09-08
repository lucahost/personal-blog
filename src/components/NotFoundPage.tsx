import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div className={styles.NotFound}>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  )
}

export default NotFoundPage
