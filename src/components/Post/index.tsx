import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './styles.module.css'
import Comment from '../Comment'
import Avatar from '../Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IAuthorProps {
  name: string
  avatarUrl: string
  role: string
}

interface IContentProps {
  type: 'paragraph' | 'link'
  content: string
}

export interface IPost {
  id: number
  author: IAuthorProps
  publishedAt: Date
  content: IContentProps[]
}

interface IPostProps {
  post: IPost
}

export default function Post({ post }: IPostProps) {
  const [commentList, setCommentList] = useState(['Post muito bacana em?'])
  const [newCommentText, setNewCommentText] = useState('')

  const { author, publishedAt, content } = post

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCommentFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setCommentList((prevState) => [...prevState, newCommentText])
    setNewCommentText('')
  }

  function handleChangeNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleDeleteComment(commentToDelete: string) {
    setCommentList((prevState) =>
      prevState.filter((comment) => comment !== commentToDelete),
    )
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Não é permitido comentário vazio!')
  }

  const isNewCommentEmpty = !newCommentText

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
          return <p key={line.content}>{line.content}</p>
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCommentFormSubmit}>
        <textarea
          placeholder="Deixe um comentario"
          value={newCommentText}
          onChange={handleChangeNewCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentList.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  )
}
