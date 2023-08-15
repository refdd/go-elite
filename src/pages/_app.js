import "@/styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Google Analytics
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=GTM-P7GBDH9`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "GTM-P7GBDH9");
    };
  }, []);
  return <Component {...pageProps} />;
}
