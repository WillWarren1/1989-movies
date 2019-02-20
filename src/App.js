import React, { Component } from 'react'
import Header from './components/header'
import Movies from './components/movies'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Movies />
        <Footer />
      </>
    )
  }
}

export default App
