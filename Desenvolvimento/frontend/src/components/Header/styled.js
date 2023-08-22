import styled from 'styled-components';

export const HeaderArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 80px; 
`;

export const HeaderLeft = styled.div`
    a {
        text-decoration: none;
        color: #4A4A4A;
        transition: all ease 0.2s;
    }

    a:hover {
        color: #ffffff;
    }
`;

export const Logo = styled.img`
    width: 10rem;
    margin-right: 5rem;
    border-radius: 5rem;
`;

export const HeaderRight = styled.div`
    display:flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    a {
        margin-left: 50px;
        color: rgb(74, 74, 74);
        font-size: 14px;
        text-decoration: none;
        transition: all ease 0.2s;
    }

    a:hover {
        color: #ffffff;
    }
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonLogout = styled.button`
        margin-left: 50px;
        color: rgb(74, 74, 74);
        background-color: transparent;
        border: 0;
        font-size: 14px;
        text-decoration: none;
        transition: all ease 0.2s;
        :hover {
        color: #ffffff;
    }
`;

export const ButtonAdd = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    flex-direction:row;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    border: 1px solid transparent;
    align-items: center;
    text-decoration: none;
    background-color: #111111;
    border-radius: 40px;
    font-weight: bold;
    margin-left:30px;
`;

export const UserName = styled.text`
    color: #696969;
    font-weight: 600;
    font-size: 16px;
`;

