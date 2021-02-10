import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header style={{ backgroundColor: 'lightblue' }}>
        <h2>Header</h2>
      </header>
      <Component {...pageProps}/>
      <footer style={{ backgroundColor: 'lightblue' }}>
        <h2>Footer</h2>
      </footer>
    </>
  )
}

export default MyApp
