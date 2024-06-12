import React from 'react'
import photo from '../assets/images/photo.png';

const Presentation = () => {
    return (
        <div className='py-28 flex items-center'>
            <div className='text-white'>
                <div className='bg-yellow-400 w-fit rounded-full'>
                    <img src={photo} alt="" className='w-20 h-20 object-cover rounded-full' />
                </div>
                <h3 className='text-3xl flex'>Hola, soy <h2 className='text-yellow-400 font-semibold ml-2'>Leandro</h2>.</h3>
                <h2 className='text-4xl font-bold'> &lt; Front-End Developer /&gt;</h2>
            </div>
        </div>

    )
}

export default Presentation