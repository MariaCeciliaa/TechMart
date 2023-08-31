import React from 'react';
import * as S from './styled';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../assets/logoolx.png';
import Api from '../../api';

export default ({logged}) => {

    const token = useSelector(state => state.UserReducer.token);
    const name = useSelector(state => state.UserReducer.name);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        Api.post(`auth/logout?token=${token}`).then((_res) => {
            dispatch({
                type: 'SET_TOKEN',
                payload: { token: ''}
            });    
            dispatch({
                type: 'SET_NAME',
                payload: { name: 'Visítante'}
            });  
            history.push('/');
        });  
    }

    const handleCategoryFilterRemoval = () => { 
        sessionStorage.removeItem('categoria');
    };
    console.log("header: ",sessionStorage.getItem('categoria'));

    return (
        <S.HeaderArea>
            <S.HeaderLeft>
                <Link onClick={handleCategoryFilterRemoval} to="/">
                    <S.Logo src={Logo} />
                </Link>  

            </S.HeaderLeft>
            <S.HeaderRight>
                <S.MenuItem>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to="/" onClick={handleCategoryFilterRemoval}>Meus Leilões</Link>
                </S.MenuItem>

                {!token &&
                    <S.MenuItem>
                        <Link to="/login">Entrar</Link>
                    </S.MenuItem>
                }

                {token &&
                    <S.MenuItem>
                        <S.ButtonLogout onClick={handleLogout}>Sair</S.ButtonLogout>
                     </S.MenuItem>
                }
                
                {logged ?
                 <Link to="/announcement">
                    <S.UserName>Olá, {name}</S.UserName>
                </Link>                   
                    :
                <Link to="/announcement">
                    <S.ButtonAdd>Leiloar</S.ButtonAdd>
                </Link>
                }
            </S.HeaderRight>
        </S.HeaderArea>
    )
}
