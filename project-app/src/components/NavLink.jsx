import React from 'react'
import { Link } from 'react-router-dom'
export default function NavLink() {
  return (
    <div>
        <Link to="/">메인페이지</Link>
        <span>|||</span>
        <Link to="/item">아이템 화면</Link>
        <span>|||</span>
        <Link to="/bucket">보관함 화면</Link>
        <span>|||</span>
        <Link to="/cash">결제 전 화면</Link>
    </div>
  )
}
