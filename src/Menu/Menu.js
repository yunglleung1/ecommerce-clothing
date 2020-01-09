import React from 'react';
import './Menu.css';
import MenuCard from './MenuCard/MenuCard';

const Menu = () => {
  return(
    <div id = 'menu'>
      <MenuCard title = {'Hats Shop Now'}/>
      <MenuCard title = {'Jackets Shop Now'}/>
      <MenuCard title = {'Sneakers Shop Now'}/>
      <MenuCard title = {'Women Shop Now'}/>
      <MenuCard title = {'Menu Shop Now'}/>
    </div>
  );
}

export default Menu;
