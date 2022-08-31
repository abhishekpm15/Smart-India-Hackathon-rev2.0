import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    let navigate = useNavigate(); 

  return (
    <div className='mx-1 my-1'>
        <div className='py-1'>
            <Button onClick={()=>{navigate("/Home")}} className='px-5 mx-5' color='yellow' size='sm'>Home</Button>
            <Button onClick={()=>{navigate("/About")}} className='px-5 mx-5' color='yellow' size='sm' >About</Button>
            <Button onClick={()=>{navigate("/Contact")}} className='px-5 mx-5' color='yellow' size='sm'>Contact</Button>
            
        </div>
    </div>
  )
}

export default Navbar