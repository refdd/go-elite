import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Document() {
  const [isloding, setIsloding] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsloding(true);
    }, 7000);
  }, []);
  return (
    <Html lang="en">
      <Head>
        <Script
          id="google-tag-manager"
          onLoad={() => {
            console.log("Script has loaded");
          }}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P7GBDH9');`,
          }}
        ></Script>
      </Head>

      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7GBDH9"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
      </body>
    </Html>
  );
}
