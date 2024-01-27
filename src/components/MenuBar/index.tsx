
'use client'
import styles from '@/styles/components/menu-bar.module.scss';

interface MenuBarProps {
  items: Array<string>
}

export const MenuBar = ({ items }: MenuBarProps) => {

  const scrollToElement = (item: string) => {
    const element = document.getElementById(item);
    if (element)
      element.scrollIntoView({
        behavior: 'smooth'
      });
  }

  return (
    <div className={styles['menuBar']}>
      <div className={styles['menuBar__flex']}>
        {items.map((item, index) => {
          return (
            <div className={styles['menuBar__item']} key={index} onClick={() => { scrollToElement(item) }}>
              <p>{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
