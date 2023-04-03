import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import Layout from "../../layout/Layout";
import { wrapper } from "../../redux/store";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
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

export default wrapper.withRedux(App);
