import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/fonts/HelveticaNeueCyr-Medium.woff" as="font" type='font/woff'crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/HelveticaNeueCyr-Light.woff" as="font" type='font/woff'crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/HelveticaNeueCyr-Bold.woff" as="font" type='font/woff'crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
