import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='bg-hero-image w-full bg-cover bg-center h-96'>
            <div className='bg-light-brown bg-opacity-50'>
                <div className='flex items-center justify-between max-w-7xl mx-auto font-averia py-3 text-white'>
                    <div className='text-2xl font-large'>
                        <NavLink to="/">Nannies home</NavLink>
                    </div>
                    <div className='hidden lg:block text-lg space-x-16'>
                        <NavLink to="/" exact className='hover:text-white pr-4'>Home</NavLink>
                        <NavLink to="/about" exact className='hover:text-white'>About</NavLink>
                        <NavLink to="/login" exact className="hover:text-white">Sign In</NavLink>
                        <NavLink to="/logout" exact className="hover:text-white">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
        
}

export default NavBar 