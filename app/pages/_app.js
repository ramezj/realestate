import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/components/ThemeProvider";
import NoSSR from "@/utils/NoSSR";

export default function App({ Component, pageProps: { session, ...pageProps}}) {
  return (
    <>
    <ThemeProvider
    attribute='class'
    defaultTheme='system'
    >
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
    </>
  )
}
