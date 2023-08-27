import React from 'react'
import FormLogin from '@/components/Fragments/FormLogin'
import MetaHead from '@/components/Fragments/MetaHead'
import AuthLayouts from '@/components/Layouts/AuthLayouts'

export default function index() {
  return (
    <>
      <MetaHead title={'Login'} description={'Login page with username and password'} />
      <AuthLayouts title={'Login'} type={'login'}>
        <FormLogin />
      </AuthLayouts>
    </>
  )
}
