import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Feito com <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> para você
      </footer>
    </>
  )
}
