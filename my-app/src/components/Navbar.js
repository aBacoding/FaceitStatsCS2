function Navbar() {
    return (
        <div className="container">
            <div className="nav__bar">
                <nav>
                    <a href="/">
                        <img src="../public/../images/cib-faceit.png" alt="logo" />
                    </a>
                    <div>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
  