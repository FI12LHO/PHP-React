import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Home(){
    return(
        <div className='divHome'>
            <div className='header'>
                <div className='logo'>
                    <p>
                        EatWell
                    </p>
                </div>
                <div className='menu'>
                    <Link className="link" to="/login">
                        LOGIN
                    </Link>
                    <Link className="link" to="/register">
                        CADASTRAR
                    </Link>
                </div>
            </div>
            <div className='content'>
                <p>Precisa de um restaurante?</p>
                <h4>Um simples jeito de achar um restaurante.</h4>
                <div className='action'>
                    <Link className="link" to="/search">
                        PROCURAR RESTAURANTES
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;