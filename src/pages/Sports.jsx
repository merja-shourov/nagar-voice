import React from 'react'
import { NewsCard } from '../components/NewsCardY'
const Sports = () => {
  return (
    <div>
      <h1>Sports</h1>
      <div className="main w-full flex">
        <div className="left w-8/12 bg-red-50">
          <div className="all-cards grid grid-cols-3 gap-2">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
        <div className="right w-4/12 bg-blue-50"></div>
      </div>


    </div>

  )
}

export default Sports