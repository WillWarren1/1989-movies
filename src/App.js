import React, { Component } from 'react'
import Header from './components/header'
import Movies from './components/movies'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Movies />
      </>
    )
  }
}

export default App
