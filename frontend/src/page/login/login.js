import React, {useState} from 'react';
import Api from '../../service/api';
import {useHistory, Link} from 'react-router-dom';
import './style.css';

function Login(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleSubmit(){
        const body = [id];

        const response = await Api.post('login/login.php', body)
            .then(reponse => reponse.data);

        if(response.status !== 'failed' || response.status !== 'unknown'){
            localStorage.setItem('id', response.id);
            localStorage.setItem('name', response.name);
            localStorage.setItem('owner', response.owner);
            localStorage.setItem('opening', response.opening);
            localStorage.setItem('contact', response.contact);
            localStorage.setItem('address', response.address);
            localStorage.setItem('cep', response.cep);
            localStorage.setItem('delivery', response.delivery);

            history.push('/profile');
            return ''
        }

        history.push('/');
        return ''
    }

    return(
        <div className='divLogin'>
            <div className='header'>
                <div className='logo'>
                    <Link className='to-back-link' to='/'>
                        EatWell
                    </Link>
                </div>
                <div className='menu'>
                    <Link className="link" to="/register">
                        CADASTRAR
                    </Link>
                </div>
            </div>
            <div className='action'>
                <input type="text" onChange={e => setId(e.target.value)} value={id} />
                <button onClick={handleSubmit}>LOGIN</button>
            </div>
        </div>
    );
}

export default Login;