import styledComponents from "styled-components";

import products from "./dev.js" //EXCLUIR DEPOIS!!!!

export default function Product() {
    const { image, title, price, author } = products[0];

    return (
        <Item>
            <Image src={products[0].image} />
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Price>{`R\$ ${price}`}</Price>
        </Item>
    );
}


const Item = styledComponents.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    height: 300px;
    margin-right: 15px;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: 0px 0.5px 3px 1px rgba(0, 0, 0, 0.2);
`;

const Image = styledComponents.img`
    width: 110px;
    margin-bottom: 5px;
`;

const Title = styledComponents.h2`
    font-size: 16px;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 110px;
    height: 32px;
    margin-bottom: 2px;
`;

const Author = styledComponents.p`
    font-size: 14px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 110px;
    margin-bottom: 2px;
`;

const Price = styledComponents.p`
    position: absolute;
    bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 110px;
    margin-bottom: 2px;
`;