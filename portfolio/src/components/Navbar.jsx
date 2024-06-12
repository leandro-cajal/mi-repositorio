import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className=' mx-auto py-5'>
            <nav className={`flex gap-5  font-semibold rounded-full fixed top-6 -translate-x-1/2 left-1/2 transform transition-colors py-1.5 px-4 text-gray-200 ${scrolled ? ' backdrop-filter backdrop-blur-sm bg-white bg-opacity-30' : 'bg-transparent '}`}>
                <a className='cursor-pointer hover:text-yellow-500 transform transition-colors font-bold'>Sobre mí</a>
                <a className='cursor-pointer hover:text-yellow-500 transform transition-colors font-bold'>Proyectos</a>
                <a className='cursor-pointer hover:text-yellow-500 transform transition-colors font-bold'>Tecnologias</a>
                <a className='cursor-pointer hover:text-yellow-500 transform transition-colors font-bold'>Contacto</a>
            </nav>
        </div>
    );
};

export default Navbar;