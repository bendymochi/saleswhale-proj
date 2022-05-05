import React from 'react'
import CompanyIcon from '../assets/icon-companies.svg'
import AddIcon from '../assets/add.svg'
import Hero from './Hero.js'

export default function Content() {
  return (
    <div>
      {/* Teams Header */}
      <div className="hero">
        <img src={CompanyIcon} alt="" />
        <div className="hero-teams">Teams</div>
        <div className="create-team-main">
          <button className="create-team">
            <img src={AddIcon} alt="" />
            <span className="create-new-team">Create new team</span>
          </button>
        </div>
      </div>
      {/* Tab */}
      <Hero />
    </div>
  )
}
