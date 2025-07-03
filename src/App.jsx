import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from '../Components/Container'
import About from '../Components/About'
import Stats from '../Components/Stats'
import Choice from '../Components/Choice'
import Destcontinent from '../Components/Sub-components/Destcontinent'
import Destsmallcontinent from '../Components/Sub-components/Destsmallcontinent'
import Destination from '../Components/Destination'
import Reviews from '../Components/Reviews'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container />
      <About />
      <Stats />
      <Choice />
      <Destination />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
