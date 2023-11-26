import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <header>
      <h1>Memory Game</h1>
      <h2>Score: 0</h2>
      <h2>High-Score: 0</h2>
    </header>
    <main>
      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </main>
    </>
  )
}

export default App
