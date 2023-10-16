import React from 'react'
import Image from 'next/image'
import loader from '../../../app/src/assets/img/Skateboarding.gif'
const loading = () => {
    return (
        <div className='content-center'>
            <Image
                src={loader}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
            />
        </div>
    )
}

export default loading
