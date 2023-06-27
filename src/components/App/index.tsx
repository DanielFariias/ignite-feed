import { Header } from '../Header'
import Post from '../Post'
import Sidebar from '../Sidebar'

import posts from '../../mocks/posts'

import styles from './styles.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  )
}
