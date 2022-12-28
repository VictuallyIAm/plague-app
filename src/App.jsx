import Plags from './pages/Plagues'
import Home from './pages/Home'
import Courses from './pages/Courses'
import SingleCourse from './pages/SingleCourse'
import Solutions from './pages/Solutions'
import NotFound from './pages/NotFound'
import MainLayout from './components/Layout/MainLayout'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="plug/:slug" element={<Plags />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:slug" element={<SingleCourse />} />
            <Route path="solutions/:slug" element={<Solutions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
