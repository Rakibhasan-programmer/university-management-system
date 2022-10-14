import React from 'react'

export default function Error({messages}) {
  return (
    <div>
        <p className='text-bold text-red-700'>{messages}</p>
    </div>
  ) 
}
