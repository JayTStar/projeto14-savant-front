import { useState, useEffect } from "react";
import axios from "axios";
import styledComponents from "styled-components";

import GenreList from "./GenreList";
import Header from "./Header";

export default function HomePage() {
    const URL = 'https://savant-e-commerce.herokuapp.com/products' //dev link: 'http://localhost:5000/products'; heroku: "https://savant-e-commerce.herokuapp.com/products";
    const [productsLists, setProductsLists] = useState([]);;
    const genres = ["Aventura", "Ficção", "Autoajuda" , "HQs e Mangás"];
    let listsFromAPI = [];

    useEffect(() => {
        genres.forEach(async genre => {
            try{
                const response = await axios.get(URL + "?genre=" + genre.toLowerCase().replace(/ /g, "").replace("ç", "c").replace("á", "a").replace("ã", "a"));
                listsFromAPI.push([genre, response.data]);                     
                setProductsLists(listsFromAPI);

                console.log(listsFromAPI);
                console.log(productsLists);
            }catch(e){
                console.log(e);
            }
        })

    }, []);
    
    return (
        <Section>
            <Header />
            <Main>
                {productsLists.length === 0 ?
                    <p>Carregando..</p>
                    :
                    <>
                        {productsLists.map((genreList, index) => {
                            return(<GenreList key={index} genre={genreList[0]} productsLists={genreList[1]} />)
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