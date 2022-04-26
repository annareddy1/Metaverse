import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <MoralisProvider
  appId= {"zikoJuo5aqMbDIzOXvM0RYOH8HlK8YURhy9zszo8"}
  serverUrl={"https://2jb1kgkwna5d.usemoralis.com:2053/server"}
  >
    <Component {...pageProps} />
  </MoralisProvider>
  );
}

export default MyApp
