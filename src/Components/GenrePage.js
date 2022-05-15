import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styledComponents from "styled-components";

import { GenrePool } from "../contexts/GenresContext";

import Header from "./Header";
import Product from "./Product";

export default function GenrePage({ genreURL, genre }) {
    const URL = 'http://localhost:5000/products'; //dev link: 'http://localhost:5000/products'; heroku: "https://savant-e-commerce.herokuapp.com/products";
    const [productsLists, setProductsLists] = useState([]);
    const { genres } = useContext(GenrePool);
        
    function comparator() {
        return Math.random() - 0.5;
    }
    
    useEffect(() => {
        const promise = axios.get(`${URL}?genre=${genreURL}`);
        promise.then((response) => setProductsLists(response.data));
        promise.catch((e) => console.log(e));
    }, []);
    
    productsLists.sort(comparator);

    return (
        <Section>
            <Header />
            <Main>
                <Genre>{genre}</Genre>
                {productsLists.length === 0 ?
                    <p>Carregando...</p>
                    :
                    <List>
                        {productsLists.map((product, index) => {
                            return <Product key={index} product={product} />
                        })}
                    </List>
                }
            </Main>
        </Section>
    );
}

const Section = styledComponents.section`
    width: 100vw;
`

const Main = styledComponents.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: var(--header-height);
`;

const List = styledComponents.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    padding: 0 5%;
`;

const Genre = styledComponents.h2`
    font-size: 20px;
    font-weight: bold;
    margin: var(--header-height) auto 10px auto;
`;