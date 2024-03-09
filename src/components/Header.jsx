import React from 'react'
import { FaUserFriends, FaSearch, FaHome } from "react-icons/fa";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";
import { TbGridDots } from "react-icons/tb";

import "./Header.css"

const Header = () => {

    return (
        <header>
            <div className='logo'>
                <div className='svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="44" height="44" focusable="false">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                </div>
                <div className='search-area'>
                    <FaSearch className='search-icon' color="#000" />
                    <input type='search' placeholder='Search' />
                </div>
            </div>
            <div className='menu'>
                <nav>
                    <ul>
                        <li><a href="/"><FaHome size={25} /><span>Home</span></a></li>
                        <li><a href="/"><FaUserFriends size={25} /><span>My Network</span></a></li>
                        <li><a href="/"><BiSolidShoppingBagAlt size={25} /><span>Jobs</span></a></li>
                        <li><a href="/"><AiOutlineMessage size={25} /><span>Messaging</span></a></li>
                        <li><a href="/"><IoNotificationsSharp size={25} /><span>Notifications</span></a></li>
                        <li id='image'><img src="https://avatars.githubusercontent.com/u/121513581?s=48&v=4" alt="me" />ME<sub><VscTriangleDown size={15} /></sub></li>
                    </ul>
                </nav>
                <div className='third-menu'>
                    <div className='business'>
                        <a href="/">
                            <div className='explore'>
                                <TbGridDots size={25} color='#000' />
                            </div>
                            For Business<sub><VscTriangleDown size={15} /></sub>
                        </a>
                    </div>
                    <div className='premiun'>
                        <a href="/">
                            Try Premium <br /> for free
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
