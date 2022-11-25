import type { AppProps } from "next/app";
// import "bootstrap/scss/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "../styles/GlobalStyles";
import Head from "next/head";
import type { NextPageWithLayout } from "../components/Layout/LayoutTypes";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
