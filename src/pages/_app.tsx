import '@/shared/styles/_app.scss';
import type { AppProps } from 'next/app';

import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page">
      <Head>
        <title>Cats facts</title>
        <meta name="description" content="There are several facts about cats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
