import React, { useState } from 'react'
import Card from './Card';

export default function Results (props) {
  const { teams } = props;
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
  return (
    <div className="p-10">
      <div className="bg-white p-8">
        <input
          placeholder="Search new team..."
          onChange={(e) => searchItems(e.target.value)}
        />

        <div className="flex">
          <h1 className="font-bold">All Teams</h1>
          <p className="mr-0 ml-auto text-sm">Showing {filteredResults.length} out of {teams.length} teams</p>
        </div>
        <div className="border border-y-1 my-6 w-full"></div>

        { /* RESULTS */}
        <div className="grid grid-cols-3 gap-3 w-full">
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
