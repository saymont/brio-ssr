import React from 'react'
import App from 'next/app'
// import "../scss/style.scss";
// import "../assets/scss/argon-design-system-react.scss"
 
//import "../assets/vendor/nucleo/css/nucleo.css";
//import "../assets/vendor/font-awesome/css/font-awesome.min.css";
// import "../assets/css/argon-design-system-react.css";

import "../assets/scss/argon-design-system-react.scss";

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <div>
                <Component {...pageProps} />
            </div>
        )
    }
}