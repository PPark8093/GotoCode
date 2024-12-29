import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DescriptionPage from './pages/DescriptionPage'

function App() {

    return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/description/*' element={<DescriptionPage/>}/>
      </Routes>
    )
}

export default App
