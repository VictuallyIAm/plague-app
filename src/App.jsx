import Plags from './pages/Plagues'
import Home from './pages/Home'
import Courses from './pages/Courses'
import SingleCourse from './pages/SingleCourse'
import Solutions from './pages/Solutions'
import NotFound from './pages/NotFound'
import MainLayout from './components/Layout/MainLayout'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Auth from './components/Auth'
import MyPlags from './pages/MyPlags'
import MyCourses from './pages/MyCourses'
import Support from './pages/Support'
import AdminOnlyRoute from './components/admin/AdminRoute'
import Orders from './components/admin/Orders'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/plague-app" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="plug/:slug" element={<Plags />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:slug" element={<SingleCourse />} />
            <Route path="solutions/:slug" element={<Solutions />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Auth />} />
            <Route path="myplags" element={<MyPlags />} />
            <Route path="mycourses" element={<MyCourses />} />
            <Route path="support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="admin"
              element={
                <AdminOnlyRoute>
                  <Orders />
                </AdminOnlyRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
