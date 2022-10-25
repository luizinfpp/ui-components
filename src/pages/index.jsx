import React from 'react';
import Head from 'next/head';
import { Screen } from '../styled/main';

const Home = () => {
  return (
    <div style={{width: "100vw", height: "100vh"}}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
        </Head>

        <main style={{width: "100%", height: "100%"}}>
            <Screen>
                <h1>Olá!</h1>
            </Screen>

        </main>

    </div>
  )
}

export default Home;
