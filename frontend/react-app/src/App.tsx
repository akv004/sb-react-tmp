import './App.css'

interface AppProps {
  page?: string
}

function Home() {
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}

function App({ page = 'Home' }: AppProps) {
  return (
    <>
      {page === 'About' ? <About /> : <Home />}
    </>
  )
}

export default App
