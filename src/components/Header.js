import React from 'react'
import notification from '../assets/icon-mail.svg'
import down from '../assets/caret-down.svg'
import companies from '../assets/icon-companies.svg'
import add from '../assets/add.svg'

export default function Header(props) {

  const { user } = props;
  return (
    <div className="w-full">
      {/* Header  */}
      <div className="flex items-center justify-end">
        <div className="flex flex-1 items-center">
          <h1 className="narwhal font-bold px-10">NARWHAL</h1>
          <div className="header-border flex-start"></div>
          <h1 className="px-8">Teams</h1>
        </div>
        <div className="flex items-center px-8">
          <div className="relative mx-4">
            <img src={notification} alt="" />
            <div className="mail absolute bottom-4 left-2">
              <p className="pl-1 text-xs font-semibold">{user.notifications_count}</p>
            </div>
          </div>
          <div className="font-semibold text-sm narwhal px-2">Hello, {user.name}</div>
          <img src={user.avatar} alt="" className="avatar"/>
          <img src={down} alt="" className="h-auto w-auto px-2" />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center flex-1 p-6">
          <img src={companies} alt="" className="px-2" />
          <h1 className="font-medium text-2xl pt-2">Teams</h1>
        </div>
        <button className="flex flex-wrap items-center create-team mx-8">
          <img src={add} alt="" className="px-2" />
          <p className="uppercase text-sm font-semibold px-2">Create new team</p>
        </button>
      </div>
    </div>
  )
}
