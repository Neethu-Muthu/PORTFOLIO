import React from 'react'

const NavBar = () => {
  return (
    <>
 <nav className="text-right text-blue-700 p-4">
      <a href="#about" className="inline-block mr-4 hover:bg-sky-700">About</a>
      <a href="#education" className="inline-block mr-4 hover:bg-sky-700">Education</a>
      <a href="#portfolio" className="inline-block mr-4 hover:bg-sky-700">Portfolio</a>
      <a href="#contact" className="inline-block mr-4 hover:bg-sky-700">Contact</a>
    </nav>
    </>
  )
}

export default NavBar