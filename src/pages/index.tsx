import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokelist</title>
        <meta
          name='description'
          content='Pokelist App Created With ☕ by Darlon Henrique'
        />
        <link rel='pokelist icon' href='/images/favicon.ico' />
      </Head>

      <header>
        <h1>Home</h1>
      </header>

      <main></main>

      <footer></footer>
    </>
  )
}

export default Home
