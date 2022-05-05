import React, { useState} from 'react';
import convoIcon from '../assets/icon-conversations-small.svg'
import leadIcon from '../assets/icon-leads-small.svg'
import starDefault from '../assets/star-default.svg'
import starActive from '../assets/star-active.svg'

export default function Card(props) {
  const { name, description, image, campaign, lead, favorited, created } = props;

  return (
    <div className="card">
      <div className="card-layout">
        <div className="card-flex">
          <img src={image} alt="" className="card-image"/>
          <div className="card-header">
            <h3 className="card-name">{name}</h3>
            <p className="card-create">Created {created}</p>
          </div>
          <div className="favorite-icon"><img src={ favorited ? starDefault : starActive } alt="" /></div>
        </div>
        <div className="card-padding">
          <div className="card-description">{description}</div>
        </div>
        <div className="card-border"></div>
        <div className="card-details">
          <div className="card-flex">
            <img src={convoIcon} alt="" />
            <p className="card-sub">{campaign} Campaigns</p>
          </div>
          <div className="card-flex">
            <img src={leadIcon} alt="" />
            <p className="card-sub">{lead} Leads</p>
          </div>
        </div>
      </div>
    </div>
  )
}
