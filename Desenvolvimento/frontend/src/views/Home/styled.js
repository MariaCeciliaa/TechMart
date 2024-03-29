import styled from 'styled-components';

export const Container = styled.div``;

export const BannerArea = styled.section`
    display: flex;
    height:260px;
    background-color:#696969;
    justify-content: center;
    align-items:center;
`;

export const Banner = styled.div`
    max-width:1000px;
`;

export const Input = styled.input`
    border: none;
    width: 1000px;
    height: 60px;
    border-radius: 4px;
    margin: 2px 60px 0px 0px;
    padding: 16px 24px;
    outline: none;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top:30px;
    transition: all ease 0.3s;
    box-shadow: 3px 3px 3px rgba(0,0,0, 0.3);
`;

export const CategoriesArea = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap; 

    a{ 
        text-decoration: none;
    }
`;

export const CategoryItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    width: 60px;
    height: 60px;
    border-radius: 30px;    
    margin-bottom: 5px; 
    margin-top: 10px;
    transition: all ease 0.3s;
    box-shadow: 3px 3px 3px rgba(0,0,0, 0.3);
    :hover {
        box-shadow: rgba(0, 0, 0, 0.7) 0px 22px 70px 4px;
    }   
`;

export const CategoryImage = styled.img`
    width: 32px;
    height: 32px;
`;

export const CategoryItemTitle = styled.text`
    align-items: center;
    color: #FFF;
    text-align: center;
    margin: 8px 0px 0px;
    font-size: 13px;
    line-height: 1;
    text-decoration: none;
    font-family: Arial;
    font-weight: 300;
`;

export const CategoryTitleArea = styled.div`
   width: 60px;
   height: 30px;
   display: flex;
   justify-content: center;
`;

export const Announcements = styled.section`
    margin-top: 20px;    
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Title = styled.text`
    color: rgb(74, 74, 74);
    font-size: 20px;
    font-weight: 600;   
`;

export const AnnouncementsArea = styled.div`
   display: flex;
   flex: 1;
   flex-direction: row;
   margin-top: 20px;
   flex-wrap: wrap;

   a {
       text-decoration: none;
   }
`;

export const Announcement = styled.div`
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction:column;
    margin-right: 30px;
`;

export const ImageAnnouncement = styled.img`
    width:100%;
    height: 150px;
    border-radius: 10px;
`;

export const DescriptionAnnouncement = styled.text`
    margin-top: 5px;
    color: #4a4a4a;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const PriceAnnouncement = styled.text`
    margin-top: 5px;
    color: rgb(74, 74, 74);
    font-size: 16px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif
`;

export const FilterArea = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FilterItem = styled.a`
    margin-left: 50px;
    color: rgb(74, 74, 74);
    font-size: 14px;
    text-decoration: none;
    transition: all ease 0.2s;
    :hover {
        color: #A9A9A9;
    }
`;