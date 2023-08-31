import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import Api from '../../api';

import Header from '../../components/Header';
import AnnouncementCard from '../../components/AnnouncementCard';

export default () => {
    
    const [categories, setCategories] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    const getCategories = async () => {
        setCategories([]);

        await Api.get('/categories').then((res) => {
            console.log(res.data);
            setCategories(res.data);
        });
    }

    const getAnnouncements = async () => {
        setAnnouncements([]);

        await Api.get('/announcements').then((res) => {
            console.log(res.data.data);
            setAnnouncements(res.data.data);
        });
    }

    useEffect(()=>{
        getCategories();
    }, [])

    useEffect(()=> {
        getAnnouncements();
    }, [])

    //busca e filtra categorias

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [busca, setBusca] = useState('');

    const filteredAnnouncements = announcements.filter((item) => {
        if (selectedCategory === 0 || selectedCategory === null) {
            return true;
        }
        return item.category === selectedCategory;
    });
    
    const titleFiltrado = filteredAnnouncements.filter((item) =>
        item.title && item.title.toLowerCase().includes(busca.toLowerCase())
    );
    

    return (
        <>
        <S.Container className="container">
            <Header />
        </S.Container>
        <S.BannerArea className="container-fluid">
            <S.Banner>
            <form>
                <S.Input placeholder="Estou procurando por..." 
                         value={busca}
                         onChange={(ev) => setBusca(ev.target.value)}
                />
            </form>

            <S.CategoriesArea>
                {categories &&
                    categories.map((item, key) => (
                        <Link
                            to="/"
                            key={key}
                            onClick={() => setSelectedCategory(item.id)}
                        >
                            <S.CategoryItem>
                                <S.CategoryImage src={item.covercategory} />
                            </S.CategoryItem>
                            <S.CategoryTitleArea>
                                <S.CategoryItemTitle>{item.name}</S.CategoryItemTitle>
                            </S.CategoryTitleArea>
                        </Link>
                    ))}
            </S.CategoriesArea>
            <S.FilterArea>
                <S.FilterItem onClick={ () => setSelectedCategory(0)}>Limpar Filtro</S.FilterItem>
            </S.FilterArea>
            </S.Banner>
        </S.BannerArea>

        <S.Announcements className="container">
            <S.Title>Leilões recentes</S.Title>
            
            <S.AnnouncementsArea>
            {titleFiltrado.map((item, key) => (

                <AnnouncementCard data={item} key={key} />
            ))}
               
            </S.AnnouncementsArea>
        </S.Announcements>

        
        </>
    )
}
