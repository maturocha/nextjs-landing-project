import Document, { Head, Html, Main, NextScript } from "next/document"

class WebsiteDocument extends Document {
  render() {
    return (
      <Html lang="es" className='scroll-smooth'>
        <Head />
        <body className="font-fallback leading-normal overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default WebsiteDocument;