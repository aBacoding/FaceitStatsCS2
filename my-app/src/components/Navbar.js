import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav__bar">
            <nav>
                <a href="/">
                    <img src={isHovered ? "../public/../images/cib-faceit1.png" : "../public/../images/cib-faceit.png"} alt="logo" 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                    />
                </a>
                <div>
                    <ul className={isMenuOpen ? 'open' : ''}>
                        <li>
                            <a href="/">Games</a>
                        </li>
                        <li>
                            <a href="/">How It Works</a>
                        </li>
                        <li>
                            <a href="/">Leaderboard</a>
                        </li>
                        <li>
                            <input type="text" placeholder="Enter Faceit nickname..." />
                        </li>
                    </ul>
                </div>
                <div className="hamburger__menu" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </div>
            </nav>
        </div>
        
    );
}

export default Navbar;
