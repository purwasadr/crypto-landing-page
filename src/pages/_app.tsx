import { Navbar } from '@/components';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WeeWallet - Buy, Trade and Hold your Favorite Cryptocurrencies</title>
      </Head>
      <header className={`flex justify-center`}>
        <div className="max-w-7xl w-full">
          <Navbar />
        </div>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
