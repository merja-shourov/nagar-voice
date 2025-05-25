import React from 'react'
import { Link } from 'react-router-dom'
import AllNews from '../pages/AllNews'
import App from '../App'

const CategoryMenu = () => {
  return (
    <div id='category-menu' className='w-4/5 m-auto'>
        <div className="flex justify-center items-center gap-5 text-xl font-[500]">
            <Link to="/" > <i class="fa-solid fa-house"></i> </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/all-news" > সর্বশেষ </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/national" > জাতীয় </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150'  to="/politics" > রাজনীতি </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/world" > বিশ্ব </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/sports" > খেলা </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/education" > শিক্ষা </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/health" > স্বাস্থ্য </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/opinion" > মতামত </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/religion" > ধর্ম </Link>
            <Link className='border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 transition delay-150' to="/video-gallery" > ভিডিও </Link>
        </div>
    </div>
  )
}

export default CategoryMenu