import React, { Component } from 'react'
import Movie from './movie'
import data from '../data/1989movies.json'
class Movies extends Component {
  render() {
    console.log(data)
    return (
      <main>
        {data.results.map(movie => {
          return (
            <Movie
              key={movie.id}
              movieTitle={movie.title}
              description={movie.overview}
              image={
                'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
                movie.poster_path
              }
            />
          )
        })}
      </main>
    )
  }
}

export default Movies
