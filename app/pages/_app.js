import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps}}) {
  // return <Component {...pageProps} />;
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </html>
    </>
  )
}
