import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Instagram } from "react-content-loader";
import axios from "axios";
import styledComponents from "styled-components";
import { useCart } from "../contexts/UserContext";

import Header from "./Header";

export default function ProductPage() {
    const { productId } = useParams();
    const URL = `https://savant-e-commerce.herokuapp.com/products?productId=${productId}`; //dev link: `http://localhost:5000/products?productId=${productId}`; heroku: `https://savant-e-commerce.herokuapp.com/products?productId=${productId}`;
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    const{cart, setCart} = useCart();

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then((response) => setProduct(response.data));
        promise.catch((e) => console.log(e));
    }, []);

    console.log(product)

    function addCart(product){
        setCart([...cart, product])
    }

    return (
        <Section>
            <Header />
            <Main>
                {!product ?
                    <Instagram />
                    :
                    <>
                        <Poster>
                            <ion-icon onClick={() => navigate(-1)} name="arrow-back-outline"></ion-icon>
                            <Image src={product.image} />
                        </Poster>
                        <Tittle>{product.title}</Tittle>
                        <Author>{`Autor: ${product.author}`}</Author>
                        <Price>{`R$ ${product.price}`}</Price>
                        <Synopsis>{`Sinopse: ${product.synopsis}`}</Synopsis>
                        <Button onClick={() => {addCart(product)}}>Adicionar ao carrinho</Button>
                    </>
                }
            </Main>
        </Section>
    );
}

const Section = styledComponents.section`
    width: 100%;
`;

const Main = styledComponents.main`
    display: flex;
    flex-direction: column;
    margin-top: calc(var(--header-height) + 12%);
    padding: 0 5%;
`;

const Poster = styledComponents.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    ion-icon{
        position: absolute;
        left: 0;
        font-size: 25px;
        color: #064973;
    }
`;

const Image = styledComponents.img`
    width: 50%;
`;

const Tittle = styledComponents.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Author = styledComponents.h3`
    font-size: 14px;
    margin-bottom: 10px;
`;

const Price = styledComponents.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #064973;
`;

const Synopsis = styledComponents.p`
    font-size: 16px;
    text-align: justify;
`;

const Button = styledComponents.button`
    font-size: 18px;
    margin: 50px auto;
    padding: 12px;
    border-radius: 5px;
    border: none;
    color: #F2D5C4;
    background-color: #064973;
`;