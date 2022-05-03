import React, { useState} from 'react';
import convoIcon from '../assets/icon-conversations-small.svg'
import leadIcon from '../assets/icon-leads-small.svg'
import starDefault from '../assets/star-default.svg'
import starActive from '../assets/star-active.svg'

export default function Card(props) {
  const { name, description, image, campaign, lead, favorited, created } = props;

  return (
    <div className="w-80">
      <div className="border-solid border-2 border-gray-200 p-3 relative">
        <div className="flex">
          <img src={image} alt="" className="h-10 w-10 rounded"/>
          <div className="px-2">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-xs">Created {created}</p>
          </div>
          <div className="absolute right-0 pr-3"><img src={ favorited ? starDefault : starActive } alt="" /></div>
        </div>
        <div className="py-3 text-sm">{description}</div>
        <div className="border border-y-1 absolute w-full right-0"></div>
        <div className="flex text-center py-4">
          <div className="flex flex-wrap text-sm">
            <img src={convoIcon} alt="" />
            <p className="mx-1">{campaign} Campaigns</p>
          </div>
          <div className="flex flex-wrap text-sm px-1">
            <img src={leadIcon} alt="" />
            <p className="mx-1">{lead} Leads</p>
          </div>
        </div>
      </div>
    </div>
  )
}
