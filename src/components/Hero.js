import React, { useMemo, useState, useEffect } from 'react'
import SearchIcon from '../assets/icon-search.svg'
import axios from 'axios';
import Results from './Results';
import Activity from './Activity';

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

export default function Hero() {
  const [activeTabId, setActiveTab] = useState(tabs[0].id);
  const [teams, setTeams] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');


  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = teams.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(teams)
    }
  }

  useEffect(() => {
    axios
      .get("/db/info.json")
      .then((res) => {
        setTeams(res.data.teams)
      })
      .catch((err) => console.log(err));
  }, []);

  const activeTab = useMemo(() => (
    tabs.find((tab) => (
      tab.id === activeTabId
      ))
  ), [activeTabId]);

  return (
    <div className="">
      <Navigation tabs={tabs} onNavClick={setActiveTab} activeTabId={activeTabId} searchItems={searchItems} />
      <div className="main">
        <Results teams={teams} tab={activeTab} searchInput={searchInput} filteredResults={filteredResults} />
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
            <button className={`tabs__button ${(props.activeTabId === item.id) ? 'active' : ''} font-semibold`}
            onClick={() => props.onNavClick(item.id)}>
              <span className="create-new-team">{item.name}</span>
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