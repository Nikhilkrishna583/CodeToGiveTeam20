import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginscreen from './components/loginscreen'
import Signupscreen from './components/signupscreen'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginscreen />} />
        <Route path="/signup" element={<Signupscreen />} />
      </Routes>
    </Router>
  )
}

export default App
