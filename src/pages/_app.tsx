import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import Layout from "../../layout/Layout";
import store from "../../redux/store";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Head>
            <title>Test Next</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
