import React from 'react'
import { Navbar } from './Navbar'

export default function ContentWrapper({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}