import styledComponents from "styled-components";

import Product from "./Product";

export default function GenreList({ genre, productsLists }) {

    return (
        <Section>
            <Genre>{genre}</Genre>
            <List>
                {productsLists.map((product, index) => {
                    return (<Product key={index} product={product} />)
                })}
            </List>
            <Partition />
        </Section>
    );
}

const Section = styledComponents.section`
    display: flex;
    flex-direction: column;
`;

const Genre = styledComponents.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
`;

const List = styledComponents.div`
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
    height: 350px;
    display: flex;
    padding: 0 5%;
`;

const Partition = styledComponents.div`
    height: 1px;
    margin: 0 10% 20px 10%;
    border-bottom: 1px solid #8F9DA6;
`;