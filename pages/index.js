import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kássio Alcantara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <img width="100px" src="https://github.com/kassiogluten.png" alt="Kássio Alcantara"></img>
        <h1>Kássio Alcantara</h1>
        <h3>Programador Front-End</h3>
        <h5>Freelancer desenvolvendo aplicações e páginas com NextJS e React Native</h5>
        <ul>
          <li>
            <a href="https://www.fb.com/kassiogluten">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/kassiogluten/">Instagram</a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5533920001670">Whatsapp</a>
          </li>
          <li>
            <a href="https://t.me/kassiogluten">Telegram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kassio-alcantara-gluten-ab2b75149/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/kassiogluten">Github</a>
          </li>
        </ul>


    </div>
  )
}
