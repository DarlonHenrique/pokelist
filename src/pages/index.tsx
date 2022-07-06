import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PokeList</title>
        <meta
          name='description'
          content='Pokelist App Created With ☕ by Darlon Henrique'
        />
        <link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
      </Head>

      <Header />

      <main></main>

      <footer></footer>
    </>
  )
}

export default Home
