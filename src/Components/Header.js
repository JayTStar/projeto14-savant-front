import { useState } from "react";
import styled from "styled-components";

import SavantLogo from "../Midia/Savant-logo.svg";

import Menu from "./Menu";

export default function Header() {
    const [menu, setMenu]  = useState(false);

    function handleClick(){

    }

    return (
        <Head>
            <Menu menu={menu} setMenu={setMenu} />
            <Top>
                <ion-icon onClick={() => setMenu(true)} name="menu-outline"></ion-icon>
                <Logo src={SavantLogo}></Logo>
                <Right>
                    <ion-icon name="person-circle-outline" onClick={handleClick}></ion-icon>
                    <Cart>
                        <ion-icon name="cart-outline"></ion-icon>
                        <p>2</p>
                    </Cart>
                </Right>
            </Top>
            <Search>
                <SearchBar></SearchBar>
                <ion-icon name="search-circle-outline"></ion-icon>
            </Search>
        </Head>
    )
}

const Head = styled.header`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: var(--header-height);
`
const Top = styled.div`
    width: 100%;
    height: 70%;
    background-color: #064973;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 5%;

    ion-icon{
        font-size: 30px;
        color: #F2D5C4;
        cursor: pointer;
    }
`
const Logo = styled.img`
    width: 30%;
    height: auto;
`
const Right = styled.div`
    width:auto;
    height: auto;

    display: flex;
`
const Cart = styled.div`
    position: relative;
    p{
        width: 12px;
        height: 12px;

        position: absolute;
        top: 0;
        right: 0;

        font-size: 10px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #F2D5C4;
        color: #064973;

        border-radius: 50%;
    }
`
const Search = styled.div`
    width: 100%;
    height: 30%;

    background-color: #C4C4C4;

    display: flex;
    align-items: center;
    justify-content: space-around;

    ion-icon{
        font-size: 25px;
        color: #064973;
    }
`
const SearchBar = styled.input`
    width: 80%;
    height: 50%;
`