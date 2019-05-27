import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {

  render() {

    const movieNodes = this.props.data.map(movie => {
      return (
        <Movie href={movie.url} key={movie.id}>{movie.name}: {movie.date}</Movie>
      );
    })

    return(
      <div className="movie-list">
        {movieNodes}
      </div>
    );
  }
}

export default MovieList;
