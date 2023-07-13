import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
type Props = object

const BaseLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main> 
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
     
    </div>
  )
}

export default BaseLayout