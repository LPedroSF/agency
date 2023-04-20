import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  const menu = document.getElementById("menu__backdrop")

  Array.from(document.getElementsByClassName("menu__link"))
    .forEach((item,index) =>{
      item.onmouseover = () => {
        menu.dataset.activeIndex = index;
      } 
    })
    ;

  function openMenu(){
    document.body.classList += " menu--open";
  }

  function closeMenu(){
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="nav">
      <Link to='/' className='nav__title'>LPSF</Link>
      <div className="nav__list">  
        <Link to='/about' className='link__hover-effect nav__link'>About</Link>
        <Link to='/projects' className='link__hover-effect nav__link'>Projects</Link>
      </div>
        
      <Link to="/about" className="nav__button click">Let's talk</Link>
      <button className='menu__button click' onClick={openMenu}>
        <FontAwesomeIcon icon="fa-solid fa-bars"/>
      </button>
      
      <div className="menu__backdrop">
        <div className="menu__nav-bar">
          <div className="nav__title">LPSF</div>
          <button className="menu__button click z3" onClick={closeMenu}>
            <FontAwesomeIcon icon="fa-solid fa-x" />
          </button>
        </div>
        <div className='menu__list'>   
          <Link to="/about" className='menu__link' onClick={closeMenu}>About</Link>  
          <Link to="/projects" className='menu__link' onClick={closeMenu}>Projects</Link>
        </div>
        <div className="menu__background"></div>
      </div>
      
    </div>
  )
}

export default Nav;