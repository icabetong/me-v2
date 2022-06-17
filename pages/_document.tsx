import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#0E0E14" />
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="static/logo192.png" />
        <link rel="manifest" href="static/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}