import React from 'react'
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
        Star Wars Fan, {' '} <br />
        <a href="https://github.com/lucahost">Developer</a>, <br />
        <a href="https://lucahost.dev">Builder</a>
      </p>
    </div>
  )
}

export default Bio
