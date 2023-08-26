import React from 'react'

export default function Label({ htmlFor, name }) {
  return (
    <label htmlFor={htmlFor}>{name}</label>
  )
}
