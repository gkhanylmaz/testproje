import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

function MoviePage({ database }) {
    const { movieID } = useParams()
    const history = useHistory()
    const movie = database.movies.find(el => el.id === Number(movieID))

    const handleReturnHomePageClick = () => {
        history.push('/')
    }
    return (
        <div>
            <button onClick={handleReturnHomePageClick}>Go To Home Page</button>
            {movie.name}
            {movie.id}
            {movie.actor}
            <img src={movie.photoUrl} alt="" />
        </div>
    )
}

export default MoviePage
