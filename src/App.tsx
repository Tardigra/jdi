import React from 'react'
import logo from './logo.svg'
import './App.css'
import Inbox from './components/Inbox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Inbox />
      </header>
    </div>
  )
}

export default App
