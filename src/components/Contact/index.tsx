import styles from '@/styles/components/contact.module.scss';
import Image from 'next/image';

export const Contact = () => {
  return (
    <div className={`${styles['contact']}`}>
      <div className={`${styles['contact__flex']}`}>
        <div className={`${styles['contact__link']}`}>
          <a href={'https://www.facebook.com/profile.php?id=100015548588128'} className={`${styles['contact__facebook']}`} target="_blank" rel="noopener noreferrer">
            <Image src={'/images/contact/facebook.png'} width={25} height={25} alt={'facebook'} />
            Facebook
          </a>
        </div>

        <div className={`${styles['contact__link']}`}>
          <a href={'https://www.wantedly.com/id/kaisei_arimura'} className={`${styles['contact__wantedly']}`} target="_blank" rel="noopener noreferrer">
            Wantedly
          </a>
        </div>

        <div className={`${styles['contact__link']}`}>
          <a href={'mailto:example@example.com'} className={`${styles['contact__email']}`} target="_blank" rel="noopener noreferrer">
            <Image src={'/images/contact/email.png'} width={25} height={25} alt={'email'} />
            E-mail
          </a>
        </div>
      </div>
    </div>
  );
};
