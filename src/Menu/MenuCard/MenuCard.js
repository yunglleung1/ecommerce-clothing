import React from 'react';
import './MenuCard.css';
import MenuButton from './MenuButton/MenuButton';

const MenuCard = ({title}) => {
  return(
    <div id = 'menu-card'>
      <MenuButton title = {title}/>
    </div>
  );
}

export default MenuCard;
