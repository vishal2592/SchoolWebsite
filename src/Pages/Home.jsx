import React from 'react'
import Banner from '../Components/Banner'
import AboutSection from '../Components/AboutSection'
import FacultySection from '../Components/FacultySection'
import GallerySection from '../Components/GallerySection'
import NewsEventSection from '../Components/NewsEventSection'
import ContactSection from '../Components/ContactSection'

const Home = () => {
  return (
    <div>
        <Banner />
        <AboutSection />
        <FacultySection />
        <GallerySection />
        <NewsEventSection />
        <ContactSection />
    </div>
  )
}

export default Home