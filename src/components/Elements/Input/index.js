import React, { forwardRef } from 'react'

const Input = forwardRef(({ type = 'text', id, className = 'w-full border py-2 px-3 rounded mt-1', placeholder }, ref) => {
  return (
    <input type={type} id={id} className={className} placeholder={placeholder} ref={ref} />
  )
})

export default Input

