import React from 'react'
import MovieCard from '../movie-card/movie-card'
import './list-view.css'

function ListView({ database }) {
    const renderItems = database.movies.map(movie => 
        <MovieCard 
            movie={movie}
        />
    )
    return (
        <div className='list-view'>
            {renderItems}
        </div>
    )
}

export default ListView
