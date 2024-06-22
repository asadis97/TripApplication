import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer2 from './footer/Footer2'

export default function Layout({children}) {
  return (
    <div>
      <Header/>
      <Main>{children}</Main>
      <Footer2/>
    </div>
  )
}