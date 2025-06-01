import './App.css'
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom';

import AllNews from './pages/AllNews.jsx'
import National from './pages/National.jsx'
import Politics from './pages/Politics.jsx'
import World from './pages/World.jsx'
import Education from './pages/Education.jsx'
import Health from './pages/Health.jsx'
import Opinion from './pages/Opinion.jsx'
import Religion from './pages/Religion.jsx'
import VideoGallery from './pages/VideoGallery.jsx'
import Sports from './pages/Sports.jsx'
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className=''>
      <Header />

      <div className="container">
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/all-news' Component={AllNews} ></Route>
          <Route path='/national' Component={National} ></Route>
          <Route path='/politics' Component={Politics} ></Route>
          <Route path='/world' Component={World} ></Route>
          <Route path='/education' Component={Education} ></Route>
          <Route path='/health' Component={Health} ></Route>
          <Route path='/opinion' Component={Opinion} ></Route>
          <Route path='/religion' Component={Religion} ></Route>
          <Route path='/sports' Component={Sports} ></Route>
          <Route path='/video-gallery' Component={VideoGallery} ></Route>
        </Routes>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default App;