import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/fonts/HelveticaNeueCyr-Medium.woff" as="font" type='font/woff'crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/HelveticaNeueCyr-Light.woff" as="font" type='font/woff'crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/HelveticaNeueCyr-Bold.woff" as="font" type='font/woff'crossOrigin="anonymous"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
