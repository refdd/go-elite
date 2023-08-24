import "@/styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${josefin_Sans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
