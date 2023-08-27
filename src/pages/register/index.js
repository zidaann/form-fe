import FormRegister from '@/components/Fragments/FormRegister'
import MetaHead from '@/components/Fragments/MetaHead'
import AuthLayouts from '@/components/Layouts/AuthLayouts'
import React from 'react'

const register = () => {
  return (
    <>
      <MetaHead title={'Register'} description={'Register page with username, email, and password'} />
      <AuthLayouts title={'Register'} type={'register'}>
        <FormRegister />
      </AuthLayouts>
    </>
  )
}

export default register
