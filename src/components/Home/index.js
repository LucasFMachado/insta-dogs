import React from 'react'
import Head from '../Helpers/Head'
import Feed from '../Feed'

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Home" />
      <Feed />
    </section>
  )
}

export default Home