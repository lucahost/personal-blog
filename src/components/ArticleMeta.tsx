import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formats'
import styles from './ArticleMeta.module.css'

interface ArticleMetaProps {
  date?: string
  tags?: string[]
  readingTime?: string
}

function ArticleMeta({ date, tags, readingTime }: ArticleMetaProps) {
  return (
    <div className={styles.container}>
      <div className={styles.meta}>
        {date && (
          <time className={styles.date} dateTime={date}>
            {formatDate(date)}
          </time>
        )}
        
        {readingTime && (
          <span className={styles.readingTime}>
            {readingTime}
          </span>
        )}
      </div>
      
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className={styles.tag}
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ArticleMeta