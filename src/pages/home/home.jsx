import React from 'react'
import HeroSection from '../../components/sections/heroSection/heroSection'
import AboutSection from '../../components/sections/aboutSection/aboutSection'
import FeatureSection from '../../components/sections/featureSection/featureSection'
import ContactSection from '../../components/sections/contactSection/contactSection'
import ProjectSection from '../../components/sections/projectSection/projectSection'
import ServiceSection from '../../components/sections/serviceSection/serviceSection'
import TestimonialSection from '../../components/sections/testimonialSection/testimonialSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <ServiceSection />
        <ProjectSection />
        <TestimonialSection />
        <ContactSection />
    </div>
  )
}

export default Home