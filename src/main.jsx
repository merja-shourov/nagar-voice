import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,  Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/all-news',
//     element: <AllNews />
//   },
//   {
//     path: '/national',
//     element: <National />
//   },
//   {
//     path: '/politics',
//     element: <Politics />
//   },
//   {
//     path: '/world',
//     element: <World />
//   },
//     {
//     path: '/sports',
//     element: <Sports />
//   },
//     {
//     path: '/education',
//     element: <Education />
//   },
//     {
//     path: '/health',
//     element: <Health />
//   },
//     {
//     path: '/opinion',
//     element: <Opinion />
//   },
//     {
//     path: '/religion',
//     element: <Religion />
//   },
//     {
//     path: '/video-gallery',
//     element: <VideoGallery />
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
