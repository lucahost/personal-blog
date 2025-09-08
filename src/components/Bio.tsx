import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

interface BioProps {
  className?: string
}

function Bio(props: BioProps) {
  let photoURL = getGravatarURL({
    email: "luca@hostettler.io",
    size: 56,
  })

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        <a href="https://github.com/lucahost">Software Engineer</a>, <br />
      </p>
    </div>
  )
}

export default Bio
