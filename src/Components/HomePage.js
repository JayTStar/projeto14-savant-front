import { useState, useEffect } from "react";
import axios from "axios";
import styledComponents from "styled-components";

import GenreList from "./GenreList";
import Header from "./Header";

export default function HomePage() {
    let URL = "https://savant-e-commerce.herokuapp.com/products";
    const [productsLists, setProductsLists] = useState([]);;
    const genres = ["Aventura"]; //, "Ficção", "Terror", "HQs e Mangás"
    let listGenre = "Avent";

    useEffect(() => {
        genres.forEach(genre => {
            listGenre = genre;
            const promise = axios.get(URL + "?genre=" + genre.toLowerCase().replace(/ /g, "").replace("ç", "c").replace("á", "a").replace("ã", "a"));
            promise.then(renderList); promise.catch(warnError);
        })
    }, []);

    function warnError(error) {
        console.log(error);
    }

    function renderList(response) {
        setProductsLists(response.data);
    }

    return (
        <Section>
            <Header />
            <Main>
                {productsLists.length === 0 ?
                    <p>Carregando..</p>
                    :
                    <GenreList genre={listGenre} productsLists={productsLists} />
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