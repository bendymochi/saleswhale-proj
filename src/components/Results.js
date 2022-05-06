import React from 'react'
import Card from './Card'
import styles from '../styles/results.module.css'

export default function Results (props) {
  const { displayTeams, allTeams, tab } = props;

  return (
    <div className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.placement}>
          <div className={styles.header}>{tab}</div>
          <div className={styles.show}>Showing {displayTeams.length} out of {allTeams.length} teams</div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.grid}>
          {(displayTeams.map((team) => {
            return (
              <div key={team.id}>
                <Card
                  name={team.name}
                  description={team.description}
                  image={team.image}
                  campaign={team.campaigns_count}
                  lead={team.leads_count}
                  favorited={team.is_favorited}
                  archived={team.is_archived}
                  created={team.created_at}
                />
              </div>
            )
          })
          )}
        </div>
      </div>
    </div>
  )
}
