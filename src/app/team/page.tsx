import React from 'react'
import CoreTeam from '@/components/teampage/CoreTeam'
import TeamMembers from '@/components/teampage/TeamMembers'   
import TeamLeads from '@/components/teampage/TeamLeads'

function Team() {
  return (
    <div>
      <CoreTeam />
      <TeamLeads />
      {/* <TeamMembers /> */}
    </div>
  );
}

export default Team