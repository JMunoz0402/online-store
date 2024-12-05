import { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../context/globalContext";
import "./styles/navbar.css";

function Navbar() {
    const { user }  = useContext(GlobalContext);
    const cart = useContext(GlobalContext).cart;

    function getProdCount() {
        console.log("test", cart);
        let total = 0;
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }

    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <a href="#">Log In</a>
                    <a href="#">Search</a>
                    <a href="#">Subscribe</a>
                    <a href="#">Menu</a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Online Store
                    </Link>
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
                                <Link className="nav-link active" aria-current="page" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/catalog">
                                    Catalog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/admin">
                                    Admin
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Shopping List">
                                    Shopping List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="btn btn-outline-light me-3">
                        {user.name}
                    </div>
                    <Link className="btn btn-primary cart-button" to="/cart"><span class="badge text-bg-primary me-1">{getProdCount()}</span>
                    View Cart
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
