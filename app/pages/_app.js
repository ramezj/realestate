import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes";
import NoSSR from "@/utils/NoSSR";

export default function App({ Component, pageProps: { session, ...pageProps}}) {
  return (
    <>
    <ThemeProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
    </>
  )
}
