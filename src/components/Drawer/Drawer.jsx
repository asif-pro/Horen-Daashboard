import React from 'react'
import './Drawer.css'

const Drawer = () => {
  return (
    <div className='body'>
   <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
   <label for="drawer-toggle" id="drawer-toggle-label"></label>
   <header>Devices</header>
   <nav id="drawer">
      <ul>
         <li><a >Audi A7</a></li>
         <li><a >BMW i8</a></li>
         <li><a >Axio</a></li>
         <li><a >Range Rover</a></li>
      </ul>
   </nav>
   <div id="page-content">
      <p>Device Data</p>
   </div>
</div>
  )
}

export default Drawer