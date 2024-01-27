import styles from '@/styles/components/header.module.scss';

export const Header = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['header__logo']}>
        <b>K. A. portfolio</b>
      </div>
    </div>
  );
};
