import { } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Section from './components/Section'

function App() {


  return (
    <>

      <Header />
      <main>
          <Section>
            <Outlet />
          </Section>
      </main>

    </>
  )
}

export default App
