import React, { useState } from 'react'
import ListView from '../list-view/list-view'
import MovieModal from '../movie-modal/movie-modal';
import { useHistory } from "react-router-dom";

function HomePage({ database }) {
    const [movieModalVisible, setMovieModalVisible] = useState(false);
    const [movie, setMovie] = useState(null)

    const history = useHistory();
    const handleCardClick = (movie) => {
        setMovieModalVisible(true)
        setMovie(movie)
    }

    const handleMovieModalClose = () => {
        setMovieModalVisible(false);
    }
    return (
        <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ListView 
                database={database}
                onCardClick={handleCardClick}
            />
            <MovieModal 
                visible={movieModalVisible}
                onCancel={handleMovieModalClose}
                movie={movie}
            />
        </div>
    )
}

export default HomePage
