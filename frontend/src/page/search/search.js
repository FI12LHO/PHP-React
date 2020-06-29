import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Api from '../../service/api';
import './style.css';

export default function Search(){
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const [filtered, setFiltered] = useState([]);
    const filteredArray = [];

    useEffect(() => {
        Api('search/search.php')
            .then( response => { setData( response.data ) } );

    }, [data]);

    function handleData(){
        data.map(
            data => {
                if(data.address.indexOf(filter) >= 0){
                    filteredArray.push(data);
                }

                return ''
            }
        );

        setFiltered(filteredArray);
    }

    function render(item){
        return item.map(item => (
            <div key={ (item.id !== '') ? item.id : '' } className='data'>
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
                    <p>{ (item.name !== '') ? item.name : '' }</p>
                    <p>{ (item.owner !== '') ? item.owner : '' }</p>
                    <p>{ (item.opening !== '') ? item.opening : '' }</p>
                    <p>{ (item.contact !== '') ? item.contact : '' }</p>
                    <p>{ (item.address !== '') ? item.address : '' }</p>
                    <p>{ (item.cep !== '') ? item.cep : '' }</p>
                    <p>{ (item.delivery !== 'false') ? 'Sim' : 'Não' }</p>
                </div>
            </div>
        ));
    }

    return (
        <div className='divSearch'>
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
                <p>
                    <b>{ data.length }</b> restaurantes cadastrados.
                </p>
                <div className='action-bar'>
                    <input type='text' value={filter} onChange={e => setFilter(e.target.value)} placeholder='Por onde devemos buscar?' />
                    <button onClick={handleData}>Search</button>
                </div>
            </div>

            <div className='content'>
                { render((filtered.length === 0) ? data : filtered)}
            </div>
        </div>
    );
}