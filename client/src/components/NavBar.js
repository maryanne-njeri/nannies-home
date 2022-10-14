import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

function NavBar() {

    const [toggleMenu, setToggleMenu] = useState('');
    const [showHideDropdown, setShowHideDropdown] = useState('')

    function handleToggle() {
        setToggleMenu(!toggleMenu);
    }

    function handleDropdown() {
        setShowHideDropdown(!showHideDropdown);
    }

    return (
        <div className='bg-hero-image w-full bg-cover bg-center h-96 relative'>
            <div className='fixed w-full bg-light-brown bg-opacity-50 z-40'>
                <div className='flex items-center justify-between mx-4 xl:max-w-7xl xl:mx-auto font-averia py-3 text-white'>
                    <div className='flex space-x-2 items-center text-2xl font-large'>
                        {/* Nannies Home Logo */}
                        <NavLink to="/" className='flex items-center trasition duration-150 ease-linear hover:text-pink-300' title='Nannies Home'>
                            <span>N</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span>H</span>
                        </NavLink>
                    </div>

                    {/* Large screen size */}
                    <div className='hidden lg:block text-lg space-x-10'>
                        <NavLink to="/" exact className='trasition duration-150 ease-linear hover:text-pink-300'>Home</NavLink>
                        <NavLink to="/about" exact className='trasition duration-150 ease-linear hover:text-pink-300'>About</NavLink>
                        <NavLink to="/login" exact className="trasition duration-150 ease-linear hover:text-pink-300">Sign In</NavLink>
                        <NavLink to="/signup" exact className="trasition duration-150 ease-linear hover:text-pink-300">Sign Up</NavLink>
                    </div>

                    {/* Small Screen Size - Responsiveness */}
                    <div className='block lg:hidden text-lg'>
                        {/* Hamberger Menu */}
                        <button onClick={ handleToggle }>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div className={ toggleMenu ? "block" : "hidden" }>
                            <div className='text-lg flex flex-col absolute left-0 top-[3.48rem] px-4 bg-light-brown bg-opacity-50 w-full space-y-4 pb-6'>
                                <NavLink to="/" exact className='trasition duration-150 ease-linear hover:text-pink-300'>Home</NavLink>
                                <NavLink to="/about" exact className='trasition duration-150 ease-linear hover:text-pink-300'>About</NavLink>
                                <NavLink to="/login" exact className="trasition duration-150 ease-linear hover:text-pink-300">Sign In</NavLink>
                                <NavLink to="/signup" exact className="trasition duration-150 ease-linear hover:text-pink-300">Sign Up</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section-one */}
            <div className='flex items-center justify-center'>
                <div className='bg-white h-32 w-3/4 shadow-hero-search rounded-md absolute -bottom-16 z-10'>
                    <div className='flex items-center justify-center space-x-20 h-32'>
                        <div className='flex items-center space-x-2 border px-4 py-2 rounded-lg shadow cursor-pointer'>
                            <span>Gender</span>  
                            <button onClick={ handleDropdown }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className={ showHideDropdown ? "block" : "hidden" }>
                                <ul class=' flex flex-col'>
                                    <li class='cursor-pointer text-gray-700'>Male</li>
                                    <li class='cursor-pointer text-gray-700'>Female</li>
                                </ul>                         
                            </div>
                        </div>
                        <div className='flex items-center space-x-2 border px-4 py-2 rounded-lg shadow cursor-pointer'>
                            <span>Age</span> 
                            <button onClick={ handleDropdown }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button> 
                            <button className={ showHideDropdown ? "block" : "hidden" }>
                                <ul class='hidden flex flex-col'>
                                    <li class='cursor-pointer text-gray-700'>30</li>
                                    <li class='cursor-pointer text-gray-700'>32</li>
                                    <li class='cursor-pointer text-gray-700'>36</li>
                                    <li class='cursor-pointer text-gray-700'>34</li>
                                </ul>                            
                            </button>
                        </div>
                        <div className='flex items-center space-x-2 border px-4 py-2 rounded-lg shadow cursor-pointer'>
                            <span>Billing Rate</span> 
                            <button onClick={ handleDropdown }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className={ showHideDropdown ? "block" : "hidden" }>
                                <ul class='hidden flex flex-col'>
                                    <li class='cursor-pointer text-gray-700'>300</li>
                                    <li class='cursor-pointer text-gray-700'>200</li>
                                    <li class='cursor-pointer text-gray-700'>500</li>
                                    <li class='cursor-pointer text-gray-700'>100</li>
                                </ul>                            
                            </div>
                        </div>
                        <div className=''>
                            <button type='submit' title="Search nanny" className='flex items-center space-x-2 text-gray-500'>
                                <span>Search</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        
}

export default NavBar;