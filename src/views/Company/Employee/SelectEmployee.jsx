import React from 'react'
import './SelectEmployee.css'
import { Box, Grid,Spacer, GridItem, Flex, HStack, Text, useColorModeValue, Select } from "@chakra-ui/react";

const { useState, useEffect } = React;

const data = [{id: 0, label: "Mr. John", emp_id: 'E-2323' }, {id: 1, label: "Mr. Zaman", emp_id: 'E-45873' }];


const SelectEmployee = () => {
    
//     const [isOpen, setOpen] = useState(false);
//   const [items, setItem] = useState(data);
//   const [selectedItem, setSelectedItem] = useState(null);
  
//   const toggleDropdown = () => setOpen(!isOpen);
  
//   const handleItemClick = (id) => {
//     selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
//     console.log(id)
//     setOpen(false)
//   }


  return (
    <Select placeholder='Select Employee' >
        <option value='option2'>
            Mr. John - E-7878
            
        </option>
        
    </Select>

    // <div className='dropdown'>
    //   <div className='dropdown-header' onClick={toggleDropdown}>
    //     {selectedItem ? items.find(item => item.id == selectedItem).label : "Select your destination"}
    //     <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
    //   </div>
    //   <div className={`dropdown-body ${isOpen && 'open'}`}>
    //     {items.map(item => (
    //       <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
    //         <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
    //         <span> {item.label} </span><br/>
    //         <span> {item.label} </span><br/>
    //         <span>{item.id} </span>
            
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default SelectEmployee