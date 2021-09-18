import React from 'react'
import MovieCard from '../movie-card/movie-card'
import './list-view.css'

function ListView({ database, onCardClick }) {
    const renderItems = database.movies.map(movie => 
        <MovieCard 
            movie={movie}
            onCardClick={onCardClick}
        />
    )
    return (
        <div className='list-view-container'>
            <div className='list-view'>
                {renderItems}
            </div>
        </div>
    )
}

export default ListView
