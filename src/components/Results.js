import React, { useState } from 'react'
import Card from './Card';

export default function Results (props) {
  const { teams, searchInput, filteredResults } = props;

  return (
    <div className="results-main">
      <div className="results-layout">
        <div className="all-teams">
          <h1 className="">All Teams</h1>
          <div className="show-teams">Showing {filteredResults.length} out of {teams.length} teams</div>
        </div>
        <div className="border-break"></div>
        { /* RESULTS */}
          <div className="results-grid">
            {searchInput.length > 1 ? (filteredResults.map((item) => {
              return (
                <div key={item.id}>
                  <Card
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    campaign={item.campaigns_count}
                    lead={item.leads_count}
                    favorited={item.is_favorited}
                    archived={item.is_archived}
                    created={item.created_at}
                  />
                </div>
              )
            }))
            : (
              teams.map((item) => {
                return (
                  <div key={item.id}>
                    <Card
                      name={item.name}
                      description={item.description}
                      image={item.image}
                      campaign={item.campaigns_count}
                      lead={item.leads_count}
                      favorited={item.is_favorited}
                      archived={item.is_archived}
                      created={item.created_at}
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
