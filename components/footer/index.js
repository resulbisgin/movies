import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with by&nbsp;
      <Link href="https://twitter.com" target="_blank">Resul Bişgin</Link>
    </footer>
  )
}

export default Footer