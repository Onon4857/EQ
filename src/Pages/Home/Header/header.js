import React from 'react';
import Image from '../../../Images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import Button from '../../../Components/Button/button';


function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960 ) {
            setButton(false);
            }else {
                setButton(true);
                  }
            
        }
    

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" >
                        <img 
                        alt="EQSurvey | Монголын анхны судалгааны онлайн хэрэгсэл"
                        src={Image}
                        />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : "nav-menu"}>
                        <li className='nav-item'>
                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Бүтээгдэхүүн <i class="fa fa-caret-down" aria-hidden="true"></i>
                         </Link>
                        </li>

                        <li className='nav-item'>
                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Загвар  <i class="fa fa-caret-down" aria-hidden="true"></i>
                         </Link>
                        </li>

                        <li className='nav-item'>
                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Шийдэл <i class="fa fa-caret-down" aria-hidden="true"></i>
                         </Link>
                        </li>

                        <li className='nav-item'>
                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Үнэ
                         </Link>
                        </li>

                        <li className='nav-item'>
                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Тусламж
                         </Link>
                        </li>

                        <li className='nav-item'>
                         <Link to='/login.js' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Нэвтрэх
                         </Link>
                        </li>

                        <li className='nav-item'>
                         <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Бүртгүүлэх
                         </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Бүртгүүлэх</Button>}
                    {button && <Button buttonStyle='btn--second'>Нэвтрэх</Button>}
                </div>

            </nav>
        </>
    )
    }

export default Header
