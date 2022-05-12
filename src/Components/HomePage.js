import styledComponents from "styled-components";

import Header from "./Header";

export default function HomePage(){
    return(
        <Section>
            <Header />
            <Main>

            </Main>
        </Section>
    );
}

const Section = styledComponents.section`
    overflow-x: hidden;
`;

const Main = styledComponents.main`
    height: 200px;
    margin-top: calc(var(--header-hight) + 50px);
    background-color: red;
`;