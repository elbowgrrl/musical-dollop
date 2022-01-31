//Built with node version 16.13.1

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MVLogo from '../public/MVLogo.png'
import Link from 'next/link'

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
        href="/projects"
        src={MVLogo}
        alt="logo"
        width={200}
        height={200}
        placeholder="blur"
      />
      <Link href="/about"><a>About</a></Link>
      <Link href="/projects"><a>Projects</a></Link>
      <Link href="/Contact"><a>Contact</a></Link>
      
      </main>

      <footer className={styles.footer}>
      <span>Created with Next.js by Megan Veaudry</span>
      <span>2022</span>
      </footer>
    </div>
  )
}
