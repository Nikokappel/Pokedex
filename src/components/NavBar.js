import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <header>
            <nav className="navbar">
            <h1 className="header">Pokedex</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <a>      </a>
                    <Link to="/About">About</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
