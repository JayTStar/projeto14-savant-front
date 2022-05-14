import styled from "styled-components";
import { useCart } from "./Context";

export default function Cart(){
    let total = 0;
    const {cart} = useCart();

    return(
        <Page>
            <Top>
                <ion-icon name="close-circle-outline"></ion-icon>
                <p>Carrinho</p>
            </Top>
            <Items>
                {cart.map( product =>{
                    total += parseFloat(product.price);
                    return(
                        <Product>
                            <Img src={product.image}/>
                            <div>
                                <Title>{product.title}</Title>
                                <Price>R${product.price}</Price>
                            </div>
                        </Product>
                    )
                })}
            </Items>
            <Total> <p>Total:</p> <p>{total}</p></Total>
            <button>Finalizar Compra</button>
        </Page>
    )
}

const Page = styled.main`
    width:100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: 50%;
        height: 7%;
        background: #49728C;
        border: none;

        font-weight: 400;
        font-size: 20px;
        line-height: 29px;

        color: #C4C4C4;

        margin: 20px;
    }
`
const Top = styled.header`
    width: 100%;
    height: 10%;
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
        font-size: 30px;
    }
`
const Items = styled.ul`
    width:100%;
    height: 70%;

    overflow-y: scroll;
`
const Product = styled.div`
    width:100%;
    height: 20%;

    display:flex;
    align-items: center;

    border: 2px solid #C4C4C4;
    border-radius: 10px;

    box-sizing: border-box;
    margin: 5px 0;
    padding: 0 10px;
`
const Img = styled.img`
    width: auto;
    height: 90%;
`
const Title = styled.p`

`
const Price = styled.p`

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
`