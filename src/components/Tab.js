import React, { useMemo, useState } from 'react'

const tabs = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Favorites',
  },
  {
    id: 3,
    name: 'Archived',
  },
]

function Tab(props)  {
  return (
    <div className="font-bold">
      {/* {props.tab.name} */}
    </div>
  )
}
export default function Tabs() {
  const [activeTabId, setActiveTab] = useState(tabs[0].id);

  const activeTab = useMemo(() => (
    tabs.find((tab) => (
      tab.id === activeTabId
      ))
  ), [activeTabId]);

  return (
    <div className="nav-height">
      <Navigation tabs={tabs} onNavClick={setActiveTab} activeTabId={activeTabId} />
      <Tab tab={activeTab} />
    </div>
  )
}

function Navigation(props) {
  return (
    <ul className="flex px-6">
      {props.tabs.map((item) => (
        <li key={item.id}>
          <button className={`tabs__button ${(props.activeTabId === item.id) ? 'active' : ''} font-semibold`}
          onClick={() => props.onNavClick(item.id)}>
            <span className="px-5">{item.name}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}