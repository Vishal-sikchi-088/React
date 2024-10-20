import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>   
            <Footer></Footer>   
        </>
    )
}

export default Layout
