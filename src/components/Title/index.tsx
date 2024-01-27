import styles from '@/styles/components/title.module.scss';

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className={`${styles['title']}`} id={title}>
      <h2>{title}</h2>
    </div>
  );
};
