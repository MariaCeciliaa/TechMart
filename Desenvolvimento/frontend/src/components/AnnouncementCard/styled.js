import styled from 'styled-components';

export const Announcement = styled.div`
    width: 245px;
    height: 245px;
    display: flex;
    padding: 14px;
    flex-direction:column;
    margin-right: 30px;
    transition: all ease 0.2s;
    border-radius: 5%;
    margin-bottom: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    :hover {
        width: 250px;
        height: 250px;  
        margin: 10px;
    } 
`;

export const ImageAnnouncement = styled.img`
    width:100%;
    height: 150px;
    border-radius: 10px;
`;

export const DescriptionAnnouncement = styled.small`
    margin-top: 5px;
    color: #4a4a4a;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const PriceAnnouncement = styled.small`
    margin-top: 5px;
    color: rgb(74, 74, 74);
    font-size: 16px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif
`;
