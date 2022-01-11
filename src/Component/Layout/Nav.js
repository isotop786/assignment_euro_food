import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Nav = ()=>{

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-info p-3">
                <Link className="navbar-brand" to="/"><h2>Euro Foods</h2></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Our Products
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/fish">Fresh Water Fishes</Link>
                        <Link className="dropdown-item" to="/veg">Frozen Vegitables</Link>
                        <Link className="dropdown-item" to="/seafood">Frozen Sea Foods</Link>
                        <Link className="dropdown-item" to="/finger">Frozen Finger Foods</Link>
                        </div>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About Us<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact">Contact Us<span className="sr-only">(current)</span></Link>
                    </li>
                   
                   
                    
                    </ul>
                   
                </div>
        </nav>
    )
}

export default Nav;

