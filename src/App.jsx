import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import AboutPage from './Pages/About/AboutPage'
import AwardsPage from './Pages/Awards/AwardsPage'
import SkillPage from './Pages/Skills/SkillsPage'
import ExperiencePage from './Pages/Experience/ExperiencePage'
import InterestPage from './Pages/Interest/InterestPage'
import DashboardPage from './Pages/DashboardPage'
import UserPage from './Pages/UserPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid">
            <div className="row flex-nowrap">
            <NavBar/>
                <div className="col py-3 content-container">
                <Routes>
                  <Route path='/dashboard' element={<DashboardPage/>}></Route>
                  <Route path='/DataUser' element={<UserPage/>}></Route>
                  <Route path='/Home' element={<HomePage/>}/>
                  <Route path='/About' element={<AboutPage/>}/>
                  <Route path='/Awards' element={<AwardsPage/>}/>
                  <Route path='/Skills' element={<SkillPage/>}/>
                  <Route path='/Experience' element={<ExperiencePage/>}/>
                  <Route path='/Interest' element={<InterestPage/>}/>
                </Routes>
                </div>
            </div>
        </div>
      
      
    </>
  )
}

export default App
