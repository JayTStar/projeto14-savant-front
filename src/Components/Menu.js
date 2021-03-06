import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { GenrePool } from "../contexts/GenresContext";

export default function Menu({ menu, setMenu }) {
    const navigate = useNavigate();
    const {genres} = useContext(GenrePool)
    genres.sort();

    function handleClick(genreURL){
        setMenu(false);
        navigate(`/${genreURL}`);
    }

    return (
        <>
            <Aside menu={menu}>
                <Head>
                    <ion-icon onClick={() => setMenu(false)} name="close-outline"></ion-icon>
                </Head>
                {genres.map( (genre, index) => {
                    const genreURL = genre.toLowerCase().replaceAll("ç", "c").replaceAll("á", "a").replaceAll("ã", "a").replaceAll(" ", "");
                    return <Genre onClick={() => handleClick(genreURL)} key={index}>{genre}</Genre>
                })}
            </Aside>
            <DarkScreen menu={menu} onClick={() => setMenu(false)}></DarkScreen>
        </>
    );
}

const Aside = styled.aside`
    position: fixed;
    z-index: 3;
    top: 0;
    left: ${({ menu }) => menu ? "0" : "-70%"};
    width: 70%;
    height: 100vh;
    background-color: white;
`;

const Genre = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: 15px;
    border-bottom: 1px solid #064973;
    color: #064973;
    cursor: pointer;
`

const DarkScreen = styled.div`
    display: ${({ menu }) => menu ? "block" : "none"};
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-screen);
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    height: var(--header-height);
    padding-left: 20px;
    background-color: #064973;
    
    ion-icon{
        font-size: 20px;
        width: 20px;
        color: #F2D5C4;
        cursor: pointer;
    };
`;