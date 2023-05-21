import "@/styles/globals.css";
import "../styles/fonts.css";
<<<<<<< HEAD
import "../styles/swiper.css";
import "../styles/image-gallery.css"
=======
>>>>>>> f790907cb8f963d0c1e4b426693fa5490f9d4d7c

import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}