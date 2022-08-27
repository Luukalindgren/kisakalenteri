
// Tämä, jotta saadaan CSS globaalisti

import '../styles.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}