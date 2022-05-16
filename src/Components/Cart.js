import styled from "styled-components";
import { useCart } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cart(){
    let total = 0;
    const {cart, setCart} = useCart();
    const [myCart, setMyCart] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        setMyCart(cart)
    },[cart])

    function deleteItem(index){
        console.log(myCart);
        const deletedItem = myCart.splice(index, 1);
        console.log(myCart);

        setCart([...myCart]);
    }

    return(
        <Page>
            <Top>
                <ion-icon onClick={() => {nav("/")}} name="close-outline"></ion-icon>
                <p>Carrinho</p>
            </Top>
            <Items>
                {cart.map( (product, index) =>{
                    total += parseFloat(product.price);
                    return(
                        <Product>
                            <Img src={product.image}/>
                            <div>
                                <Title>{product.title}</Title>
                                <Price>R${product.price}</Price>
                            </div>
                            <ion-icon name="trash-outline" onClick={() => {deleteItem(index)}}></ion-icon>
                        </Product>
                    )
                })}
            </Items>
            <Total> <p>Total:</p> <p>R$ {parseFloat(total).toFixed(2).replace(".", ",")}</p></Total>
            <button onClick={() => {nav("/checkout")}}>Finalizar Compra</button>
        </Page>
    )
}

const Page = styled.main`
    width:100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    button{
        width: 50%;
        height: 50px;
        background: #064973;
        border: none;
        border-radius: 5px;

        font-weight: 400;
        font-size: 18px;
        line-height: 29px;

        color: #C4C4C4;

        margin: 20px auto;
    }
`
const Top = styled.header`
    width: 100%;
    height: var(--header-height);
    background-color: #064973;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    ion-icon{
        color: #F2D5C4;

        font-size: 20px;

        position: absolute;
        left: 10px;
    }

    p{
        color: #F2D5C4;
        font-size: 24px;
    }
`
const Items = styled.ul`
    width: 95%;
    height: 450px;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    margin: 5px auto;
`
const Product = styled.div`
    width: 90%;
    height: 70px;

    display:flex;
    align-items: center;

    border: 2px solid #C4C4C4;
    border-radius: 10px;

    box-sizing: border-box;
    margin: 5px auto;
    padding: 0 10px;

    position: relative;

    ion-icon{
        color: #064973;

        font-size: 20px;

        position: absolute;
        right: 10px;
    }
    div{
        width: 60%;
        height: 90%;
        margin: 5px;
    }
`
const Img = styled.img`
    width: auto;
    height: 90%;
`
const Title = styled.p`
    width: 100%;

    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin: 5px 0;
`
const Price = styled.p`
    margin: 5px 0;
`
const Total = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 0 10%;

    font-size: 20px;

    margin: 10px 0;

    color: #064973;
`