import React from 'react'

const Layout = ({ children }: {children: React.ReactNode }) => {
  return (
    <main className="auth">{children} Layout </main>
  )
}

export default Layout