// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Other head elements here */}

          {/* Add the tracking script here */}
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Work+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <script
            async
            src="https://tag.clearbitscripts.com/v1/pk_96dc0ba2b469b2d203fd0c76f674ed58/tags.js"
            referrerPolicy="strict-origin-when-cross-origin"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
