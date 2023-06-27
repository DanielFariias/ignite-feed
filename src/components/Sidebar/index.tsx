import { PencilLine } from '@phosphor-icons/react'
import styles from './styles.module.css'
import Avatar from '../Avatar'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com//danielfariias.png" />

        <strong>Daniel Farias</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
