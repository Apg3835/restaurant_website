import React from 'react'
import mealsImage from '../assets/meals.jpg'
import './Header.css';
export const Header = () => {
  return (
    <div className='main-image'>
        <img src={mealsImage} />
    </div>
  )
}
