import React from "react";

import "../styles/globals.css";
import { pageview } from "../features/google-analytics";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
