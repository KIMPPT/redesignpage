import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/navlink.css'
export default function NavLink() {
  return (
    <div className='navlink'>
        <Link to="/" className='navlink'>메인페이지</Link>
        <span className='navspan'>|||</span>
        <Link to="/item"className='navlink'>아이템 화면</Link>
        <span className='navspan'>|||</span>
        <Link to="/bucket"className='navlink'>보관함 화면</Link>
        <span className='navspan'>|||</span>
        <Link to="/cash"className='navlink'>결제 전 화면</Link>
    </div>
  )
}
