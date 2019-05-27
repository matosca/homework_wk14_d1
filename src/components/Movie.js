import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return(
      <div className="movie">
        <li>
          { this.props.children}
          { this.props.date }
        </li>
      </div>
    );
  }
}

export default Movie;
