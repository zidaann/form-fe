import FormLogin from '@/components/Fragments/FormLogin'
import AuthLayouts from '@/components/Layouts/AuthLayouts'
import React from 'react'

export default function index() {
  return (
    <>
      <AuthLayouts title={'Login'} type={'login'}>
        <FormLogin />
      </AuthLayouts>
    </>
  )
}
