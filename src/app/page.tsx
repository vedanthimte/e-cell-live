import HeroSection from '@/components/homepage/HeroSection'
import WhoWeAre from '@/components/homepage/WhoWeAre'
import UpcomingEvents from '@/components/eventspage/UpcomingEvents'
import React from 'react'


function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <UpcomingEvents />
    </div>
  )
}

export default Home