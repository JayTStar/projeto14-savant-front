import styledComponents from "styled-components";

import GenreList from "./GenreList";
import Header from "./Header";

export default function HomePage(){
    return(
        <Section>
            <Header />
            <Main>
                <GenreList />
                <GenreList />
                <GenreList />
                <GenreList />
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