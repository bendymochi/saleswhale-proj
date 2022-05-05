import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/db/info.json")
      .then((res) => {
        setActivities(res.data.activities)
        setUser(res.data.current_user)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main-body">
      <div className="main">
        <Sidebar />
        <div className="layout">
          <Header user={user} />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
