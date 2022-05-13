import styledComponents from "styled-components";

import Product from "./Product";

export default function GenreList(){
    return (
        <Section>
            <Genre>Aventura</Genre>
            <List>
                <Product />
                <Product />
                <Product />
                <Product />
            </List>
        </Section>
    );
}

const Section = styledComponents.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
    margin-top: calc(var(--header-height) + 12%);
    background-color: red;
`;

const Genre = styledComponents.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
`;

const List = styledComponents.div`
    overflow: scroll;
    display: flex;
    height: 220px;
    display: flex;
    padding: 0 5%;
`;