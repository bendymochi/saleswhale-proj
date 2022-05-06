import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../styles/activity.module.css'

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
            <div className={styles.container} key={activity.id}>
              <img src={activity.person.avatar} alt="" className="avatar" />
              <div className={styles.font}>
                <span className="font-bold">{activity.person.name} </span>{activity.action} <span className="font-bold">{activity.target}.</span>
                <div className={styles.creation}>{activity.created_at}</div>
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
    <div className={styles.layout}>
      <div className={styles.shadow}>
        <div className={styles.header}>Activity</div>
        <div className={styles.border}></div>
        <div className={styles.padding}>
          {displayActivities(activities)}
        </div>
      </div>
    </div>
  )
}
