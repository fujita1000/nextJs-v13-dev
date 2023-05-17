import './globals.css'
import Head from "./components/head";
import Header from "./components/header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Head/>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
