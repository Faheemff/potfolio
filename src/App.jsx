// eslint-disable-next-line no-unused-vars
import React from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './pages/Page2'

const App = () => {
  return (
    <>
      <div id="main">
        <Header />
        <Page1 />
        <Page2 />
      </div>
    </>
  )
}

export default App
