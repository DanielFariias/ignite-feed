import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'
import Avatar from '../Avatar'
import { useState } from 'react'

interface ICommentProps {
  content: string
  onDeleteComment: (commentToDelete: string) => void
}

export default function Comment({ content, onDeleteComment }: ICommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((prevState) => prevState + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com//danielfariias.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel Farias</strong>
              <time title="11 de maio as 11:00h" dateTime="2023-05-11 11:00:22">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
