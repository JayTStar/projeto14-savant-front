import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styledComponents from "styled-components";

import { GenrePool } from "../contexts/GenresContext";

import GenreList from "./GenreList";
import Header from "./Header";

export default function HomePage() {
    const URL = "https://savant-e-commerce.herokuapp.com/products"; //dev link: 'http://localhost:5000/products'; heroku: "https://savant-e-commerce.herokuapp.com/products";
    const [productsLists, setProductsLists] = useState([]);
    const { genres } = useContext(GenrePool);
    genres.sort(comparator);

    function comparator() {
        return Math.random() - 0.5;
    }

    useEffect( () => {
            const promise = axios.get(URL);
            promise.then((response) => setProductsLists(response.data));
            promise.catch((e) => console.log(e));
    }, []);

    return (
        <Section>
            <Header />
            <Main>
                {productsLists.length === 0 ?
                    <p>Carregando...</p>
                    :
                    <>
                        {genres.map((genre, index) => {
                            const products = productsLists.filter(products => products.genre === genre);
                            products.sort(comparator);
                            return(<GenreList key={index} genre={genre} productsLists={products} />)
                        })}
                    </>
                }
            </Main>
        </Section>
    );
}

const Section = styledComponents.section`
    overflow-x: hidden;
`;

const Main = styledComponents.main`
    margin-top: calc(var(--header-height) + 12%);
`;