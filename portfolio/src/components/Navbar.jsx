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
        <div className='w-fit mx-auto py-5'>
            <ul className={`flex gap-5 mx-auto font-semibold rounded-full fixed -translate-x-1/4 transform transition-colors py-1.5 px-4 text-gray-200 ${scrolled ? ' backdrop-filter backdrop-blur-sm bg-white bg-opacity-20' : 'bg-transparent '}`}>
                <li className='cursor-pointer hover:text-orange-400 transform transition-colors'>Sobre mí</li>
                <li className='cursor-pointer hover:text-orange-400 transform transition-colors'>Proyectos</li>
                <li className='cursor-pointer hover:text-orange-400 transform transition-colors'>Tecnologias</li>
                <li className='cursor-pointer hover:text-orange-400 transform transition-colors'>Contacto</li>
            </ul>
        </div>
    );
};

export default Navbar;