'use client'
import styles from '@/styles/components/work-description.module.scss';

interface WorkDescriptionProps {
  title: string
  description: string
  workUrl: string
  repositoryUrl: string
}

export const WorkDescription = ({ title, description, workUrl, repositoryUrl }: WorkDescriptionProps) => {

  return (
    <div className={styles['workDescription']}>
      <p className={styles['workDescription__title']}>
        <a href={workUrl} target="_blank" rel="noopener noreferrer">{title}</a>
      </p>
      <div className={styles['workDescription__text']}>
        <p>{description}</p>
      </div>
      <div className={styles['workDescription__repoLink']}>
        <a href={workUrl} target="_blank" rel="noopener noreferrer">Repository</a>
      </div>
    </div>
  )
}
