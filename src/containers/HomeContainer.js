import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeContainer() {
    return (
        <h1>Hello from HomeContainer! <Link to='/movies/20'>Movie detail</Link></h1>
    )
}