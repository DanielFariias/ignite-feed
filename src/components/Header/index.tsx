import styles from './styles.module.css'

import igniteLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
