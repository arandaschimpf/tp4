`use client`
import Head from 'next/head';
import Counter from './componentes/contador';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Counter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter />
    </div>
  );
};

export default Home;
