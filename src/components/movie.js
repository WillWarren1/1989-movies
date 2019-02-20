import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <figure>
        <img src={this.props.image} />
        <h2>{this.props.movieTitle}</h2>
        <figcaption>{this.props.description}</figcaption>
      </figure>
    )
  }
}

export default Movie
