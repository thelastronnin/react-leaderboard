import { Routes, Route } from 'react-router-dom'
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import AddScore from './components/AddScore'
import EditScore from './components/EditScore'
import { useState } from 'react'

function App() {

  const [player, setPlayer] = useState(null)

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path='/Leaderboard' element={<Leaderboard setPlayer={setPlayer} />} />
        <Route path='/AddScore' element={<AddScore />} />
        <Route path='/EditScore' element={<EditScore player={player} />} />
      </Routes>
    </HashRouter>
  )
}

export default App
