import React from 'react'
import { Card } from 'react-bootstrap'

import Rating from '../Rating/Rating'

import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.img} className="movieImg" />
        <Card.Body className="cardText">
          <Card.Title className="movieTitle">{movie.title}</Card.Title>
          {/* <span>{movie.rating}</span> */}
          <Rating rating={movie.rating} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default MovieCard