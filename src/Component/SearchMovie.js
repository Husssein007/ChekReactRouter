import React from 'react'
import Rate from './Rate'

const SearchMovie = ({searchTerm, setSearchTerm, ratingSearch, setRatingSearch}) => {
  return (
    <div>
         <div  style={{display:"flex",justifyContent:"center"}} >
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
        />
        <div className="rating-search">
         {/* <Rate     rating={ratingSearch}   setRatingSearch={setRatingSearch}  /> */}
        </div>
      </div>
    </div>
    <Rate/>
    </div>
    
  )
 
}

export default SearchMovie