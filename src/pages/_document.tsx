import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = { unknown: unknown };

class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
