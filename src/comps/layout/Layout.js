import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({children, title = "World Rankings"}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <h1>
            World Rankings
          </h1>
        </Link>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
       <p>© Andrei Racasan 2021</p>
      </footer>
    </div>
  );
};

export default Layout;