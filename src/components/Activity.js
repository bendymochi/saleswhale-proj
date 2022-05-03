import React from 'react'

export default function Activity(props) {
  const displayActivities = (props) => {
    const { activities } = props;
    if (activities.length > 0) {
      return (
        activities.map((activity, index) => {
          return (
            <div className="flex flex-row activity-color py-2" key={activity.id}>
                <img src={activity.person.avatar} alt="" className="avatar" />
              <div className="px-3">
                <div><span className="font-semibold">
                {activity.person.name}</span> {activity.action} <span className="font-semibold">{activity.target}.</span></div>
                <div className="activity-time">{activity.created_at}</div>
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
    <div className="p-10">
      <div className="bg-white px-8 py-5">
        <div className="font-semibold text-xl py-4">Activity</div>
        <div className="activity-border mb-4"></div>
        {displayActivities(props)}
      </div>
    </div>
  )
}
