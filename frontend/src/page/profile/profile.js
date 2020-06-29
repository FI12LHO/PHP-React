import React from 'react';
import Axios from 'axios';
import {useHistory, Link} from 'react-router-dom';
import './style.css';

function Register(){
    const id = localStorage.getItem('id');
    const name = localStorage.getItem('name');
    const owner = localStorage.getItem('owner');
    const opening = localStorage.getItem('opening');
    const contact = localStorage.getItem('contact');
    const address = localStorage.getItem('address');
    const cep = localStorage.getItem('cep');
    const delivery = localStorage.getItem('delivery');

    const history = useHistory();

    async function handleDelete(){
        const body = [
            id,
            name,
            owner,
            address
        ];

        const response = await Axios.post('http://localhost/eatwell/backend/page/delete/delete.php', body)
            .then(response => response.data);

        if(response.status === 'delete'){
            localStorage.clear();
            history.push('/');
            
            return ''
        }
        else{
            return ''
        }
    }

    return(
        <div className='divProfile'>
            <div className='header'>
                <div className='logo'>
                    <Link className='to-back-link' to='/'>
                        EatWell
                    </Link>
                </div>
                <div className='menu'>
                    <Link className="link" to="/login">
                        LOGIN
                    </Link>
                    <Link className="link" to="/register">
                        REGISTER
                    </Link>
                </div>
            </div>

            <div className='action'>
                <button onClick={handleDelete}>DELETAR CADASTRO</button>
            </div>

            <div className='content'>
                <div className='tag'>
                    <strong>Restaurante: </strong>
                    <strong>Proprietario: </strong>
                    <strong>Funcionamento: </strong>
                    <strong>Contato: </strong>
                    <strong>Endereço: </strong>
                    <strong>CEP: </strong>
                    <strong>Entrega: </strong>
                </div>
                <div className='content-data'>
                    <p>{ name }</p>
                    <p>{ owner }</p>
                    <p>{ opening }</p>
                    <p>{ contact }</p>
                    <p>{ address }</p>
                    <p>{ cep }</p>
                    <p>{ (delivery !== 'false') ? 'Sim' : 'Não' }</p>
                </div>
            </div>
        </div>
    );
}

export default Register;