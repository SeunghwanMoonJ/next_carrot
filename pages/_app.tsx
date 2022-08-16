import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // fetcher 함수는 자주 사용하므로 아래 코드로 SWR 기본 옵션으로 저장
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="max-w-2xl mx-auto w-full">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
