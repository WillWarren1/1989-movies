import React, { Component } from 'react'

const randomColor = () => {
  var x = Math.floor(Math.random() * 256)
  var y = Math.floor(Math.random() * 256)
  var z = Math.floor(Math.random() * 256)
  var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')'
  return bgColor
}

const randomNumber = () => {
  let num = Math.floor(Math.random() * 101)
  return num
}

const h2Gradient = [
  `radial-gradient(${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`,
  `linear-gradient(${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`,
  `linear-gradient(to right, ${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`,
  `linear-gradient(to left, ${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`,
  `linear-gradient(to bottom, ${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`,
  `linear-gradient(to bottom left, ${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`,
  `linear-gradient(to bottom right, ${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`,
  `linear-gradient(to top right, ${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`,
  `linear-gradient(to top left, ${randomColor()} ${randomNumber()}%, ${randomColor()} ${randomNumber()}%)`
]

class Movie extends Component {
  render() {
    let randomHGradient =
      h2Gradient[Math.floor(Math.random() * h2Gradient.length)]

    return (
      <figure>
        <img src={this.props.image} />
        <h2
          style={{
            backgroundImage: randomHGradient
          }}>
          {this.props.movieTitle}
        </h2>
        <figcaption>{this.props.description}</figcaption>
      </figure>
    )
  }
}

export default Movie
