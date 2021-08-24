import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from "./Navbar.module.css"
import {GoThreeBars} from "react-icons/go"
import {MdClose} from "react-icons/md"

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const toggol = ()=>{
        setMobileMenu(!mobileMenu)
    }
    const closeMobileMenu = ()=>{
        setMobileMenu(false)
    }
    const iconBarStyle ={
        fontSize:"2.5rem",
        color:"#fff"
    }
    return (
        <>
        <nav>
            <div className={classes.navbar__container}>
                <Link to="/" className={classes.navbar__logo} onClick={closeMobileMenu}>
                    BRAND
                
                </Link>
                <ul className={mobileMenu?classes.navbar__items+" "+ classes.active:classes.navbar__items}>
                    <li className={classes.navbar__item}>
                        <Link to="/" className={classes.navbar__link} onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className={classes.navbar__item}>
                        <Link to="/about" className={classes.navbar__link} onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className={classes.navbar__item+" "+classes.pos_rel}>
                        <Link to="/services" className={classes.navbar__link} onClick={closeMobileMenu}>
                            Services
                        </Link>
                        <ul className={classes.navbar__submenu}>
                            <li className={classes.navbar__item+" "+ classes.pos_rel}>
                                <Link to="/web-design" className={classes.navbar__link}>
                                    Web Design
                                </Link>
                                <ul className={classes.navbar__submenu}>
                                    <li className={classes.navbar__item}>
                                        <Link to="/web-design" className={classes.navbar__link}>
                                            Web Design
                                        </Link>

                                    </li>
                                    <li className={classes.navbar__item}>
                                        <Link to="/web-design" className={classes.navbar__link}>
                                            Web Design
                                        </Link>
                                        
                                        

                                    </li>

                                </ul>

                            </li>
                            <li className={classes.navbar__item}>
                                <Link to="/web-design" className={classes.navbar__link}>
                                    Web Design
                                </Link>
                                
                                

                            </li>

                        </ul>

                    </li>
                    <li className={classes.navbar__item}>
                        <Link to="/blog" className={classes.navbar__link} onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className={classes.navbar__item}>
                        <Link to="/contact" className={classes.navbar__link} onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className={classes.navbar__btn}>
                        <Link to="/login" className={classes.navbar__link}>
                        <button className={classes.btn}>
                                Login
                            </button>
                        </Link>
                    </li>
                    <li className={classes.navbar__btn+' '+classes.hide__btn }>
                        <Link to="/sing-up" className={classes.navbar__link}>
                            <button className={classes.btn}>
                                Sing Up
                            </button>
                        </Link>
                    </li>
                </ul>
                <div className={classes.mobile__menu}>
                    <div className={classes.bar} onClick={toggol}>
                       {mobileMenu?<MdClose style={iconBarStyle} />:<GoThreeBars style={iconBarStyle}/>} 
                    </div>
                </div>
                
            </div>
        </nav>
            
        </>
    )
}

export default Navbar
