import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <title>Next JS Ain</title>
                <Head>
                    {/* <link rel="stylesheet"
                        href="/_next/static/style.css"
                    /> */}
                    <link rel="stylesheet"
                        href="/_next/static/argon-design-system-react.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}