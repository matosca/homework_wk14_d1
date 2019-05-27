import React, { Component } from 'react';
import MovieList from '../components/MovieList';

class MovieBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm",
          date: "27 May 2019"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm",
          date: "28 May 2019"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm",
          date: "29 May 2019"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm",
          date: "30 May 2019"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm",
          date: "31 May 2019"
        }
      ]
    }
  }

  render() {
    return(
      <div className="movie-box">
        <h2>Upcoming Releases for United Kingdom</h2>
        <MovieList data={ this.state.data }/>
      </div>
    );
  }
}

export default MovieBox;
