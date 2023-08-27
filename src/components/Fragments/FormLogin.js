import React, { useEffect, useRef } from 'react'
import Label from '../Elements/Label'
import Input from '../Elements/Input'
import Button from '../Elements/Button'

export default function FormLogin() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <>
      <form action="" autoComplete='off' className='mt-5'>
        <div className="mb-3">
          <Label htmlFor={'username'} name={'Username'} />
          <Input id={'username'} placeholder='Username' ref={inputRef} />
        </div>
        <div className="mb-3">
          <Label htmlFor={'password'} name={'Password'} />
          <Input id={'password'} placeholder='Password' />
        </div>
        <Button type='submit'>Login</Button>
      </form>
    </>
  )
}
