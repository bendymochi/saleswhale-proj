import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Activity from './components/Activity';
import Results from './components/Results';
import Card from './components/Card';
import Tab from './components/Tab';

function App() {
  const [activities, setActivities] = useState([]);
  const [teams, setTeams] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/db/info.json")
      .then((res) => {
        setActivities(res.data.activities)
        setTeams(res.data.teams)
        setUser(res.data.current_user)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-wrap">
          <Header user={user} />
          <Tab />
          <div className="flex flex-nowrap dark-bg w-full">
            <Results teams={teams}/>
            <Activity activities={activities} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
