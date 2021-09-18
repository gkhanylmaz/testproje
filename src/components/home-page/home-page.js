import React, { useState } from 'react'
import ListView from '../list-view/list-view'
import MovieModal from '../movie-modal/movie-modal';

function HomePage({ database }) {
    const [movieModalVisible, setMovieModalVisible] = useState(false);
    const [movie, setMovie] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(database)

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        const filteredMovies = database.movies.filter(movie => {
            if (movie.name.toLowerCase().includes(e.target.value.toLowerCase()) || movie.actor.toLowerCase().includes(e.target.value.toLowerCase())) {
                return true
            }
            return false
        })
        const _filteredData = {
            ...filteredData,
            movies: filteredMovies
        }
        setFilteredData(_filteredData)
    }

    const handleCardClick = (movie) => {
        setMovieModalVisible(true)
        setMovie(movie)
    }

    const handleMovieModalClose = () => {
        setMovieModalVisible(false);
    }
    return (
        <div className="App">
            <input type="text" onChange={handleSearchTextChange} value={searchText}/>
            <ListView 
                database={filteredData}
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
