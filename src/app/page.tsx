import styles from '@/styles/pages/page.module.scss'
import { ContentArea } from '@/components/ContentArea'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default async function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <Header />
      <ContentArea />
      <Footer />
    </main>
  )
}
