import { ImgHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export default function Avatar({
  src,
  hasBorder = true,
  alt,
  title,
  ...rest
}: IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
      title={title}
      {...rest}
    />
  )
}
