import React from 'react'

const ContactForm = () => {
  return (
    <>
<section id="contact" className="ml-5 mt-6">
      <h2 className="font-semibold text-2xl text-blue-700">Message Me</h2>
      <form className="mt-6">
        <div>
          <label htmlFor="txtName">Name:</label>
          <input type="text" id="txtName" name="txtName" placeholder="Enter full name" required className="ml-4 mb-2 p-2 border border-gray-400" />
        </div>
        <div>
          <label htmlFor="txtEmail">Email:</label>
          <input type="email" id="txtEmail" name="txtEmail" placeholder="Enter email" required className="ml-4 mb-2 p-2 border border-gray-400" />
        </div>
        <div>
          <label htmlFor="ph">Phone:</label>
          <input type="tel" id="ph" name="ph" className="ml-4 mb-2 p-2 border border-gray-400" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" cols="50" name="message" className="ml-4 mb-2 p-2 border border-gray-400"></textarea>
        </div>
        <div>
          <button type="submit" className="ml-4 mt-2 p-2 bg-blue-700 text-white">Submit</button>
        </div>
      </form>
      <nav className="mt-6 ml-5 text-blue-700">
        <div style={{ backgroundColor: "rgb(198, 245, 229)" }}>
          <a href="https://neethu83.wordpress.com/" target="_blank" rel="noopener noreferrer">Portfolio Website</a> |
          <a href="/home/neethu/Neethu_Portfolio_Tailwind/contactme.html" target="_blank" rel="noopener noreferrer">Contact Me</a>
        </div>
      </nav>
    </section>
    </>
  )
}

export default ContactForm