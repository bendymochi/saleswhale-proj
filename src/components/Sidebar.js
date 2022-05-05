import React from 'react'
import logo from '../assets/logo.png'
import campaign from '../assets/icon-campaign.png'
import contacts from '../assets/menu-contacts.png'
import help from '../assets/menu-help.png'
import teams from '../assets/menu-teams.png'
import report from '../assets/menu-reports.png'

export default function Sidebar() {
  return (
    <div>
      <nav className="sidebar">
        <img src={logo} alt="" />
        <img src={campaign} alt="" />
        <img src={teams} alt="" />
        <img src={contacts} alt="" />
        <img src={report} alt="" />
        <div className="help-icon">
          <img src={help} alt="" className="help-icon" />
        </div>
      </nav>
    </div>
  )
}

