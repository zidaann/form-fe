import FormRegister from '@/components/Fragments/FormRegister'
import AuthLayouts from '@/components/Layouts/AuthLayouts'
import React from 'react'

const register = () => {
  return (
    <>
      <AuthLayouts title={'Register'} type={'register'}>
        <FormRegister />
      </AuthLayouts>
    </>
  )
}

export default register
