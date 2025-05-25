import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AllNews from './pages/AllNews.jsx'
import National from './pages/National.jsx'
import Politics from './pages/Politics.jsx'
import World from './pages/World.jsx'
import Education from './pages/Education.jsx'
import Health from './pages/Health.jsx'
import Opinion from './pages/Opinion.jsx'
import Religion from './pages/Religion.jsx'
import VideoGallery from './pages/VideoGallery.jsx'
import CountryNews from './pages/CountryNews.jsx'
import Sports from './pages/Sports.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/all-news',
    element: <AllNews />
  },
  {
    path: '/national',
    element: <National />
  },
  {
    path: '/politics',
    element: <Politics />
  },
  {
    path: '/world',
    element: <World />
  },
    {
    path: '/sports',
    element: <Sports />
  },
    {
    path: '/education',
    element: <Education />
  },
    {
    path: '/health',
    element: <Health />
  },
    {
    path: '/opinion',
    element: <Opinion />
  },
    {
    path: '/religion',
    element: <Religion />
  },
    {
    path: '/video-gallery',
    element: <VideoGallery />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
