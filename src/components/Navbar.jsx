import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <Link className="logo" to="/" data-discover="true">
                    <h2>🎬 Movie Explorer</h2>
                </Link>
                <Link to="/" data-discover="true">Home</Link>
                 
            </nav>
        </div>
    );
}

export default Navbar;
