import React from "react";
import { Link, Route } from "react-router-dom";
import routes from "../../routes";
import Styles from "./css";

const App = () => (
    <div>
        <header>
            <nav className="hero-head">
                <div className="columns is-mobile is-marginless heading has-text-weight-bold">
                    <div className="column left">
                        <Link className="navbar-item has-text-black" to="/">Home</Link>
                    </div>
                    <div className="column center desktop">
                        <Link className="navbar-item has-text-black" to="/orders">order</Link>
                        <Link className="navbar-item has-text-black" to="/">工程</Link>
                        <Link className="navbar-item has-text-black" to="/">分析</Link>
                        <Link to="/">Home</Link>
                        <Link to="/bulma">Bulma</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/myaccount">My Account</Link>
                    </div>
                    <div className="column right">
                        <figure className="navbar-item image has-text-black center">
                            <i
                                className="fas fa-2x fa-bars"
                                style={ { width: "1rem", height: "1rem" } }
                            />
                        </figure>
                    </div>
                </div>
            </nav>
            {/* /.hero-head */}
        </header>

        { routes.map( route => (
            <Route key={ route.path } { ...route } />
        ) ) }
        <Styles />
    </div>
);

export default App;
// <header>
// <Link to="/">Home</Link>
// <Link to="/bulma">Bulma</Link>
// <Link to="/products">Products</Link>
// <Link to="/cart">Cart</Link>
// <Link to="/myaccount">My Account</Link>
// </header>

// { routes.map( route => (
// <Route key={ route.path } { ...route } />
// ) ) }

// <footer>I`m the footer, I am on every page.</footer>
