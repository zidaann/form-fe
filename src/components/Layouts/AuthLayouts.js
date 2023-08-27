import Link from 'next/link'
import React from 'react'

function AuthLayouts({ children, title, type }) {
  return (
    <>
      <div className="px-8 lg:px-4 min-h-screen w-full flex justify-center items-center">
        <div className="w-full lg:w-1/3 px-5 py-8 shadow-md rounded-md border-slate-200 relative hover:translate-y-1 hover:shadow-xl transition ease-linear" >
          <h1 className="text-2xl font-bold text-center uppercase">{title}</h1>
          {children}
          <AuthDescription type={type} />
        </div>
      </div>
    </>
  )
}

const AuthDescription = ({ type }) => {
  if (type === 'login') {
    return (
      <>
        <p className="text-sm mt-5 text-center">
          don't have an account? {" "}
          <Link href="/register" className="font-bold text-blue-600">Register</Link>
        </p>
      </>
    )
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        already have an account? {" "}
        <Link href="/login" className="font-bold text-blue-600">Login</Link>
      </p>
    )
  }
}

export default AuthLayouts