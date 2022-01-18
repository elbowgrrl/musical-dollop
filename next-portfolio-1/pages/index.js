//Built with node version 16.13.1

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Megan Veaudry</title>
        <meta name="Megan Veaudry portfolio" content="Created with next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
      <span>Created with Next.js by Megan Veaudry</span>
      <span>2022</span>
      </footer>
    </div>
  )
}
