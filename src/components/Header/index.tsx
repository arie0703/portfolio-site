import styles from '@/styles/components/header.module.scss';
import { Vibur } from 'next/font/google';

const vibur = Vibur({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export const Header = () => {
  return (
    <div className={styles['header']}>
      <div className={`${styles['header__logo']} ${vibur.className}`}>
        <p>K. A. portfolio</p>
      </div>
    </div>
  );
};
