import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dra Kauanny Dinamarca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mozão trabalhando aqui <3" />
        <p className="description">
          Eu te amo <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
