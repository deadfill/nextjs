import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../../layout/Layout";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Head>
          <title>Test Next</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
