import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li className="first active"><Link to={'/'}>Home</Link></li>
                <li><Link to={'/movies'}>Movies</Link></li>
            </ul>
        </div>
    )
}