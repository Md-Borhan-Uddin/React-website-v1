import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import MenuData from './DropdownNavbarData'

const Navbar = styled.nav`
    width: 100%;
    height: 60px;
    background-color: ${({isScroll})=>(isScroll? '#0b172A': 'transparent')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index:20;
    position: ${({isScroll})=>(isScroll? 'fixed': null)};
    top: 0;
`
const NavLogo = styled(Link)`
    height:80%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-left: 8vw;
    padding: 0 1.5rem;
    color: #BC4123;
    border: 2px solid #BC4123;
    font-weight: 600;
    z-index:5;

`
const NavItems = styled.ul`
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 8vw;
    z-index: 3;
    transition: all 0.5s ease;

    @media screen and (max-width:960px){
        position: absolute;
        flex-direction: column;
        background-color: #0b172A;
        top: ${({open})=>(open?0:'-1200px')};
        left: 0;
        width: 100%;
        height: 80vh;
        z-index: 3;
        padding-top: 3rem;
        transition: all 0.5s ease;
        

    }
`
const NavItem = styled.li`
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;

    /* &:hover{
        background-color: #463940;
        color: #BC4123;
    } */
    @media screen and (max-width:1095px){
        margin-right: -10px;
    }

    
`
const MenuIcon = styled.span`
    font-size: 1.5rem;
    color: #ffffff;
`
const NavLink = styled(Link)`
    height:100%;
    text-decoration:none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 0 1.2rem;
    color: #BC4123;
    margin-left: 0.5rem;


    &:hover{
        background-color: #463940;
        color: #fff;
    }

    /* @media screen and (max-width:1095px){
        font-size: 1.2rem;
        padding: 1rem;
    } */

    @media screen and (max-width:960px){
        height: 80%;
    }

   

`
const NavbarBtn = styled.button`
    height: ${({open})=>open?'60%':'70%'};
    background-color: transparent;
    border: 2px solid #BC4123;
    color: #BC4123;
    padding: ${({open})=>open?'0 5rem':'0 1.3rem'};
    margin: ${({open})=>open?'1rem 0':'0 0.5rem'};
    font-size: 1.3rem;
    transition: all 0.3s ease-in;
    border-radius: 5px;
    z-index:1;

    &:hover{
        background-color: #BC4123;
        color: #ffffff;
        border: 2px solid #BC4123;
        transition: all 0.3s ease-out;
    }

    @media screen and (max-width:1095px){
        margin-left: 1rem;
    }
`

const MobileMenu = styled.div`
    
    display: none;

    @media screen and (max-width:960px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        cursor: pointer;
        margin-right: 8vw;
        color: #BC4123;
        font-size: 2rem;
        z-index:5;

        
    }
`

// const MenuBars = styled.div``
// const MenuClose = styled.div`


// `
// const MenuBar = styled.span`
//     width: 30px;
//     height: 3px;
//     background-color: #BC4123;
//     margin: 0.3rem 0;
    
// `

function DropdownNavbar({isScroll}) {
    const [open, setOpen] = useState(false)
    

    return (
        <Navbar isScroll={isScroll}>
            <NavLogo to="/">EPIC</NavLogo>
            <NavItems open={open}>
                {MenuData.map((item, i)=>{
                   return( 
                        <NavItem key={i}>
                            {open?<MenuIcon>{item.icon && item.icon}</MenuIcon>:null}
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </NavItem>
                   )
                })}
               
                <NavbarBtn open={open}>SING UP</NavbarBtn>
            </NavItems>
            <MobileMenu onClick={()=>setOpen(!open)}>
                {open ? <i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}
            </MobileMenu>
            
        </Navbar>
    )
}

export default DropdownNavbar;
