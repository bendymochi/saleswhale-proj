import React from 'react'
import Notification from '../assets/icon-mail.svg'
import CaretDown from '../assets/caret-down.svg'

export default function Header(props) {

  const { user } = props;
  return (
    <div>
      <div className="header-border header">
        <div className="narwhal">NARWHAL</div>
        <div className="border"></div>
        <h1 className="header-teams">Teams</h1>
        <div className="user">
          <div className="notification">
            <img src={Notification} alt="" />
            <div className="mail">{user.notifications_count}</div>
          </div>
          <h2>Hello, {user.name}</h2>
          <img src={user.avatar} alt="" className="avatar"/>
          <img src={CaretDown} alt="" className="" />
        </div>
      </div>
    </div>
  )
}
