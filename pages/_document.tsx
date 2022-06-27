import { Html, Head, Main, NextScript } from 'next/document'
import data from '../data/data.json'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#0E0E14" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>

        <meta name="description" content={data.desc}/>
        <meta name="author" content={data.fullName}/>
        <meta name="keywords" content="isaiah abetong, isaiah collins abetong, central luzon state university, clsu, web development, mobile development, app development, nueva ecija"/>
        <meta name="robots" content="all"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>

        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.site} />
        <meta property="og:description" content={data.desc}/>
        <meta property="og:url" content={data.url} />
        <meta property="og:image" content={data.image} />
        <meta property="og:imageAlt" content="Isaiah Collins Abetong Portfolio Site Image"/>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@icabetong" />
        <meta name="twitter:title" content={data.site} />
        <meta name="twitter:description" content={data.desc} />
        <meta name="twitter:image" content={data.image} />

        <link rel="preload" href="/images/me.webp" as="image"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}