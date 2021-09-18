import React from 'react'
import { useHistory } from "react-router-dom";
import { Modal, Button } from 'antd';

function MovieModal({ visible, onCancel, movie }) {
    const history = useHistory();
    // movie?.id dediğimiz zaman movie varsa id'sini buluyor. Yoksa hata vermesine engel oluyor
    const handleGoMoviePageClick = () => {
        history.push(`/movies/${movie.id}`)
    }
    return (
        <Modal title="Basic Modal" visible={visible} onCancel={onCancel} footer={null}>
            <p>Movie Name : {movie?.name}</p>
            <p>Movie id : {movie?.id}</p>
            <p>Movie actor : {movie?.actor}</p>
            <button onClick={handleGoMoviePageClick}>Go To Movie Page</button>
        </Modal>
    )
}

export default MovieModal
