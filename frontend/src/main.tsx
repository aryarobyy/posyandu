import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Contact from './pages/Contact.tsx'
import Blog from './pages/Blog.tsx'
import About from './pages/About.tsx'
import { Auth } from './pages/auth/Auth.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path='dashboard' element={<DashBoard />}/> */}
      <Route path='/contact' element={<Contact /> } />
      <Route path='/blog' element={<Blog /> } />
      <Route path='/about' element={<About /> } />
      <Route path='/auth' element={<Auth /> } />
    </Routes>
  </BrowserRouter>
)
