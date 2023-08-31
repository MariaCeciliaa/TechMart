import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import Api from '../../api';
import Header from '../../components/Header';
import AnnouncementCard from '../../components/AnnouncementCard';

export default () => {
    const [categories, setCategories] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [busca, setBusca] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(
        parseInt(sessionStorage.getItem('categoria')) || null
    );

    const getCategories = async () => {
        setCategories([]);

        await Api.get('/categories').then((res) => {
            setCategories(res.data);
        });
    }

    const getAnnouncements = async () => {
        setAnnouncements([]);
        await Api.get('/announcements').then((res) => {
            setAnnouncements(res.data.data);
        });
    }

    // carregar dados quando a categoria for alterada
    useEffect(() => {
        getCategories();
        getAnnouncements();
    }, [selectedCategory]); 
    
    const handleCategoryClick = (categoryId) => {
        if (selectedCategory === categoryId) {
            sessionStorage.removeItem('categoria');
            setSelectedCategory(null);
        } else {
            sessionStorage.setItem('categoria', categoryId);
            setSelectedCategory(categoryId);
        }
    };

    console.log("Antes:", selectedCategory);

    // atualizar a categoria selecionada quando o sessionStorage mudar

    useEffect(() => {
        const newSelectedCategory = parseInt(sessionStorage.getItem('categoria')) || null;
        setSelectedCategory(newSelectedCategory);
    }, [sessionStorage.getItem('categoria')]);

    const filteredAnnouncements = announcements.filter((item) => {
        if (selectedCategory === 0 || selectedCategory === null) {
            return true;
        }
        return item.category === parseInt(selectedCategory);
    });

    const titleFiltrado = filteredAnnouncements.filter((item) =>
        item.title && item.title.toLowerCase().includes(busca.toLowerCase())
    );
    console.log("Depois:", selectedCategory);


    return (
        <>
            <S.Container className="container">
                <Header />
            </S.Container>
            <S.BannerArea className="container-fluid">
                <S.Banner>
                    <form>
                        <S.Input
                            placeholder="Estou procurando por..."
                            value={busca}
                            onChange={(ev) => setBusca(ev.target.value)}
                        />
                    </form>
                    <S.CategoriesArea>
                        {categories.map((item, key) => (
                            <Link
                                to="/"
                                key={key}
                                onClick={() => handleCategoryClick(item.id)}
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
    );
};
