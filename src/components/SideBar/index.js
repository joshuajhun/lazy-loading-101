import React from 'react';
import './SideBar.css';
import {  NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <NavLink to='/'>
        <button className='nav-button'> HOME </button>
      </NavLink>
      <NavLink to='/add-recipe'>
        <button className='nav-button'>ADD RECIPE</button>
      </NavLink>
      <NavLink to='/recipes'>
        <button className='nav-button'> All Recipes </button> 
      </NavLink>
    </div>
  )
};

export default SideBar;
