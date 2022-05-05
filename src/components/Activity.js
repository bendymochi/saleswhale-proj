import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Activity(props) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("/db/info.json")
      .then((res) => {
        setActivities(res.data.activities)
      })
      .catch((err) => console.log(err));
  }, []);

  const displayActivities = (activities) => {
    if (activities.length > 0) {
      return (
        activities.map((activity) => {
          return (
            <div className="activity-container" key={activity.id}>
              <img src={activity.person.avatar} alt="" className="avatar" />
              <div className="activity-font">
                <span className="activity-bold">{activity.person.name} </span>{activity.action} <span className="activity-bold">{activity.target}.</span>
                <div className="activity-create">{activity.created_at}</div>
              </div>
            </div>
          )
        })
      )
    } else {
      return (<h3>No Activities are shown.</h3>)
    }
  }

  return (
    <div className="activity-layout">
      <div className="results-layout">
        <h1 className="activity-header">Activity</h1>
        <div className="activity-border"></div>
        <div className="activity-padding">
          {displayActivities(activities)}
        </div>
      </div>
    </div>
  )
}
