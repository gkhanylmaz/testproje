import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

function MovieCard({ movie, onCardClick }) {
    const handleClick = () => {
        if (onCardClick) {
            onCardClick(movie)
        }
    }
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={movie.photoUrl} />}
            onClick={handleClick}
        >
            <Meta title={movie.name} description={movie.actor} />
        </Card>
    )
}

export default MovieCard
