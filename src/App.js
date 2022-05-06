import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/db/info.json")
      .then((res) => {
        setUser(res.data.current_user)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flexbox">
      <Sidebar />
      <div className="layout">
        <Header user={user} />
        <Content />
      </div>
    </div>
  );
}

export default App;
