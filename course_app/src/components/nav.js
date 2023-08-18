import React from 'react'; // Make sure to import React
import './nav.css';

const Nav = () => {
    return (
        <section>
            <div className="nav_left">
                <div className="nav-link">
                    <a href='#'>Home</a>
                    <a href='#'>Market Place</a>
                    <a href='#'>Forum</a>
                    <a href='#'>About</a>
                    <a href='#'>Our Solution</a>
                </div>
            </div>
        </section>
    );
}

export default Nav; // Don't forget to export your component