import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './Nav.css'
const Nav = () => {


    const [show, handleShow] = useState(false);

    const trasnitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else {
            handleShow(false);
        }
    }



    useEffect(() => {
        window.addEventListener("scroll", trasnitionNavBar);
        return () => window.removeEventListener("scroll", trasnitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && "nav_black"}` }>
    <div className='nav_contents'>
       <div>
       <img 
        src='/images/logo.png' 
        className='nav_logo'
        />
       </div>

        {/* <img 
        src='https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg'  
        className='nav_avatar'
        /> */}

        <div>
            <button className='btn'>View On Opensea</button>
        </div>
    </div>
</div>
  )
}

const Button = styled.div`
    background: red;

`
export default Nav