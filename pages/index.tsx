import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Uncommon Hacks 2023&nbsp;
            <code className={styles.code}>ddserano & exortme1ster</code>
          </p>
        </div>
        <div className={styles.center}>
          <div className={styles.grid}>
            <Link
              href="/login"
              className={styles.card}
            >
              <h2 className={inter.className}>
                Login <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Find out how cool our app is!
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
