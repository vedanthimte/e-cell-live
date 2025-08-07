import React from 'react'
import UpcomingEvents from '@/components/eventspage/UpcomingEvents'
import PastEvents from '@/components/eventspage/PastEvents'

function Events() {
  return (
    <div>
      <UpcomingEvents />
      <PastEvents />
    </div>
  )
}

export default Events   