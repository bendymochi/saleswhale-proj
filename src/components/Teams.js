import React, {useState, useEffect } from 'react'
import SearchIcon from '../assets/icon-search.svg'
import axios from 'axios';
import Results from './Results';
import Activity from './Activity';

const tabs = [
  {
    id: 1,
    name: 'All',
    tabName: 'All Teams',
  },
  {
    id: 2,
    name: 'Favorites',
    tabName: 'Favorited Teams',
  },
  {
    id: 3,
    name: 'Archived',
    tabName: 'Archived Teams',
  },
]

export default function Teams() {
  const [activeTabId, setActiveTab] = useState(tabs[0].id);
  const [activeTabName, setActiveTabName] = useState(tabs[0].tabName);
  const [displayTeams, setDisplayTeams] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const searchItems = (searchValue) => {
    const filteredData = allTeams.filter((item) => {
      return item.name.toLowerCase().startsWith(searchValue.toLowerCase());
    })
    setDisplayTeams(filteredData);
  }

  useEffect(() => {
    axios
      .get("/db/info.json")
      .then((res) => {
        setDisplayTeams(res.data.teams)
        setAllTeams(res.data.teams)
      })
      .catch((err) => console.log(err));
  }, []);

  const filterByTabs = (id, tabName) => {
    setActiveTab(id);
    setActiveTabName(tabName);
    if (id === 1) {
      setDisplayTeams(allTeams);
    } else if (id === 2) {
      setDisplayTeams(allTeams.filter((team) => team.is_favorited));
    } else if (id === 3) {
      setDisplayTeams(allTeams.filter((team) => team.is_archived));
    }
  }

  return (
    <div>
      <Navigation
        tabs={tabs}
        onNavClick={filterByTabs}
        searchItems={searchItems}
        activeTabId={activeTabId}
      />
      <div className="flexbox">
        <Results displayTeams={displayTeams} allTeams={allTeams} tab={activeTabName} />
        <Activity />
      </div>
    </div>
  )
}

function Navigation(props) {
  const { searchItems } = props;
  return (
    <div className="tab-layout">
      <ul className="tabs">
        {props.tabs.map((item) => (
          <li key={item.id}>
            <button className={`tabs__button ${(props.activeTabId === item.id) ? 'active' : ''} `}
              onClick={() => props.onNavClick(item.id, item.tabName)}>
              <div className="spacing">{item.name}</div>
            </button>
          </li>
        ))}
      </ul>
      <div className="search">
        <img src={SearchIcon} alt="" className="search-icon" />
        <input
          placeholder="Search team name ..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
    </div>
  )
}