import React from 'react'
import notFoundImage from '../assets/svg/404.svg'

export default function NotFound() {
  return (
    <div>
        <img className='m-w-full mx-auto' src={notFoundImage} alt="404" />
    </div>
  )
}
