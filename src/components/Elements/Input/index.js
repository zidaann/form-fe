import React from 'react'

export default function Input({ type = 'text', id, className = 'w-full border py-2 px-3 rounded mt-1', placeholder }) {
  return (
    <input type={type} id={id} className={className} placeholder={placeholder} />
  )
}
