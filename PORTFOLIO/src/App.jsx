import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './components/About'
import NavBar from './components/NavBar'
import Education from './components/Education'
import Projects from './components/Projects'
import ProfessionalDevelopment from './components/ProfessionalDevelopment'
import ContactForm from './components/ContactForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <div className='bg-sky-100'>
    <NavBar/>
      <About/>
      <Education/>
      <Projects/>
      <ProfessionalDevelopment/>
      <ContactForm/>

    </div>
    
      
    </>
  )
}

export default App
