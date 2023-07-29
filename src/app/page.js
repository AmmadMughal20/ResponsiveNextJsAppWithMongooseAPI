import Image from 'next/image'
import styles from './page.module.css'
import Herosection from './components/Herosection'

export default function Home() {
  return (
    <div className={styles.main}>
      <Herosection title = "Welcome to My website" imageUrl="/home.svg" description="This is home description"/>
    </div>
  )
}
