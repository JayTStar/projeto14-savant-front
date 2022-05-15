import styled from "styled-components";

export default function Menu({ menu, setMenu }) {
    return (
        <>
            <Aside menu={menu}>
                <Head>
                    <ExitIcon onClick={() => setMenu(false)}>x</ExitIcon>
                </Head>
                <div className="genre">Aventura</div>
                <div className="genre">Ficção</div>
                <div className="genre">Terror</div>
                <div className="genre">HQs e Mangás</div>
            </Aside>
            <DarkScreen menu={menu} onClick={() => setMenu(false)}></DarkScreen>
        </>
    );
}

const Aside = styled.aside`
    position: fixed;
    z-index: 3;
    top: 0;
    left: ${({ menu }) => menu ? "0" : "-70%"};
    width: 70%;
    height: 100vh;
    background-color: white;

    .genre{
        display: flex;
        align-items: center;
        height: 60px;
        padding-left: 15px;
        border-bottom: 1px solid #064973;
        color: #064973;
        cursor: pointer;
    }
`;

const DarkScreen = styled.div`
    display: ${({ menu }) => menu ? "block" : "none"};
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-screen);
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    height: var(--header-height);
    padding-left: 20px;
    background-color: #064973;
`;

const ExitIcon = styled.p`
    font-size: 20px;
    width: 20px;
    color: #F2D5C4;
    cursor: pointer;
`;