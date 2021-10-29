import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className='navbar is-dark is-justify-content-space-between' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item'>
          <figure className='image'>
            <img src='https://i.ibb.co/ZYwkjsP/crypto-logo.gif' />
          </figure>
        </a>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item'>
              <strong>𝗖𝗿𝘆𝗽𝘁𝗼𝗭𝗼𝗻𝗲</strong>
            </a>
          </div>
        </div>
        <a role='button' className='navbar=burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>





      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='buttons'>
            <a className='button is-link is-light'>
              <Link to='/'><strong>Home</strong></Link>
            </a>
            <a className='button is-link is-light'>
              <Link to='./exchanges'><strong>Exchanges</strong></Link>
            </a>
            <a className='button is-link is-light'>
              <Link to='./seeall'><strong>See All Coins</strong></Link>
            </a>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default NavBar