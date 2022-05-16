import { useState, useEffect } from "react";
import { Instagram } from "react-content-loader";
import axios from "axios";
import styledComponents from "styled-components";

import Header from "./Header";
import Product from "./Product";

export default function GenrePage({ genreURL, genre }) {
    const URL = "https://savant-e-commerce.herokuapp.com/products"; //dev link: 'http://localhost:5000/products'; heroku: "https://savant-e-commerce.herokuapp.com/products";
    const [productsLists, setProductsLists] = useState([]);

    function comparator() {
        return Math.random() - 0.5;
    }

    useEffect(() => {
        const promise = axios.get(`${URL}?genre=${genreURL}`);
        promise.then((response) => setProductsLists(response.data));
        promise.catch((e) => console.log(e));
    }, [genre]);

    productsLists.sort(comparator);

    return (
        <Section>
            <Header />
            <Main>
                {productsLists.length === 0 ?
                    <Loader><Instagram /></Loader>
                    :
                    <>
                        <Genre>{genre}</Genre>
                        <List>
                            {productsLists.map((product, index) => {
                                return <Product key={index} product={product} />
                            })}
                        </List>
                    </>
                }
            </Main>
        </Section>
    );
}

const Section = styledComponents.section`
    width: 100vw;
`

const Loader = styledComponents.div`
    margin: var(--header-height) 10px 0 10px;
`

const Main = styledComponents.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: calc(var(--header-height) + 8%) 0 10px 0;
`;

const List = styledComponents.div`
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    margin: 0 auto;
`;

const Genre = styledComponents.h2`
    font-size: 20px;
    font-weight: bold;
    margin: var(--header-height) auto 10px auto;
`;