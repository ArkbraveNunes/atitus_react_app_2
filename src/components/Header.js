import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return(
        <header id='header'>
            <div className='inner'>
                <Link to='/' className='logo'>
                    <p className='navbar-brand logo_h'>
                    </p>
                </Link>
                <nav id='nav'>
                    <Link to='/'>HOME</Link>
                    <Link to='/films'>FILMS</Link>
                    <Link to='/starships'>STARSHIPS</Link>
                    <Link to='/people'>PEOPLE</Link>
                    <Link to='/planets'>PLANETS</Link>
                    <Link to='/species'>SPECIES</Link>
                    <Link to='/login'>LOGIN</Link>
                </nav>
                <a href='#navPanel' className='navPanelToggle'><span className='fa fa-bars'></span></a>
            </div>
        </header>
    )
}