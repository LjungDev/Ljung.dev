import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { GTM_ID, reportWebVital } from "../lib/gtm";
import GoogleTagManager from "../components/atoms/GoogleTagManager";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  reportWebVital(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
