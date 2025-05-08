import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube Music Widget</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.widgetCard}>
          <iframe 
            width="100%" 
            height="380" 
            allow="autoplay" 
            src="https://www.youtube.com/embed/videoseries?list=PLCQVhu8hntR7yM96ibZaPMb8HlNv_DHI_&autoplay=0&loop=1&modestbranding=1&rel=0&color=white" 
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
}
