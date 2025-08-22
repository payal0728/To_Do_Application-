import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ToDoForm from './Components/ToDoForm'
import About from './Pages/About'
import { ToDoProvider } from './context/ToDoContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <ToDoProvider>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/createTask' element={<ToDoForm/>}></Route>
          <Route path='/about' element={<About/>}></Route>
      </Routes>
      </ToDoProvider>
    </BrowserRouter>
    </>
  )
}

export default App;