import React from 'react'

export default function Button({ type = 'button', className = 'w-full border py-2 px-3 rounded mt-1 bg-slate-800 text-white font-medium hover:bg-slate-900', children }) {
  return (
    <button type={type} className={className}>{children}</button>
  )
}
