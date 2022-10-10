import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {

    const [toggleMenu, setToggleMenu] = useState('');

    function handleToggle() {
        setToggleMenu(!toggleMenu);
    }

    return (
        <div className='bg-hero-image w-full bg-cover bg-center h-96'>
            <div className='bg-light-brown bg-opacity-50'>
                <div className='flex items-center justify-between mx-4 xl:max-w-7xl xl:mx-auto font-averia py-3 text-white'>
                    <div className='flex space-x-2 items-center text-2xl font-large'>
                        <NavLink to="/" className='flex items-center trasition duration-150 ease-linear hover:text-pink-300' title='Nannies Home'>
                            <span>N</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span>H</span>
                        </NavLink>
                    </div>
                    <div className='hidden lg:block text-lg space-x-10'>
                        <NavLink to="/" exact className='trasition duration-150 ease-linear hover:text-pink-300'>Home</NavLink>
                        <NavLink to="/about" exact className='trasition duration-150 ease-linear hover:text-pink-300'>About</NavLink>
                        <NavLink to="/login" exact className="trasition duration-150 ease-linear hover:text-pink-300">Sign In</NavLink>
                        <NavLink to="/logout" exact className="trasition duration-150 ease-linear hover:text-pink-300">Sign Up</NavLink>
                    </div>
                    <div className='block lg:hidden text-lg'>
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
                                <NavLink to="/logout" exact className="trasition duration-150 ease-linear hover:text-pink-300">Sign Up</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        
}

export default NavBar;