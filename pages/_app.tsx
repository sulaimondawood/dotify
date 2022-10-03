import "../styles/global.css";
import type { AppProps } from "next/app";
import Store from "../store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
