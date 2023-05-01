import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='Get in touch by submitting the contact form, and I will get back to you as soon as possible.' />
        <Contact />
    </div>
  )
}

export default contact