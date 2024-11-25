import "./styles/navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <a href="">Log In</a>
                    <a href="">Search</a>
                    <a href="">Subscribe</a>
                    <a href="">Menu</a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Online Store</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <Link className="btn btn-primary cart-button" aria-current="page" to="/cart">Cart</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

