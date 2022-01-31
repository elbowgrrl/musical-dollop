//Built with node version 16.13.1

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MVLogo from '../public/MVLogo.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Megan Veaudry</title>
        <meta name="Megan Veaudry portfolio" content="Created with next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      
      <Image
        src={MVLogo}
        alt="logo"
        width={250}
        height={250}
      />
      <a>Megan Veaudry</a>
      </main>

      <footer className={styles.footer}>
      <span>Created with Next.js by Megan Veaudry</span>
      <span>2022</span>
      </footer>
    </div>
  )
}
