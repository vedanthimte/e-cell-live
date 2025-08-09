import HeroSection from '@/components/homepage/HeroSection'
import WhoWeAre from '@/components/homepage/WhoWeAre'
import Testimonials from '@/components/homepage/Testimonials'
import UpcomingEvents from '@/components/eventspage/UpcomingEvents'
import React from 'react'


function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <UpcomingEvents />
      {/* <Testimonials /> */}
    </div>
  )
}

export default Home