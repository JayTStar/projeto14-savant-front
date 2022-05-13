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
            <Partition />
        </Section>
    );
}

const Section = styledComponents.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Genre = styledComponents.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
`;

const List = styledComponents.div`
    overflow: scroll;
    display: flex;
    height: 350px;
    display: flex;
    padding: 0 5%;
`;

const Partition = styledComponents.div`
    height: 1px;
    margin: 0 50px 20px 50px;
    border-bottom: 1px solid #8F9DA6;
`;