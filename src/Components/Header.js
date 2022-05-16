import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import { useToken, useUser, useCart } from "../contexts/UserContext";

import SavantLogo from "../Midia/Savant-logo.svg";
import Menu from "./Menu";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const {token} = useToken();
    const {userInfo} = useUser();
    const {cart} = useCart();

    const nav = useNavigate();

    function handleClick(){
        if(token === ""){
            nav("/login");
        }
        else{
            alert(`Logado como ${userInfo.name}`);
        }
    }

    return (
        <Head>
            <Menu menu={menu} setMenu={setMenu} />
            <Top>
                <ion-icon onClick={() => setMenu(true)} name="menu-outline"></ion-icon>
                <Logo src={SavantLogo} onClick={() => {nav("/")}}></Logo>
                <Right>
                    <ion-icon name="person-circle-outline" onClick={handleClick}></ion-icon>
                    <Cart>
                        <ion-icon name="cart-outline" onClick={() => {nav("/cart")}}></ion-icon>
                        <p>{cart.length}</p>
                    </Cart>
                </Right>
            </Top>
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
    height: 50px;
    background-color: #064973;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 9% 5%;
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.4);

    ion-icon{
        font-size: 30px;
        color: #F2D5C4;
        cursor: pointer;
    }
`
const Logo = styled.img`
    width: 150px;
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
    height: 30px;

    background-color: #C4C4C4;

    display: flex;
    align-items: center;
    justify-content: space-around;

    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.4);

    ion-icon{
        font-size: 25px;
        color: #064973;
    }
`
const SearchBar = styled.input`
    width: 80%;
    height: 60%;
`