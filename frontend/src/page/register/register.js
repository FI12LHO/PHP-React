import React, {useState} from 'react';
import Api from '../../service/api';
import {useHistory, Link} from 'react-router-dom';
import './style.css';

function Register(){
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [opening, setOpening] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [cep, setCep] = useState('');
    const [delivery, setDelivery] = useState(false);

    const history = useHistory();

    async function handleSubmit(){
        if( name === '' ||
            owner === '' ||
            opening === '' ||
            contact === 0 ||
            address === '' ||
            cep === 0){
            return ''
        }

        const body = [
            name,
            owner,
            opening,
            contact,
            address,
            cep,
            delivery
        ];

        const response = await Api.post('register/register.php', body)
            .then(response => response.data);

        if(response.status !== 'failed'){
            history.push('/login');
            return ''
        }
        else{
            history.push('/');
            alert('Ocorreu um erro, tente mais tarde.');
            return ''
        }
    }

    return(
        <div className='divRegister'>
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
                </div>
            </div>
            <div className='action'>
                <table>
                    <tr>
                        <td>
                            <label>Qual o nome do restaurante?</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                onChange={e => setName(e.target.value)} 
                                value={name} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Qual o nome do proprietario?</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                onChange={e => setOwner(e.target.value)} 
                                value={owner} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Qual o horario de funcionamento?</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                onChange={e => setOpening(e.target.value)} 
                                value={opening} />
                        </td>   
                    </tr>
                    <tr>
                        <td>
                            <label>Qual o numero para contato?</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                onChange={e => setContact(e.target.value)} 
                                value={contact} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Qual o endereço?</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                onChange={e => setAddress(e.target.value)} 
                                value={address} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Qual o CEP?</label>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                onChange={e => setCep(e.target.value)} 
                                value={cep} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Fazem entregas?</label>
                        </td>
                        <td>
                            <div className='action-radio'>
                                <input 
                                    type="radio" 
                                    onChange={e => setDelivery(e.target.value)} 
                                    value={false}
                                    name='delivery'
                                    defaultChecked
                                    id='false' />
                                
                                <label htmlFor='false'>Não</label>
                                
                                <input 
                                    type="radio" 
                                    onChange={e => setDelivery(e.target.value)} 
                                    value={true}
                                    name='delivery'
                                    id='true' />

                                <label htmlFor='true'>Sim</label>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

            <button onClick={handleSubmit}>CADASTRAR</button>
        </div>
    );
}

export default Register;