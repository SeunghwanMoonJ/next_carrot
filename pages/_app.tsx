import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-2xl mx-auto w-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
