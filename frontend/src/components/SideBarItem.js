import React, {useState} from 'react'
import Slider from "./Slider"
import DEFAULT_OPTIONS from './DefaultOptions';

function SidebarItem({name, active, handleClick}) {

  
  return (
    <div >
    <button 
      className={`sidebar-item ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {name}
    </button>

    <Slider
          
        />
</div>
  ) 
}

export default SidebarItem;

