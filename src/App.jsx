import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Register from './Components/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
