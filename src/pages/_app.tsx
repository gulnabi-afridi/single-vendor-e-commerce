import "@/styles/globals.css";
import "../styles/fonts.css";
import "../styles/swiper.css";
import "../styles/image-gallery.css";

import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}