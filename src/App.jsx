import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './shared/Navbar'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Suspense>
          <Routes fallback={<div>Loading...</div>}>
            <Route path='/' element={<Landing />} />
            <Route  path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
