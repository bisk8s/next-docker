import React from 'react'
import Head from 'next/head'

import Bisk8sGraph from '../assets/bisk8s-graph.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <div className="graph">
        <Bisk8sGraph />
      </div>
      <h1>Bisk8s</h1>
      <div className="code">CODE</div>
      <p>React + Nextjs + Docker</p>
    </Container>
  )
}

export default Home
