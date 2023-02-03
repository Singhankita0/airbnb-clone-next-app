import '@/styles/globals.css'
import "../src/components/Card.css";
import "../src/components/Header.css"
import "../src/components/Home.css"
import "../src/components/Listings.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
