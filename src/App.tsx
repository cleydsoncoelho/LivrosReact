import React from "react";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className='App'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className='container'>
                        <Link className='navbar-brand' to='/'>
                            <img src='/logo.png' alt='Logo' className='navbar-brand' style={{ width: "60px", height: "60px" }} />
                        </Link>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/'>
                                        Catalogo
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/dados'>
                                        Novo
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<LivroLista />} />
                    <Route path='/dados' element={<LivroDados />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
