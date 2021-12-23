import React from 'react'
import Header from '../components/header/Header'

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout
