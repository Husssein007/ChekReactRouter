import React from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'

const Movie = ({setNAmeSearch,movieList,deletovie,MovieSeen,nameSearch}) => {
  return (
    <div>
        <h1 className="main-title">Welcome to MovieApp</h1>
          <Navbar  
      
      setNAmeSearch={setNAmeSearch}
     
      />
         

      <MovieList
       movieList={movieList}
        deletovie={deletovie} 
         MovieSeen={MovieSeen} 
         nameSearch={nameSearch} 
 />
      
    </div>
  )
}

export default Movie