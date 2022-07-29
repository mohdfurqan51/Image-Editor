import React from 'react'
import Slider from "./Slider"
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

